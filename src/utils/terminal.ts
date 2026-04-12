import * as childProcess from 'child_process';

export const terminal = async (cmd: string): Promise<string> =>
  new Promise((resolve, reject) => {
    console.log('executing.... ', cmd);
    childProcess.exec(cmd, { maxBuffer: 1024 * 1024 * 100 }, (err, stdout, stderr) => {
      if (err) {
        return reject(err);
      }
      resolve(stderr ? stderr : stdout);
    });
  });
