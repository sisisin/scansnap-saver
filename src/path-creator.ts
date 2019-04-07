import path from 'path';
import { AppConfig } from './config';
import { Logger } from './logger';

const d = new Date();
const y = d
  .getFullYear()
  .toString()
  .padStart(4, '0');
const dts = [[d.getMonth() + 1, d.getDate()], [d.getHours(), d.getMinutes()], [d.getSeconds()]].map(group => group.map(n => n.toString().padStart(2, '0')).join(''));

const bookDir = `${y}_${dts.join('_')}`;

export class PathCreator {
  constructor(private config: AppConfig, private logger: Logger) {}

  getDestZipPath() {
    return path.resolve(this.getDestDirPath(), `${bookDir}.zip`);
  }

  getSourceDirPath(fromFile: string) {
    return path.parse(fromFile).dir;
  }

  getRelativeSrcPaths(fromPaths: string[]) {
    return fromPaths.map(p => path.relative(this.getSourceDirPath(p), p));
  }

  private getDestDirPath() {
    return path.resolve(this.config.saveDir);
  }
}
