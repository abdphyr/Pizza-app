
import { PRODUCT_ACTION, CART_ACTION } from "./constants";

export const set_products = (products) =>{
    return {
        type:PRODUCT_ACTION.SET_PRODUCTS,
        payload:products
    }
}

// ======== Filter qilish 
export const filter_by = (filter_type) => { 
    return{
        type:PRODUCT_ACTION.FILTER_BY,
        payload:filter_type
    }
}


// Sort qilish
export const sort_by = (sort_type) => {
    return{
        type:PRODUCT_ACTION.SORT_BY,
        payload:sort_type
    }
}

// LOCAL STORAGE dan qiymat olish
export const get_from_localStorage = (cart_items) => {
    return{
        type:CART_ACTION.GET_CART_ITEMS,
        payload:cart_items
    } 
}



// Cartga element qo'shish

export const add_to_cart = (product,type_pro,size_pro) => {
    return{
        type:CART_ACTION.ADD_TO_CART,
        payload:[product,type_pro,size_pro]
    } 
}

//  Butun cartni tozalash

export const clear_cart_items = () => {
    return{
        type:CART_ACTION.CLEAR_CART_ITEMS,
    }
}

// Cart elementini o'zgartirish ,ko'paytirish,kamaytirish,cartdan olib tashlash va butun cartni tozalash
export const check_cart_item = (item,act) => {
    return{
        type:CART_ACTION.CHECK_CART_ITEM,
        payload:[item,act]
    }
}