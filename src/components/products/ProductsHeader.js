import React from 'react';
import logo from '../../images/logo.png';
import cart_logo from '../../images/shopping_cart.svg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';


const ProductsHeader = () => {
    const cart = useSelector(state => state.cart.cart)
    const [sum, setSum] = useState(0)
    const [num, setNum] = useState(0)
    useEffect(() => {
        let total_price = 0
        let total = 0
        for (let i = 0; i < cart.length; i++){
            const [product, type, size] = cart[i]
            const number = product.type[type][size].number
            const price = product.type[type][size].price*number
            total_price += price
            total += number
        }
        setSum(total_price)
        setNum(total)
    },[cart])
    return (
        <>
            <div id="header_section" className="d-flex 
                justify-content-between align-items-center">
                <Link to="/" className="logo d-flex 
                    align-items-center text-decoration-none">
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
                <Link to="/cart" className="open_cart d-flex 
                    justify-content-evenly align-items-center text-decoration-none">
                    <div className="total_price">{sum} ₽</div>
                    <div className="tik_chiziq"></div>
                    <div className="cart d-flex align-items-center">
                        <img src={cart_logo} alt="shopping_cart_icon" />
                        <span className="products_item_add_cart">{num}</span>
                    </div>
                </Link> 
            </div>
            <div className="uzun_chiziq"></div>
        </>
        
    );
};

export default ProductsHeader;