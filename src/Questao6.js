import Lista from "./Lista";

export default class Questao6{
    constructor(texto){
        this.lista = new Lista();
        for(let i=0;i<texto.length;i++) this.lista.append(texto.charAt(i));
    }
    subString(a, b){
        let result = "";
        for(let i=0;i<this.lista.size();i++){
            if(i >= a && i <=b){
                result += this.lista.getAt(i);
            }
        }
        return result;
    }
}