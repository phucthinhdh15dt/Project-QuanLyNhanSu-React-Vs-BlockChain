import React, { Component } from 'react'
import './ModalCreate.css';
import {callApi, callApiPaging, callApiDelete, callApiEdit , callApiPagingProfile} from './../../../utils/ConnectApi';
import history from './../../../RouterURL/history';
import {validateformBlank} from './../../../constants/jsCommon/validateForm';

export default class ModalEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reposDetail: [],
      editStatus : false,
      name : '',
      leadTask : '',
      developer : '',
      descriptions: '',
      address : '',
      level : 'FR' ,
      statusTask : '',
      msg : '',
      nameAssignTask : "",
      MSNVAssigTask : "",
      project : [],
      arrayname: [],
      arrayid: [],
      team: "" ,
      arrayDev : [],
     
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
  
  componentDidMount=()=>{
    this.loadingData();
    this.LoadingProfile();
   this.showListTableProject();
 }
 showListTableProject = async(repos) =>{
  var arrayProjectname =[];
  var arrayProjectid =[];
  var arrayProject = [];
await callApiPagingProfile('developer/'+localStorage.getItem('username'))
 .then( response => {
   arrayProject =response.data.project;
 })
 .catch(function (error) {
     console.log(error);
 })
   for(var i =0 ;i <arrayProject.length ;i++ ){
 
   await callApiPaging('project/'+ arrayProject[i],null,null,'1')
 .then( async response => {
   arrayProjectid.push(response.data.id );
   arrayProjectname.push(response.data.name);
 })
 .catch(function (error) {
     console.log(error);
 })

}
await this.setState({
 arrayid: arrayProjectid,
 arrayname: arrayProjectname
});

 
 
 }
  LoadingProfile = async()=>{
    var team = '';
  
     await callApiPagingProfile('developer/'+localStorage.getItem('username'))
      .then( response => {
        team = response.data.team;
          this.setState({
            nameAssignTask : response.data.name ,
            MSNVAssigTask : response.data.dev_id,
            project  : response.data.project,
          });
      })
      .catch(function (error) {
          console.log(error);
      })
      await callApiPaging('team/'+ team,null,null,'1')
      .then( async response => {
          this.setState({
            arrayDev: response.data.dev
          })
      })
      .catch(function (error) {
          console.log(error);
      })
    
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
     
    msg : "Có trường không hợp lệ, xin kiểm tra lại"
    });
}
  }
  goBack=()=>{
    history.goBack('/trang-chu/nhan-su-chinh-thuc');
  }

  loadingData = () => {
    callApiPaging('task/'+ this.props.match.params.id,null,null,'1')
        .then(response => {
            this.setState({ 
              name: response.data.name,
              descriptions : response.data.descriptions,
              status : response.data.status,
              level : response.data.level,
              developer : response.data.developer['name'],
              leadTask : response.data.leadTask['name']
              });
        })
        .catch(function (error) {
            console.log(error);
        })
        
  }
  // componentDidMount (){
  //   this.loadingData();
  // }

  onChangeName=(e)=> {
    this.setState({
      name: e.target.value
    });
  }
  onChangeDescriptions =(e)=> {
    this.setState({
      descriptions: e.target.value
    });
   
  }
  
  onChangeStatusTask=(e)=> {
    this.setState({
      statusTask: e.target.value
    });
   
  }
  onChangeDeveloper=(e)=> {
    this.setState({
      developer: e.target.value
    });
   
  }

  onChangeLevel=(e)=> {
    this.setState({
      level: e.target.value
    });
   
  }

  onChangeLeadTask=(e)=> {
    this.setState({
      leadTask: e.target.value
    });
   
  }
  showTeam=(repos)=>{
    var result =[] ;
      
    if(repos.length > 0){
        result = repos.map((tableJson, index) =>{
            return <option value={tableJson.id}>{tableJson.name + " - " + tableJson.dev_id}  </option>
        } );
    }
 
    return  result;
  
  }

  showListProject=(id,name)=>{
    var result = [];
    if(id.length > 0){
      result = id.map((tableJson, index) =>{
         return <option value={tableJson[index]}>{name[index]}</option>
      } );
  }
  return  result;
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
            Sửa công việc 
              </div>
              <div style={{paddingLeft: "160px" ,color : "red" ,height: "15px"}} >  {this.state.msg} </div>
              <br/>
          <div className="container">
          
          <div className="row">
                      <div className="col-md-6">
                     
                        <label >Tên công việc</label>
                        <input type="text" className="form-control" style={{radius :  "10px"}}
                         value={this.state.name} id="name"  onChange={this.onChangeName}
                         ref='name'
                         />
                      </div>
                      
                </div>
               
                  <div className="row">
                    <div className="col-md-3">
                     
                     <label >Người giao việc</label>
                     
                     <input type="text" readOnly className="form-control" name="leadTask" value={this.state.nameAssignTask+' - ' + this.state.MSNVAssigTask}
                      onChange={this.onChangeLeadTask}   ref='leadTask' id="leadTask" />
                  
                   </div>
                   <div className="col-md-3">
                     <label >Người nhận việc(Mã số nhân viên)</label>
                     {/* <input type="text" className="form-control" name="developer" value={this.state.developer}
                      onChange={this.onChangeDeveloper}   ref='developer' id="developer" /> */}
                       <select className="form-control " value={this.state.developer} ref='developer' onChange={this.onChangeLevel}>
                        {this.showTeam(this.state.arrayDev)}
                        
                      </select>

                     
                   </div>
                   </div>
                   <div className="row">
                   <div className="col-md-6">
                     <label >Dự án</label>
                     
                        <select className="form-control "  ref='project' onChange={this.onChangeProject}>
                        {this.showListProject(this.state.arrayid,this.state.arrayname)}
                        
                        
                        
                      </select>
                   </div>
                  
                   </div>

                   <div className="row">
                   <div className="col-md-3">
                     <label >Mức độ</label>
                     
                        <select className="form-control " value={this.state.level} ref='level' onChange={this.onChangeLevel}>
                        <option value="Easy">EASY</option>
                        <option value="Medium">MEDIUM</option>
                        <option value="Hard">HARD</option>
                        <option value="Extreme Hard">EXTREMELY</option>
                        
                        
                      </select>
                   </div>
                   <div className="col-md-3">
                     <label >Trạng thái</label>
                     
                        <select className="form-control " value={this.state.statusTask} ref='statusTask' onChange={this.onChangeStatusTask}>
                        <option value="Active" >ACTIVE</option>
                        <option value="On Processing">ON PROCESSING</option>
                        <option value="Pending">PENDING</option>
                        <option value="Finished">FINISHED</option>
                        <option value="Closed">CLOSED</option>
                        
                      </select>
                   </div>
                   </div>
                   <div className="row">
                   <div className="col-md-6">
                   <label >Mô tả công việc</label> <br/>
                   <textarea rows={4} id='address' value={this.state.descriptions} ref='address' onChange={this.onChangeDescriptions} className="form-control" />
                   
                   </div>
                   </div>
                   </div>
                   
              <br/>
          <div className="bt-action col-md-12 conten-button">
          <center> 
          <button type="reset" className="btn btn-primary btn-block margin-bottom">Làm mới </button>
          <button type="button" className="btn btn-primary btn-block margin-bottom"  onClick={this.edit}>Giao việc </button>
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
