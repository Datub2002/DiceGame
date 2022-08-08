import React from 'react';
import { useDispatch } from 'react-redux';
import { xuLyGiamCuoc, xuLyTangCuoc } from '../actions/BaiTapBauCuaAtions';
import { useSpring, animated } from 'react-spring';
function QuanCuoc(props) {
    const { diemCuoc, hinhAnh } = props.item;
    console.log( props.item);
    const dispatch = useDispatch();

    const handleIncrease = (item) => {
        dispatch(
            xuLyTangCuoc(item)
        )
    }
    const handleDecrease = (item) => {
        dispatch(
            xuLyGiamCuoc(item)
        )
    }



    const [propsUseSpringInCrease, setInCrease] = useSpring(() => {
        return {
            to: { scale: 1.25 },
            from: { scale: 1 },
            reset:true
        }
    })

    const [propsUseSpringDeCrease, setDeCrease] = useSpring(() => {
        return {
            to: { scale: 1.25 },
            from: { scale: 1 },
            reset: true
        }
    })

    return (
        <div className='mt-3 text-center '>
            <img style={{
                width: '300'
            }} src={hinhAnh} alt={hinhAnh} />
            <div className=' mt-2 ' >
                <animated.button
                   style={{ transform: propsUseSpringInCrease.scale.interpolate(scale => `scale(${scale})`) }}
                    onClick={
                        () => {                          
                            setInCrease({
                                to : {scale : 1.25},
                                from : {scale : 1},
                            })
                            
                            handleIncrease(props.item)
                            
                        }
                    }
                    className='btn btn-success mr-2'>
                    <i className='fa fa-plus'></i>
                </animated.button>
                <span style={{
                    color: 'yellow',
                    fontSize: '20px'
                }}>{diemCuoc}</span>
                <animated.button
                   style={{ transform: propsUseSpringDeCrease.scale.interpolate(scale => `scale(${scale})`) }}
                    onClick={() =>
                    
                    {
                        setDeCrease({
                                to : {scale : 1.25},
                                from : {scale : 1},
                            })
                        handleDecrease(props.item)

                        
                    }
                    } 
                    className='btn btn-danger ml-2'>-</animated.button>
            </div>
        </div>
    );
}

export default QuanCuoc;