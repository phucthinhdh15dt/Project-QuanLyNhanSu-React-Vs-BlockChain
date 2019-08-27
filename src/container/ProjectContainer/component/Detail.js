import React, { Component } from 'react'
import './Detail.css';
import {callApi, callApiPaging, callApiDelete } from './../../../utils/ConnectApi';
import {callApibyIdHost2} from './../../../utils/ConnectApiHost2';
import history from './../../../RouterURL/history';
import {Line, Bar} from 'react-chartjs-2';
import { Link,Redirect,NavLink  } from 'react-router-dom';
import LineDetailProject from "./LineDetailProject";
export default class Detail extends Component {
  state = {
    info: [],
    contract: [],
    review: [],
    task: [],
    project: [],
    experience: [],
    degree: [] ,
    team: [],
    updateProjectState: [],
    data : [
      {
        name: '2019-01-01', uv: 0
      },
      {
        name: '2019-01-02', uv: 10
      }
      
    ]
  }
  goBack=()=>{
    history.goBack('/trang-chu/nhan-su-chinh-thuc');
  }
  showListTableReview = (repos) =>{
    var result =[] ;
    
    if(repos.length > 0){
        result = repos.map((tableJson, index) =>{
            return <div className="post">
            <div className="user-block">
                
            
              <span className="username" style={{marginLeft: "0px"}}>
              <i class="fa fa-user-circle" aria-hidden="true" style={{fontSize : '20px',paddingRight: "5px"}}></i>
                <a href="#">{tableJson.author}</a>
                <a href="#" className="pull-right btn-box-tool"><i className="fa fa-times" /></a>
              </span>
              <span className="description"  style={{marginLeft: "28px"}}>{tableJson.date_start.substr(0,10)}   <i className="fa fa-clock-o" />{((tableJson.date_start+"").substr(11,12)).substr(0,5)}</span>
            </div>
            
            <p>
            {tableJson.content}
              
            </p>
            <ul className="list-inline">
              <li><a href="#" className="link-black text-sm"><i className="fa fa-share margin-r-5" /> Dự án : {tableJson.project.name }</a></li>
              
            </ul>
           
          </div>
        } );
    }
 
    return  result;
}    

showListTableTeam =(repos) =>{
  var result =[] ;
  
  if(repos.length > 0){
      result = repos.map((tableJson, index) =>{
          return <tr key={tableJson.index}> 
          <td><span class="label label-primary"> <i class="fa fa-users" aria-hidden="true"></i> {tableJson.name}</span></td>
          
          
      </tr>
      } );
  }

  return  result;
}    
showListUpdateProject =(repos) =>{
  var result =[] ;
  if(repos.length > 0){
      result = repos.map((tableJson, index) =>{
       
    return <ul className="timeline">
      <li className="time-label">
         <span className="bg-green">
         {(tableJson.dateUpdate+"").substr(0,10)}
         </span>
       </li>
      
       <li>
         <i className="bg-blue" /><span class="label label-primary"> {tableJson.numberUpdateProject}%</span>
         <div className="timeline-item">
           <span className="time"><i className="fa fa-clock-o" /> {(tableJson.dateUpdate+"").substr(11,14)}</span>
           <h3 className="timeline-header"><a href="#">{tableJson.username}</a> đã cập nhật</h3>
           <div className="timeline-body">
           {tableJson.contentUpdateProject}
           </div>
          
         </div>
       </li>
       </ul>
      } );
  }

  return  result;
}    


showListTableProject =(repos) =>{
  var result =[] ;
  if(repos.length > 0){
      result = repos.map((tableJson, index) =>{
      
    return <ul className="timeline timeline-inverse">
    <li className="time-label">
      <span className="bg-blue">
      {tableJson.date_start.substr(0,10)}
      </span>
    </li>
    <li>
      <i className="fa fa-tasks bg-blue" />
      <div className="timeline-item">
        <span className="time"><i className="fa fa-clock-o" /> {((tableJson.date_start+"").substr(11,12)).substr(0,5)}</span>
        <h3 className="timeline-header">{tableJson.name}</h3>
        <div className="timeline-body">
        {tableJson.descriptions}
        </div>
        <div className="timeline-footer">
        {tableJson.status === "On Processing" ? <span class='label label-warning'>Đang thực hiện</span> : tableJson.status === "Finished" ? <span class='label label-success'>Finished</span> :  tableJson.status ==="Closed" ?<span class='label label-danger'>Closed</span> : <span class='label label-success'>{tableJson.status} </span> }
          {/* <p className="btn btn-primary btn-xs">Read more</p>
          <a className="btn btn-danger btn-xs">Delete</a> */}
        </div>
      </div>
    </li>
   
   
   
   
  </ul>
      } );
  }

  return  result;
}   

showListTableContract =(repos) =>{
  var result =[] ;
  
  if(repos.length > 0){
      result = repos.map((tableJson, index) =>{
          return <tr key={tableJson.index}> 
          <td>{index+1}</td>
          <td>{tableJson.name}</td>
          <td>{tableJson.descriptions}</td>
          <td>{tableJson.date_start.substring(0,10)}</td>
      </tr>
      } );
  }

  return  result;
}    

showListTableDegree =(repos) =>{
  var result =[] ;
  
  if(repos.length > 0){
      result = repos.map((tableJson, index) =>{
          return <tr key={tableJson.index}> 
          <td>{index+1}</td>
          <td>{tableJson.name}</td>
          <td>{tableJson.descriptions}</td>
          <td>{tableJson.date_start.substring(0,10)}</td>
      </tr>
      } );
  }

  return  result;
}  

