import React from 'react';
import QuanCuoc from './QuanCuoc';
import { useSelector } from 'react-redux';

function DanhSachQuanCuoc(props) {

    const MangQuanCuoc = useSelector(state => state.BaiTapGameBauCuaReducer.DanhSachQuanCuoc);





    return (

        <div className='row mt-5'>

            {
                MangQuanCuoc.map((item, i) => {
                    return <div key={i} className='col-4'>
                        <QuanCuoc item={item} />
                    </div>
                }

                )
            }
        </div>



    );
}

export default DanhSachQuanCuoc;