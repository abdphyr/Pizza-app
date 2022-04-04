

import logo from '../../images/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

const CartNav = () => {
    return (
        <>
            <div id="header_section" 
                className="d-flex justify-content-between align-items-center">
                <Link to="/" className="logo d-flex align-items-center text-decoration-none">
                    <div className="image">
                        <img src={logo} alt="Rasm" />
                    </div>
                    <div className="brand">
                        <div className="brand_name">REACT PIZZA</div>
                        <div className="brand_description">
                            самая вкусная пицца во вселенной
                        </div>
                    </div>
                </Link>
            </div>
            <div className="uzun_chiziq"></div>
        </>
    );
};

export default CartNav;