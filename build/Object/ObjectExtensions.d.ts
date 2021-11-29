export declare const IsFuncAndDefined: (object: any) => boolean;
export declare const IsNotStringOrEmpty: (object: any) => boolean;
export declare const IsFunc: (object: unknown) => boolean;
export declare const IsDefinedFunc: (object: unknown) => boolean;
export declare const IsArray: (object: unknown) => boolean;
export declare const IsNotArrayOrEmpty: (object: unknown) => boolean;
export declare const IsStringEmpty: (str: unknown) => boolean;
export declare const IsObject: (object: any) => void;
export declare const ContainsById: (arrayObj: any[], id: any) => boolean;
export declare const StringToBoolean: (strObj: string) => boolean;
export declare const HtmlToText: (html: string) => string;
export declare const SubString: (str: string, max: number) => string;
export declare const IsOnline: () => boolean;
export declare const StableSort: (array: any[], cmp: (arg0: any, arg1: any) => any) => any[];
export declare const GetSorting: (order: string, orderBy: any) => (a: any, b: any) => 0 | 1 | -1;
export declare const Desc: (a: {
    [x: string]: number;
}, b: {
    [x: string]: number;
}, orderBy: string | number) => 0 | 1 | -1;
export declare const EvaluateExpresion: (textToEval: string, objectEval: any, delimiterBefor: string, delimiterAfter: string) => string;
export declare const IsUndefined: (obj: object) => boolean;
export declare const IsNull: (obj: any) => boolean;
export declare const useNullableNumber: (obj: any) => number;
export declare const IsNullOrUndefined: (obj: any) => boolean;
export declare const IsStringEmptyNullOrUndefined: (obj: string) => boolean;
export declare const IsString: (obj: any) => boolean;
export declare function getNameOf<T>(key: keyof T, instance?: T): keyof T;
export declare function getValueOf<T>(key: keyof T, instance: T): keyof T;
export declare function IsKeyOf<T>(key: any, instance: T): key is keyof T;
export declare function getAsKeyOf<T>(key: string, instance: T): keyof T;
/**
 * @class Estensione della classe Error per gestire errori di validazioni
 */
export declare class ValidationError extends Error {
    data: ValidationError[];
    constructor(message: string, data: ValidationError[]);
}
export declare const stringToBoolean: (strObj: string) => boolean;
//# sourceMappingURL=ObjectExtensions.d.ts.map