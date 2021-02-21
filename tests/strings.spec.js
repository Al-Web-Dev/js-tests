describe("String tests:", function () {
    it("should reverse the string", function () {
        let string = "This is the Room58 JS test";

        let reverseString = string.split('');

        let result = (reverseString.reverse().join(''));

        expect(result).toBe("tset SJ 85mooR eht si sihT");
    });

    it("should determine if two strings are anagrams of each other", function () {
        function isAnagram(first, second) { 
  
            first = first.split('').sort().join('');
            second = second.split('').sort().join('');
            return second === first;
 
          };

        return  isAnagram("Listen", "Silent"),isAnagram("Room58", "Test");

        expect(isAnagram("Listen", "Silent")).toBe(true);
        expect(isAnagram("Room58", "Test")).toBe(false);
    });

    it("should determine if the string is a palindrome", function () {
        function isPalindrome(word)
        {
            var reversedString = word.split('').reverse().join('');
          return reversedString === word;
        }

        return isPalindrome('racecar'),isPalindrome('developer');

        expect(isPalindrome("racecar")).toBe(true);
        exepect(isPalindrome("developer")).toBe(false);
    });
});