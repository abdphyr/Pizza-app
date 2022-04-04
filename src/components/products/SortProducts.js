


import React from 'react';
import { sort_by } from '../../REDUX/extra/actions';
import { useDispatch } from 'react-redux';
import dropdown_icon from '../../images/dropdown.svg'

const SortProducts = () => {
    const dispatch = useDispatch()
    return (
        <div className="dropdown_menu d-flex align-items-center">
            <div className="dropdown_logo">
                <img src={dropdown_icon} alt="Dropdown icon" />
            </div>
            <div className="dropdown_title">Сортировка по:</div>
            <div className="dropdown_dashed_border">    
                <div className="dropdown_self">популярности</div>
                <div className="dropdown_body">
                    <div className="dropdown_body_item active">популярности</div>
                    <div onClick={()=>dispatch(sort_by("price"))} 
                        className="dropdown_body_item">по цене</div>
                    <div onClick={()=>dispatch(sort_by("title"))} 
                        className="dropdown_body_item">по алфавиту</div>
                </div>
            </div>
        </div>
    );
};

export default SortProducts;