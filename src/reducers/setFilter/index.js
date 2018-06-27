import * as types from '../../actions/actionType';
import Immutable from 'seamless-immutable';

const data = {
    yearMin:2006,
    yearMax:2018,
    milleageMin:0,
    milleageMax:10000,
    priceMin:0,
    priceMax:200000,
    cartype:['sedan','roadster','hatchback','sport car','coupe','pickup','cabriolet','minivan'],
    brand:['nissan','mazda','toyota','honda']
}
const initialState = Immutable({
    filter:data
})

export default function filter(state=initialState, action={}){
    switch(action.type){
        case types.SET_FILTER_INITIAL:
            return state
            
        case types.SET_FILTER_OPTION:
            return {
                ...state,
                filter : action.filter
            }
        default:
            return state
    }
}