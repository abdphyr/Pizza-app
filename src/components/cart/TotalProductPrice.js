
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";

const TotalProductPrice = () => {
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
        <div className="total_product_price d-flex justify-content-between">
            <div className="total_product">Всего пицц:
            <span className="number">{num} шт.</span></div>
            <div className="total_price">Сумма заказа:
            <span className="price">{sum}₽</span></div>
        </div>
    );
};

export default TotalProductPrice;