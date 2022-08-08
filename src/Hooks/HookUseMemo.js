import React, { useMemo, useRef, useState } from 'react';

function HookUseMemo(props) {

    const nameRef = useRef();

    const [name,setName] = useState('');
    
    const [price,setPrice] = useState('');
    const [products,setProducts] = useState([]);
    const handleSubmit = () =>{
        setProducts(
            [...products,{
                name,
                price : +price
            }],
            setName(''),
            setPrice(''),
            nameRef.current.focus()

        )
    }
    const totalPrice = useMemo(() =>{
       const results =  products.reduce((total,currentValue) => {

            console.log('recaculating...');
    
            return total + currentValue.price
        },0)
        return results;
    },[products])
    console.log(totalPrice);
    return (
        <div style={{padding : '10px 30px'}}>
            <input
                ref={nameRef}
                value={name}
                placeholder='Enter Name...'
                onChange={e =>setName(e.target.value)}
            />
            <br/>
            <input
                value={price}
                placeholder='Enter Name...'
                onChange={e =>setPrice(e.target.value)}
            />
            <br/>
            <br/>
            <button  onClick={handleSubmit}>Add</button>
            <br/>
            Total : {totalPrice}
                <ul>                  
                    {products.map((item,i) =>{
                        return <li key={i}>
                            {item.name} : {item.price}
                        </li>
                    })}
                </ul>
        </div>
    );
}

export default HookUseMemo;


