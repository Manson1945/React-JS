import cart from "./ASSETS/cart.jpg" 
import {useContext} from 'react'
import {CartContext} from '../../Context/cartContext'
import {Link} from 'react-router-dom'

const CartWidget = () => {

    const {totalQuantity} = useContext (CartContext)

    return (
        <Link to='/Cart' className="CartWidget" >
            

            <img className="CartImg" src={cart} alt='cart-widget' />
            {totalQuantity}
            
        </Link>
    )
}

export default CartWidget