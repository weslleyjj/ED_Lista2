//métodos usados = pop = remove do fim, push = adiciona no fim, find = encontra dado, shift = remove do começo, unshift = adiciona no começo
class Questao3 {
    constructor(){
        this.lista = [];
    }
    add(dado){
        this.lista.unshift(dado);
    }
    append(dado){
        this.lista.push(dado);
    }
    removeBeggining(){
        return this.lista.shift();
    }
    removeLast(){
        return this.lista.pop();
    }
    size(){
        return this.lista.length;
    }
    addAt(posicao, dado){
        if(posicao >= this.lista.length){
            this.lista.append(dado);
        }else if(posicao == 0){
            this.lista.add(dado);
        }else{
            let aux = [];
            for(let i=0; i<=posicao;i++){
                if(i==posicao){
                    aux.unshift(dado);
                    break;
                }
                aux.unshift(this.lista.pop());
            }
            //console.log(aux)
            this.lista = this.lista.concat(aux);           
        }
        
    }

}

export default Questao3;