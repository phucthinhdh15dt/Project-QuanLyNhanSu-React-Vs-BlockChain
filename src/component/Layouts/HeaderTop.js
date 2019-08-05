// Header.js
import React, {Component} from 'react';
import {callApiInfo, callApiRefresh} from './../../utils/ConnectApi';
import {callApibyIdHost2} from './../../utils/ConnectApiHost2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class HeaderTop extends Component {
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
             
              return <li  ><Link to={`/trang-chu/thong-bao/${tableJson.id}`}>
                <h3><span class="glyphicon glyphicon-eye-open" style={{paddingRight: "10px" , color : "black" }}></span>
                  {tableJson['contentNotify'].substring(0,30)+"..."}
                  <small className="pull-right"><i class="fa fa-check" aria-hidden="true"></i></small>
                  
                  <br/><br/>
                  <small className="pull-left"> <span class="glyphicon glyphicon-calendar"></span> {tableJson['createDate'].substring(0, 10)}</small>
                  <small className="pull-right"><i class="fa fa-clock-o"></i> {tableJson['createDate'].substring(11, 20)}</small>
                </h3>
                  <hr className="pill" />
              </Link>
            </li>
            }else{
              return <li style={{background: "#edf2fa"}} ><Link to={`/trang-chu/thong-bao/${tableJson.id}`}>
              <h3><span class="glyphicon glyphicon-eye-open" style={{paddingRight: "10px" , color : "black" }}></span>
                {tableJson['contentNotify'].substring(0,30)+"..."}
                <small className="pull-right"><i class="fa fa-check" aria-hidden="true"></i></small>
                
                <br/><br/>
                <small className="pull-left"> <span class="glyphicon glyphicon-calendar"></span> {tableJson['createDate'].substring(0, 10)}</small>
                <small className="pull-right"><i class="fa fa-clock-o"></i> {tableJson['createDate'].substring(11, 20)}</small>
              </h3>
                <hr className="pill" />
            </Link>
          </li>
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
    render(){
      return (
      
        
        <nav className="navbar navbar-static-top">
      
        {/* <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </a> */}
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            {/* Messages: style can be found in dropdown.less*/}

            {/*Notify */}
            <li className="dropdown tasks-menu"   >
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-flag-o" />
                <span className="label label-danger"></span>
              </a>
              <ul className="dropdown-menu">
                {/* <li className="header">Bạn có {this.state.countListNotify} thông báo mới </li> */}
                <li>
                  {/* inner menu: contains the actual data */}
                  <ul className="menu">
                  {/* {this.getNotifi()} */}
                   
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">Xem tất cả công việc</a>
                </li>
              </ul>
            </li>
            {/* Tasks: style can be found in dropdown.less */}
            <li className="dropdown tasks-menu" >
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-bell" />
                <span className="label label-danger">{this.state.countListNotify}</span>
              </a>
              <ul className="dropdown-menu" style={{paddingRight: "10px"}}>
                <li className="header"> Bạn còn <span className="label label-danger">{this.state.countListNotify}</span> thông báo mới . </li>
                <li>
                  {/* inner menu: contains the actual data */}
                  <ul className="menu">
                    {this.getNotifi()}
                    {/* end task item */}
                  </ul>
                </li>
                <li className="footer">
                  <Link to="/trang-chu/tat-ca-thong-bao" >Xem tất cả thông báo</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown user user-menu">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        <i class="fa fa-user" style ={{fontSize:"20px"}} aria-hidden="true"></i>
          <span className="hidden-xs">Hồ sơ</span>
        </a>
        <ul className="dropdown-menu">
          {/* User image */}
          <li className="user-header">
            <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
            <p>
              Alexander Pierce - Web Developer
              <small>Member since Nov. 2012</small>
            </p>
          </li>
          {/* Menu Footer*/}
          <li className="user-footer">
            <div className="pull-left">
              <Link to="/trang-chu/ho-so" className="btn btn-default btn-flat"> Hồ sơ </Link>
            </div>
            <div className="pull-right">
              <a href="#" className="btn btn-default btn-flat">Đăng xuất</a>
            </div>
          </li>
        </ul>
      </li>
          </ul>
        </div>
      </nav>          
        )
    }
}
