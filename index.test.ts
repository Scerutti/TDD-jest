import index from "./index";

const fizzBuzz = index;

describe("FizzBuzz", () => {
    it("return FizzBuzz por multiplos de 3 y 5", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz")
        expect(fizzBuzz(30)).toBe("FizzBuzz")
    })
    
    it('returns the given number for multiples of neither 3 nor 5', () => {
        expect(fizzBuzz(1)).toBe('1');
        expect(fizzBuzz(22)).toBe('22');
    });
})