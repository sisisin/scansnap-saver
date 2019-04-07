import path from 'path';
import { getAppPath, getNodeEnv } from './env';
import { appendFileAsync } from './fs';

export class Logger {
  private logFilePath: string;
  static create(): Logger {
    return new Logger(getAppPath());
  }
  constructor(logPath: string) {
    this.logFilePath = path.resolve(logPath, 'log.txt');
  }

  async log(text: string | string[]) {
    const nodeEnv = getNodeEnv();
    if (nodeEnv === 'development') {
      console.log(text);
    } else if (nodeEnv === 'test') {
    } else {
      await appendFileAsync(this.logFilePath, text + '\n');
    }
  }
}
