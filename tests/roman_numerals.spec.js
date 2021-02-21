describe("Roman numerals: ", function () {
    it("should output the correct Roman numeral for the number", function () {
        // The function below should work for any integer between 1 and 3000

        function getRomanNumeral(num) {
            var romanToNum = {
                M: 1000,
                CM: 900,
                D:500,
                CD:400,
                C:100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                I: 1
            };
        
            var roman ='';
        
            for(var key in romanToNum) {
                while (num >= romanToNum[key]) {
                    roman += key;
                    num -= romanToNum[key];
                    
                }
            }
            return roman;
        
            }

            return getRomanNumeral(1),getRomanNumeral(25),getRomanNumeral(325),getRomanNumeral(1234);
            
        expect(getRomanNumeral(1)).toBe('I');
        expect(getRomanNumeral(25)).toBe('XXV');
        expect(getRomanNumeral(325)).toBe('CCCXXV');
        expect(getRomanNumeral(1234)).toBe('MCCXXXIV');
    });
});