import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import { add_to_cart } from '../../REDUX/extra/actions';

const Product = ({product}) => {
    const dispatch = useDispatch()
    const [type_pro, setType] = useState("thin");
    const [size_pro, setSize] = useState("size_26_sm")
    const product_price = product.type[type_pro][size_pro].price
    const [add_cart_number, setAdd_cart_number] = useState(0)

    return (
        <div className="col-md-6 col-lg-4 col-xxl-3">
            <div className="product_wrapper d-flex justify-content-center">
                <div className="product_item">
                    <div className="product_item_image">
                        <img src={`${product.url}`} alt="product_item_image" />
                    </div>
                    <div className="product_item_title">{product.title}</div>
                    <div className="product_item_description">
                        <div className="product_item_type d-flex">
                            <div className={(type_pro==="thin"?"active":"")+" type1"}
                                onClick={()=>setType("thin")}>
                                тонкое
                            </div>
                            <div className={(type_pro==="traditional"?"active":"")+" type1"}
                                onClick={()=>setType("traditional")}>
                                    традиционное
                            </div>   
                        </div>
                        <div className="product_item_size d-flex">
                            <div className={(size_pro==="size_26_sm"?"active":"")+" size1"}
                                onClick={()=>setSize("size_26_sm")}>
                                26 см.
                            </div>
                            <div className={(size_pro==="size_30_sm"?"active":"")+" size1"}
                                onClick={()=>setSize("size_30_sm")}>
                                30 см.
                            </div>
                            <div className={(size_pro==="size_40_sm"?"active":"")+" size1"}
                                onClick={()=>setSize("size_40_sm")}>
                                40 см.
                            </div>
                        </div>
                    </div>
                    <div className="product_item_adding_cart d-flex justify-content-between align-items-center">
                        <div className="product_item_price">от{product_price} ₽</div>
                        <button className="product_item_add_cart d-flex align-items-center"
                            onClick={()=>{
                                setAdd_cart_number(add_cart_number+1)
                                dispatch(add_to_cart(product,type_pro,size_pro))
                            }}>
                            <div className="plus">+</div>
                            <div className="text">Добавить</div>
                            {add_cart_number>0?
                                <div className="number">{add_cart_number}</div>:<></>    
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;