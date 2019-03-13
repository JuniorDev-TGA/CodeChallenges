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
import string
from functools import partial


def custom_is_password_valid(password, validator_list):
    """Takes a password and a list of functions to check the password is valid.
    Each function is expected to return a truple of (success, text) for output.
    Validator_list is expected to be a list of {'name': ,'func': ) values"""
    results = []
    failcount = 0
    # call the validation function, and record results
    for validator in validator_list:
        success, text = validator["func"](password)
        results.append(
            {"success": success, "text": text, "check_name": validator["name"]}
        )
        # update our overall success if the validation failed
        if not success:
            failcount += 1
    # Print out the results of testing
    if failcount > 0:
        print(
            "\nFAILURE: Password failed {} out of {} tests: {}".format(
                failcount, len(validator_list), password
            )
        )
    else:
        print("\nSUCCESS: Valid Password: {}".format(password))
    for line in results:
        line["success"] = "PASSED" if line["success"] else "FAILED"
        print("  {success}\t{check_name} - {text}".format(**line))
    # reurn a true or false value to say if the password is valid
    return failcount == 0


# Checking functions
#   Each is expected to take data as the value being checked, and can have addiional arguments
#   The function should return a truple with (success [Boolean], optional_text [String])


def check_length(data, min_length=8, max_length=20):
    """Lengh Check"""
    # Passing zero or a negative number for min_length or max_length will disable that check
    if min_length > 0 and len(data) < min_length:
        return (False, "Insufficent length. Min length is {}".format(min_length))
    if max_length > 0 and len(data) > max_length:
        return (False, "Length exceeded. Max length is {}".format(max_length))
    return (True, "Sufficent length")


def check_characters(
    data, character_list="!@#$%^&*", min_count=1, character_list_shortname=None
):
    """Characer Check"""
    character_name = (
        character_list_shortname
        if character_list_shortname is not None
        else "of the following characters: {}".format(character_list)
    )
    if max(data.count(char) for char in character_list) < min_count:
        return (
            False,
            "Password must contain at least {0} {1}".format(min_count, character_name),
        )
    else:
        return (
            True,
            "Password contains at least {0} {1}".format(min_count, character_name),
        )


# Testing

# In this case, we will provide some default values for the testing code
# The validator list can be eiher functions with their default args, or
# by using partial, functions with some arguments customised from their defaults.
# The list is made up of items with {"name": ,"func": } values
is_password_valid = partial(
    custom_is_password_valid,
    validator_list=(
        {"name": "Length Check", "func": check_length},
        {
            "name": "Special Character Check",
            "func": partial(
                check_characters,
                character_list="!#$%^&*",
                character_list_shortname="special character(s)",
            ),
        },
        {
            "name": "Captial letter check",
            "func": partial(
                check_characters,
                character_list=string.ascii_uppercase,
                character_list_shortname="captial letter(s)",
            ),
        },
        {
            "name": "Number check",
            "func": partial(
                check_characters,
                character_list=string.digits,
                character_list_shortname="digit(s)",
            ),
        },
    ),
)


class IsPasswordValidTest(unittest.TestCase):
    # To run tests issue `python -m unittest myNestedValidator.IsPasswordValidTest` in MyShinyChain folder.
    # Or uncomment the last line.
    def test_proper(self):
        self.assertEqual(is_password_valid("Abcdefa4!"), True)

    def test_too_short(self):
        self.assertEqual(is_password_valid("Abcdefa4"), False)

    def test_too_long(self):
        self.assertEqual(is_password_valid("Abcdefa4abcdefghijklmnopqrstuvwxyz"), False)

    def test_no_capitals(self):
        self.assertEqual(is_password_valid("Abcdefaa!"), False)

    def test_no_numbers(self):
        self.assertEqual(is_password_valid("abcdefa4!"), False)

    def test_no_special_characters(self):
        self.assertEqual(is_password_valid("Abcdefa4a"), False)


if __name__ == "__main__":
    print(is_password_valid("Abcdefa4!"))
    print(is_password_valid("Abcdefa4"))
    print(is_password_valid("Abcdefa4abcdefghijklmnopqrstuvwxyz"))
    print(is_password_valid("Abcdefaa!"))
    print(is_password_valid("abcdefa4!"))
    print(is_password_valid("Abcdefa4a"))
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
