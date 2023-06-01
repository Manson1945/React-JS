import './CartItem.css'

export const CartItem = ({name, price, quantity, img}) => {

    return (
        <div className='productsContainer'>
            
            <picture> <img src={img} /> </picture>
            <p className='name'>{name}</p>
            <p className='text'>Precio x unidad: {price}</p>
            <p className='text'>Cantidad: {quantity}</p>
            <button>X</button>
        </div>
    )
}

