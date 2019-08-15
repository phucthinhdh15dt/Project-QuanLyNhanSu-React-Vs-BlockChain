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
      profileid: localStorage.getItem('id'),
      reload: 0
    }
  }
  setprofile(){
    this.setState({ 
      profileid: localStorage.getItem('id')
      });
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
              reposDetail : response.data,
              
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
    setTimeout(this.loadingData(), 4000);
  }
    render(){
      return (
      
        
        <nav className="navbar navbar-static-top">
          {this.setprofile}
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
        
          <center>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsN7_4Pzpjqf1SvLhu6F3aaeayGXE-cCoY5FX-3szRmW7DPKPZ" alt style={{width: "100px", height: "100px"}} className="img-circle img-responsive" />
            </center>
            <p>
              {this.state.reposDetail.username != null ? this.state.reposDetail.username : "" }
              <small> {this.state.reposDetail.email != null ? this.state.reposDetail.email : "" }</small>
            </p>
          </li>
          {/* Menu Footer*/}
          <li className="user-footer">
            <div className="pull-left">
              <Link  to={`/trang-chu/ho-so/${this.state.profileid !=null ? this.state.profileid : ''}`} className="btn btn-default btn-flat"> Hồ sơ </Link>
            </div>
            <div className="pull-right">
              <a href="http://128.199.198.52:8000/admin" target="_blank" className="btn btn-default btn-flat">Trang Quản trị hệ thống</a>
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
