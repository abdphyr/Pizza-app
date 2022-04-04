

import React from 'react';
import FilterProducts from './FilterProducts';
import SortProducts from './SortProducts';



const SortFilterProducts = () => {
    return (
        <div id="navbar_section " 
            className="d-flex justify-content-between align-items-center">
            <FilterProducts />
            <SortProducts />
        </div>
    );
};

export default SortFilterProducts;