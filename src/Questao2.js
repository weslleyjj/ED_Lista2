import Lista from "./Lista";

class Questao2 {
    constructor(){
        this.fila = new Lista();
    }

    enqueue(dado){
        this.fila.append(dado);        
    }
    dequeue(){
        let res = this.fila.head.proximo;
        this.fila.removeBeginning();
        return res.dado;
    }
    front(){
        let res = this.fila.head.proximo;
        return res.dado;
    }
    
}

export default Questao2;