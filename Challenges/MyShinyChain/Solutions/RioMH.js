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

const SPECIAL_CHARACTERS = '!@#$%^&*';
const MIN_LENGTH = 8;
const MAX_LENGTH = 20;

function isWithinMinLength(password) {
    return password.length >= MIN_LENGTH
}

function isWithinMaxLength(password) {
    return password.length <= MAX_LENGTH
}

function hasCapitalLetter(password) {
    for (var i = 0; i < password.length; i++) {
        var letter = password[i];
        if (letter.toUpperCase() == letter) {
            return true;
        }
    }
    return false;
}

function hasNumber(password) {
    for (var i = 0; i < password.length; i++) {
        var letter = password[i];
        if (!isNaN(letter)) {
            return true;
        }
    }
    return false;
}

function hasSpecialCharacter(password) {
    for (var i = 0; i < password.length; i++) {
        var letter = password[i];
        for (var j = 0; j < SPECIAL_CHARACTERS.length; j++) {
            var specialCharacter = SPECIAL_CHARACTERS[j];
            if (letter == specialCharacter) {
                return true;
            }
        }
    }
    return false;
}

// TODO additional password condition
function meetsAdditionalRequirement(password) {
    return true;
}

function meetsCharacterRequirements(password) {
    return (
        hasCapitalLetter(password) &&
        hasNumber(password) &&
        hasSpecialCharacter(password)
    )
}

function isPasswordValidWithoutMaxLength(password) {
    return (
        isWithinMinLength(password) &&
        meetsAdditionalRequirement(password) &&
        meetsCharacterRequirements(password)
    )
}

function isPasswordValidWithMaxLength(password) {
    return (
        isWithinMinLength(password) &&
        isWithinMaxLength(password) &&
        meetsCharacterRequirements(password)
    )
}

//console.log(isPasswordValidWithMaxLength('Abcdefa4!'));

/*
* The PM now is asking us to reuse the password validator function
* in other part of the solution, but without applying max length restriction
* additionally, we will need to include another rule that must apply only
* for this call, but that functionality will be provided later.
*
* HINT: There is a design pattern called "chain of responsability" that could
* fit perfectly for this case. Try to apply it.
*/
