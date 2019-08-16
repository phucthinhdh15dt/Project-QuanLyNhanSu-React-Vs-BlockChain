import React, { Component } from 'react'
import './ModalCreate.css';
import {callApi, callApiPaging, callApiDelete, callApiAdd ,callApiRefresh ,registerUser} from './../../../utils/ConnectApi';
import history from './../../../RouterURL/history';
import {validateformBlank} from './../../../constants/jsCommon/validateForm';
import Loading from './../../../component/Loading/Loading';
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

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
  add =() =>{
  
  
   
    var data = {
      "name": this.refs.name.value,
      "descriptions": this.refs.address.value,
      "status": this.refs.level.value,
      "level": "Easy",
      "process": 1,
      "num_member": 0,
      "leader": "Đàm Quang Khoa",
      "developers": [
        "33"
      ],
      "team": [
        this.refs.team.value
      ]
    };
    
    callApiAdd('projects',data ,localStorage.getItem('token'))
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
            Thêm dự án mới
              </div>
              <div style={{paddingLeft: "160px" ,color : "red" ,height: "15px"}} >  {this.state.msg} </div>
              <br/>
          <div className="container">
          
          <div className="row">
                  <div className="col-md-4">
                  
                    <label >Tên dự án</label>
                    <input type="text" className="form-control" style={{radius :  "10px"}}
                      id="name"  onChange={this.onChangeName}
                      ref='name'
                      />
                  </div>
                  <div className="col-md-2">
                    <label >Tiến độ </label>
                    <input type="text" className="form-control" name="birth" 
                      onChange={this.onChangeBirth}  ref='birth' value="0%" disabled/>
                  </div>
            </div>

            
              <div className="row">
                <div className="col-md-4">
                  
                  <label >Nhóm nhận dự án</label>
                  <select className="form-control "  ref='team' onChange={this.onChangeTeam} >
                  {this.selectOptionTeam()}
                </select>
                </div>
                <div className="col-md-2">
                <label >Chọn trạng thái</label>
                  
                  <select className="form-control " value={this.state.level} ref='level' onChange={this.onChangeLevel}>
                  <option value="Active">ACTIVE</option>
                  <option value="On Processing">ON PROCESSING</option>
                  <option value="Pending">PENDING</option>
                  <option value="Finished">FINISHED</option>
                  <option value="Closed">CLOSED</option>
            
                </select>
            </div>
                
                </div>

                
                <div className="row">
                <div className="col-md-6">
                <label >Mô tả dự án </label> <br/>
                <textarea style={{height : "100px"}} rows={4} id='address' value={this.state.address} ref='address' onChange={this.onChangeAddress} className="form-control" />
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
