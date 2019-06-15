import React, { Component } from 'react'
import './ModalCreate.css';
import {callApi, callApiPaging, callApiDelete, callApiAdd } from './../../../utils/ConnectApi';
import history from './../../../RouterURL/history';
import {validateformBlank} from './../../../constants/jsCommon/validateForm';
import Loading from './../../../component/Loading/Loading';

//js 




export default class ModalCreate extends Component {
  constructor(props) {
    super(props);
   

    this.state = {
      reposDetail: [],
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
  add =() =>{
  if(validateformBlank()){
   
    var data = {
      "name": this.refs.name.value,
      "birth": this.refs.birth.value,
      "address": this.refs.address.value,
      "level": this.refs.level.value,
      "email":this.refs.email.value,
      "education": this.refs.education.value,
      "day_of_work": 0,
      "day_of_thinking": 0,
      "team_id" : this.refs.team.value
    };
    
    callApiAdd('developers',data ,localStorage.getItem('token'))
    .then(response => {
      this.setState({ 
       
        editStatus :true , 
        msg : "Thành công"
        
        });
  })
  .catch(function (error) {
    console.log(error);
    this.setState({ 
     
      msg : "bug"
      });
})}else{
  
  this.setState({ 
     
    msg : "Có trường không hợp lệ ,xin kiểm tra lại"
    });
}
  }
  goBack=()=>{
    history.goBack('/home/nhan-su-chinh-thuc');
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
                 
                Quản lý nhân sự
          
                 </div>
                 <div style={{paddingLeft: "200px" ,zIndex : "1" ,color : "red" ,height: "13px" ,fontSize : "13px",fontWeight: "700"}} >  {this.state.msg} </div>
                 <br/>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '70px', width: '100%'}}>
                    <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#e1efe3'}} />
                   
                  </svg>
                  
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
                   <textarea rows={4} id='address' value={this.state.address} ref='address' onChange={this.onChangeAddress} className="form-control" />
                   </div>
                   </div>
                   </div>
                   
               <br/>
              <div className="bt-action col-md-12" >
              <center> 
              <button type="reset" className="btn btn-success">Làm mới </button>
              <button type="button" className="btn btn-success" onClick={this.add}>Thêm </button>
              </center>
              </div>
              
              <div className="modal-footer" >
                <button type="button" className="btn " onClick={this.goBack} >Quay lại</button>
              </div>
              </form>

              </div>
              <div className="col-md-2">
              <br/>
              </div>
              </div>
            </div>
          
        
    )
  }
}
