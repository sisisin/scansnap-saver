import { AppConfig } from './config';
import { Logger } from './logger';
import path from 'path';
import { mkdirAsync } from './fs';

const d = new Date();
const y = d
  .getFullYear()
  .toString()
  .padStart(4, '0');
const dts = [d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()].map(n =>
  n.toString().padStart(2, '0'),
);

const bookDir = `${y}${dts.join('')}`;

export class PathCreator {
  constructor(private config: AppConfig, private logger: Logger) {}

  getDestPath(from: string) {
    return path.resolve(this.getDestDirPath(), path.parse(from).base);
  }

  private getDestDirPath() {
    return path.resolve(this.config.saveDir, this.getBookDir());
  }

  async mkDestDir() {
    await mkdirAsync(this.getDestDirPath());
  }

  private getBookDir() {
    return bookDir;
  }
}
