
import { CHOI_LAI, DAT_CUOC, XUC_XAC_NN } from "../types/BaiTapBauCuaTypes";

const initialState = {
    DanhSachQuanCuoc : [
        {ma:'bau',diemCuoc: 0 ,hinhAnh : './img/BaiTapGameBauCua/bau.png'},
        {ma:'ga',diemCuoc: 0 ,hinhAnh : './img/BaiTapGameBauCua/ga.png'},
        {ma:'ca',diemCuoc: 0 ,hinhAnh : './img/BaiTapGameBauCua/ca.png'},
        {ma:'nai',diemCuoc: 0 ,hinhAnh : './img/BaiTapGameBauCua/nai.png'},
        {ma:'cua',diemCuoc: 0 ,hinhAnh : './img/BaiTapGameBauCua/cua.png'},
        {ma:'tom',diemCuoc: 0 ,hinhAnh : './img/BaiTapGameBauCua/tom.png'},
    ],
    tongDiem : 1000,
    DanhSachXucXac: [
        {ma:'nai',diemCuoc: 0 ,hinhAnh : './img/BaiTapGameBauCua/nai.png'},
        {ma:'cua',diemCuoc: 0 ,hinhAnh : './img/BaiTapGameBauCua/cua.png'},
        {ma:'tom',diemCuoc: 0 ,hinhAnh : './img/BaiTapGameBauCua/tom.png'},
    ]

}

export default (state = initialState, action) => {
    switch (action.type) {
        case DAT_CUOC :
            {
                console.log(action);
                const DanhSachCuocUpdate = [...state.DanhSachQuanCuoc];
                const index = DanhSachCuocUpdate.findIndex((item) =>
                     item.ma === action.quanCuoc.ma
                )
                console.log(index);
                if(index !== -1)
                {
                    if(action.tangGiam )
                    {
                        if(state.tongDiem > 0 ){

                            state.tongDiem -= 100;
                            DanhSachCuocUpdate[index].diemCuoc += 100;
                        }
                        else {
                            alert('k đủ điểm cược');
                        }
                       
                    }
                    else {
                        if( DanhSachCuocUpdate[index].diemCuoc > 0 )
                        {
                            state.tongDiem += 100;
                            DanhSachCuocUpdate[index].diemCuoc -= 100;
                        }
                        else{
                            alert('GTRI K hợp lệ');
                        }
                        
                    }
                }
                state.DanhSachQuanCuoc = DanhSachCuocUpdate;
                return {...state};
                
            }
            case XUC_XAC_NN :
                {
                    let mangNN = [];
                    for( let i= 0; i< 3; i++)
                    {
                        const randomNum = Math.floor(Math.random() * 6);
                        const itemNN = state.DanhSachQuanCuoc[randomNum];
                        mangNN.push(itemNN);
                    }
                    //cap nhat lại state
                        state.DanhSachXucXac = mangNN;

                        // dùng foreach ss từng phần tử trong mảngNN với từng phần tử trong dsqc
                        mangNN.forEach((item,i) =>{
                            const indexDSQC = state.DanhSachQuanCuoc.findIndex((qc) =>
                                 qc.ma === item.ma
                            )
                            if(indexDSQC !== -1)
                            {
                                state.tongDiem += state.DanhSachQuanCuoc[indexDSQC].diemCuoc;
                            }
                        })
                        // Xử lý hoàn tiền :
                        state.DanhSachQuanCuoc.forEach((qc) =>{
                            const index = mangNN.findIndex((item) =>{
                                return item.ma === qc.ma
                            })
                            if(index !== -1)
                            {
                                state.tongDiem += qc.diemCuoc;
                            }
                            
                        })
                        state.DanhSachQuanCuoc = state.DanhSachQuanCuoc.map((qc) =>{
                            return {...qc,diemCuoc : 0}
                        })

                        return {...state};
                }
                case CHOI_LAI :
                    {
                        state.tongDiem = 1000;
                        state.DanhSachQuanCuoc = state.DanhSachQuanCuoc.map((qc) =>{
                            return {...qc,diemCuoc : 0}
                        })
                        return {...state}
                    }
        

        default:
            return {...state}
    }
}
