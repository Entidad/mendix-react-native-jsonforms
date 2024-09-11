/**
 * Resolve if a param is an object.
 * @param {any} thing the param to identify.
 * @returns {boolean} the boolean result of object evaluation.
 */
export function isObject(thing:any) {
    return typeof thing === "object" && thing !== null && !Array.isArray(thing);
}

/**
 * Recursively merge deeply nested objects.
 * @param {any} obj1 the first object.
 * @param {any} obj2 the second object.
 * @returns {any} result of merge objects.
 */
export function mergeObjects(obj1:any, obj2:any, concatArrays = false) {
  var acc = Object.assign({}, obj1); // Prevent mutation of source object.
  return Object.keys(obj2).reduce((acc, key) => {
    const left = obj1[key],
      right = obj2[key];
    if (obj1.hasOwnProperty(key) && isObject(right)) {
      acc[key] = mergeObjects(left, right, concatArrays);
    } else if (concatArrays && Array.isArray(left) && Array.isArray(right)) {
      acc[key] = left.concat(right);
    } else {
      acc[key] = right;
    }
    return acc;
  }, acc);
}


/**
 * Returns the a date object of the date string.
 * @param {string} dateString the string to convert it.
 * @param {boolean} includeTime define if include de value of the time params (hour, minute, second). 
 * @returns {object} A object which include date params (year, month, day, hour, minute, second)
 */
export function convertStringToDateObject(dateString:string, includeTime = true) {
  if (!dateString) {
    return {
      year: -1,
      month: -1,
      day: -1,
      hour: includeTime ? -1 : 0,
      minute: includeTime ? -1 : 0,
      second: includeTime ? -1 : 0,
    };
  }
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    throw new Error("Unable to parse date " + dateString);
  }
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1, // oh you, javascript.
    day: date.getUTCDate(),
    hour: includeTime ? date.getUTCHours() : 0,
    minute: includeTime ? date.getUTCMinutes() : 0,
    second: includeTime ? date.getUTCSeconds() : 0,
  };
}

/**
 * Returns the string representation of the given date. The format of the output string can be specified:
 * - 'date' for a date-only string (YYYY-MM-DD),
 * - 'time' for a time-only string (HH:mm:ss), or
 * - 'date-time' for a full date-time string in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).
 * If no format is specified, the full date-time ISO string is returned by default.
 * @param {Date} date the date to convert it.
 * @param {string} format the format string to convert it: 'date', 'time', 'date-time'. 
 * @returns {string} A string representation of the date in the specified output format.
 *
 * @example
 * convertDateToString(new Date('2023-11-09T14:22:54.131Z'), 'date');  // returns '2023-11-09'
 * @example
 * convertDateToString(new Date('2023-11-09T14:22:54.131Z'), 'time');  // returns '14:22:54'
 * @example
 * convertDateToString(new Date('2023-11-09T14:22:54.131Z'), 'date-time'); // returns '2023-11-09T14:22:54.131Z'
 * @example
 * convertDateToString(new Date('2023-11-09T14:22:54.131Z')); // returns '2023-11-09T14:22:54.131Z'
 */
export const convertDateToString = (
  date: Date,
  format?: 'date' | 'time' | 'date-time'
): string => {
  //e.g. '2023-11-09T14:22:54.131Z'
  const dateString = date.toISOString();
  if (format === 'date-time') {
    return dateString;
  } else if (format === 'date') {
    // e.g. '2023-11-09'
    return dateString.split('T')[0];
  } else if (format === 'time') {
    //e.g. '14:22:54'
    return dateString.split('T')[1].split('.')[0];
  }
  return dateString;
};

export function isEmpty(value:string){
  if(value && value.trim()!="" && value.length>0){
    return false;
  }
  return true;
}

export function isEmptyArray(arr:any){
  if(arr==undefined || arr.length==0){
    return true;
  }
  return false;
}

export function isEmptyBoolean(val:any){
  if(typeof val === 'boolean'){
    return !val;
  }
  if(val==undefined || val=="" || val=="No"){
    return true;
  }
  return false;
}