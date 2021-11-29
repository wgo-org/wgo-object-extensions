"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNumbersFromString = exports.GetAsDeCH = exports.GetAsFrCH = exports.GetAsItCH = exports.IsGenericMaskEmpty = exports.IsDateEqual = exports.IsDateBeforeOrEqual = exports.IsDateBefore = exports.IsDateAfterOrEqual = exports.IsDateAfter = exports.IsDateValid2 = exports.GetMaskedDate = exports.IsDateValid = exports.GetDate = exports.GetStringDate = exports.GetDate2 = exports.MASK_GENERIC_EMPTY = exports.MASK_GENERIC = exports.MASK_YYYYMMDD = exports.MASK_YYYY_MM_DD = exports.MASK_DD_MM_YYYY = exports.MASK_YYYY_MM_DD_HH_mm = exports.MASK_YYYY_MM_DD_HH_mm_ss = void 0;
const moment_1 = __importDefault(require("moment"));
const ObjectExtensions_1 = require("../Object/ObjectExtensions");
exports.MASK_YYYY_MM_DD_HH_mm_ss = 'YYYY-MM-DD HH:mm:ss';
exports.MASK_YYYY_MM_DD_HH_mm = 'YYYY-MM-DD HH:mm';
exports.MASK_DD_MM_YYYY = 'DD-MM-YYYY';
exports.MASK_YYYY_MM_DD = 'YYYY-MM-DD';
exports.MASK_YYYYMMDD = 'YYYYMMDD';
exports.MASK_GENERIC = '##-##-####';
exports.MASK_GENERIC_EMPTY = '__-__-____';
const GetDate2 = (date, mask) => {
    return new Date(date);
};
exports.GetDate2 = GetDate2;
const GetStringDate = (date, mask) => {
    if ((0, ObjectExtensions_1.IsNullOrUndefined)(date)) {
        console.debug('Invalid date on GetMaskedDate');
        return '';
    }
    let formattedDate = mask;
    formattedDate = formattedDate.replace('YYYY', date.getFullYear().toString());
    formattedDate = formattedDate.replace('MM', date.getMonth().toString());
    formattedDate = formattedDate.replace('DD', date.getDay().toString());
    formattedDate = formattedDate.replace('HH', date.getHours().toString());
    formattedDate = formattedDate.replace('mm', date.getMinutes().toString());
    formattedDate = formattedDate.replace('ss', date.getSeconds().toString());
    return formattedDate;
};
exports.GetStringDate = GetStringDate;
const GetDate = (date, mask) => {
    const momentObj = (0, moment_1.default)(date, mask);
    if ((0, ObjectExtensions_1.IsNullOrUndefined)(momentObj) || !momentObj.isValid()) {
        throw new Error('Invalid date!');
    }
    return momentObj.toDate();
};
exports.GetDate = GetDate;
const IsDateValid = (date, mask) => {
    if ((0, ObjectExtensions_1.IsNullOrUndefined)(date)) {
        console.debug('Invalid date parameter on IsDateValid');
        return false;
    }
    const momentObj = (0, ObjectExtensions_1.IsStringEmptyNullOrUndefined)(mask) ? (0, moment_1.default)(date) : (0, moment_1.default)(date, mask);
    return (0, ObjectExtensions_1.IsNullOrUndefined)(momentObj) ? false : momentObj.isValid();
};
exports.IsDateValid = IsDateValid;
const GetMaskedDate = (date, toMask, fromMask) => {
    if ((0, ObjectExtensions_1.IsNullOrUndefined)(date)) {
        console.debug('Invalid date on GetMaskedDate');
        return '';
    }
    if ((0, ObjectExtensions_1.IsStringEmptyNullOrUndefined)(fromMask)) {
        return (0, moment_1.default)(date, toMask).format(toMask);
    }
    return (0, moment_1.default)(date, fromMask).format(toMask);
};
exports.GetMaskedDate = GetMaskedDate;
const IsDateValid2 = (date, mask) => {
    if ((0, ObjectExtensions_1.IsNullOrUndefined)(date)) {
        console.debug('Invalid date parameter on IsDateValid');
        return false;
    }
    let objDate;
    if ((0, ObjectExtensions_1.IsString)(date))
        objDate = new Date(date);
    else
        objDate = date;
    return objDate instanceof Date && !isNaN(objDate.getTime());
};
exports.IsDateValid2 = IsDateValid2;
const IsDateAfter = (date, targetDate, mask) => {
    return (0, exports.GetDate)(date, mask) > (0, exports.GetDate)(targetDate, mask);
};
exports.IsDateAfter = IsDateAfter;
const IsDateAfterOrEqual = (date, targetDate, mask) => {
    return (0, exports.GetDate)(date, mask) >= (0, exports.GetDate)(targetDate, mask);
};
exports.IsDateAfterOrEqual = IsDateAfterOrEqual;
const IsDateBefore = (date, targetDate, mask) => {
    return (0, exports.GetDate)(date, mask) < (0, exports.GetDate)(targetDate, mask);
};
exports.IsDateBefore = IsDateBefore;
const IsDateBeforeOrEqual = (date, targetDate, mask) => {
    return (0, exports.GetDate)(date, mask) <= (0, exports.GetDate)(targetDate, mask);
};
exports.IsDateBeforeOrEqual = IsDateBeforeOrEqual;
const IsDateEqual = (date, targetDate, mask) => {
    return (0, exports.GetDate)(date, mask) === (0, exports.GetDate)(targetDate, mask);
};
exports.IsDateEqual = IsDateEqual;
const IsGenericMaskEmpty = (date) => {
    return !(0, ObjectExtensions_1.IsStringEmptyNullOrUndefined)(date) && date == exports.MASK_GENERIC_EMPTY;
};
exports.IsGenericMaskEmpty = IsGenericMaskEmpty;
const GetAsItCH = (date) => {
    return date.toLocaleDateString('it-CH');
};
exports.GetAsItCH = GetAsItCH;
const GetAsFrCH = (date) => {
    return date.toLocaleDateString('fr-CH');
};
exports.GetAsFrCH = GetAsFrCH;
const GetAsDeCH = (date) => {
    return date.toLocaleDateString('de-CH');
};
exports.GetAsDeCH = GetAsDeCH;
const GetNumbersFromString = (objStr) => {
    const result = [];
    if ((0, ObjectExtensions_1.IsStringEmptyNullOrUndefined)(objStr))
        return result;
    objStr.split('').forEach((str) => {
        try {
            const number = parseInt(str);
            if (isNaN(number))
                return;
            result.push(number);
        }
        catch { }
    });
    return result;
};
exports.GetNumbersFromString = GetNumbersFromString;
//# sourceMappingURL=DateExtensions.js.map