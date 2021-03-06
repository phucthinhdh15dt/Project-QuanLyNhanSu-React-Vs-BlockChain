import React, { Component } from 'react'
import './ModalCreate.css';

import {callApi, callApiPaging, callApiDelete, callApiAdd ,callApiRefresh ,registerUser} from './../../../utils/ConnectApi';
import history from './../../../RouterURL/history';
import {validateformBlank} from './../../../constants/jsCommon/validateForm';
import Loading from './../../../component/Loading/Loading';
import {refreshToken} from './../../../utils/token';
//js 




export default class ModalCreate extends Component {
  constructor(props) {
    super(props);
   

    this.state = {
      reposDetail: [],
      username: '',
      pass: '',
      repass: '',
      editStatus : false,
      name : '',
      birth : '',
      address : '',
      level : 'FR' ,
      email : '' ,
      education : '',
      team : '',
      msg : '' ,
      arrayTeam : [],
      zindex : -1000 
    }
  }
 ramdomMS=()=>  {
    
    var random = "1513" ;
    for(var i=0 ;i<6 ;i++){
      random = random+ Math.floor(Math.random() * 9) ;
    }
    return  random ;
  }
  add =() =>{
  if(validateformBlank()){
    var dataRegister = {
      "email":this.refs.email.value,
      "username" : this.refs.username.value,
      "password" : this.refs.pass.value,
    }
   
    var data = {
      "dev_id" : this.ramdomMS(),
      "name": this.refs.name.value,
      "username" : this.refs.username.value,
      "birth": this.refs.birth.value,
      "address": this.refs.address.value,
      "level": this.refs.level.value,
      "email":this.refs.email.value,
      "education": this.refs.education.value,
      "day_of_work": 0,
      "day_of_thinking": 0,
      "team_id" : this.refs.team.value,
    };
    
    callApiAdd('developers',data ,localStorage.getItem('token'))
    .then(response => {
      this.showMsg();
      this.setState({ 
       
        editStatus :true , 
      
        
        });
  })
  .catch(function (error) {
    console.log(error);
    this.setState({ 
     
      msg : "bug"
      });
})
//login
registerUser('users/',dataRegister ,"null")
.then(response => {
  this.showMsg();
  this.setState({ 
   
    editStatus :true , 
  
    
    });
})
.catch(function (error) {
console.log(error);
this.setState({ 
 
  msg : "bug"
  });
})
}else{
  
  this.setState({ 
     
    msg : "Có trường không hợp lệ, xin kiểm tra lại !"
    });
}
  }
  goBack=()=>{
    history.goBack('/trang-chu/nhan-su-chinh-thuc');
  }
showMsg = () => {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
  }
  loadingData = () => {
    
        callApiPaging('teams',null,null,'1')
        .then(response => {
            this.setState({ 
              arrayTeam : response.data.results
              });
        })
        .catch(function (error) {
            console.log(error);
        })

  }
  componentDidMount (){

    refreshToken();
    this.loadingData();
  }
   

  selectOptionTeam =()=>{

    var result =[] ;
      
      if(this.state.arrayTeam.length !== 0){
          result = this.state.arrayTeam.map((item, index) =>{
              return <option value={item.id}>{item.name}</option>
          } );
      }
      return  result;
  }

  

  onChangeName=(e)=> {
    this.setState({
      name: e.target.value
    });
  }
  onChangeBirth =(e)=> {
    this.setState({
      birth: e.target.value
    });
   
  }
  onChangeEmail=(e)=> {
    this.setState({
      email: e.target.value
    });
   
  }

  onChangeLevel=(e)=> {
    this.setState({
      level: e.target.value
    });
   
  }

  onChangeEducation=(e)=> {
    this.setState({
      education: e.target.value
    });
   
  }

  onChangeAddress=(e)=> {
    this.setState({
      address: e.target.value
    });
   
  }
  onChangeTeam =(e)=> {
    this.setState({
      team: e.target.value
    });
   
  }
  onChangeUserName=(e)=> {
    this.setState({
      username: e.target.username
    });
   
  }
  onChangePassword=(e)=> {
    this.setState({
      pass: e.target.pass
    });
   
  }
  onChangeRePassword=(e)=> {
    this.setState({
      repass: e.target.repass
    });
   
  }

