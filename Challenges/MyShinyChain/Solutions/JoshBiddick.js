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

var MIN_LENGTH = 8;
var MAX_LENGTH = 20;
var CAPITAL_LETTER_REGEX = /[A-Z]/;
var CONTAINS_NUMBER_REGEX = /[0-9]/;
var SPECIAL_CHAR_REGEX = /[!@#$%^&*(),.?":{}|<>]/g;

var passwordValidators = [
  {
    name: "min-length",
    validation: function (value) { return minLengthValidator(value, MIN_LENGTH); }
  },
  {
    name: "max-length",
    validation: function (value) { return maxLengthValidator(value, MAX_LENGTH); }
  },
  {
    name: "contains-capital",
    validation: function (value) { return patternValidator(value, CAPITAL_LETTER_REGEX); }
  },
  {
    name: "contains-number",
    validation: function (value) { return patternValidator(value, CONTAINS_NUMBER_REGEX); }
  },
  {
    name: "contains-special-chars",
    validation: function (value) { return patternValidator(value, SPECIAL_CHAR_REGEX); }
  }
];

// Validation
function minLengthValidator(value, minLength) {
  return value && value.length > minLength;
}
function maxLengthValidator(value, maxLength) {
  return value && value.length < maxLength;
}
function patternValidator(value, regex) {
  return value && regex.test(value);
}
function isPasswordValid(password, validators) {
  var isValid = validators.every(function (validator) { return validator.validation(password); });
  return isValid;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats the password? ', password => {
  console.log(isPasswordValid(password, passwordValidators));
  rl.close();
});

/*
 * The PM now is asking us to reuse the password validator function
 * in other part of the solution, but without applying max length restriction
 * additionally, we will need to include another rule that must apply only
 * for this call, but that functionality will be provided later.
 *
 * HINT: There is a design pattern called "chain of responsability" that could
 * fit perfectly for this case. Try to apply it.
 */
