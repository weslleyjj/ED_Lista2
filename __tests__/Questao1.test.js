import Questao1 from "../src/Questao1";

    let p;

    beforeEach(() => {
	    p = new Questao1();
    });

    test("Inserir", () => {
        
        p.push(1);
        p.push(2);
        expect(p.lista.size()).toBe(2);
        p.push(3);
        p.push(4);
        expect(p.lista.toString()).toBe("4->3->2->1");
    });

    test("remover", () => {
        p.push(1);
        p.push(2);
        p.push(3);
        p.push(4);
        p.push(5);
        p.push(6);
        p.pop();
        p.pop();
        expect(p.pop()).toBe(4);
        p.pop();
        expect(p.lista.toString()).toBe("2->1");
    });