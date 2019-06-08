import React, {Component} from 'react';
import {Connect} from 'react-redux';
import "./style.css";
import "./loginValidate.js";
import {callApiToken} from './../../utils/ConnectApi';
import history from './../../RouterURL/history';
import { Redirect } from 'react-router-dom'
export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 ,checkLogin : false ,msgError : '' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  checkLogin = () =>{
    var userName = this.refs.username.value ;
    var passWord = this.refs.password.value ;
    if(userName === '' || passWord === '' ){
      this.setState({
        msgError : 'Không được để trống !' 
      });
    }else{
      var data = {
        "username": this.refs.username.value,
        "password": this.refs.password.value
      };
      callApiToken('token',data ,null)
      .then(response => {
        
        if(response.status === 200){
         
        localStorage.setItem('token', response.data.access);
            
        window.location = "http://localhost:3000/home/nhan-su-chinh-thuc";
        }else{
          this.setState({
             msgError : "Tài khoản hoặc mật khẩu không đúng" 
            });
        }
    })
    
  
    }
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
        return (
          
          <div className="background_content" style={{
            height: height,
            backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://www.unido.org/sites/default/files/inline-images/consultancy2_1.jpg')`}}>
         
            <div className="login-box"  >
           
                  {/* /.login-logo */}
                  <div className="login-box-body">
                  <div className="login-logo">
                    <a href="../../index2.html"><b>ADMIN</b></a>
                  </div>
                  <div style={{height : "20px" ,textAlign:"center",color: "red"}}>
                  {this.state.msgError}
                  </div>
                    <p className="login-box-msg">Xin vui lòng đăng nhập để sữ dụng hệ thống</p>
                    <form>
                      <div className="form-group has-feedback">
                        <input type="email" className="form-control username" placeholder="Tài khoản" autoFocus ref="username" />
                        <span className="glyphicon glyphicon-envelope form-control-feedback" />
                      </div>
                      <div className="form-group has-feedback">
                        <input type="password" className="form-control password" placeholder="Mật khẩu" ref="password" />
                        <span className="glyphicon glyphicon-lock form-control-feedback" />
                      </div>
                      <div className="row">
                      <div className="col-xs-1">
                        
                        </div>
                        <div className="col-xs-6">
                          <div className="checkbox icheck">
                            <label>
                              <input type="checkbox" /> Nhớ mật khẩu
                            </label>
                          </div>
                        </div>
                        {/* /.col */}
                        <div className="col-xs-4">
                          <button type="button"  className="btn btn-primary btn-block btn-flat" onClick={this.checkLogin}>Đăng nhập</button>
                        </div>
                        {/* /.col */}
                      </div>
                    </form>
                    
                    <a href="#">Quên mật khẩu</a><br />
                  </div>
                  
                </div>
            </div>
                
                
            )
        }
    }
    const mapStateToProps = state =>{

      return 
    }