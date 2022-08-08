import React, { useReducer } from 'react';



// useReducer :
// 1.Init state
// 2.Actions : 
// 3. reducer :
// 4.dispatch :  
function HookUseReducerF8(props) {

// Init state: 
const InitState = 0;
// Actions:
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
// reducer :
const reducer = (state,Actions) =>{
    switch(Actions){
        case UP_ACTION :
                return state + 1;
        case DOWN_ACTION:
                return state - 1;
    }
}
const [count,dispatch] = useReducer(reducer,InitState);

    return (
        <div style={{padding : '0 20px'}}>
            <h1>{count}</h1>
            <button
                className='btn btn-success'
                onClick={() =>{dispatch(UP_ACTION)}}
            >
                up
            </button>
            <button
                className='btn btn-danger'
                onClick={() =>{dispatch(DOWN_ACTION)}}
             >
                down
            </button>
        </div>
    );
}

export default HookUseReducerF8;