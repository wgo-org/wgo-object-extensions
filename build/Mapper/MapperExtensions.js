"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForeachMap = exports.BilateralMap = exports.ReverseMap = exports.Map = void 0;
const ObjectExtensions_1 = require("../Object/ObjectExtensions");
const Map = async (sourceObj, targetObj, onSet) => {
    if ((0, ObjectExtensions_1.IsNullOrUndefined)(sourceObj))
        throw new Error('Invalid parameter sourceObj');
    if ((0, ObjectExtensions_1.IsNullOrUndefined)(targetObj))
        targetObj = {};
    const sourceKeys = GetObjTreePropertiesNames(sourceObj);
    if ((0, ObjectExtensions_1.IsNullOrUndefined)(sourceKeys) || sourceKeys.length === 0)
        throw new Error('Invalid sourceObj properties keys');
    for (const key of sourceKeys) {
        console.debug(`Mapping key: ${key}`);
        targetObj[key] = sourceObj[key];
        if (!(0, ObjectExtensions_1.IsNullOrUndefined)(onSet)) {
            await onSet(key, targetObj[key], sourceObj, targetObj);
        }
    }
    return targetObj;
};
exports.Map = Map;
const ReverseMap = async (sourceObj, targetObj, onSet) => {
    if ((0, ObjectExtensions_1.IsNullOrUndefined)(sourceObj))
        throw new Error('Invalid parameter sourceObj');
    if ((0, ObjectExtensions_1.IsNullOrUndefined)(targetObj))
        targetObj = {};
    const targetKeys = GetObjTreePropertiesNames(targetObj);
    if ((0, ObjectExtensions_1.IsNullOrUndefined)(targetKeys) || targetKeys.length === 0)
        throw new Error('Invalid sourceObj properties keys');
    for (const key of targetKeys) {
        console.debug(`Mapping key: ${key}`);
        targetObj[key] = sourceObj[key];
        if (!(0, ObjectExtensions_1.IsNullOrUndefined)(onSet)) {
            await onSet(key, sourceObj[key], sourceObj, targetObj);
        }
    }
    return targetObj;
};
exports.ReverseMap = ReverseMap;
const BilateralMap = async (sourceObj, targetObj, onSet) => {
    const targetKeys = await (0, exports.ReverseMap)(sourceObj, targetObj, onSet);
    return await (0, exports.Map)(sourceObj, targetKeys, onSet);
};
exports.BilateralMap = BilateralMap;
const ForeachMap = async (sourceObj, targetObj, onEach) => {
    if ((0, ObjectExtensions_1.IsNullOrUndefined)(sourceObj))
        throw new Error('Invalid parameter sourceObj');
    if ((0, ObjectExtensions_1.IsNullOrUndefined)(targetObj))
        targetObj = {};
    const sourceKeys = Object.keys(sourceObj);
    if ((0, ObjectExtensions_1.IsNullOrUndefined)(sourceKeys) || sourceKeys.length === 0)
        throw new Error('Invalid sourceObj properties keys');
    for (const key of sourceKeys) {
        if (!(0, ObjectExtensions_1.IsNullOrUndefined)(onEach)) {
            await onEach(key, sourceObj[key], sourceObj, targetObj);
        }
    }
    return targetObj;
};
exports.ForeachMap = ForeachMap;
const GetObjTreePropertiesNames = (leafObj) => {
    const leafKeys = Object.keys(leafObj);
    const protoLeafKeys = Object.keys(Object.getPrototypeOf(leafObj));
    return leafKeys.concat(protoLeafKeys);
};
//# sourceMappingURL=MapperExtensions.js.map