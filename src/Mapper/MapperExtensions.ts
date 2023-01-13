import { IsNullOrUndefined } from '../Object/ObjectExtensions';

const getObjTreePropertiesNames = <T>(objInstance: T): string[] => {
  const leafKeys = Object.keys(objInstance);
  const protoLeafKeys = Object.keys(Object.getPrototypeOf(objInstance));
  return leafKeys.concat(protoLeafKeys);
};

export type OnMapSet<S, T> = (propKey: keyof S, propValue: unknown, sourceObj: S, targetObj: T) => void;

export const mapSync = <S, T>(sourceObj: S, targetObjType: { new (): T }, onSet?: OnMapSet<S, T>): T => {
  if (IsNullOrUndefined(sourceObj)) throw new Error('Invalid parameter sourceObj');
  const targetObj = new targetObjType();
  const sourceKeys = getObjTreePropertiesNames<S>(sourceObj);
  if (IsNullOrUndefined(sourceKeys) || sourceKeys.length === 0) throw new Error('Invalid sourceObj properties keys');
  for (const key of sourceKeys) {
    const mySourceVar = key.valueOf() as keyof S;
    targetObj[key] = sourceObj[mySourceVar];
    if (!IsNullOrUndefined(onSet)) {
      onSet(mySourceVar, sourceObj[mySourceVar], sourceObj, targetObj);
    }
  }
  return targetObj;
};

export const Map = async <S, T>(
  sourceObj: any,
  targetObj: any,
  onSet?: (propKey: string, propValue: any, sourceObj: S, targetObj: T) => Promise<void>
): Promise<T> => {
  if (IsNullOrUndefined(sourceObj)) throw new Error('Invalid parameter sourceObj');
  if (IsNullOrUndefined(targetObj)) targetObj = {};
  const sourceKeys = GetObjTreePropertiesNames(sourceObj);
  if (IsNullOrUndefined(sourceKeys) || sourceKeys.length === 0) throw new Error('Invalid sourceObj properties keys');
  for (const key of sourceKeys) {
    console.debug(`Mapping key: ${key}`);
    targetObj[key] = sourceObj[key];
    if (!IsNullOrUndefined(onSet)) {
      await onSet(key, targetObj[key], sourceObj, targetObj);
    }
  }
  return targetObj as T;
};

export const ReverseMap = async (
  sourceObj: any,
  targetObj: any,
  onSet?: (propKey: string, propValue: any, sourceObj: any, targetObj: any) => Promise<void>
): Promise<any> => {
  if (IsNullOrUndefined(sourceObj)) throw new Error('Invalid parameter sourceObj');
  if (IsNullOrUndefined(targetObj)) targetObj = {};
  const targetKeys = GetObjTreePropertiesNames(targetObj);
  if (IsNullOrUndefined(targetKeys) || targetKeys.length === 0) throw new Error('Invalid sourceObj properties keys');
  for (const key of targetKeys) {
    console.debug(`Mapping key: ${key}`);
    targetObj[key] = sourceObj[key];
    if (!IsNullOrUndefined(onSet)) {
      await onSet(key, sourceObj[key], sourceObj, targetObj);
    }
  }
  return targetObj;
};

export const BilateralMap = async (
  sourceObj: any,
  targetObj: any,
  onSet?: (propKey: string, propValue: any, sourceObj: any, targetObj: any) => Promise<void>
): Promise<any> => {
  const targetKeys = await ReverseMap(sourceObj, targetObj, onSet);
  return await Map(sourceObj, targetKeys, onSet);
};

export const ForeachMap = async (
  sourceObj: any,
  targetObj: any,
  onEach: (propKey: string, propValue: any, sourceObj: any, targetObj: any) => Promise<void>
): Promise<any> => {
  if (IsNullOrUndefined(sourceObj)) throw new Error('Invalid parameter sourceObj');
  if (IsNullOrUndefined(targetObj)) targetObj = {};
  const sourceKeys = Object.keys(sourceObj);
  if (IsNullOrUndefined(sourceKeys) || sourceKeys.length === 0) throw new Error('Invalid sourceObj properties keys');
  for (const key of sourceKeys) {
    if (!IsNullOrUndefined(onEach)) {
      await onEach(key, sourceObj[key], sourceObj, targetObj);
    }
  }
  return targetObj;
};

const GetObjTreePropertiesNames = (leafObj: any): string[] => {
  const leafKeys = Object.keys(leafObj);
  const protoLeafKeys = Object.keys(Object.getPrototypeOf(leafObj));
  return leafKeys.concat(protoLeafKeys);
};
