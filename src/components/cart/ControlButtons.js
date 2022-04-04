

import path_icon from "../../images/path.svg";
import { Link } from "react-router-dom";

const ControlButtons = () => {
    return (
        <div className="control_buttons d-flex justify-content-between">
            <Link to="/">
                <button className="back_button">
                    <img src={path_icon} alt="path_icon" /> Вернуться назад
                </button>
            </Link>
            <button className="purchase_button">Оплатить сейчас</button>
        </div>
    );
};

export default ControlButtons;