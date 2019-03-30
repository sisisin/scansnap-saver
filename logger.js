const fs = require('fs');
const path = require('path')
const promisify = require('util').promisify
const appendFileAsync = promisify(fs.appendFile)


module.exports.Logger = class Logger {
  constructor(logPath){
    this.logFilePath=path.resolve(logPath, 'log.txt');
  }

  async  log(text){
    await appendFileAsync(this.logFilePath, text+'\n')
  }
}