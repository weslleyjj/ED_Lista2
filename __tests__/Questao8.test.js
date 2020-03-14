import Questao8 from "../src/Questao8";
import Lista from "../src/Lista";
    let q;

    beforeEach(()=>{
        q = new Lista();
    });

    test("é duplamente ligada?", () => {
        let lista2Ligada;
        let anterior;
        q.append(1);
        q.append(2);
        q.append(3);
        q.append(4);
        q.append(5);
        lista2Ligada = Questao8(q);
        expect(lista2Ligada.tail.dado).toBe(5);
        expect(lista2Ligada.head.dado).toBe(1);
        anterior = lista2Ligada.tail.anterior;
        expect(anterior.dado).toBe(4);
    });