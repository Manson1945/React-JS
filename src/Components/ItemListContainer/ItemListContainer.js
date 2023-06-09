
import {useState, useEffect} from 'react'
/* import {getProducts, getProductByCategory} from '../../asyncMock' */
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

import {getDocs, collection, query, where} from "firebase/firestore"

import {db} from "../../Service/Firebase/firebaseConfig" 

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (true)

   /*  console.log(products) */

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

   

    return (

        <div>

            <h2>{greeting} Bienvenido a nuestra Casa de Instrumentos...</h2>

            <div className='container'>

            <ItemList products={products}/>

            </div>

        </div>
   
    )
}


export default ItemListContainer;




