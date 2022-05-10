/**
 * @experimental
 */
export const InjectCjsModule = function (code: string) {
  // Es: const imported = injectCjsModule('module.exports = { foo: "bar" };');
  try {
    var tempModule: any = {};
    eval('(function (module) {' + code + '})(tempModule);');
    return tempModule.exports;
  } catch (error) {
    console.log(error);
  }
};
