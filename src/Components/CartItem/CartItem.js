import { useContext } from 'react'
import './CartItem.css'
import { CartContext } from '../../Context/cartContext'




export const CartItem = ({name, price, quantity, img, id}) => {

    const {removeItem} = useContext (CartContext)

    

    return (
        <div className='productsContainer'>
            
            <picture> <img src={img} className='imagen' /> </picture>
            <p className='name'>{name}</p>
            <p className='text'>Precio x unidad: {price}</p>
            <p className='text'>Cantidad: {quantity}</p>
            <button onClick={() => removeItem(id)}> X </button>
        </div>
    )
}

