import React, { Component } from 'react'
import './ModalCreate.css';
import {callApi, callApiPaging, callApiDelete, callApiEdit } from './../../../utils/ConnectApi';
import history from './../../../RouterURL/history';
import {validateformBlank} from './../../../constants/jsCommon/validateForm';


//js 




export default class ModalEdit extends Component {
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
      msg : '',
      arrayTeam : []
    }
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
  edit =() =>{
  if(validateformBlank()){
    var data = {
      "name": this.refs.name.value,
      "birth": this.refs.birth.value,
      "address": this.refs.address.value,
      "level": this.refs.level.value,
      "email":this.refs.email.value,
      "education": this.refs.education.value,
      "day_of_work": 0,
      "day_of_thinking": 0
    };
   
    callApiEdit('developer',data ,null, this.props.match.params.id )
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
    callApiPaging('developer/'+ this.props.match.params.id,null,null,'1')
        .then(response => {
            this.setState({ 
              name: response.data.name,
              birth : response.data.birth,
              address : response.data.address,
              level : response.data.level,
              email : response.data.email,
              education : response.data.education,
              team : response.data.team['name']
              });
        })
        .catch(function (error) {
            console.log(error);
        })
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

  onChangeTeam=(e)=> {
    this.setState({
      team: e.target.value
    });
   
  }
  

  render() {
    
    return (
           
            <div className="container" className="contai">
            
              <div className="row"> 
              <div className="col-md-4">
              </div>
              <div className="col-md-8">
              <br /> <br /> <br />  <br/>
                 <div className="title">
                Sửa Nhân sự
                </div>
                <div style={{paddingLeft: "160px" ,color : "red" ,height: "30px"}} >  {this.state.msg} </div>
                <form  name="myForm">
              <div className="modal-body container">
             
              <div className="row">
                      <div className="col-md-4">
                     
                        <label >Tên nhân sự</label>
                        <input type="text" className="form-control" style={{radius :  "10px"}}
                         value={this.state.name} id="name"  onChange={this.onChangeName}
                         ref='name'
                         />
                      </div>
                      <div className="col-md-2">
                        <label >Ngày sinh</label>
                        <input type="date" className="form-control" name="birth" value={this.state.birth}
                          onChange={this.onChangeBirth}  ref='birth'/>
                      </div>
                </div>
               
                  <div className="row">
                    <div className="col-md-2">
                     
                     <label >Đội(Nhóm)</label>
                     <select className="form-control " value={this.state.team} >
                     {this.selectOptionTeam()}
                    </select>
                   </div>
                   <div className="col-md-4">
                     <label >Email</label>
                     <input type="text" className="form-control" name="email" value={this.state.email}
                      onChange={this.onChangeEmail}   ref='email' id="email" />
                   </div>
                   </div>

                   <div className="row">
                    <div className="col-md-4">
                     
                     <label >Tốt nghiệp trường</label>
                     <input type="text" className="form-control" style={{radius :  "10px"}}
                      value={this.state.education} onChange={this.onChangeEducation} id='education'   ref='education'/>
                   </div>
                   <div className="col-md-2">
                     <label >Cấp độ</label>
                     
                        <select className="form-control " value={this.state.level} ref='level' onChange={this.onChangeLevel}>
                        <option value="FR">Fresher</option>
                        <option value="JR">Junior</option>
                        <option value="SR">Senior</option>
                        <option value="SA">Software Architecture</option>
                        <option value="TD">Team Leader</option>
                        <option value="PM">Project Manager</option>
                      </select>
                   </div>
                   </div>
                   <div className="row">
                   <div className="col-md-6">
                   <label >Địa chỉ </label> <br/>
                   <textarea rows={4} id='address' value={this.state.address} ref='address' onChange={this.onChangeAddress} className="form-control" />
                    {/* <textarea rows={4} classname="form-control" cols={50} ref="address" onchange={this.onChangeAddress} defaultValue={this.state.education} /> */}
                   </div>
                   </div>
                   </div>
                   
               <br/>
              <div className="bt-action">
              <button type="reset" className="btn btn-success">Làm mới </button>
              <button type="button" className="btn btn-success" onClick={this.edit}>Sửa </button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn " onClick={this.goBack} >Quay lại</button>
              </div>
              </form>
              </div>
              </div>
            </div>
          
        
    )
  }
}
