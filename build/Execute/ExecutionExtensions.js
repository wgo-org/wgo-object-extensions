"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeCMD = exports.executePS = void 0;
const executePS = (scriptPath) => {
    const spawn = require('child_process').spawn;
    const child = spawn('powershell.exe', [scriptPath]);
    child.stdout.on('data', function (data) {
        console.log('PS: ' + data);
    });
    child.stderr.on('data', function (data) {
        console.log('PS Err: ' + data);
    });
    child.on('exit', function () {
        console.log('PS Exit');
    });
    child.stdin.end();
};
exports.executePS = executePS;
const executeCMD = (scriptPath) => {
    const spawn = require('child_process').spawn;
    const child = spawn('cmd.exe', [scriptPath]);
    child.stdout.on('data', function (data) {
        console.log('CMD: ' + data);
    });
    child.stderr.on('data', function (data) {
        console.log('CMD Err: ' + data);
    });
    child.on('exit', function () {
        console.log('CMD Exit');
    });
    child.stdin.end();
};
exports.executeCMD = executeCMD;
//# sourceMappingURL=ExecutionExtensions.js.map