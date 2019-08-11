import {callApiRefresh} from './../utils/ConnectApi';

export var refreshToken = function() {
    var data ={
        refresh : localStorage.getItem('refreshToken')
    }
    callApiRefresh('api/token/refresh/',data,null)
    .then(responsere => {
      localStorage.setItem('token', responsere.data.access);
    
    })
    .catch(function (error) {
        console.log(error);
    })
  }