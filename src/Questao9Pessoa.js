export default class Questao9Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    toString(){
        return this.nome + " " + this.idade;
    }
}