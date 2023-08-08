import { Palindromo } from "../palindromo"

describe("Palindromos",() => {
    it("Es palindromo", () => {
        expect(Palindromo("madam")).toEqual(["madam"])
    })

    it("No es palindromo", () => {
        expect(Palindromo("Hola")).toEqual([])
    })
})