import bestzip from 'bestzip';
import { Logger } from './logger';
import { PathCreator } from './path-creator';

export class FileManipulator {
  constructor(private pathCreator: PathCreator, private logger: Logger) {}

  async moveToBookDirAll(fromPaths: string[]) {
    if (fromPaths.length === 0) {
      this.logger.log('got 0 command line args. do nothing.');
      return;
    }

    const destination = this.pathCreator.getDestZipPath();
    const source = this.pathCreator.getRelativeSrcPaths(fromPaths);
    await this.logger.log(`from: ${source}, to path: ${this.pathCreator.getDestZipPath()}`);
    await bestzip({ source, destination, cwd: this.pathCreator.getSourceDirPath(fromPaths[0]) });
  }
}
