import * as types from '../actionType';

export function doFilter(data,filter){
    alert(filter);
    var data1 = data.find(function (obj) { return obj.milleage > filter.milleageMin; });
    console.log(data1);
    var data2 = data1.find(function (obj) { return obj.milleage < filter.milleageMax; });
    console.log(data2);
    return data2;

}

function setFilter (type,filter){
    return{ type, filter }
}
function setInitialFilter(type){
    return { type }
}
export function setFilterOptions(data){
    if(!data){
        return dispatch => {
            dispatch(setInitialFilter(types.SET_FILTER_INITIAL))
        }
    }else{
        return dispatch=>{
            dispatch(setFilter(types.SET_FILTER_OPTION,data))
    
        }
    }
    
}