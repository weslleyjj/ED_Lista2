import Questao5 from "../src/Questao5";
import Lista from "../src/Lista";

let lis;

beforeEach(()=>{
    lis = new Lista();
});

    test("Função rodando?", () => {
        let aux = new Lista();
        lis.add(9);
        lis.add(8);
        lis.add(7);
        lis.add(6);
        lis.add(5);
        lis.add(4);
        lis.add(3);
        lis.add(2);
        lis.add(1);
        console.log(lis.toString());
        aux = Questao5(lis);
        console.log(aux.toString());
    });

    