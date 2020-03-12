import Questao4 from "../src/Questao4";
import Lista from "../src/Lista";

let lis;

beforeEach(()=>{
    lis = new Lista();
});

    test("Função rodando?", () => {
        let aux = new Lista();
        lis.add(5);
        lis.add(4);
        lis.add(3);
        lis.add(2);
        lis.add(1);
        aux = Questao4(lis);
        //console.log(aux.toString());
        expect(aux.toString()).toBe("5->4->3->2->1");
    });