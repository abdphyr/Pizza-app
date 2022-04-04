

import smayl from '../../images/smayl.png';
import empty from '../../images/empty_cart.png';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className="info d-flex flex-column justify-content-center align-items-center">
            <div className="main-title">
                Корзина пустая <img src={smayl} alt="smayl" />
            </div>
            <div className="description">
                Вероятней всего, вы не заказывали ещё пиццу.
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </div>
            <img src={empty} alt="empty_cart" />
            <Link to="/">
                <button className="back_main_page">
                    Вернуться назад
                </button>
            </Link>
        </div>
    );
};

export default EmptyCart;