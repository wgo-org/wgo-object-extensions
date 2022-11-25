interface Object {
  log(): Record<string, unknown>;
  isNull(): boolean;
  isUndefied(): boolean;
  isNullOrUndefied(): boolean;
}
Object.prototype.log = function () {
  console.log(this);
  return this as Record<string, unknown>;
};
Object.prototype.isNull = function () {
  return this === null;
};
Object.prototype.isUndefied = function () {
  return this === undefined;
};
Object.prototype.isNullOrUndefied = function () {
  return this === null || this === undefined;
};
