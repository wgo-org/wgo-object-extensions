export const executePS = (scriptPath: string) => {
  const spawn = require('child_process').spawn;
  const child = spawn('powershell.exe', [scriptPath]);

  child.stdout.on('data', function (data: any) {
    console.log('PS: ' + data);
  });
  child.stderr.on('data', function (data: any) {
    console.log('PS Err: ' + data);
  });
  child.on('exit', function () {
    console.log('PS Exit');
  });
  child.stdin.end();
};

export const executeCMD = (scriptPath: string) => {
  const spawn = require('child_process').spawn;
  const child = spawn('cmd.exe', [scriptPath]);
  child.stdout.on('data', function (data: any) {
    console.log('CMD: ' + data);
  });
  child.stderr.on('data', function (data: any) {
    console.log('CMD Err: ' + data);
  });
  child.on('exit', function () {
    console.log('CMD Exit');
  });
  child.stdin.end();
};

export const runScript = (cmd: string, cwd: string, onError?: (err: any) => void) => {
  try {
    const execSync = require('child_process');
    execSync(cmd, {
      cwd: cwd,
      stdio: ['inherit'],
    });
  } catch (err: any) {
    const { stderr, stdout, status, message } = err;
    if (stderr) {
      console.error(stderr.toString('utf8'));
    }
    if (stdout) {
      console.error(stderr.toString('utf8'));
    }
    if (onError) onError(err);
  }
};

export const runRawScript = (cmd: string, cwd: string, onError?: (err: any) => void) => {
  try {
    const execSync = require('child_process');
    execSync(cmd, {
      cwd: cwd,
      stdio: 'inherit',
    });
  } catch (err: any) {
    const { stderr, stdout, status, message } = err;
    if (stderr) {
      console.error(stderr.toString('utf8'));
    }
    if (stdout) {
      console.error(stderr.toString('utf8'));
    }
    if (onError) onError(err);
  }
};
