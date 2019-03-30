const readline = require('readline')

module.exports.Finalize = class Finalize {
  constructor() {
    this.reader = readline.createInterface({ input: process.stdin, output: process.stdout });
  }

  async run() {
    console.log('process is end. press enter')
    return new Promise(resolve => {
      this.reader.on('line', line => {
        if (line === '') {
          this.reader.close();
        }
      });

      this.reader.on('close', resolve);
    })
  }
}