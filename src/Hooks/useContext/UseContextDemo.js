import React,{useContext} from 'react';
import { context } from './ContextProvider';



 
function useContextDemo(props) {
    const arrItem = [
        { id: 1, name: 'HTC', price: 1200 },
        { id: 2, name: 'SSG', price: 900 },
        { id: 3, name: 'Iphone', price: 1000 },
    
    ]

    const {cartReducer} = useContext(context);
    let [cart,dispatch] = cartReducer;

    const addToCart = (item) =>{
        const action = {
            type : 'addCart',
            item : item,
        }
        dispatch(action);
     }
     const removeItem = (id) =>{
         const action = {
             type : 'removeItem',
             id : id,
         }
         dispatch(action);
      }



    return (
        <div className='container'>
        <h3>Gio Hang</h3>
        <div className='row'>
            {arrItem.map((item, index) => (
                <div key={index} className='col-4 mb-5'>

                    <div className="card ">
                        <img className="card-img-top" src="https://picsum.photos/200/200" alt='cmm' />
                        <div className="card-body">
                            <h4 className="card-title">{item.name}</h4>
                            <p className="card-text">{item.price}</p>
                            <button onClick={() =>addToCart(item)} className='btn btn-success'>Add to cart</button>
                        </div>
                    </div>
                </div>

            ))}
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item, i) => {
                    return <tr key={i}>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th>{item.price}</th>
                        <th>{item.quantity}</th>
                        <th>{item.price * item.quantity}</th>
                        <th><button onClick={() =>removeItem(item.id)} className='btn btn-danger'>X</button></th>
                    </tr>


                })}
            </tbody>
        </table>
    </div>
);
   
}

export default useContextDemo;