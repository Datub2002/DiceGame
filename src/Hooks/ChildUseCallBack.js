import React,{memo} from 'react';

function ChildUseCallBack(props) {

    
    console.log('re-render child')
    return (
        <div >
            {props.cart.map((item,i) =>{
                return <div key={i}>{item.price}</div>
            })} 
            
        </div>
    );
}

export default memo(ChildUseCallBack);