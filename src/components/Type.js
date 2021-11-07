import React, { useState, useEffect } from "react";
const Type = (props) => {
    const activeStyle = {
        color: '#fff',
        backgroundColor: '#dc3545',
        borderColor: '#dc3545',
        marginRight: '12px'
    }
    const normalStyle = {
        color: '#959595',
        backgroundColor: '#fff',
        borderColor: '#fff',
        marginRight: '12px'
    }
    const [select, setSelect] = useState('')
    
    useEffect(() => {
        if(props.currentType === 'ScenicSpot'){
            setSelect('景點')
        }else if(props.currentType === 'Restaurant'){
            setSelect('餐飲')
        }else if(props.currentType === 'Hotel'){
            setSelect('旅宿')
        }else if(props.currentType === 'Activity'){
            setSelect('活動')
        }
        return (() => {
        
        });
    }, [props.currentType]);
    return (
        <div className="">
            <div className="title">{select}</div>
            {
                props.inListItem ? '' : (
                    <div className="d-flex typeList">
                        <span>
                            <button 
                                type="button" 
                                className="btn rounded-pill" 
                                onClick={()=>{props.onClick('ScenicSpot')}}
                                style={props.currentType === 'ScenicSpot' ? activeStyle : normalStyle}>景點</button>
                        </span>
                        <span>
                            <button 
                                type="button" 
                                className="btn rounded-pill" 
                                onClick={()=>{props.onClick('Restaurant')}}
                                style={props.currentType === 'Restaurant' ? activeStyle : normalStyle}>餐飲</button>
                        </span>
                        <span>
                            <button 
                                type="button" 
                                className="btn rounded-pill" 
                                onClick={()=>{props.onClick('Hotel')}}
                                style={props.currentType === 'Hotel' ? activeStyle : normalStyle}>旅宿</button>
                        </span>
                        <span>
                            <button 
                                type="button" 
                                className="btn rounded-pill" 
                                onClick={()=>{props.onClick('Activity')}}
                                style={props.currentType === 'Activity' ? activeStyle : normalStyle}>活動</button>
                        </span>
                    </div>
                )
            }
        </div>
    );
};
export default Type;