  loadingData = () => {
    callApiPaging('project/'+ this.props.match.params.id,null,null,'1')
        .then(response => {
            this.setState({ 
              info: response.data,
              review:  response.data.review ,
              task: response.data.task ,
              project: response.data.project ,
              experience: response.data.experience ,
              degree: response.data.degree ,
              team: response.data.team ,
              });
        })
        .catch(function (error) {
            console.log(error);
        })

        //get danh sach cap nhat du an
        callApibyIdHost2('UpdateProject/find',null,this.props.match.params.id,'1')
        .then(response => {
            this.setState({ 
              updateProjectState : response.data,
              });
        })
        .catch(function (error) {
            console.log(error);
        })


  }
  componentDidMount (){
    this.loadingData();
    
  }
  converData(){
    var data = [];
    for(var i=0; i<this.state.updateProjectState.length ; i++){
      data.push({name: (''+this.state.updateProjectState[i].dateUpdate).substr(0,10), uv: this.state.updateProjectState[i].numberUpdateProject})
    }
    data.push({name: (this.state.info.date_start+'').substr(0,10), uv: 0});
    return data.reverse();
  }
  render() {
    var info = this.state.info;
    var contract =  this.state.contract;
    var review =  this.state.review;
    var project =  this.state.project;
    var task =  this.state.task;
    var experience =  this.state.experience;
    var degree =  this.state.degree;
    var team =  this.state.info.team;
    const data = {
      labels: [
        '2016', '2017', 
        '2018', '2019', 
        
      ],
      datasets: [
        {
          label: 'dự án',
          data: [5,20,30,87],
          fill: true,         
          borderColor: 'green'  
        }
      ]
    }
    const data1= {
      labels: ["Perfect", "Great", "Not Good" ,"Bad"],
      datasets: [{
      label: "Đánh giá",
      backgroundColor: '#666633',
      borderColor: 'rgb(255, 99, 132)',
      data: [5,2,3,4],
      }]
  }
    return (
    
       <div class="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
              <h1>
                Hồ sơ của tôi
              </h1>
              <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                <li><a href="#">Examples</a></li>
                
              </ol>
            </section>
            {/* Main content */}
            <section className="content">
              <div className="row">
                <div className="col-md-3">
                  {/* Profile Image */}
                  <div className="box box-primary">
                    <div className="box-body box-profile">
                    
                   
                      <h3 className="profile-username text-center">{this.state.info.name}</h3>
                      <p className="text-muted text-center">{this.state.info.status = 'On Processing' ? <span className="label label-warning">Đang thực hiện</span>
                       : this.state.info.status = 'Active' ? <span className="label label-success">Đã kích hoạt</span>
                       : this.state.info.status = 'Pending' ? <span className="label label-info">Pending</span>
                       : this.state.info.status = 'Finished' ? <span className="label label-info">Đã hoàn thành</span>
                      : <span className="label label-success">Active</span>
                       
                       }</p>
                      
                      <ul className="list-group list-group-unbordered">
                        <li className="list-group-item">
                          <b>Tiến độ dự án hiện tại</b> <p className="pull-right"> <span class="label label-info">{this.state.info.process} %</span></p>
                        </li>
                        <li className="list-group-item">
                          <b>Trưởng dự án</b> <p className="pull-right">{this.state.info.leader} </p>
                        </li>
                        <li className="list-group-item">
                          <b>Ngày bắt đầu</b> <p className="pull-right">{(this.state.info.date_start+"").substr(0,10)} </p>
                        </li>
                       
                      </ul>
                    
                    </div>
                    {/* /.box-body */}
                  </div>
                  {/* /.box */}
                  {/* About Me Box */}
                  <div className="box box-primary">
                    <div className="box-header with-border">
                      <h3 className="box-title">Thông tin về dự án </h3>
                    </div>
                    {/* /.box-header */}
                    <div className="box-body">
                      <strong><i className="fa fa-book margin-r-5" /> Mô tả dự án</strong>
                      <p className="text-muted">
                      {this.state.info.descriptions}
                      </p>
                      <hr />
                      
                    </div>
                    <div className="box-body">
                      <strong><i className="fa fa-book margin-r-5" /> Nhóm tham gia dự án</strong>
                      <p className="text-muted">
                        
                      {this.showListTableTeam(this.state.team)}
                      </p>
                      <hr />
                      
                    </div>
                    {/* /.box-body */}
                  </div>
                  {/* /.box */}
                </div>
                {/* /.col */}
                <div className="col-md-9">
                  <div className="nav-tabs-custom">
                    <ul className="nav nav-tabs">
                    
                      <li><Link to="#timeline" data-toggle="tab">Quá trình cập nhật tiến độ dự án</Link></li>
                      <li><Link to="#settings" data-toggle="tab">Quá trình hoàn thành dự án</Link></li>
                      {/* <li className="active"><Link to="#activity" data-toggle="tab">Đánh giá</Link></li> */}
                    </ul>
                    <div className="tab-content">
                      <div className="active tab-pane" id="activity" style={{height: "520px", overflow : "scroll"}}>
                      
                      {this.showListUpdateProject(this.state.updateProjectState)}
                       
                      </div>
                      {/* /.tab-pane */}
                      <div className="tab-pane" id="timeline" style={{height: "520px", overflow : "scroll"}}>
                       
                      {this.showListUpdateProject(this.state.updateProjectState)}
                        
                      </div>
                      {/* /.tab-pane */}
                      <div className="tab-pane" id="settings">
                      <LineDetailProject data={this.converData()} /> 
                      </div>
                      {/* /.tab-pane */}
                    </div>
                    {/* /.tab-content */}
                  </div>
                  {/* /.nav-tabs-custom */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </section>
            {/* /.content */}
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={this.goBack} >Quay lại</button>
              </div>
          </div>
          
        
    )
  }
}
