import ItemCount from '../ItemCount/ItemCount';
import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../../Context/cartContext';


const ItemDetail = ({ id, name, img, category, description, price, stock}) => {

const [quantityadded, setQuantityAdded] = useState (0)

const {addItem} = useContext(CartContext)

const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)
    

const item = {
    id, name, price, img
}

addItem (item, quantity)
}

    return (

        <article className="cardItem">

            <header className="header">

                <h2 className="itemHeader">
                    {name}
                </h2>

            </header>

            <picture>
                <img src={img} alt={name} className="itemImg" />
            </picture>

            <section>

                <p className="info">
                    Categoría: {category}
                </p>

                <p className="info">
                    Descripción: {description} 
                </p>

                <p className="info">
                    Precio: ${price}
                </p>

                {
            quantityadded > 0 ? (
                <Link to= '/cart' className= 'option'>Terminar Compra</Link>
                ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />

            )}

            </section>

            

        </article>
    )
}

export default ItemDetail

