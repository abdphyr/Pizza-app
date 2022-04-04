

import React from 'react';
import ShopProducts from './ShopProducts';
import SortFilterProducts from './SortFilterProducts';
import ProductsHeader from './ProductsHeader';

const MainPage = () => {
    return (
        <>
            <ProductsHeader />
            <SortFilterProducts />
            <ShopProducts />
        </>
    );
};

export default MainPage;