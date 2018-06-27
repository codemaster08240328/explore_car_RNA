import * as types from '../actionType'
import {Alert} from 'react-native';
import {dummyData} from '../../services/getDummydata'
import getdata from '../../services'
function handleResponse(type, data){
    return {type,data}
}

function handleError(type,err){
    return {type, err}
}

// export function getData(){
//     return dispatch => {
//         dispatch(handleResponse(types.GET_DATA_REQUEST,null))
//         getdata()
//         .then(result=>{
//             if(result.success){
//                 dispatch(handleResponse(types.GET_DATA_SUCCESS,result.data))
//             }else{
//                 dispatch(handleError(types.GET_DATA_FAIL,result.msg))
//             }
//         })
//     }
// } 
export function getDummyData(){
    return dispatch => {
        dispatch(handleResponse(types.GET_DATA_REQUEST,null))
        
        var result = dummyData;
        
        if(result.success){
            dispatch(handleResponse(types.GET_DATA_SUCCESS,result.data))
        }else{
            dispatch(handleError(types.GET_DATA_FAIL,result.msg))
        }
        
    }
} 

