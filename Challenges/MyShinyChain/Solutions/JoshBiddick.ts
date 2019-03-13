/*
 * Our PM ask us to create a function for password validation
 * Some of the validation rules are the following:
 * - Password cannot be less than 8 characters
 * - Password cannot be greater than 20 characters
 * - Password must have, at least, one capital letter
 * - Password must have, at least, one number
 * - Password must have, at least, one special character from this list !@#$%^&*
 *
 * The following is our first solution
 */

interface Validator {
  name: string;
  validation: (value: any) => boolean;
}

const MIN_LENGTH = 8;
const MAX_LENGTH = 20;
const CAPITAL_LETTER_REGEX = /[A-Z]/;
const CONTAINS_NUMBER_REGEX = /[0-9]/;
const SPECIAL_CHAR_REGEX = /[!@#$%^&*(),.?":{}|<>]/g;

const passwordValidators: Validator[] = [
  {
    name: "min-length",
    validation: value => minLengthValidator(value, MIN_LENGTH)
  },
  {
    name: "max-length",
    validation: value => maxLengthValidator(value, MAX_LENGTH)
  },
  {
    name: "contains-capital",
    validation: value => patternValidator(value, CAPITAL_LETTER_REGEX)
  },
  {
    name: "contains-number",
    validation: value => patternValidator(value, CONTAINS_NUMBER_REGEX)
  },
  {
    name: "contains-special-chars",
    validation: value => patternValidator(value, SPECIAL_CHAR_REGEX)
  }
];

// Validation
function minLengthValidator(value: string, minLength: number): boolean {
  return value && value.length > minLength;
}

function maxLengthValidator(value: string, maxLength: number): boolean {
  return value && value.length < maxLength;
}

function patternValidator(value: string, regex: RegExp): boolean {
  return value && regex.test(value);
}

function isPasswordValid(password: string, validators: Validator[]): boolean {
  let isValid = validators.every(validator => validator.validation(password));
  return isValid;
}

isPasswordValid("P4ssw0rd$~!", passwordValidators);

  /*
   * The PM now is asking us to reuse the password validator function
   * in other part of the solution, but without applying max length restriction
   * additionally, we will need to include another rule that must apply only
   * for this call, but that functionality will be provided later.
   *
   * HINT: There is a design pattern called "chain of responsability" that could
   * fit perfectly for this case. Try to apply it.
   */