  render() {
    
    return (

      <div className="container" className="contai" >
      <br /> <br /> <br />
        <div className="row" > 
          <div className="col-md-4">
            <div className="col-md-4">
      <div className="col-md-4">
    
  </div>
  
</div>
          </div>
          <div className="col-md-7"  >
          
          
            <form className="form-style-9">
            <div className="title">
            Thêm nhân sự mới
              </div>
              <div style={{paddingLeft: "160px" ,color : "red" ,height: "15px"}} >  {this.state.msg} </div>
              <br/>
          <div className="container">
          
          <div className="row">
                  <div className="col-md-4">
                  
                    <label >Tên nhân sự</label>
                    <input type="text" className="form-control" style={{radius :  "10px"}}
                      id="name"  onChange={this.onChangeName}
                      ref='name'
                      />
                  </div>
                  <div className="col-md-2">
                    <label >Ngày sinh</label>
                    <input type="date" className="form-control" name="birth" 
                      onChange={this.onChangeBirth}  ref='birth'/>
                  </div>
            </div>

          

            <div className="row">
            <div className="col-md-2">
                  
                  <label >Tên đăng nhập</label>
                  <input type="text" className="form-control" style={{radius :  "10px"}}
                    id="name"  onChange={this.onChangeUserName}
                    ref='username'
                    />
                </div>
                  <div className="col-md-2">
                  
                    <label >Mật khẩu</label>
                    <input type="password" className="form-control" style={{radius :  "10px"}}
                      id="pass"  onChange={this.onChangePassword}
                      ref='pass'
                      />
                  </div>
                  <div className="col-md-2">
                    <label >Nhập lại mật khẩu</label>
                    <input type="password" className="form-control" id="repass"
                      onChange={this.onChangeRePassword}  ref='repass'/>
                  </div>
            </div>
            
            
              <div className="row">
                <div className="col-md-3">
                  
                  <label >Đội(Nhóm)</label>
                  <select className="form-control "  ref='team' onChange={this.onChangeTeam} >
                  {this.selectOptionTeam()}
                </select>
                </div>
                <div className="col-md-3">
                  <label >Email</label>
                  <input type="text" className="form-control" name="email" 
                  onChange={this.onChangeEmail}   ref='email' id="email" />
                </div>
                </div>

                <div className="row">
                <div className="col-md-4">
                  
                  <label >Tốt nghiệp trường</label>
                  <input type="text" className="form-control" style={{radius :  "10px"}}
                  onChange={this.onChangeEducation} id='education'   ref='education'/>
                </div>
                <div className="col-md-2">
                <label >Cấp độ</label>
                  
                  <select className="form-control " value={this.state.level} ref='level' onChange={this.onChangeLevel}>
                  <option value="Fresher">Fresher</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                  <option value="Software Architecture">Software Architecture</option>
                  <option value="Leader">Team Leader</option>
                  <option value="Project Manage">Project Manager</option>
                </select>
            </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                <label >Địa chỉ </label> <br/>
                <textarea style={{height : "50px"}} rows={4} id='address' value={this.state.address} ref='address' onChange={this.onChangeAddress} className="form-control" />
                </div>
                </div>
                </div>
                
            <br/>
          <div className="bt-action col-md-12 conten-button">
          <center> 
          <button type="reset" className="btn btn-primary btn-block margin-bottom">Làm mới </button>
          <button type="button" className="btn btn-primary btn-block margin-bottom" onClick={this.add}>Thêm </button>
          </center>
          </div>
          
          <div className="modal-footer" >
            <button type="button" className="btn " onClick={this.goBack} >Quay lại</button>
          </div>
          </form>

          </div>
          <div className="col-md-2">
        <br/>
        <div id="snackbar" >Thêm thành công </div>
        </div>
        </div>
      </div>
          
        
    )
  }
}
