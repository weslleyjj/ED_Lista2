import Questao7 from "../src/Questao7";

    test("Função da 7", () => {
        expect(Questao7(10, 3)).toBe("4");
        expect(Questao7(41, 3)).toBe("31");
        expect(Questao7(10, 1)).toBe("10");
        expect(Questao7(15, 2)).toBe("15");
    });