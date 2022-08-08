import React, { useRef, useState } from 'react';

function HookRef(props) {
    const [count,setCount] = useState(60);
    let timerID = useRef()
    const handleStart = () =>{
        timerID.current =  setInterval(() =>{
            setCount(prevCount => prevCount -1)
        },1000)
        console.log(timerID.current);
    }
    const handleStop = () =>{
        clearInterval(timerID.current)
        
    }
    return (
        <div style={{padding: 20}}>
            <h1>{count}</h1>
            <button className='btn btn-success' onClick={handleStart}>start</button>
            <button className='btn btn-danger' onClick={handleStop}>stop</button>


        </div>
    );
}

export default HookRef;