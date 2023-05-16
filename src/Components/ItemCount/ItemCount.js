import './ItemCount.css'
import {useState} from 'react'

const ItemCount = ({stock,initial, onAdd}) => {

    const [quantity, setQuantity] = useState (initial)


    const increment = () => {

        if (quantity < stock) {

            setQuantity (quantity+1)
        }
    }

    const decrement = () => {

        if (quantity > 1) {

            setQuantity(quantity -1)

        }   
     }

    return (

        <div className= 'Counter'>
            <div className= 'controlContainer'>

                <button className='btn' onClick={decrement}>-</button>

                <h3 className= 'numero'> {quantity} </h3>

                <button className='btn' onClick={increment}>+</button>

            </div>

            <div>

                 <button className='btnAgregar' onClick={() => onAdd(quantity)} disabled={!stock}>
                     Agregar al carrito
                 </button>

            </div>
        </div>
    )
}

export default ItemCount