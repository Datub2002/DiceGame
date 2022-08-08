import React from 'react';
import XucXac from './XucXac';
import { useSelector,useDispatch } from 'react-redux';
import { XUC_XAC_NN } from '../types/BaiTapBauCuaTypes';
function DanhSachXucXac(props) {
    const mangXucXac = useSelector(state => state.BaiTapGameBauCuaReducer.DanhSachXucXac);
    const dispatch = useDispatch();
    return (
        <div className='mt-5 ml-5'>
            <div className='bg-white' style={{
                width: 370,
                height: 370,
                borderRadius: '50%'
            }}>
                <div className='row'>
                    <div className='col-12 text-center ' style={{
                        marginTop: 0,
                        marginLeft : 110
                    }}>
                        <XucXac item={mangXucXac[0]} />
                    </div>

                </div>
                <div className='row'>
                    <div className='col-6 text-right'>
                        <XucXac item={mangXucXac[1]} />
                    </div>
                    <div className='col-6 text-right'>
                        <XucXac item={mangXucXac[2]} />
                    </div>
                </div>
            </div>
            <button 
            onClick={() =>{
                dispatch(
                    {
                        type :XUC_XAC_NN
                    }
                )
            }}
            className='btn btn-success ' style={{
                marginLeft: '28%',
                marginTop: '10%',
                fontSize: 25
            }}>Xóc</button>
        </div>


    );
}

export default DanhSachXucXac;