import Lista from "./Lista";

export default class Questao9{
    constructor(lista){
        this.lista = new Lista();
        while(lista.size() > 0) this.lista.add(lista.removeBeginning());
    }

    ordemAlfabetica(){
        let result = new Lista();
        result.add(this.lista.getAt(0));
        for(let i=1;i<this.lista.size();i++){            
            let tam = result.size();
            for(let j = 0;j<tam;j++){
                if(this.lista.getAt(i).nome <= result.getAt(j).nome){
                    result.addAt(j, this.lista.getAt(i));
                    break;
                }else if(j == tam-1){
                    result.append(this.lista.getAt(i));
                }
            }            
        }
        return result;
    }
    ordemNumerica(){
        let result = new Lista();
        result.add(this.lista.getAt(0));
        for(let i=1;i<this.lista.size();i++){            
            let tam = result.size();
            for(let j = 0;j<tam;j++){
                if(this.lista.getAt(i).idade <= result.getAt(j).idade){
                    result.addAt(j, this.lista.getAt(i));
                    break;
                }else if(j == tam-1){
                    result.append(this.lista.getAt(i));
                }
            }            
        }
        return result;
    }

}