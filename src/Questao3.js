//métodos usados = pop = remove do fim, push = adiciona no fim, find = encontra dado, shift = remove do começo, unshift = adiciona no começo
class Questao3 {
    constructor(){
        this.lista = [];
    }
    add(dado){
        let novaLista = [dado];
        for(let i=0;i<this.lista.length;i++){
            novaLista[i+1] = this.lista[i];
        }
        this.lista = novaLista;
    }
    append(dado){
        this.lista[this.lista.length] = dado;
    }
    removeBeggining(){
        let result = this.lista[0];
        for(let i=0;i<this.lista.length;i++){
            this.lista[i] = this.lista[i+1];
        }
        return result;

    }
    removeLast(){
        let arr = [];
        let result;
        for(let i=0;i<this.lista.length-1;i++){
            arr[i] = this.lista[i];
            result = arr[i];
        }
        this.lista = arr;
        return result;
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