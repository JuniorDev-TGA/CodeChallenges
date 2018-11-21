=begin
* Our PM ask us to create a function for password validation
* Some of the validation rules are the following:
* - Password cannot be less than 8 characters
* - Password cannot be greater than 20 characters
* - Password must have, at least, one capital letter
* - Password must have, at least, one number
* - Password must have, at least, one special character from this list !@#$%^&*
*
* The following is our first solution
=end

class Validator

    def numeric?(lookAhead)
        lookAhead =~ /[[:digit:]]/
    end

    def isPasswordValid(password)
        if password.length >= 8 and password.length <= 20
        
            oneCapital = false
            password.split("").each do |letter|
                if (letter.upcase == letter)
                    oneCapital = true
                end
            end            
    
            if oneCapital == false
                return false
            end
        
            oneNumber = false;
            password.split("").each do |letter|
                if numeric? letter
                    oneNumber = true
                end
            end

            if oneNumber == false
                return false
            end

            oneSpecialCharacter = false;
            specialCharacters = "!@#$%^&*";
            
            password.split("").each do |letter|
                
                specialCharacters.split("").each do |specialCharacter|
                    if letter == specialCharacter
                        oneSpecialCharacter = true
                    end
                end
            end

            if oneSpecialCharacter == false
                return false
            end


            return true
        end

        return false
    end

end

#validator = Validator.new
#print validator.isPasswordValid('Abcdef5!')

=begin
* The PM now is asking us to reuse the password validator function
* in other part of the solution, but without applying max length restriction
* additionally, we will need to include another rule that must apply only 
* for this call, but that functionality will be provided later.
* 
* HINT: There is a design pattern called "chain of responsability" that could
* fit perfectly for this case. Try to apply it.
=end