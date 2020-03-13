import Questao6 from "../src/Questao6";

let lis;

beforeEach(()=>{
    lis = new Questao6("Weslley");
});

    test("Receber intervalo", () => {
        let aux = lis.subString(2, 5);
        expect(aux.toString()).toBe("slle");
        let aux2 = lis.subString(0, 6);
        expect(aux2.toString()).toBe("Weslley");
    });