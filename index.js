const path = require('path');
const logPath = path.resolve(process.env.OneDrive,'app', 'scansnap-saver')

const { Logger } = require('./logger')
const logger = new Logger(logPath);
const { Finalize } = require('./finalize');
const finelize = new Finalize();

async function main() {
  const [_, _1, ...args] = process.argv
  await logger.log(args)
  await finelize.run();
}

main().catch(err => console.log(err));

