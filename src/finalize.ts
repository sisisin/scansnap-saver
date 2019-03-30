import readline, { Interface } from 'readline';

export class Finalize {
  static create(): Finalize {
    const reader = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Finalize(reader);
  }
  constructor(private reader: Interface) {}

  async run() {
    console.log('process is end. press enter');
    return new Promise(resolve => {
      this.reader.on('line', line => {
        if (line === '') {
          this.reader.close();
        }
      });

      this.reader.on('close', resolve);
    });
  }
}
