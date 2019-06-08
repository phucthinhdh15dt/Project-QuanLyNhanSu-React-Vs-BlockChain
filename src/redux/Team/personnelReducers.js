import axios from "axios";
import * as Types from './ActionTypes';


var personnelState =[];


const personnelReducers=(state = personnelState, action)=>{
    switch(action.type){
        case Types.LIST_PERSONNEL_ALL:
            return action.data;
        case Types.DELETE_PERSONNEL:
            return action.person;
        default:
        return state;
    }
}
export default personnelReducers;