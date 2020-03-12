import Lista from "./Lista";

export default function Questao5(lista){
    let result = new Lista();
    let tam = lista.size();
    while(lista.size() > 0){
        result.addAt(Math.floor((Math.random() * tam)), lista.removeEnd());
    }     
    return result;
}