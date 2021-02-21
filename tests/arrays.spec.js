describe("Array tests:", function () {
    it("should reorder the array", function () {
        let input = [1, 2, 3, 4, 5];
        input.shift(1);
        input.pop();
        input.push(1,5,6);

        let result = input;

        expect(result).toEqual([2, 3, 4, 1, 5, 6]);
    });

    it("should add an element to the start of the array", function() {
       let input = [5, 6, 7];
       input.unshift(1);
       let result = input;

       expect(result).toEqual([1, 5, 6, 7]);
    });

    it("should find the largest value in the array", function() {
       let input = [-10, 5, 30, 12, 100, 56];
       let result = Math.max(...input);

       expect(result).toBe(100);
    });

    
    it("should remove the duplicates in the array", function() {
        let input = [1, 2, 3, 4, 5, 1, 3, 6, 7, 2, 4, 1];
        

        result = new Set(input);
        input = Array.from(result);
        result = input;

        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});

   // done -----