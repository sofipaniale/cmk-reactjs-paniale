import React from 'react';
import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({stock, initial}) => {
  const [count, setCount] = useState(1);

  const addItem = () => {
    if(count<stock)setCount(count + 1);
  }

  const restItem = () => {
    if(count>initial)setCount(count - 1);
  }

  return (
      <>
      <div className='product-container'>

      <div className='product-img' height={200} width={200}>
          <p>producto</p>
      </div> 

      <div className='counter'>
        <button onClick={restItem}>-</button>
          <p>{count}</p>
        <button onClick={addItem}>+</button>
      </div>

      </div>



      </>

  );
  };

  export default ItemCount