import * as types from '../../actions/actionType';


const initialState = {
    request:false,
    favItem:null,
    error:null,
}

export default function favItem(state=initialState, action={}){
    switch(action.type){
        case types.GET_FAV_REQUEST:
            return {
                ...state,
                request:true,
                favItem:null,
                error:null,
            }
        case types.GET_FAV_SUCCESS:
            return {
                ...state,
                request:false,
                favItem:action.data,
                error:null
            }
        case types.GET_FAV_FAIL:
            return {
                ...state,
                request:false,
                favItem:null,
                error:action.err
            }
        case types.ADD_FAV_SUCCESS:
            return{
                ...state,
                request:false,
                favItem:Object.assign(state,action.item)
            }
        default:
            return state
    }
}