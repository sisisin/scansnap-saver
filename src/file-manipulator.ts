import fs from 'fs';
import { copyFileAsync } from './fs';
import { Logger } from './logger';
import { PathCreator } from './path-creator';
const { COPYFILE_EXCL } = fs.constants;

export class FileManipulator {
  constructor(private pathCreator: PathCreator, private logger: Logger) {}

  private async moveToBookDir(from: string) {
    const to = this.pathCreator.getDestPath(from);

    await this.logger.log(`from path: ${from}, to path: ${to}`);
    // todo: handling if file exists
    await copyFileAsync(from, to, COPYFILE_EXCL);
  }

  private async prepareForMove() {
    await this.pathCreator.mkDestDir();
  }

  async moveToBookDirAll(fromPaths: string[]) {
    await this.prepareForMove();
    for (const from of fromPaths) {
      await this.moveToBookDir(from);
    }
  }
}
