import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { getAppPath } from './env';

const appendFileAsync = promisify(fs.appendFile);

export class Logger {
  logFilePath: string;
  static create(): Logger {
    return new Logger(getAppPath());
  }
  constructor(logPath: string) {
    this.logFilePath = path.resolve(logPath, 'log.txt');
  }

  async log(text: string | string[]) {
    await appendFileAsync(this.logFilePath, text + '\n');
  }
}
