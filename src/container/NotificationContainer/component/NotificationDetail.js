import React, { Component } from 'react'
import './Detail.css';
import {callApi, callApiPaging, callApiDelete } from '../../../utils/ConnectApi';
import history from '../../../RouterURL/history';
import {Line, Bar} from 'react-chartjs-2';
import { Link,Redirect,NavLink  } from 'react-router-dom';
import {callApiInfo, callApiRefresh} from './../../../utils/ConnectApi';
import {callApibyIdHost2} from './../../../utils/ConnectApiHost2';
export default class NotificationDetail extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      reposDetail: [],
      listNotifi : [],
      countListNotify : 0,
    }
  }
  loadingData = () => {
    var data = {
      "refresh": localStorage.getItem('refreshToken')
      
    };
    var username = {
      "username": localStorage.getItem('username')
      
    };
    callApiInfo('me/',null,localStorage.getItem('token'))
        .then(response => {
            this.setState({ 
              reposDetail : response.data.results[0]
              });
        })
        .catch(function (error) {
          callApiRefresh('api/token/refresh/',data,null)
          .then(responsere => {
            localStorage.setItem('token', responsere.data.access);
          })
          .catch(function (error) {
              console.log(error);
          })
        })
        // get notification
        callApibyIdHost2('TaskNoti',null,"?userName="+username.username)
        .then(response => {
          this.setState({ 
            listNotifi : response.data
            });
      })
      .catch(function (error) {
          console.log(error);
      })
      // get notification
      callApibyIdHost2('TaskNoti/getNotiCount',null, username.username)
      .then(response => {
        this.setState({ 
          countListNotify : response.data
          });
    })
    .catch(function (error) {
        console.log(error);
    })
  }
  getNotifi = () =>{

    var result =[] ;
      
      if(this.state.listNotifi.length > 0){
         
          result = this.state.listNotifi.map((tableJson, index) =>{
            if(tableJson.status === 0){
             
              return <div style={{backgroundColor: "#aaefdb", color : "black" ,borderRadius : "3px"}} >
                
                <div>
                <span class="glyphicon glyphicon-eye-open" style={{marginLeft: "10px" ,marginRight: "5px", color : "black" }}></span>
                  {tableJson['contentNotify']}
                  <small className="pull-right"  style={{marginRight: "10px" }}><i class="fa fa-check" aria-hidden="true"></i></small>
                  <br/>
                  <small className="pull-left"  style={{marginLeft: "10px"}}> <span class="glyphicon glyphicon-calendar"></span> {tableJson['createDate'].substring(0, 10)}</small>
                  <small className="pull-right"  style={{marginRight: "10px" }}><i class="fa fa-clock-o"></i> {tableJson['createDate'].substring(11, 20)}</small>
                </div>
                  <hr className="pill" />
            
            </div>
            }else{
              return <div style={{color : "black" ,borderRadius : "3px"}} >
                
              <div>
              <span class="glyphicon glyphicon-eye-open" style={{marginLeft: "10px" ,marginRight: "5px", color : "black" }}></span>
                {tableJson['contentNotify']}
                <small className="pull-right"  style={{marginRight: "10px" }}><i class="fa fa-check" aria-hidden="true"></i></small>
                <br/>
                <small className="pull-left"  style={{marginLeft: "10px"}}> <span class="glyphicon glyphicon-calendar"></span> {tableJson['createDate'].substring(0, 10)}</small>
                <small className="pull-right"  style={{marginRight: "10px" }}><i class="fa fa-clock-o"></i> {tableJson['createDate'].substring(11, 20)}</small>
              </div>
                <hr className="pill" />
          
          </div>
            }
             
          } );
      }else {
        return <li> </li>
      }
   
      return  result;

  }
  componentDidMount (){
    this.loadingData();
  }
  render() {
    
    
    return (
      <div className="content-wrapper"  style={{minHeight: '550px'}}>
      <br/><br/><br/>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">             
             
                <div className="col-md-11">
                  <h4><strong> Tất cả các thông báo của bạn  </strong></h4>  
                  <hr style={{border : "1px solid black"}}/>                   
                  <div >
                    {this.getNotifi()}  
                  </div>
                </div>
               
            </div>                 
          </div>
        </div>
          
          <div className="modal-footer" style={{marginTop : '80px'}}>
                <button type="button" className="btn btn-secondary" onClick={this.goBack} >Quay lại</button>
              </div>
          
        </div>
    )
  }
}
