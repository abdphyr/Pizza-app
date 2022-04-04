
import pizza from '../../pizza.json';
import {filter_products,sort_products } from './functions';
import {create_cart_item,change_cart_item,clear_cart_items} from './functions';


const products_initial_state = {
    prs:[],
    fd_sd_prs:[],
}

export const product_reducer = (state = products_initial_state,action) => {
    switch (action.type){
        case "SET_PRODUCTS":
            return {
                ...state,
                prs:action.payload,
                fd_sd_prs:action.payload
            }
        case "FILTER_BY":
            return {
                ...state,
                fd_sd_prs:
                filter_products(state.prs, 
                state.fd_sd_prs, action.payload)
            }
        case "SORT_BY":
            return {
                ...state,
                fd_sd_prs:
                sort_products(state.prs, 
                state.fd_sd_prs, action.payload),
            }
        default:
            return state
    }
}



const cart_initial_state = {
    cart:[]
}
export const cart_reducer = (state = cart_initial_state,action) => {
    switch(action.type){
        case "GET_CART_ITEMS":
            return {...state, cart:action.payload}
        case "ADD_TO_CART":
            return {...state,cart:
                create_cart_item(state.cart, action.payload)}
        case "CLEAR_CART_ITEMS":
            return {...state,cart:
                clear_cart_items(state.cart)}
        case "CHECK_CART_ITEM":
            return {...state,cart:
                change_cart_item(state.cart, action.payload)}   
        default:
            return {...state}
    }
}
