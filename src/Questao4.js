import Lista from "./Lista";

export default function Questao4(lista){
    let result = new Lista();
    //console.log(lista.toString());
    while(lista.size() > 0) result.append(lista.removeEnd());
    //console.log(result.toString());
    return result;
}