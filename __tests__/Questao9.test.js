import Questao9 from "../src/Questao9";
import Lista from "../src/Lista";
import Questao9Pessoa from "../src/Questao9Pessoa";

    let teste;

    beforeEach(()=>{
        teste = new Lista();
    });

    test("Ordem alfabética", () => {
        let result;        
        teste.add(new Questao9Pessoa("taniro", 45));
        teste.add(new Questao9Pessoa("maria", 16));
        teste.add(new Questao9Pessoa("joao", 18));
        teste.add(new Questao9Pessoa("davi", 17));
        teste.add(new Questao9Pessoa("ana", 22));      
        result = new Questao9(teste);
        let t = result.ordemAlfabetica();
        expect(t.toString()).toBe("ana 22->davi 17->joao 18->maria 16->taniro 45");
    });

    test("Ordem numérica", () => {
        let result;        
        teste.add(new Questao9Pessoa("taniro", 45));
        teste.add(new Questao9Pessoa("maria", 16));
        teste.add(new Questao9Pessoa("joao", 18));
        teste.add(new Questao9Pessoa("davi", 17));
        teste.add(new Questao9Pessoa("ana", 22));      
        result = new Questao9(teste);
        let t = result.ordemNumerica();
        expect(t.toString()).toBe("maria 16->davi 17->joao 18->ana 22->taniro 45");
    });