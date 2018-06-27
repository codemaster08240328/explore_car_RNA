import * as types from '../../actions/actionType';
import Immutable from 'seamless-immutable';


const initialState = {
    request:false,
    data:null,
    error:null,
}

export default function data(state=initialState, action={}){
    switch(action.type){
        case types.GET_DATA_REQUEST:
            return {
                ...state,
                request:true,
                data:null,
                error:null,
            }
        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                request:false,
                data:action.data,
                error:null
            }
        case types.GET_DATA_FAIL:
            return {
                ...state,
                request:false,
                data:null,
                error:action.err
            }
        default:
            return state
    }
}