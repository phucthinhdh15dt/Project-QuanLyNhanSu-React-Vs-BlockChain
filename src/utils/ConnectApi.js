import axios from "axios";
import * as config from "../constants/ConfigApi";


export  function callApiDelete(endpoint, body, accesstoken,idDelete) {
    var method ='DELETE' ;
    return axios({
        url: `${config.API_URL_LV}/${endpoint}/${idDelete}`,
        method,
        headers:{
            // 'access-control-request-origin':'*',
             'content-type' : 'application/json-patch+json',
             'accept':'application/json',
            // 'Authorization': 'Bearer ' + accesstoken,
        },
        data: body
    }).catch(err => {
        return (err); 
    });
};

export  function callApiInfo(endpoint, body, accesstoken) {
    var method ='get' ;
    return axios({
        url: `${config.API_URL_INFO}/${endpoint}`,
        method,
        headers:{
            // 'access-control-request-origin':'*',
             'content-type' : 'application/json-patch+json',
             'accept':'application/json',
             'Authorization': 'Bearer ' + accesstoken,
        },
        data: body
    }).catch(err => {
        return (err); 
    });
};


export function callApiPaging(endpoint, body, accesstoken ,page) {
    var method ='GET' ;
    return axios({
        url: `${config.API_URL_LV}/${endpoint}/${"?format=json&"}${"page="+ page}`,
        method,
        headers:{
            // 'access-control-request-origin':'*',
             'content-type' : 'application/json-patch+json',
             'accept':'application/json',
            // 'Authorization': 'Bearer ' + accesstoken,
        },
        data: body
    }).catch(err => {
        return (err); 
    });
};

//seacrh api

export function callApibyId(endpoint, body ,id) {
    var method ='GET' ;
    return axios({
        url: `${config.API_URL_LV}/${endpoint}/${id}${"?format=json&"} `,
        method,
        headers:{
            // 'access-control-request-origin':'*',
             'content-type' : 'application/json-patch+json',
             'accept':'application/json',
            // 'Authorization': 'Bearer ' + accesstoken,
        },
        data: body
    }).catch(err => {
        return (err); 
    });
};

export  function callApiEdit(endpoint, body, accesstoken,idEdit) {
    var method ='PUT' ;
    return axios({
        url: `${config.API_URL_LV}/${endpoint}/${idEdit}/`,
        method,
        headers:{
            // 'access-control-request-origin':'*',
             'content-type' : 'application/json',
             'accept':'application/json',
            // 'Authorization': 'Bearer ' + accesstoken,
        },
        data: body
    }).catch(err => {
        return (err); 
    });
};

export  function callApiAdd(endpoint, body, accesstoken) {
    var method ='POST' ;
    return axios({
        url: `${config.API_URL_LV}/${endpoint}/`,
        method,
        headers:{
            // 'access-control-request-origin':'*',
             'content-type' : 'application/json',
             'accept':'application/json',
             'Authorization': 'Bearer ' + accesstoken,
        },
        data: body
    }).catch(err => {
        return (err); 
    });
};

export  function callApiToken(endpoint, body, accesstoken) {
    var method ='POST';
    return axios({
        url: `${config.API_URL_TOKEN}/${endpoint}/`,
        method,
        headers:{
            // 'access-control-request-origin':'*',
             'content-type' : 'application/json',
             'accept':'application/json',
            // 'Authorization': 'Bearer ' + accesstoken,
        },
        data: body
    }).catch(err => {
        return (err); 
    });
};

