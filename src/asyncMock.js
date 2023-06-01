
const products = [

    {
        id: '1',
        name: 'Guitarra Les Paul',  
        price: ' 200000',
        category: 'guitarras',
        img:  'https://th.bing.com/th/id/R.72c29970678282de6533f0e26ecbbb72?rik=aNHaLgBIQ1qDWg&riu=http%3a%2f%2fgitaarshop-heemstede.weebly.com%2fuploads%2f8%2f1%2f7%2f3%2f8173019%2fs832566843779515194_p1102_i1_w900.png&ehk=6I0MLNfH7W8aYI4jn4voqqO6sYUwec29qD4%2bqzg8LTQ%3d&risl=&pid=ImgRaw&r=0',
        stock: 25,
        description: 'Texas P253 Les Paul'

    },

    {
        id: '2',
        name: 'Bajo Fender ',  
        price: ' 400000',
        category: 'bajos',
        img:  'https://th.bing.com/th/id/OIP.Fz2TLrZCFBdZDn5bYXZoQgHaHa?pid=ImgDet&rs=1',
        stock: 10,
        description: 'Fender Precission Bass'
    },

    {
        id: '3',
        name: 'Batería Yamaha',  
        price: ' 500000',
        category: 'baterias',
        img:  'https://th.bing.com/th/id/R.718f0b8a8991fc4a60a889c46963bede?rik=RksqC4iic9vc%2bw&pid=ImgRaw&r=0',
        stock: 15,
        description: 'Yamaha Custom Birch Natural Wood'
    }
]

export const getProducts = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products)
        }, 500)
    }) 
}



export const getProductById = (productId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.find (prod => prod.id === productId))
        }, 500)
    }) 
}

export const getProductByCategory = (productCategory) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.filter (prod => prod.category === productCategory))
        }, 500)
    }) 
}