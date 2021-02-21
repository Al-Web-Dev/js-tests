describe("FizzBuzz: ", function () {
    it("should produce the expected results for FizzBuzz", function () {
        // Write a program that stores the numbers from 0 to 100  in an array.  For multiples of ‘3’ store “Fizz” instead of the number and for the multiples of ‘5’ store “Buzz”.
        // For numbers which are multiples of both three and five store “FizzBuzz”.

        // e.g. [0, 1, 2, "Fizz", 4, "Buzz", ...]

        function fizzBuzz(n) {
            let results = [];
          if (n === 0) {
            return ['0']; // !
          } else {
            if (n % 3 === 0 && n % 5 === 0) {
              results.push('FizzBuzz');
            } else if (n % 5 === 0) {
              results.push('Buzz');
            } else if (n % 3 === 0) {
              results.push('Fizz');
            } else {
              results.push(''+ n);
            }
            return fizzBuzz(n - 1).concat(results);
          }
        };
        
        let results = fizzBuzz(100);

        return results[1],(results[3]),(results[10]),(results[30]),(results[52]);
        

        expect(results[1]).toBe(1);
        expect(results[3]).toBe("Fizz");
        expect(results[10]).toBe("Buzz");
        expect(results[30]).toBe("FizzBuzz");
        expect(results[52]).toBe(52);
    });
});