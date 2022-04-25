import fs from 'fs';
import path from 'path';
const iconRootPath = path.resolve('../assets/icons');

const iconPaths = [];

fs.readdir(iconRootPath, (err: Error, files: string[]) => {
  files.forEach((file: string) => console.log('file', file));
  iconPaths.push(path.resolve(iconRootPath));
  console.log('files', files.toString());
});

console.log('hello');
