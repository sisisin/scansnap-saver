import fs from 'fs';
import { promisify } from 'util';

export const readFileAsync = promisify(fs.readFile);
export const appendFileAsync = promisify(fs.appendFile);
export const copyFileAsync = promisify(fs.copyFile);
export const mkdirAsync = promisify(fs.mkdir);
