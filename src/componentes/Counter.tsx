import { useState } from "react";

export const Counter = () => {
  //hook useState
  const [count, setCount] = useState(10);

  //funcion de incremento
  const increaseBy = (value: number) => {
    setCount(count + value);
  };

  return (
    <>
      <h3>
        Contador:<small>{count}</small>
      </h3>

      <div>
        <button onClick={() => increaseBy(+1)}>+1</button>
        &nbsp;
        <button onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </>
  );
};
