


import React,{useState} from 'react';
import {filter_by} from "../../REDUX/extra/actions"
import { useDispatch } from 'react-redux';

const FilterProducts = () => {
    const dispatch = useDispatch()
    const [color, setColor] = useState("all")
    return (
        <div className="navbar_scroll d-flex justify-content-start">
            <div className={(color==="all"?"active":"")+" navbar_scroll_item"}> 
                <a  onClick={()=>{
                    dispatch(filter_by("all"))
                    setColor("all")
                }}
                className="navbar_scroll_link" aria-current="page" href="#">Все</a>
            </div>

            <div className={(color==="meat"?"active":"" )+ " navbar_scroll_item"}> 
                <a  onClick={()=>{
                    dispatch(filter_by("meat"))
                    setColor("meat")
                }}
                className="navbar_scroll_link" aria-current="page" href="#">Мясные</a>
            </div>
            
            <div className={(color==="vegetarian"?"active":"" )+ " navbar_scroll_item"}> 
                <a  onClick={()=>{
                    dispatch(filter_by("vegetarian"))
                    setColor("vegetarian")
                }}
                className="navbar_scroll_link" aria-current="page" href="#">Вегетарианская</a>
            </div>

            <div className={(color==="gril"?"active":"" )+ " navbar_scroll_item"}> 
                <a  onClick={()=>{
                    dispatch(filter_by("gril"))
                    setColor("gril")
                }}
                className="navbar_scroll_link" aria-current="page" href="#">Гриль</a>
            </div>

            <div className={(color==="bitter"?"active":"" )+ " navbar_scroll_item"}> 
                <a  onClick={()=>{
                    dispatch(filter_by("bitter"))
                    setColor("bitter")
                }}
                className="navbar_scroll_link" aria-current="page" href="#">Острые</a>
            </div>

            <div className={(color==="close"?"active":"" )+ " navbar_scroll_item"}> 
                <a  onClick={()=>{
                    dispatch(filter_by("close"))
                    setColor("close")
                }}
                className="navbar_scroll_link" aria-current="page" href="#">Закрытые</a>
            </div>
        </div>
    );
};

export default FilterProducts;