import React, { useState } from 'react';
import {useTrail,animated} from 'react-spring';

const arrContent = [
    {content: 'ReactJS',num: 2000},
    {content: 'HTML',num: 3000},
    {content: 'CSS',num: 2500},
]

function UseTrail(props) {

    let [status,setStatus] = useState(true);
    const propsUseTrail = useTrail(array.length,
        {
                opacity: status ? 1 : 0,
                x : status ? 0 : 20,
                height : status ? 80 : 0,
                from : {
                    opacity : 0,x: 20, height : 0
                },
                config : {
                    duration : 1000
            }
        }   

        
        )
        console.log(propsUseTrail);
    return (
        <div>
            <button onClick={() =>setStatus(!status)}>Click Here !!</button>
            {propsUseTrail.map((propsUseSprings,index) =>{
                console.log(array[index])
                return <div>

                    <animated.h1
                        key={index}
                        style={propsUseSprings}
                    >
                        {array[index].content}-{array[index].num}
                    </animated.h1>
                </div>
            })

            }
        </div>
    );
}

export default UseTrail;