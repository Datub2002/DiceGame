import React,{useState,useCallback, useMemo} from 'react';
import ChildUseCallBack from './ChildUseCallBack';

function DemoUseCallBack(props) {

        let [like,setLike] = useState(1);
      
        
            let cart = [
                { id : 1,name : 'iphone', price: 1000},
                { id : 2,name : 'htc', price: 2000},
                { id : 3,name : 'conmem', price: 3000},
            ];
            
        
        const cartMemo = useMemo(() =>cart,[like])

    return (
        <div className='m-5'>
            Like : {like}
            <br />
           <button className='btn btn-success' onClick={() =>{
            setLike(like + 1)
           }}> + </button>
            <br />
           
           <ChildUseCallBack cart={cartMemo}  />
        </div>
    );
}

export default DemoUseCallBack;