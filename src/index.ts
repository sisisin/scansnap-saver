import { Finalize } from './finalize';
import { Logger } from './logger';
import { getConfig } from './config';
import { FileManipulator } from './file-manipulator';
import { PathCreator } from './path-creator';

async function main() {
  const config = await getConfig();
  const logger = Logger.create();
  const args = process.argv.slice(2);
  await logger.log(args);

  const pathCreator = new PathCreator(config, logger);

  const fm = new FileManipulator(pathCreator, logger);
  await fm.moveToBookDirAll(args);
}

main()
  .catch(err => console.log(err))
  .finally(() => Finalize.create().run());
