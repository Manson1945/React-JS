import {useContext} from 'react';
import {CartContext} from '../../Context/cartContext';
import {CartItem} from '../CartItem/CartItem';
import {Link} from 'react-router-dom'; 


const Cart = () => {

    const { cart, clearCart, totalQuantity, precioTotal} = useContext(CartContext)

    if (totalQuantity === 0 ) {

        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/> ) }

            <h3>Total: ${precioTotal}</h3>

            <button onClick={() => clearCart()} className='button'>Limpiar carrito</button>

            <Link to='/checkout' className='option'>Checkout</Link> 
        </div>
    )
}

export default Cart