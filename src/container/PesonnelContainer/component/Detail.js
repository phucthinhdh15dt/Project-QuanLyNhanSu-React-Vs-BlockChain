import React, { Component } from 'react'
import './Detail.css';
import {callApi, callApiPaging, callApiDelete } from './../../../utils/ConnectApi';
import history from './../../../RouterURL/history';
import {Line, Bar} from 'react-chartjs-2';
import { Link,Redirect,NavLink  } from 'react-router-dom';
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
  }
  goBack=()=>{
    history.goBack('/trang-chu/nhan-su-chinh-thuc');
  }
  showListTableReview = (repos) =>{
    var result =[] ;
    
    var result =[] ;
    
    if(repos.length > 0){
        result = repos.map((tableJson, index) =>{
            return <div className="post">
            <div className="user-block">
                
              <img className="img-circle img-bordered-sm" src="https://getstickerpack.com/images/ic_launcher-web.png" alt="user image" />
              <span className="username">
                <p style={{color: "#337ab7"}}>{tableJson.author}</p>
                <a href="#" className="pull-right btn-box-tool"><i className="fa fa-times" /></a>
              </span>
              <span className="description">{tableJson.date_start.substr(0,10)}   <i className="fa fa-clock-o" /> {((tableJson.date_start+"").substr(11,12)).substr(0,5)}</span>
            </div>
            
            <p>
            {tableJson.content}
              
            </p>
            
            <ul className="list-inline">
            <li ><p  to={`/trang-chu/du-an/chi-tiet/${tableJson.project.id }`} className="link-black text-sm"><i className="fa fa-share margin-r-5" />Công việc: {tableJson.task.name }</p></li>
              <br/>

              <li ><NavLink style={{color: "#337ab7"}} to={`/trang-chu/du-an/chi-tiet/${tableJson.project.id }`} className="link-black text-sm"><i className="fa fa-share margin-r-5" />Dự án : {tableJson.project.name }</NavLink></li>
              
            </ul>
           
          </div>
        } );
    }
 
    return  result;
}    

showListTableProject =(repos) =>{
  var result =[] ;
  
  if(repos.length > 0){
      result = repos.map((tableJson, index) =>{
          return <tr key={tableJson.index}> 
          <td>{index+1}</td>
          <td>{tableJson.name}</td>
          <td>{tableJson.descriptions}</td>
          <td>{tableJson.leader}</td>
          <td>{tableJson.date_start.substring(0,10)}</td>
      </tr>
      } );
  }

  return  result;
}    
showListTableTasks =(repos) =>{
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
        {tableJson.status === "ON_PROCESSING" ? <span class='label label-warning'>Đang thực hiện</span> : tableJson.status === "FINISHED" ? <span class='label label-success'>Đã hoàn thành</span> :  tableJson.status ==="ACTIVE" ?<span class='label label-danger'>Chưa hoàn thành</span> : <span class='label label-success'>{tableJson.status} </span> }
        
 
          
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
        {tableJson.status === "On Processing" ? <span class='label label-warning'>Đang thực hiện</span> : tableJson.status === "Finished" ? <span class='label label-success'>Đã hoàn thành</span> :  tableJson.status ==="Active" ?<span class='label label-danger'>Đã kích hoạt</span> : <span class='label label-success'>{tableJson.status} </span> }
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
    callApiPaging('developer/'+ this.props.match.params.id,null,null,'1')
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

  }
  componentDidMount (){
    this.loadingData();
  }
  render() {
    var info = this.state.info;
    var contract =  this.state.contract;
    var review =  this.state.review;
    var project =  this.state.project;
    var task =  this.state.task;
    var experience =  this.state.experience;
    var degree =  this.state.degree;
    var team =  this.state.team;
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
                    
                    <h3 className="profile-username text-center"><img src="http://avinaa.com/media/uploads/cms/images-personel-erkek_QBNW-1.png" alt  style={{width: "150px", height: "150px"}} /></h3>
                      <h3 className="profile-username text-center">{this.state.info.name}</h3>
                      <p className="text-muted text-center">{this.state.info.level}</p>
                      <ul className="list-group list-group-unbordered">
                        <li className="list-group-item">
                          <b>Số dự án đã tham gia</b> <p className="pull-right">{this.state.project.length} dự án</p>
                        </li>
                        <li className="list-group-item">
                          <b>Số năm làm việc</b> <p className="pull-right">{this.state.info.day_of_work} năm </p>
                        </li>
                        <li className="list-group-item">
                          <b>Thuộc nhóm</b> <p className="pull-right">{this.state.team.name} </p>
                        </li>
                       
                      </ul>
                      
                    </div>
                    {/* /.box-body */}
                  </div>
                  {/* /.box */}
                  {/* About Me Box */}
                  <div className="box box-primary">
                    <div className="box-header with-border">
                      <h3 className="box-title">Thông tin </h3>
                    </div>
                    {/* /.box-header */}
                    <div className="box-body">
                      <strong><i className="fa fa-book margin-r-5" /> Tốt nghiệp trường:</strong>
                      <p className="text-muted">
                      {this.state.info.education}
                      </p>
                      <hr />
                      <strong><i className="fa fa-map-marker margin-r-5" /> Địa chỉ :</strong>
                      <p className="text-muted"> {this.state.info.address}</p>
                      <hr />
                      <strong><i className="fa fa-calendar margin-r-5" aria-hidden="true"></i>  Ngày sinh :</strong>
                      <p className="text-muted"> {this.state.info.birth}</p>
                      <hr />
                      <strong><i className="fa fa-envelope-open-o margin-r-5" aria-hidden="true"></i>  Email: </strong>
                      <p className="text-muted"> {this.state.info.email}</p>
                      <hr />
                      <strong><i className="fa fa-pencil margin-r-5" /> kỹ năng</strong>
                      <p>
                        <span className="label label-danger">UI Design</span>
                        <span className="label label-success">Coding</span>
                        <span className="label label-info">Javascript</span>
                        <span className="label label-warning">PHP</span>
                        
                      </p>
                      <hr />
                      <strong><i className="fa fa-file-text-o margin-r-5" /> Mô tả bản thân</strong>
                      <p>Có được thành quả hay không là do bạn cố gắng như thế nào !</p>
                    </div>
                    {/* /.box-body */}
                  </div>
                  {/* /.box */}
                </div>
                {/* /.col */}
                <div className="col-md-9">
                  <div className="nav-tabs-custom">
                    <ul className="nav nav-tabs">
                    
                      <li><Link to="#timeline" data-toggle="tab">Công việc</Link></li>
                      <li><Link to="#settings" data-toggle="tab">Dự án</Link></li>
                      <li className="active"><Link to="#activity" data-toggle="tab">Đánh giá</Link></li>
                    </ul>
                    <div className="tab-content">
                      <div className="active tab-pane" id="activity" style={{height: "900px", overflow : "scroll"}}>
                      
                        {this.showListTableReview(review)}
                       
                      </div>
                      {/* /.tab-pane */}
                      <div className="tab-pane" id="timeline" style={{height: "900px", overflow : "scroll"}}>
                       {this.showListTableTasks(task)}
                        
                        
                      </div>
                      {/* /.tab-pane */}
                      <div className="tab-pane" id="settings" style={{height: "900px", overflow : "scroll"}}>
                      {this.showListTableProject(project)}
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
