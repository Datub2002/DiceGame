import { ADDINPUT, CHANGEINPUT, REMOVEINPUT } from "./Constant"

export const inputChange =(value) =>{
    return {
        type : CHANGEINPUT ,
        value
    }
}
export const inputAdd =(todoInput) =>{
    return {
        type : ADDINPUT ,
        todoInput
    }
}
export const inputRemove =(index) =>{
    return {
        type : REMOVEINPUT ,
        index
    }
}