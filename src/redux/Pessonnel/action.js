import {callApi, callApiPaging, callApiDelete } from '../../utils/ConnectApi';
import * as Types from './ActionTypes'; 

export const reqGetAllData = () => {
    return (dispatch) => {
        return callApiPaging(`developers`, null, "null",1).then(res => {
            dispatch(actGetAllData(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actGetAllData = (data) => {
    return {
        type: Types.LIST_PERSONNEL_ALL,
        data
    }
}

export const actDeleteById = (data) => {
    return {
        type: Types.DELETE_PERSONNEL,
        data
    }
}

