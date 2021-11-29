export declare const Map: <S, T>(sourceObj: any, targetObj: any, onSet?: (propKey: string, propValue: any, sourceObj: S, targetObj: T) => Promise<void>) => Promise<T>;
export declare const ReverseMap: (sourceObj: any, targetObj: any, onSet?: (propKey: string, propValue: any, sourceObj: any, targetObj: any) => Promise<void>) => Promise<any>;
export declare const BilateralMap: (sourceObj: any, targetObj: any, onSet?: (propKey: string, propValue: any, sourceObj: any, targetObj: any) => Promise<void>) => Promise<any>;
export declare const ForeachMap: (sourceObj: any, targetObj: any, onEach: (propKey: string, propValue: any, sourceObj: any, targetObj: any) => Promise<void>) => Promise<any>;
//# sourceMappingURL=MapperExtensions.d.ts.map