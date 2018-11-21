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

package main

import (
	"fmt"
	"strconv"
	"strings"
)

func isNumeric(s string) bool {
	_, err := strconv.ParseFloat(s, 64)
	return err == nil
}

func isPasswordValid(password string) bool {
	if len(password) >= 8 && len(password) <= 20 {

		var oneCapital = false
		for i := 0; i < len(password); i++ {
			var letter = string(password[i])
			if strings.ToUpper(letter) == letter {
				oneCapital = true
				break
			}
		}

		if oneCapital == false {
			return false
		}

		var oneNumber = false
		for i := 0; i < len(password); i++ {
			var letter = string(password[i])
			if isNumeric(letter) {
				oneNumber = true
				break
			}
		}

		if oneNumber == false {
			return false
		}

		var oneSpecialCharacter = false
		var specialCharacters = "!@#$%^&*"
		for i := 0; i < len(password); i++ {
			var letter = string(password[i])
			for j := 0; j < len(specialCharacters); j++ {
				var specialCharacter = string(specialCharacters[j])
				if letter == specialCharacter {
					oneSpecialCharacter = true
					break
				}
			}

			if oneSpecialCharacter == true {
				break
			}
		}

		if oneSpecialCharacter == false {
			return false
		}

		return true
	}

	return false
}

func main() {
	fmt.Println(isPasswordValid("Abcdef5!"))
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
