import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer({productos}) {

  const [listaProductos,setListaProductos] = useState([])


  useEffect(() => {

    const getItem = new Promise((resolve) => {

      setTimeout(() => {
        res(productos);
      }, 2000);
    });

    getItem
      .then((resp) => {
        setListaProductos(resp);
      })
    
  }, []);
  


    return (
      <div>
        
          <ItemDetail item={producto} />
        
      </div>
    );
  }


export default ItemDetailContainer;
