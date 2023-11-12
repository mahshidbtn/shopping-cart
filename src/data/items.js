const productList=[
    {
        id :'1',
        title :'product',
        price :99,
        image:'/images/mac.png'
    },
    {
        id :'2',
        title :'product',
        price :99,
        image:'/images/airpods.png'
    },
    {
        id :'3',
        title :'product',
        price :99,
        image:'/images/ipad.png'
    },
    {
        id :'4',
        title :'product',
        price :99,
        image:'/images/watch.png'
    },
    {
        id :'5',
        title :'product',
        price :99,
        image:'/images/iphone.png'
    },
    {
        id :'6',
        title :'product',
        price :99,
        image:'/images/headphone.png'
    },
    {
        id :'7',
        title :'product',
        price :99,
        image:'/images/watch.png'
    },
    {
        id :'48',
        title :'product',
        price :99,
        image:'/images/watch.png'
    }
]

function getProductdata (id){
   let productData = productList.find((item) => item.id === id)
   return productData
}

export {productList , getProductdata}