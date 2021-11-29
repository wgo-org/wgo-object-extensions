import moment from 'moment';
import { IsNullOrUndefined, IsString, IsStringEmptyNullOrUndefined } from '../Object/ObjectExtensions';

export const MASK_YYYY_MM_DD_HH_mm_ss = 'YYYY-MM-DD HH:mm:ss';
export const MASK_YYYY_MM_DD_HH_mm = 'YYYY-MM-DD HH:mm';
export const MASK_DD_MM_YYYY = 'DD-MM-YYYY';
export const MASK_YYYY_MM_DD = 'YYYY-MM-DD';
export const MASK_YYYYMMDD = 'YYYYMMDD';
export const MASK_GENERIC = '##-##-####';
export const MASK_GENERIC_EMPTY = '__-__-____';

export const GetDate2 = (date: string, mask?: string): Date => {
  return new Date(date);
};
export const GetStringDate = (date: Date, mask: string): string => {
  if (IsNullOrUndefined(date)) {
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
export const GetDate = (date: string, mask?: string): Date => {
  const momentObj = moment(date, mask);
  if (IsNullOrUndefined(momentObj) || !momentObj.isValid()) {
    throw new Error('Invalid date!');
  }
  return momentObj.toDate();
};

export const IsDateValid = (date: string, mask?: string): boolean => {
  if (IsNullOrUndefined(date)) {
    console.debug('Invalid date parameter on IsDateValid');
    return false;
  }
  const momentObj = IsStringEmptyNullOrUndefined(mask as any) ? moment(date) : moment(date, mask);
  return IsNullOrUndefined(momentObj) ? false : momentObj.isValid();
};
export const GetMaskedDate = (date: Date | string | undefined, toMask: string, fromMask?: string): string => {
  if (IsNullOrUndefined(date)) {
    console.debug('Invalid date on GetMaskedDate');
    return '';
  }
  if (IsStringEmptyNullOrUndefined(fromMask as any)) {
    return moment(date, toMask).format(toMask);
  }
  return moment(date, fromMask).format(toMask);
};
export const IsDateValid2 = (date: string | Date, mask?: string): boolean => {
  if (IsNullOrUndefined(date)) {
    console.debug('Invalid date parameter on IsDateValid');
    return false;
  }
  let objDate: unknown;
  if (IsString(date)) objDate = new Date(date);
  else objDate = date as Date;
  return objDate instanceof Date && !isNaN(objDate.getTime());
};
export const IsDateAfter = (date: string, targetDate: string, mask: string): boolean => {
  return GetDate(date, mask) > GetDate(targetDate, mask);
};
export const IsDateAfterOrEqual = (date: string, targetDate: string, mask: string): boolean => {
  return GetDate(date, mask) >= GetDate(targetDate, mask);
};
export const IsDateBefore = (date: string, targetDate: string, mask: string): boolean => {
  return GetDate(date, mask) < GetDate(targetDate, mask);
};
export const IsDateBeforeOrEqual = (date: string, targetDate: string, mask: string): boolean => {
  return GetDate(date, mask) <= GetDate(targetDate, mask);
};
export const IsDateEqual = (date: string, targetDate: string, mask: string): boolean => {
  return GetDate(date, mask) === GetDate(targetDate, mask);
};
export const IsGenericMaskEmpty = (date: string) => {
  return !IsStringEmptyNullOrUndefined(date) && date == MASK_GENERIC_EMPTY;
};
export const GetAsItCH = (date: Date) => {
  return date.toLocaleDateString('it-CH');
};
export const GetAsFrCH = (date: Date) => {
  return date.toLocaleDateString('fr-CH');
};
export const GetAsDeCH = (date: Date) => {
  return date.toLocaleDateString('de-CH');
};
export const GetNumbersFromString = (objStr: string): number[] => {
  const result: number[] = [];
  if (IsStringEmptyNullOrUndefined(objStr)) return result;
  objStr.split('').forEach((str) => {
    try {
      const number = parseInt(str);
      if (isNaN(number)) return;
      result.push(number);
    } catch {}
  });
  return result;
};
