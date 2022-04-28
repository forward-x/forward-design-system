import fs from 'fs';
import path from 'path';

import { Presets, SingleBar } from 'cli-progress';
import Mustache from 'mustache';

const iconRootPath = path.resolve(__dirname, '../assets/icons');

type FileInfo = {
  iconPath: string;
  iconName: string;
  directoryPath: string;
  componentName: string;
  componentPath: string;
  fileExtension: string;
};

const getFilePaths = (filePath: string): string[] => {
  return fs.readdirSync(filePath, { withFileTypes: true }).flatMap((file) => {
    const currentPath = path.resolve(filePath, file.name);
    if (file.isDirectory()) {
      return [...getFilePaths(currentPath)];
    }
    return [currentPath];
  });
};

const extractFileInfo = (filePaths: string[]): FileInfo[] => {
  return filePaths.map((filePath) => {
    const [iconPath, iconFile] = filePath
      .replace(iconRootPath, '')
      .replace(/^\\/, '')
      .split(/(?:[\\\/](?!.*[\\\/]))+/);
    const [iconName, fileExtension] = iconFile.split('.');
    const componentName = `${iconName}Icon`;
    const directoryPath = path.join(__dirname, '../components/', iconPath);
    const componentPath = path.join(directoryPath, `${componentName}.tsx`);

    return {
      iconPath,
      iconName,
      componentName,
      directoryPath,
      componentPath,
      fileExtension: `.${fileExtension}`,
    };
  });
};

const generateComponents = (fileInfo: FileInfo[]): void => {
  const template = fs.readFileSync(
    path.resolve(__dirname, './components-template.mst'),
    { encoding: 'utf8', flag: 'r' }
  );

  const progressBar = new SingleBar(
    {
      format:
        'Creating icon components |' +
        '{bar}| ' +
        '{percentage}% | ' +
        '{value}/{total} Files | ' +
        '{prompt}',
      hideCursor: true,
      stopOnComplete: true,
    },
    Presets.legacy
  );
  progressBar.start(iconPaths.length, 0);

  fileInfo.forEach(
    ({
      iconPath,
      iconName,
      componentPath,
      directoryPath,
      componentName,
      fileExtension,
    }) => {
      if (!fs.existsSync(componentPath)) {
        const componentData = Mustache.render(template, {
          iconName,
          iconPath: `${iconPath}/${iconName}${fileExtension}`,
        });
        fs.mkdirSync(directoryPath, { recursive: true });
        fs.writeFileSync(componentPath, componentData, { flag: 'w' });
      }

      progressBar.increment({ prompt: `Created ${componentName}.tsx` });
    }
  );

  generateExportFile(fileInfo);
  generateEntryFile(fileInfo);
};

const generateExportFile = (fileInfo: FileInfo[]): void => {
  const exportTemplate = fs.readFileSync(
    path.resolve(__dirname, './export-template.mst'),
    { encoding: 'utf8', flag: 'r' }
  );

  fs.writeFileSync(
    path.resolve(__dirname, '../components/index.ts'),
    Mustache.render(exportTemplate, {
      imports: fileInfo
        .map(
          ({ iconPath, componentName }) =>
            `import ${componentName} from './${iconPath}/${componentName}';`
        )
        .join('\n'),
      exports: fileInfo
        .map(({ componentName }) => componentName.replace(/\..*/, ''))
        .join(', '),
    }),
    { flag: 'w' }
  );
};

const generateEntryFile = (fileInfo: FileInfo[]): void => {
  const entryFileTemplate = fs.readFileSync(
    path.resolve(__dirname, './entry-file-template.mst'),
    { encoding: 'utf8', flag: 'r' }
  );

  fs.writeFileSync(
    path.resolve(__dirname, '../index.ts'),
    Mustache.render(entryFileTemplate, {
      exports: fileInfo
        .map(({ componentName }) => componentName.replace(/\..*/, ''))
        .join(', '),
    }),
    { flag: 'w' }
  );
};

const iconPaths = getFilePaths(iconRootPath);
const fileInfo = extractFileInfo(iconPaths);

generateComponents(fileInfo);
