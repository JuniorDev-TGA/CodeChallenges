#
# Our PM ask us to create a function for password validation
# Some of the validation rules are the following:
# - Password cannot be less than 8 characters
# - Password cannot be greater than 20 characters
# - Password must have, at least, one capital letter
# - Password must have, at least, one number
# - Password must have, at least, one special character from this list !@#$%^&*
# The following is our first solution
#

import unittest


def is_password_valid(password):
    if 8 <= len(password) <= 20:

        # Checking for capital letter
        one_capital = False
        for letter in password:
            if letter.isupper():
                one_capital = True
                break

        if one_capital == False:
            return False

        # Checking for numbers
        one_number = False
        for letter in password:
            if letter.isdigit():
                one_number = True
                break

        if one_number == False:
            return False

        # Checking for special characters
        one_special_character = False
        special_characters = "!@#$%^&*"
        for letter in password:
            for special_character in special_characters:
                if letter == special_character:
                    one_special_character = True
                    break

            if one_special_character == True:
                break

        if one_special_character == False:
            return False

        return True

    return False


class IsPasswordValidTest(unittest.TestCase):
    # To run tests issue `python -m unittest myNestedValidator.IsPasswordValidTest` in MyShinyChain folder.
    # Or uncomment the last line.
    def test_proper(self):
        self.assertEqual(is_password_valid('Abcdefa4!'), True)

    def test_too_short(self):
        self.assertEqual(is_password_valid('Abcdefa4'), False)

    def test_too_long(self):
        self.assertEqual(is_password_valid('Abcdefa4abcdefghijklmnopqrstuvwxyz'), False)

    def test_no_capitals(self):
        self.assertEqual(is_password_valid('Abcdefaa!'), False)

    def test_no_numbers(self):
        self.assertEqual(is_password_valid('abcdefa4!'), False)

    def test_no_special_characters(self):
        self.assertEqual(is_password_valid('Abcdefa4a'), False)


if __name__ == '__main__':
    print(is_password_valid('Abcdefa4!'))
    print(is_password_valid('Abcdefa4'))
    print(is_password_valid('Abcdefa4abcdefghijklmnopqrstuvwxyz'))
    print(is_password_valid('Abcdefaa!'))
    print(is_password_valid('abcdefa4!'))
    print(is_password_valid('Abcdefa4a'))
    # unittest.main()


#
# The PM now is asking us to reuse the password validator function
# in other part of the solution, but without applying max length restriction
# additionally, we will need to include another rule that must apply only
# for this call, but that functionality will be provided later.
#
# HINT: There is a design pattern called "chain of responsibility" that could
# fit perfectly for this case. Try to apply it.
#
