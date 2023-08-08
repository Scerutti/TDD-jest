const saludo = (invitado: string) => `Hola ${invitado}`;

describe('saludo()', () => {
    it("Dice HOLA", () => {
        expect(saludo("Jest")).toBe("Hola Jest")
    })
})