import React, { Component } from 'react'
import './ModalCreate.css';
import {callApi, callApiPaging, callApiDelete, callApiEdit,callApiPatch } from './../../../utils/ConnectApi';
import {callApiUpdateProject } from './../../../utils/ConnectApiHost2';
import history from './../../../RouterURL/history';
import {validateformBlank} from './../../../constants/jsCommon/validateForm';
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

export default class ModalEdit extends Component {
  constructor(props) {
    super(props);
   

    this.state = {
      reposDetail: [],
      editStatus : false,
      name : '',
      descriptions : '',
      date_start : '',
      status : 'FR' ,
      process : 0 ,
      team : '',
      msg : '',
      arrayTeam : [],
      descriptionsUpdate: ''
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
  reset =() =>{
    this.loadingData();
  }
   formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
  }
  edit =() =>{
    var check1 = document.getElementById('someSwitchOptionPrimary1').checked; 
    var check = document.getElementById('someSwitchOptionPrimary').checked; 

    if(check==false){
    var d = new Date();
    var time = this.formatDate(d);

    var updateData = {
      "process" : 1,
      "contentUpdateProject": this.refs.descriptionsUpdate.value,
      "username" : localStorage.getItem("username"),
      "status" : 1,
      "dateUpdate" : time,
      "idProject" : this.props.match.params.id,
      "numberUpdateProject" : this.refs.process.value
    }
    var editProcess = {
      "process" : this.refs.process.value
    }
    callApiPatch('project',editProcess,this.props.match.params.id)
    .then(response => {
      
  })
  .catch(function (error) {})

    callApiUpdateProject('UpdateProject', updateData)
    .then(response => {
      this.showMsg();
      this.setState({ 
        editStatus :true , 

        });
     
  })
  .catch(function (error) {})


 }
   

 if(check1 == false){

  var editProcess1 = {
    "name": this.refs.name.value,
    "descriptions":  this.refs.descriptions.value,
    "status": this.refs.status.value,
  }
  callApiPatch('project',editProcess1,this.props.match.params.id)
  .then(response => {
    this.showMsg();
})
.catch(function (error) {})
  
}
}
  goBack=()=>{
    history.goBack('/trang-chu/nhan-su-chinh-thuc');
  }
showMsg = () => {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  loadingData = () => {
    callApiPaging('project/'+ this.props.match.params.id,null,null,'1')
        .then(response => {
          
            this.setState({ 
              status : response.data.status,
              name: response.data.name,
              descriptions : response.data.descriptions,
              date_start : response.data.date_start,
              process : response.data.process,
              email : response.data.email,
              education : response.data.education,
              team : response.data.team[0].name

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
    document.getElementById('someSwitchOptionPrimary').checked = true;
    document.getElementById('update').disabled =true ;
    document.getElementById('process').disabled =true ;
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
  onChangedescriptionsUpdate =(e)=> {
    this.setState({
      descriptionsUpdate: e.target.value
    });
   
  }
  onChangeEmail=(e)=> {
    this.setState({
      email: e.target.value
    });
   
  }
  onChangeProgress=(e)=> {
    this.setState({
      process: e.target.value
    });
   
  }
  

  onChangeLevel=(e)=> {
    this.setState({
      status: e.target.value
    });
   
  }

  onChangeEducation=(e)=> {
    this.setState({
      education: e.target.value
    });
   
  }

  onChangeAddress=(e)=> {
    this.setState({
      descriptions: e.target.value
    });
   
  }

  onChangeTeam=(e)=> {
    this.setState({
      team: e.target.value
    });
   
  }

  checkUpdate=()=>{
  if(document.getElementById('someSwitchOptionPrimary').checked === true){
    document.getElementById('update').disabled =true ;
    document.getElementById('process').disabled =true ;
  }else{
    document.getElementById('update').disabled =false ;
    document.getElementById('process').disabled =false ;
  }
  this.disableEdit();
  }
  disableEdit=()=>{
    if(document.getElementById('someSwitchOptionPrimary1').checked === true && document.getElementById('someSwitchOptionPrimary').checked === true )
    {
      document.getElementById('reset').disabled =true ;
      document.getElementById('edit').disabled =true ;
    }
    else{
      document.getElementById('reset').disabled =false ;
      document.getElementById('edit').disabled =false ;
    }
  }
  checkUpdate1=()=>{
    if(document.getElementById('someSwitchOptionPrimary1').checked === true){
      document.getElementById('name').disabled =true ;
      document.getElementById('team').disabled =true ;
      document.getElementById('status').disabled =true ;
      document.getElementById('descriptions').disabled =true ;
      
    }else{
      document.getElementById('name').disabled =false ;
      document.getElementById('team').disabled =false ;
      document.getElementById('status').disabled =false ;
      document.getElementById('descriptions').disabled =false ;
    }
    this.disableEdit();
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
         
        Cập nhập dự án
  
         </div>

              <div className="modal-body container">
             
              <div className="row">
                   <div className="col-md-4">
                   <li class="list-group-item" style = {{color : "#3c8dbc" , fontWeight: "700"}}>
                   Bạn có muốn cập nhật thông tin dự án ?
                        <div class="material-switch pull-right">
                            <input  id="someSwitchOptionPrimary1" name="someSwitchOption001" onClick={this.checkUpdate1} type="checkbox"/>
                            <label for="someSwitchOptionPrimary1" class="label-primary"></label>
                        </div>
                    </li>
                  
                    </div>
                  
                  </div>
                  <br/>
              <div className="row">
                      <div className="col-md-6">
                     
                        <label >Tên dự án</label>
                        <input type="text" className="form-control" style={{radius :  "10px"}}
                         value={this.state.name} id="name"  onChange={this.onChangeName}
                         ref='name'
                         />
                      </div> 
                </div>
               
                  <div className="row">
                    <div className="col-md-4">
                     
                     <label >Nhóm nhận dự án</label>
                     <select className="form-control " id="team" value={this.state.team} ref="team" onChange={this.onChangeTeam}  >
                     {this.selectOptionTeam()}
                    </select>
                   </div>
                   <div className="col-md-2">
                     <label >Cấp độ</label>
                     
                        <select className="form-control " id="status" value={this.state.status} ref='status' onChange={this.onChangeLevel}>
                        <option value="Active">Kích hoạt</option>
                  <option value="On Processing">Đang thực hiện</option>
                  
                  <option value="Finished">Hoàn thành</option>
                 
                      </select>
                   </div>
                   </div>

          
                   <div className="row">
                   <div className="col-md-6">
                   <label >Mô tả dự án </label> <br/>
                   <textarea style={{height : "100px"}}  rows={4} id='descriptions' value={this.state.descriptions} ref='descriptions' onChange={this.onChangeAddress} className="form-control" />
                    {/* <textarea rows={4} classname="form-control" cols={50} ref="address" onchange={this.onChangeAddress} defaultValue={this.state.education} /> */}
                   </div>
                  
                   </div>
                   <br/>
                   <div className="row">
                   <div className="col-md-4">
                   <li class="list-group-item" style = {{color : "#3c8dbc" , fontWeight: "700"}}>
                   Bạn có muốn cập nhật tiến độ dự án ?
                        <div class="material-switch pull-right">
                            <input  id="someSwitchOptionPrimary" name="someSwitchOption001" onClick={this.checkUpdate} type="checkbox"/>
                            <label for="someSwitchOptionPrimary" class="label-primary"></label>
                        </div>
                    </li>
                  
                    </div>
                  
                  </div>
                  <br/>

                   <div className="row">
                   <div className="col-md-2">
                   <label >Cập nhật tiến độ </label> <br/>
                   <input type="number" className="form-control" style={{radius :  "10px"}} min="1" max="100" 
                         value={this.state.process} id="process"  onChange={this.onChangeProgress}
                         ref='process'/>
                   </div>
                   <div className="col-md-4">
                   
                   <label  style={{marginBottom: "14px"}}>Tiến độ (%) </label> <br/>
                   <div className="progress progress-xs progress-striped active" >
                <div className="progress-bar progress-bar-primary" style={{width: this.state.process+"%"}}  />
                <p style={{color : "#337ab7"}}> {this.state.process}%</p>
               </div>
                   </div>
                   </div>

                   <div className="row">
                   <div className="col-md-6">
                   <label >Mô tả cập nhật </label> <br/>
                   <textarea style={{height : "50px"}}  rows={4} id='update'  ref='descriptionsUpdate' onChange={this.onChangedescriptionsUpdate} className="form-control" />
                    {/* <textarea rows={4} classname="form-control" cols={50} ref="address" onchange={this.onChangeAddress} defaultValue={this.state.education} /> */}
                   </div>
                  
                   </div>
                  

                   
                   </div>
                   
               <br/>
              <div className="bt-action col-md-12 conten-button">
          <center> 
          <button id="reset" type="reset" className="btn btn-primary btn-block margin-bottom" onClick={this.reset}>Làm mới </button>
          <button id="edit" type="button" className="btn btn-primary btn-block margin-bottom" onClick={this.edit}> Cập nhật </button>
          </center>
          </div>
              <div className="modal-footer">
                <button type="button" className="btn " onClick={this.goBack} >Quay lại</button>
              </div>
              <div id="snackbar" >Cập nhật thành công </div>
              </form>
              <br/>
              </div>
              </div>
            </div>
          
        
    )
  }
}
