import { ADD_COMMENTS } from "../type/FakeBookAppTypes";




const initState = {
    comments : [
        {
            name : 'Yone',content : 'Hi! Yasuo',avatar : `https://i.pravatar.cc/150?u=Yone`
        },
        {
            name : 'Yasuo',content : 'Hello! Yone',avatar : `https://i.pravatar.cc/150?u=Yasuo`
        },
    ]
    
}
const FakeBookReducer = (state = initState, action) =>{
    switch(action.type)
    {
        case ADD_COMMENTS :
            {
                state.comments = [
                    ...state.comments,
                    action.newComment
                ];
                return {...state}
            }
          
    }

    
    return {...state}
}
export default FakeBookReducer ; 