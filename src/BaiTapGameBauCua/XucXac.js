import React from 'react';
import { Fragment } from 'react';
import {useSpring,animated} from 'react-spring';

function XucXac(props) {
    const {hinhAnh} = props.item;
    console.log(hinhAnh);
    

    const [propsDice,set] = useSpring(() =>(

        {
            to: {
                xyz : [360,360,360]
            },
            from :{
                xyz : [0,0,0]
            },
            config :
            {
                duration : 1000
            },
            reset : true
        }
        )
        )
        set({
            to: {
                xyz : [360,360,360]
            },
            from :{
                xyz : [0,0,0]
            },
        })

    return (
        <Fragment>
            <div className='scene ml-5'>
                <animated.div 
                style={{
                    transform : propsDice.xyz.interpolate((x,y,z) =>`TranslateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)
                }}
                className='cube'>

                    <div className='cube__face front'>
                        <img src={hinhAnh} alt='a' style={{width : '100%'}} />
                    </div>

                    <div className='cube__face back'>
                        <img src='./img/BaiTapGameBauCua/tom.png' alt='bn' style={{width : '100%'}} />

                    </div>
                    <div className='cube__face left'>
                        <img src='./img/BaiTapGameBauCua/cua.png' alt='asa' style={{width : '100%'}} />

                    </div>
                    <div className='cube__face top'>
                        <img src='./img/BaiTapGameBauCua/ca.png' alt='z' style={{width : '100%'}} />

                    </div>
                    <div className='cube__face bottom'>
                        <img src='./img/BaiTapGameBauCua/ga.png' alt='q' style={{width : '100%'}} />

                    </div>
                    <div className='cube__face right'>
                        <img src='./img/BaiTapGameBauCua/nai.png' alt='t' style={{width : '100%'}} />
                    </div>
                      
                       
                </animated.div>
            </div>
        </Fragment>
    );
}

export default XucXac;