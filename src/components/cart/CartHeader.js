

import cart_header_icon from '../../images/cart_header_icon.png';
import clear_cart_icon from "../../images/clear_cart.svg";
import { clear_cart_items } from '../../REDUX/extra/actions';
import { useDispatch } from 'react-redux';

const CartHeader = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="cart_header d-flex justify-content-between align-items-end">
                <div className="cart_header_title d-flex align-items-center">
                    <img className="cart_header_icon" 
                    src={cart_header_icon} alt="cart_header_icon" />
                    <div className="cart_header_text">
                        Корзина
                    </div>
                </div>
                <div onClick={()=>dispatch(clear_cart_items())} 
                    className="clear_cart d-flex align-items-center pe-auto">
                    <img className="clear_cart_icon" 
                    src={clear_cart_icon} alt="clear_cart_icon"/>
                    <a className="clear_cart_text text-decoration-none">
                        Очистить корзину
                    </a>
                </div>
            </div>
        </>
    );
};

export default CartHeader;