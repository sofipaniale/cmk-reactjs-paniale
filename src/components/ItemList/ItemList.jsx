import Item from "./Item";
import { productos } from "../../productos/productos";

const ItemList = ({productos}) => {
    return (
        <>
            <div className="row">
                {
                    productos.map((producto) => {
                        return (
                            <Item 
                                title={producto.title} 
                                image={producto.image}
                                price={producto.price}
                            />
                        )
                    })
                }
            </div>
        </>
    );
};

export default ItemList;