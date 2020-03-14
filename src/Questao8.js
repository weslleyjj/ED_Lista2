import Lista from "./Lista";
import ListaDuplamenteLigada from "./ListaDuplamenteLigada";

export default function Questao8(lista){
    let result = new ListaDuplamenteLigada();
    while(lista.size() > 0) result.append(lista.removeBeginning())
    return result;
}

