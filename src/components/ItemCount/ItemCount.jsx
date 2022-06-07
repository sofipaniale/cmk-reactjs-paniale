import React from 'react';
import { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(1);
  let itemStock = 5;

  const addItem = () => {
    count == itemStock ? alert("Sin Stock") : setCount(count + 1);
  }

  const restItem = () => {
    count == 0 ? alert("Cantidad Inválida") : setCount(count - 1);
  }

  return (
      <>

      <div>
          <p>producto</p>
      </div> 

      <div>
        <button onClick={restItem}>-</button>
          <p>{count}</p>
        <button onClick={addItem}>+</button>
      </div>

      </>

  );
  };

  export default ItemCount