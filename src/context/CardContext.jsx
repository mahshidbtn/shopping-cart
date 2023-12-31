import { createContext,useState } from "react";

export const CartContext = createContext({
    items:[],
    getProductQuantity: () => {},
    addItemToCart : () => {},
    removeItemFromCart :() => {},
    deletFromCart : () => {},
    getTotalAmount : () => {}
})

export function CartProvider({children}){
    const [cartProducts, setCartProducts] = useState([])

    function getProductQuantity(id){
        const quantity = cartProducts.find((item)=>item.id===id)?.quantity

        if (quantity === undefined){
            return 0
        }

        return quantity
    }

    function addItemToCart(id){
        const quantity = getProductQuantity(id)
        if (quantity === 0){
            setCartProducts([...cartProducts], {id : id , quantity:1})
        } else {
            setCartProducts(
                cartProducts.map((item) => item.id === id ? {...item,
                quantity: item.quantity + 1 } : item
                )
            )
        }
    }

    const ContextValue = {
        items: cartProducts,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deletFromCart,
        getTotalAmount,
    }
    return(
        <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
    )
}