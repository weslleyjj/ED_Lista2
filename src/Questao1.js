import Lista from "./Lista";

class Questao1{
    constructor(){
        this.lista = new Lista();
    }

    push(dado){
        this.lista.add(dado);
    }
    pop(){
        let res = this.lista.head.proximo;         
        this.lista.removeBeginning();
        return res.dado;
    }
    

}

export default Questao1;