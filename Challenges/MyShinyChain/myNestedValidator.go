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
