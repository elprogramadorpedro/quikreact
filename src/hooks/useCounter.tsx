import { useState } from "react";

//opciones del custon hhok 
interface Options{

    initialValue?:number;
}




//desestructuramos el initialValue aqui
export const useCounter = ({initialValue}: Options) => {

    //la ventaja de custon hook es que podemos tener piezas de react aqui
    //custonhook que retona un objeto
  //hook useState
  const [count, setCount] = useState<number>(initialValue=0);

  //funcion de incremento
  const increaseBy = (value: number) => {
    //como es un hook reutilizable podemos crear una validacion para que new value sea simpre mayor o igual a cero como cuando compras un par de zapatyos es claro que luego esas validaciones se hacen en backend.
    const newValue = count + value;
    if(newValue<0)return;
        setCount(count + value);
    
  };

  return {
    //{/*aqui va lo que regresamos*/}

    //propiedades que regresamos
    count,

    //modos que regresamos 
    increaseBy,
   

    }

  
}
