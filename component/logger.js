const log4js = require('log4js');
const path = require("path");

log4js.configure({
  appenders: {
    file: {
      type: 'file',
      filename: path.resolve(__dirname, '../logs') + '/Logger',
      maxLogSize: 10 * 1024 * 1024, // = 10Mb
      backups: 5, // keep five backup files
      compress: true, // compress the backups
      encoding: 'utf-8',
      mode: 0o0640,
      flags: 'w+',
      pattern: `yyyy-MM-dd.log`,
      alwaysIncludePattern: true
    },
    out: {
      type: 'stdout'
    }
  },
  categories: {
    default: {
      appenders: ['file', 'out'],
      level: 'trace'
    }
  },
  pm2: true,
  // pm2InstanceVar: 'INSTANCE_ID',
  replaceConsole: true
});

const logger = log4js.getLogger('node-pm2-web');

module.exports= logger;
