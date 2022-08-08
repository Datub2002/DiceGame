import React from 'react';
import DanhSachQuanCuoc from './DanhSachQuanCuoc';
import DanhSachXucXac from './DanhSachXucXac';
import DiemCuoc from './DiemCuoc';
import './BaiTapGameBauCua.css';
function BaiTapGameBauCua() {
    return (

        <div id='BaiTapGameBauCua' className='container-fluid'>
            <DiemCuoc />
            
            <div className='row'>
                <div className='col-8'>
                    <DanhSachQuanCuoc/>
                </div>
                 <div className='col-4'>
                    <DanhSachXucXac />
                </div>
            </div>

        </div>
    );
}

export default BaiTapGameBauCua;