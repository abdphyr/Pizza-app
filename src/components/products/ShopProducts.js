


import React from 'react';
import Product from './Product';
import { useSelector } from 'react-redux';

const ShopProducts = () => {
    const products = useSelector(state => state.products.fd_sd_prs);
    return (
        <div id="product_section" className="row">
            <h2 className="products">Все пиццы</h2>
            {products.map(product => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    );
};

export default ShopProducts;