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
})}else{
  
  this.setState({ 
     
    msg : "Có trường không hợp lệ ,xin kiểm tra lại"
    });
}
  }
  goBack=()=>{
    history.goBack('/home/nhan-su-chinh-thuc');
  }
showMsg = () => {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
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
            Thêm chức vụ
              </div>
              <br/>
          <div className="container">
          
          <div className="row">
                  <div className="col-md-6">
                  
                    <label >Tên chức vụ</label>
                    <input type="text" className="form-control" style={{radius :  "10px"}}
                      id="name"  onChange={this.onChangeName}
                      ref='name'
                      />
                  </div>
                  
            </div>
            
              <div className="row">
              <div className="col-md-2">
                  <label >Lương cơ bản </label>
                  <div className="input-group"> 
                    <span className="input-group-addon">$</span>
                  <input type="number" className="form-control" name="email" 
                  onChange={this.onChangeEmail}   ref='email' id="email" />
                  </div>
                </div>
                <div className="col-md-4">
                  
                  <label >Ngôn ngữ lập trình</label>
                  <input type="text" className="form-control" style={{radius :  "10px"}}
                  onChange={this.onChangeEducation} id='education'   ref='education'/>
                </div>
                </div>

                <div className="row">
                
                
                </div>
                <div className="row">
                <div className="col-md-6">
                <label >Mô tả </label> <br/>
                <textarea style={{height : "100px"}} rows={4} id='address' value={this.state.address} ref='address' onChange={this.onChangeAddress} className="form-control" />
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
        <div id="snackbar" >Thêm thành công </div>
        </div>
        </div>
      </div>
          
        
    )
  }
}
