import React,{createContext,useReducer} from 'react';


    const context = createContext();


    const InitialCart = [];
    
    const cartReducer = (state, action) => {
        
        switch(action.type) {
            case 'addCart' :
            {
                let cartUpdate = [...state];
    
                let index = cartUpdate.findIndex(item =>{
                   return item.id === action.item.id;
                })
                if(index !== -1)
                {
                    cartUpdate[index].quantity += 1;
                }else{
                    let newCart = {...action.item,quantity : 1};
                    cartUpdate.push(newCart);
                }
    
    
    
                return cartUpdate;
            }
            case 'removeItem' :{
                let cartUpdate = [...state];
    
                let index = cartUpdate.findIndex(item =>{
                   return item.id === action.id;
                })
                if( index !== -1) {
                    cartUpdate.splice(index,1);
                }
                return cartUpdate;
            }
        }
    
    
        return [...state]
    }


function ContextProvider(props) {
    let [cart, dispatch] = useReducer(cartReducer, InitialCart);
    // store gioongs nhu rootReducer
    const store = {
        cartReducer : [cart, dispatch],
    }

    return (
        <context.Provider value={store}>
            {props.children}
        </context.Provider>
    );
}
export {context}
export default ContextProvider;