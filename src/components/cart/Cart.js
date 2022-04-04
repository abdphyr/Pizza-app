

import cart_item_delete from '../../images/cart_item_delete.png';
import { check_cart_item } from '../../REDUX/extra/actions'
import { useDispatch } from 'react-redux';

const Cart = ({cart_item}) => {
    const dispatch = useDispatch();
    const [product, type, size] = cart_item
    const number = product.type[type][size].number
    const price = product.type[type][size].price*number
    
    return (
        <div className="cart_item">
            <div className="cart_line"></div>
            <div className="cart_item_pro d-flex align-items-center justify-content-between">
                <div className="cart_item_info d-flex align-items-center">
                    <img src={product.url} alt="image_cart_1" className="cart_item_image" />
                    <div className="cart_item_name">
                        <div className="cart_item_title">{product.title}</div>
                        <div className="cart_item_type">{type==='thin'?"тонкое":"традиционное"}, 
                        {product.type[type][size].size} см.</div>
                    </div>
                </div>
                <div className="cart_item_numbers d-flex">
                    <div onClick={()=>dispatch(check_cart_item(cart_item,"dec"))}
                    className="dec"><button className="decr">-</button></div>
                    <div className="cart_item_number">{number}</div>
                    <div onClick={()=>dispatch(check_cart_item(cart_item,"inc"))} 
                    className="inc"><button className="incr">+</button></div>
                </div>
                <div className="cart_item_price">{price}₽</div>
                <img  onClick={()=>dispatch(check_cart_item(cart_item,"remove"))}
                src={cart_item_delete} alt="cart_item_delete" className="cart_item_delete" />
            </div>
        </div>
    );
};

export default Cart;