import React,{ useEffect,useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './styles/index.css';
import MainPage from './components/products/MainPage';
import MainCart from './components/cart/MainCart';
import { useDispatch } from 'react-redux';
import { get_from_localStorage } from './REDUX/extra/actions';
import axios from 'axios';
import { set_products } from './REDUX/extra/actions';

const App = () => {
    const [loading, setLoading] = useState(true)
    const dispach = useDispatch()

    const fetch_data = async() =>{
      await axios.get("https://my.api.mockaroo.com/pizza?key=1c7ce460")
      .then(response => {
        setLoading(false)
        dispach(set_products(response.data))
      })
      .catch(error =>{
        console.log(error.message);
      })
    }
    
    useEffect(() => {
        const cart_items = JSON.parse(localStorage.getItem('cart'))
        if(cart_items){
            dispach(get_from_localStorage(cart_items))
        }
        // getData from api
        fetch_data()
    },[])


    if (loading) return <div className='loading'><div>Loading ...</div></div>
    return (
        <>
            <div className="main_wrapper">
                <div className="external_wrapper">
                    <div className="internal_wrapper">
                        <div className="container wrapper">
                            <BrowserRouter>
                                <Routes>
                                    <Route path='/' element={<MainPage/>} />
                                    <Route path='/cart' element={<MainCart />} />
                                </Routes>
                            </BrowserRouter>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;