import axios from "axios";
import * as config from "../constants/ConfigApi";


export  function callApiDelete(endpoint, body, accesstoken,idDelete) {
    var method ='DELETE' ;
    return axios({
        url: `${config.API_URL_HOST_2}/${endpoint}/${idDelete}`,
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


export function callApiPagingHost2(endpoint, body, accesstoken ,page) {
    var method ='GET' ;
    return axios({
        url: `${config.API_URL_HOST_2}/${endpoint}/${"?format=json&"}${"page="+ page}`,
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

//seacrh api

export function callApibyIdHost2(endpoint, body ,id) {
    var method ='GET' ;
    return axios({  
        url: `${config.API_URL_HOST_2}/${endpoint}/${id}`,
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

export  function callApiEditHost2(endpoint, body, accesstoken,idEdit) {
    var method ='PUT' ;
    return axios({
        url: `${config.API_URL_HOST_2}/${endpoint}/${idEdit}/`,
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

export  function callApiAddHost2
(endpoint, body, accesstoken) {
    var method ='POST' ;
    return axios({
        url: `${config.API_URL_HOST_2}/${endpoint}/`,
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

