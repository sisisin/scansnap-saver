import { Finalize } from './finalize';
import { Logger } from './logger';

async function main() {
  const logger = Logger.create();
  const [_, _1, ...args] = process.argv;
  await logger.log(args);
}

main()
  .catch(err => console.log(err))
  .finally(() => Finalize.create().run());
