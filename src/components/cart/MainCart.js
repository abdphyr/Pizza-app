

import React from 'react';
import ShopCart from './ShopCart';
import EmptyCart from './EmptyCart';
import CartNav from './CartNav';
import { useSelector } from 'react-redux';

const MainCart = () => {
    const cart = useSelector(state => state.cart.cart)

    return (
        <>
            <CartNav />
            {cart.length>0
            ?
            <ShopCart />
            :
            <EmptyCart />}
        </>
    );
};

export default MainCart;