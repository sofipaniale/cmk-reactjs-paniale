import {React,} from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({item}) {
const {title, price, image, stock, initial} = item


    return (
        <div>
            <h4>{title}</h4>
            <img src={image} alt={title}/>
            <p>Precio ${price}</p>
            <ItemCount producto={producto}/>
            
        </div>
    )
}

export default ItemDetail