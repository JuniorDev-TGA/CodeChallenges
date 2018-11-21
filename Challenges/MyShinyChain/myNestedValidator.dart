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

bool isNumeric(String s) {
  if(s == null) {
    return false;
  }

  try {
    return double.parse(s) is double;
  } catch (e) {
    return false;
  }
}

bool isPasswordValid(String password) {
  if (password.length >= 8 && password.length <= 20) {

    var oneCapital = false;
    for (var i = 0; i < password.length; i++) {
      var letter = password[i];
      if (letter.toUpperCase() == letter) {
        oneCapital = true;
        break;
      }
    }

    if (oneCapital == false) {
      return false;
    }

    var oneNumber = false;
    for (var i = 0; i < password.length; i++) {
      var letter = password[i];
      if (isNumeric(letter)) {
        oneNumber = true;
        break;
      }
    }

    if (oneNumber == false) {
      return false;
    }

    var oneSpecialCharacter = false;
    var specialCharacters = "!@#\$%^&*";
    for (var i = 0; i < password.length; i++) {
      var letter = password[i];
      for (var j = 0; j < specialCharacters.length; j++) {
        var specialCharacter = specialCharacters[j];
        if (letter == specialCharacter) {
          oneSpecialCharacter = true;
          break;
        }
      }

      if (oneSpecialCharacter == true) {
        break;
      }
    }

    if (oneSpecialCharacter == false) {
        return false;
    }

    return true;
  }

  return false;
}

main() {
  print(isPasswordValid("abcdef5!"));
}

/*
* The PM now is asking us to reuse the password validator function
* in other part of the solution, but without applying max length restriction
* additionally, we will need to include another rule that must apply only 
* for this call, but that functionality will be provided later.
* 
* HINT: There is a design pattern called "chain of responsability" that could
* fit perfectly for this case. Try to apply it.
*/