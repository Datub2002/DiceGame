import React, {useState} from 'react';

function DemoHookUseState(props) {


        let [count,setCount] = useState({
            like : 0
        })

        const handleLike = () =>{
            setCount(
                {
                    like : count.like + 1
                }
                )
                console.log(count.like);
        }

    return (
        <div className="card m-5" style={{width:200,height:200}}>
            <img className="card-img-top" src="https://picsum.photos/200/200" alt="picture" />
            <div className="card-body">
                <h4 className="card-title">Picture</h4>
                <p style={{color : 'red'}}>{count.like} tym</p>

            </div>
            <button onClick={handleLike} className='btn btn-danger'>Like</button>
        </div>

    );
}

export default DemoHookUseState;