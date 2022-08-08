import { CHOI_LAI, DAT_CUOC } from "../types/BaiTapBauCuaTypes"

export const xuLyTangCuoc = (item) =>{
    return {
        type : DAT_CUOC,
        tangGiam : true,
        quanCuoc : item,

    }

}
export const xuLyGiamCuoc = (item) =>{
    return {
        type : DAT_CUOC,
        tangGiam : false,
        quanCuoc : item,
        
    }

}
export const xuLyChoiLai = () =>{
    return {
        type : CHOI_LAI,              
   }

}

