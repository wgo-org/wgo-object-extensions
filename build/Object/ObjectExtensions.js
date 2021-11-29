"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToBoolean = exports.ValidationError = exports.getAsKeyOf = exports.IsKeyOf = exports.getValueOf = exports.getNameOf = exports.IsString = exports.IsStringEmptyNullOrUndefined = exports.IsNullOrUndefined = exports.useNullableNumber = exports.IsNull = exports.IsUndefined = exports.EvaluateExpresion = exports.Desc = exports.GetSorting = exports.StableSort = exports.IsOnline = exports.SubString = exports.HtmlToText = exports.StringToBoolean = exports.ContainsById = exports.IsObject = exports.IsStringEmpty = exports.IsNotArrayOrEmpty = exports.IsArray = exports.IsDefinedFunc = exports.IsFunc = exports.IsNotStringOrEmpty = exports.IsFuncAndDefined = void 0;
const IsFuncAndDefined = (object) => {
    return !(0, exports.IsNullOrUndefined)(object) && typeof object === 'function';
};
exports.IsFuncAndDefined = IsFuncAndDefined;
const IsNotStringOrEmpty = (object) => {
    return typeof object !== 'string' || object === '';
};
exports.IsNotStringOrEmpty = IsNotStringOrEmpty;
const IsFunc = (object) => {
    return typeof object === 'function';
};
exports.IsFunc = IsFunc;
const IsDefinedFunc = (object) => {
    return !(0, exports.IsNullOrUndefined)(object) && typeof object === 'function';
};
exports.IsDefinedFunc = IsDefinedFunc;
const IsArray = (object) => {
    return Array.isArray(object);
};
exports.IsArray = IsArray;
const IsNotArrayOrEmpty = (object) => {
    return (0, exports.IsNullOrUndefined)(object) || !Array.isArray(object) || object.length === 0;
};
exports.IsNotArrayOrEmpty = IsNotArrayOrEmpty;
const IsStringEmpty = (str) => {
    return (typeof str === 'string' || str instanceof String) && str.trim() === '';
};
exports.IsStringEmpty = IsStringEmpty;
const IsObject = (object) => {
    typeof object === 'object' && object !== null;
};
exports.IsObject = IsObject;
const ContainsById = (arrayObj, id) => {
    if ((0, exports.IsNullOrUndefined)(arrayObj) || (0, exports.IsNotArrayOrEmpty)(arrayObj)) {
        return false;
    }
    const index = arrayObj.findIndex((obj) => {
        return obj.id === id;
    });
    return index !== -1;
};
exports.ContainsById = ContainsById;
const StringToBoolean = (strObj) => {
    return (0, exports.IsStringEmptyNullOrUndefined)(strObj) ? false : strObj === '1';
};
exports.StringToBoolean = StringToBoolean;
const HtmlToText = (html) => {
    html = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
    html = html.replace(/<script([\s\S]*?)<\/script>/gi, '');
    html = html.replace(/<\/div>/gi, '\n');
    html = html.replace(/<\/li>/gi, '\n');
    html = html.replace(/<li>/gi, '  *  ');
    html = html.replace(/<\/ul>/gi, '\n');
    html = html.replace(/<\/p>/gi, '\n');
    html = html.replace(/<br\s*[/]?>/gi, '\n');
    html = html.replace(/<[^>]+>/gi, '');
    return html;
};
exports.HtmlToText = HtmlToText;
const SubString = (str, max) => {
    if ((0, exports.IsNullOrUndefined)(str))
        return '';
    if (str.length <= max)
        return str;
    return str.slice(0, max);
};
exports.SubString = SubString;
const IsOnline = () => {
    return !(0, exports.IsNullOrUndefined)(navigator) && navigator.onLine;
};
exports.IsOnline = IsOnline;
const StableSort = (array, cmp) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0)
            return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
};
exports.StableSort = StableSort;
const GetSorting = (order, orderBy) => {
    return order === 'desc' ? (a, b) => (0, exports.Desc)(a, b, orderBy) : (a, b) => (0, exports.Desc)(a, b, orderBy);
};
exports.GetSorting = GetSorting;
const Desc = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
};
exports.Desc = Desc;
const EvaluateExpresion = (textToEval, objectEval, delimiterBefor, delimiterAfter) => {
    let _delimiterBfr = delimiterBefor || '[';
    let _delimiterAft = delimiterAfter || '[';
    if ((0, exports.IsNullOrUndefined)(textToEval))
        return '';
    if ((0, exports.IsNullOrUndefined)(objectEval))
        return textToEval;
    let resultTest = '';
    textToEval.split(_delimiterBfr).forEach((text) => {
        let temp = text.split(_delimiterAft);
        let prop = temp[0].charAt(0).toLowerCase() + temp[0].slice(1);
        if (temp.length >= 1 && prop in objectEval) {
            resultTest += objectEval[prop];
            temp.shift();
        }
        resultTest += temp.join(_delimiterAft);
    });
    return resultTest;
};
exports.EvaluateExpresion = EvaluateExpresion;
const IsUndefined = (obj) => {
    return obj === undefined;
};
exports.IsUndefined = IsUndefined;
const IsNull = (obj) => {
    return obj === null;
};
exports.IsNull = IsNull;
const useNullableNumber = (obj) => {
    return obj === new Number() && obj === 0 ? null : obj;
};
exports.useNullableNumber = useNullableNumber;
const IsNullOrUndefined = (obj) => {
    return (0, exports.IsNull)(obj) || (0, exports.IsUndefined)(obj);
};
exports.IsNullOrUndefined = IsNullOrUndefined;
const IsStringEmptyNullOrUndefined = (obj) => {
    return (0, exports.IsNullOrUndefined)(obj) || obj === '';
};
exports.IsStringEmptyNullOrUndefined = IsStringEmptyNullOrUndefined;
const IsString = (obj) => {
    return typeof obj === 'string';
};
exports.IsString = IsString;
function getNameOf(key, instance) {
    return key;
}
exports.getNameOf = getNameOf;
function getValueOf(key, instance) {
    return instance[key.toString()];
}
exports.getValueOf = getValueOf;
function IsKeyOf(key, instance) {
    return key in instance;
}
exports.IsKeyOf = IsKeyOf;
function getAsKeyOf(key, instance) {
    if (IsKeyOf(key, instance))
        return key;
    throw new Error('Invalid keyof instance T');
}
exports.getAsKeyOf = getAsKeyOf;
/**
 * @class Estensione della classe Error per gestire errori di validazioni
 */
class ValidationError extends Error {
    constructor(message, data) {
        super(message);
        this.data = data;
    }
}
exports.ValidationError = ValidationError;
const stringToBoolean = (strObj) => {
    return (0, exports.IsStringEmptyNullOrUndefined)(strObj) ? false : strObj === '1';
};
exports.stringToBoolean = stringToBoolean;
//# sourceMappingURL=ObjectExtensions.js.map