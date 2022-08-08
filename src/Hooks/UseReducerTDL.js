import React, { useReducer, useRef } from 'react';

function UseReducerTDL(props) {

    const inputRef = useRef()
    // useReducer :
    // 1.Init state
    const InitState = {
        job: '',
        jobs: [],

    }
    // 2.Actions : 
    const SET_ACTION = 'set';
    const ADD_ACTION = 'add';
    const DELETE_ACTION = 'delete';
    // 3. reducer :
    const reducer = (state, action) => {
        console.log('pre state', state);
        let newState
        switch (action.type) {
            
            case SET_ACTION:
                {
                    newState = {
                        ...state,
                        job: action.value,
                    }
                } break;
            case ADD_ACTION:
                {
                    newState = {
                        ...state,
                        jobs: [...state.jobs, action.value],
                    }
                    console.log(action);
                } break;
                case DELETE_ACTION:
                {
                   let newJobs = [...state.jobs]
                    newJobs.splice(action.id,1)
                    newState = {
                        ...state,
                        jobs : newJobs
                    }
                   
                } break;
                default:
                    throw new Error('Invalid ACtion');
                }
        console.log('new state', newState);
        return newState;
    }
    // 4.dispatch :  
    const [state, dispatch] = useReducer(reducer, InitState);
    let {job , jobs} = state;
    // ham handleSubmit :
    const set_job = (value) =>{
        return {
            type : SET_ACTION,
            value : value
        }
    }
    const add_job = (value) =>{
        return {
            type : ADD_ACTION,
            value : value
        }
    }
    const delete_job = (id) =>{
        return {
            type : DELETE_ACTION,
            id : id
        }
    }
    const handleSubmit = () => {

        inputRef.current.focus();

        dispatch(add_job(job))
        dispatch(set_job(''))
    }
    // ham handleDelete
    const handleDelete = (id) => {
        dispatch(delete_job(id)
        )
    }
    return (
        <div className='p-5'>
            <input
                ref={inputRef}
                placeholder='Enter toDo...'
                value={job}
                onChange={e => {
                    dispatch(set_job(e.target.value))
                }}

            />

            <button onClick={handleSubmit} className=' ml-1 btn btn-primary'>Add</button>
            <ul>
                {jobs.map((job, i) => {
                    return <li key={i}>

                        {job} <button onClick={() => handleDelete(i)} className='btn btn-danger'>X</button>
                    </li>
                })}
            </ul>


        </div>
    );
}

export default UseReducerTDL;