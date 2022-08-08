import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { xuLyChoiLai } from '../actions/BaiTapBauCuaAtions';

function DiemCuoc(props) {
    const tongDiem = useSelector(state => state.BaiTapGameBauCuaReducer.tongDiem);
    const dispatch = useDispatch();
    console.log(tongDiem);
    return (

        <div>
            <h3 className='text-center display-4'>Game Bầu Cua</h3>
            <div className='text-center mt-5'>
                <span style={{
                    fontSize: '23px',
                    borderRadius : '5%'
                }} className='text-center text-white bg-dark p-3'>Tiền Thưởng : <span className='text-warning'>{tongDiem.toLocaleString()}$</span></span>
            </div>
            <div className='text-center mt-5'>
                <button style={{
                    fontSize : '20px'
                }}
                onClick ={() =>{
                    dispatch(xuLyChoiLai())
                }}
                 className='btn btn-success p-2 '>Chơi lại</button>
            </div>
            
        </div>
    );
}

export default DiemCuoc;