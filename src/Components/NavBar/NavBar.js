
import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {

    return (
        <nav> 
            
           <Link to= '/'>
           <h1 className="tituloPpal">TRILO<span>BITES</span></h1>  
           </Link>

           <div className="categories" >

            <NavLink to= {`/category/Guitarras`} className="botones">GUITARRAS</NavLink>
            <NavLink to= {`/category/Bajos`} className="botones">BAJOS</NavLink>
            <NavLink to= {`/category/Baterias`} className="botones">BATERIAS</NavLink>

           </div>
            
            <CartWidget />

        </nav>
    )
}

export default NavBar