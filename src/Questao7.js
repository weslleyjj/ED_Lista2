import Lista from "./Lista";

export default function Questao7(quantidade, intervalo){
    let lista = new Lista();
    let index=0;
    for(let i=1;i<=quantidade;i++){
        lista.append(i);
    }
    while(lista.size() != 1){
        for(let i=1;i<=intervalo;i++){
            
            if(i==intervalo){
                
                lista.removeIt(lista.getAt(index));
                index--;                
            }
            index++;            
            if(index > lista.size()-1) index = 0;
        }
        
    }
    return lista.toString();
}