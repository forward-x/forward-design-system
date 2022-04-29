import fs from 'fs';
import path from 'path';

import { Presets, SingleBar } from 'cli-progress';
import Mustache from 'mustache';

type FileInfo = {
  iconPath: string;
  iconName: string;
  directoryPath: string;
  componentName: string;
  componentPath: string;
  fileExtension: string;
};

const iconRootPath = path.resolve(__dirname, '../assets');

const iconTemplate = fs.readFileSync(
  path.resolve(__dirname, '../templates/icon-components-template.mst'),
  { encoding: 'utf8', flag: 'r' }
);
const cryptoTemplate = fs.readFileSync(
  path.resolve(__dirname, '../templates/crypto-components-template.mst'),
  { encoding: 'utf8', flag: 'r' }
);
const entryFileTemplate = fs.readFileSync(
  path.resolve(__dirname, '../templates/entry-file-template.mst'),
  { encoding: 'utf8', flag: 'r' }
);
const exportTemplate = fs.readFileSync(
  path.resolve(__dirname, '../templates/export-template.mst'),
  { encoding: 'utf8', flag: 'r' }
);

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
      .replace(/[\\]/g, '/')
      .replace(/^\/[^\/]*\//, '')
      .split(/(?:\/(?!.*\/))+/);
    const [iconName, fileExtension] = iconFile.split('.');
    const componentName = filePath.includes('logo')
      ? `${iconName}Logo`
      : `${iconName}Icon`;

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
  const progressBar = new SingleBar(
    {
      format:
        'Creating components |' +
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
        let componentData: string;
        fs.mkdirSync(directoryPath, { recursive: true });
        if (
          directoryPath.includes('crypto') ||
          directoryPath.includes('wallet')
        )
          componentData = injectDataIntoTemplate(cryptoTemplate, {
            iconName,
            iconPath,
            fileExtension,
            componentName,
          });
        else
          componentData = injectDataIntoTemplate(iconTemplate, {
            iconName,
            iconPath,
            fileExtension,
            componentName,
          });
        fs.writeFileSync(componentPath, componentData, { flag: 'w' });
      }

      progressBar.increment({ prompt: `Created ${componentName}.tsx` });
    }
  );
  generateExportFile(fileInfo);
  progressBar.increment({ prompt: 'Created index.tsx' });

  generateEntryFile(fileInfo);
  progressBar.increment({ prompt: `Created entry file` });
};

const injectDataIntoTemplate = (
  template: string,
  { iconName, iconPath, fileExtension, componentName }: Partial<FileInfo>
): string =>
  Mustache.render(template, {
    iconName,
    iconPath: `${iconPath}/${iconName}${fileExtension}`,
    componentName,
  });

const generateExportFile = (fileInfo: FileInfo[]): void => {
  fs.writeFileSync(
    path.resolve(__dirname, '../components/index.ts'),
    Mustache.render(exportTemplate, {
      imports: fileInfo
        .map(
          ({ iconPath, componentName }) =>
            `import ${componentName} from './${iconPath}/${componentName}';`
        )
        .join('\n'),
      exports: fileInfo.map(({ componentName }) => componentName).join(', '),
    }),
    { flag: 'w' }
  );
};

const generateEntryFile = (fileInfo: FileInfo[]): void => {
  fs.writeFileSync(
    path.resolve(__dirname, '../index.ts'),
    Mustache.render(entryFileTemplate, {
      exports: fileInfo.map(({ componentName }) => componentName).join(', '),
    }),
    { flag: 'w' }
  );
};

const iconPaths = getFilePaths(iconRootPath);
const fileInfo = extractFileInfo(iconPaths);

generateComponents(fileInfo);
