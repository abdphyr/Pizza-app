import React from 'react';
import Cart from './Cart';
import CartHeader from './CartHeader';
import TotalProductPrice from './TotalProductPrice';
import ControlButtons from './ControlButtons';
import { useSelector } from 'react-redux';
import {v4} from 'uuid';
import { useEffect } from 'react';

const ShopCart = () => {
    const cart = useSelector(state => state.cart.cart)
    
    return (
        <div className="cart row">
            <div className="cart_items offset-md-2 col-md-8">
                <CartHeader />
                <div className="cart_items_list">
                    {cart.map(cart_item=>(
                        <Cart cart_item={cart_item} key={v4()} />
                    ))}  
                </div>
                <TotalProductPrice />
                <ControlButtons />
            </div>
        </div>
    );
};

export default ShopCart;