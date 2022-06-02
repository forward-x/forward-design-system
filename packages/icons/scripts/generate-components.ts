import fs from 'fs';
import path from 'path';

import { Presets, SingleBar } from 'cli-progress';
import Mustache from 'mustache';

import { icons as iconifyData } from '../assets/icons.json';

type FileInfo = {
  iconPath: string;
  iconName: string;
  iconDirectory: string;
  directoryPath: string;
  componentName: string;
  componentPath: string;
  fileExtension?: string;
};
type IconifyInfo = {
  iconName: string;
  iconDirectory: string;
  iconifyPath: string;
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

    if (currentPath.includes('\\assets\\icons')) return [];

    if (file.isDirectory()) {
      return [...getFilePaths(currentPath)];
    }
    return [currentPath];
  });
};

const getDirectories = (iconDirectory: string, componentName: string) => {
  const directoryPath = path.join(__dirname, '../components/', iconDirectory);
  const componentPath = path.join(directoryPath, `${componentName}.tsx`);

  return { directoryPath, componentPath };
};

const extractFileInfo = (filePaths: string[]): FileInfo[] => {
  return filePaths.map((filePath) => {
    const [iconDirectory, iconFile] = filePath
      .replace(iconRootPath, '')
      .replace(/[\\]/g, '/')
      .replace(/^\/[^\/]*\//, '')
      .split(/(?:\/(?!.*\/))+/);
    const [iconName, fileExtension] = iconFile.split('.');
    const componentName = `${iconName}Logo`;

    const { directoryPath, componentPath } = getDirectories(
      iconDirectory,
      componentName
    );

    return {
      iconPath: `${iconDirectory}/${iconName}`,
      iconDirectory: `${iconDirectory}/${componentName}`,
      iconName,
      componentName,
      directoryPath,
      componentPath,
      fileExtension,
    };
  });
};
const extractIconInfo = (iconData: IconifyInfo[]): FileInfo[] => {
  return iconData.map(({ iconName, iconDirectory, iconifyPath }) => {
    const componentName = `${iconName}Icon`;
    const { directoryPath, componentPath } = getDirectories(
      iconDirectory,
      componentName
    );

    return {
      iconPath: iconifyPath,
      iconDirectory: `${iconDirectory}/${componentName}`,
      iconName,
      componentName,
      directoryPath,
      componentPath,
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
  progressBar.start(iconPaths.length + 2, 0);

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
        if (!fileExtension) {
          componentData = Mustache.render(iconTemplate, {
            iconName,
            iconPath,
            componentName,
          });
        } else if (
          directoryPath.includes('crypto') ||
          directoryPath.includes('wallet')
        )
          componentData = Mustache.render(cryptoTemplate, {
            iconName,
            iconPath: `${iconPath}.${fileExtension}`,
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

const generateExportFile = (fileInfo: FileInfo[]): void => {
  fs.writeFileSync(
    path.resolve(__dirname, '../components/index.ts'),
    Mustache.render(exportTemplate, {
      exports: fileInfo
        .map(
          ({ iconDirectory, componentName }) =>
            `export { default as ${componentName} } from './${iconDirectory}';`
        )
        .join('\n'),
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

const fileInfo = [
  ...extractFileInfo(iconPaths),
  ...extractIconInfo(iconifyData),
];

generateComponents(fileInfo);
