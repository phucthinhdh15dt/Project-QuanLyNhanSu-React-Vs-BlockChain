// Header.js
import React, {Component} from 'react';
import {callApiInfo} from './../../utils/ConnectApi';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class HeaderTop extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      reposDetail: []
    }
  }
  loadingData = () => {
    callApiInfo('me/',null,localStorage.getItem('token'))
        .then(response => {
            this.setState({ 
              reposDetail : response.data.results[0]
              });
        })
        .catch(function (error) {
            console.log(error);
        })
  }
  componentDidMount (){
    this.loadingData();
  }
    render(){
      return (
      
        
        <nav className="navbar navbar-static-top">
      
        <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </a>
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            {/* Messages: style can be found in dropdown.less*/}
            
            
            {/* Tasks: style can be found in dropdown.less */}
            <li className="dropdown tasks-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-flag-o" />
                <span className="label label-danger">4</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">Bạn còn 4 công việc chưa hoàn thành </li>
                <li>
                  {/* inner menu: contains the actual data */}
                  <ul className="menu">
                    <li>{/* Task item */}
                      <a href="#">
                        <h3>
                          Design some buttons
                          <small className="pull-right">20%</small>
                        </h3>
                        <div className="progress xs">
                          <div className="progress-bar progress-bar-aqua" style={{width: '20%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                            <span className="sr-only">20% Complete</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* end task item */}
                    <li>{/* Task item */}
                      <a href="#">
                        <h3>
                          Create a nice theme
                          <small className="pull-right">40%</small>
                        </h3>
                        <div className="progress xs">
                          <div className="progress-bar progress-bar-green" style={{width: '40%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                            <span className="sr-only">40% Complete</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* end task item */}
                    <li>{/* Task item */}
                      <a href="#">
                        <h3>
                          Some task I need to do
                          <small className="pull-right">60%</small>
                        </h3>
                        <div className="progress xs">
                          <div className="progress-bar progress-bar-red" style={{width: '60%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                            <span className="sr-only">60% Complete</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* end task item */}
                    <li>{/* Task item */}
                      <a href="#">
                        <h3>
                          Make beautiful transitions
                          <small className="pull-right">80%</small>
                        </h3>
                        <div className="progress xs">
                          <div className="progress-bar progress-bar-yellow" style={{width: '80%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                            <span className="sr-only">80% Complete</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* end task item */}
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">View all tasks</a>
                </li>
              </ul>
            </li>
            {/* User Account: style can be found in dropdown.less */}
            <li className="dropdown user user-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src="../../dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                <span className="hidden-xs">{this.state.reposDetail.username}</span>
              </a>
              <ul className="dropdown-menu">
                {/* User image */}
                <li className="user-header">
                  <img src="http://vlkhanhhoa.vieclamvietnam.gov.vn/images/avatar2-large.jpg" className="img-circle" alt="User Image" />
                  <p>
                    <small>{this.state.reposDetail.email}</small>
                  </p>
                </li>
               
                {/* Menu Footer*/}
                <li className="user-footer">
                  <div className="pull-left">
                  <Link to="/profile"><i className="fa fa-circle-o" /> Profile </Link>
                    
                  </div>
                 
                </li>
              </ul>
            </li>
            {/* Control Sidebar Toggle Button */}
            <li>
              <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
            </li>
          </ul>
        </div>
      </nav>
          
        )
    }
}
