import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import {productos} from '../../productos/productos';
import { useEffect } from 'react';

const ItemListContainer = () => {
  useEffect(() => {
    const listar = () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000)
        });
    };
    listar()
    .then((resp) => {
         console.log('error');
    })
}, [])
  return (
          <ItemCount stock={5} initial={1}/> 
  );
}

export default ItemListContainer