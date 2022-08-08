import { ADDINPUT, CHANGEINPUT, REMOVEINPUT } from "./Constant";

const initState = {
    todos : [],
    todoInput : '',

}
function reducer (state,action) {
    switch(action.type)
    {
        case CHANGEINPUT :        {
            
            return {...state,todoInput : action.value}
        }
        case ADDINPUT :
            {
                const newState = {...state};
                const index = newState.todos.findIndex((item) =>{
                    return item == action.todoInput
                })
                if(index == -1) {
                    
                    newState.todos.push(action.todoInput)
                }
                return newState

            }
        case REMOVEINPUT : 
            {
                const newJobs = [...state.todos];
                newJobs.splice(action.index,1);
                return {
                    ...state,
                    todos : newJobs
                }
            }
            default :
                throw new Error(' hanh vi k hop le')
    }
}
export {initState} 
export default reducer;
