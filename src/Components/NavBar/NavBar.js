
import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {

    return (
        <nav> 
            
           <Link to= '/'>
           <h1 className="tituloPpal">TRILO<span>BITES</span></h1>  
           </Link>

           <div className="categories" >

            <NavLink to= {`../../Service/Firebase/firebaseConfig.js`} className="botones">GUITARRAS</NavLink>
            <NavLink to= {`/category/bajos`} className="botones">BAJOS</NavLink>
            <NavLink to= {`/category/baterias`} className="botones">BATERIAS</NavLink>

           </div>
            
            <CartWidget />

        </nav>
    )
}

export default NavBar