/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

//  Definition of "empty":
//           zero length buffer
//           undefined
//           null
//           zero length array
//           zero length string
//           object with no keys
//           set with no entries
//           map with no entries
//           date with invalid/unparsable date
//  Empty is not 0 or false, wherein these are both considered valid values.

// Check if a value provided meets the definition of "empty"
const isEmpty = function (test_if_this_is_empty: any) {
  // undefined values are considered empty
  if (typeof test_if_this_is_empty === 'undefined') return true;

  // null values are considered empty
  if (test_if_this_is_empty === null) return true;

  // check if this is an empty date
  if (test_if_this_is_empty instanceof Date)
    return isNaN(test_if_this_is_empty.getTime());

  // check if this is an empty set or map
  if (
    test_if_this_is_empty instanceof Set ||
    test_if_this_is_empty instanceof Map
  )
    return test_if_this_is_empty.size === 0;

  // check if it's an empty buffer
  if (Buffer.isBuffer(test_if_this_is_empty) === true) {
    if (test_if_this_is_empty.length <= 0) return true;
    else {
      return false;
    }
  }

  // zero length arrays are considered empty
  if (Array.isArray(test_if_this_is_empty) === true) {
    if (test_if_this_is_empty.length === 0) return true;
  }

  // zero length strings are considered empty
  if (typeof test_if_this_is_empty === 'string') {
    if (test_if_this_is_empty == '') return true;
    if (test_if_this_is_empty.length === 0) return true;
  }

  // object with no keys is considered empty
  if (typeof test_if_this_is_empty === 'object') {
    // check if this is a regular expression
    if (test_if_this_is_empty instanceof RegExp) return false;

    // check if we have a getMonth property
    let has_get_month = false;
    try {
      if (typeof test_if_this_is_empty.getMonth === 'function') {
        has_get_month = true;
      }
    } catch (err) {}
    if (has_get_month === true) return false;

    // check if it's an empty object with no keys
    let key_length = 0;
    try {
      key_length = Object.keys(test_if_this_is_empty).length;
    } catch (err) {}
    if (key_length === 0) return true;
  }

  // the object is not empty
  return false;
};

// inverse of isEmpty
const isNotEmpty = function (test_if_this_is_not_empty: any) {
  return !isEmpty(test_if_this_is_not_empty);
};

// utility function that will take an array of values and check if they're empty
const valuesAreEmpty = function (array_of_values_to_check: any[]) {
  if (Array.isArray(array_of_values_to_check) !== true) return true;
  if (array_of_values_to_check.length <= 0) return true;

  for (
    let array_idx = 0;
    array_idx < array_of_values_to_check.length;
    array_idx++
  ) {
    if (isEmpty(array_of_values_to_check[array_idx]) !== true) return false;
  }

  // return indicating success
  return true;
};

// utility function that will take an array and see if any are not empty.
const valuesAreNotEmpty = function (array_of_values_to_check: any[]) {
  return !valuesAreEmpty(array_of_values_to_check);
};

export { isEmpty, isNotEmpty, valuesAreEmpty, valuesAreNotEmpty };
