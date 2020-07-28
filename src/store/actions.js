export const ADD_TO_CART ='ADDTOCART'
export const REMOVE_FROM_CART='REMOVE_FROM_CART'
export const INCREASE_PRODUCT_COUNT='INCREASE_PRODUCT_COUNT'
export const DECREASE_PRODUCT_COUNT='DECREASE_PRODUCT_COUNT'
export const addProducttoCart = product =>
{
    return{
       
                type:ADD_TO_CART,
                product:product
            };
       

    
}
export const removeProductFromCart = product =>
{
    
    return{
       
        type:REMOVE_FROM_CART,
        product:product
    };
}
export const increaseproductcount = product =>
{
    return{
        type:INCREASE_PRODUCT_COUNT,
        product:product
    };
}
export const decreaseproductcount = product =>
{
    return{
        type:DECREASE_PRODUCT_COUNT,
        product:product
    };
}