import React, {Component} from 'react';
import {Connect} from 'react-redux';
// import "./style.css";
import "./loginValidate.js";
import {callApiToken,callApiInfo,callApiPaging ,callApiInfoLogin} from './../../utils/ConnectApi';
import history from './../../RouterURL/history';
import { Redirect, Link } from 'react-router-dom'
export default class Error extends Component {
  state = {
    redirect: false
  }
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 ,checkLogin : false ,msgError : '' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
    render(){
      const {height} = this.state ;
      const {msg} = this.state.msgError ;
      const { redirect } = this.state;

      if (redirect) {
        return <Redirect  to='/trang-chu'/>;
      }
        return (
          
            <div style={{backgroundImage: "url(https://cdn.dribbble.com/users/195330/screenshots/1545094/attachments/235536/21_404-error.png)", width : window.innerWidth,height : window.innerHeight,
            backgroundRepeat: "no-repeat" ,backgroundPosition:"center", backgroundSize: "cover"}}>
                {/* <img style={{height: "auto", width: "100%" }} src="https://cdn.dribbble.com/users/195330/screenshots/1545094/attachments/235536/21_404-error.png" /> */}
       
             </div>
         
          
                
                
            )
        }
    }
    const mapStateToProps = state =>{

      return 
    }