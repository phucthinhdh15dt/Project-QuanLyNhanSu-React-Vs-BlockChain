import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {callApi, callApiPaging, callApiDelete, callApiGetAllAll } from './../../utils/ConnectApi';
import LineDetailProject from "../../container/ProjectContainer/component/LineDetailProject";
export default class Home extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      countProjects: 0,
      countDevelopers : 0,
      countTeams : 0 ,
      countTasks : 0 ,
      countContracts : 0,
      
      reposProject :[],
      count : 0 ,
      data : []
    }
  }
  loadingDataDev =async () => {
    callApiPaging('developers',null,null,1)
        .then(async(response) => {
            await this.setState({ 
              countDevelopers : response.data.count ,
              });
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  loadingDataContracts =async () => {
    callApiPaging('contract',null,null,1)
        .then(async(response) => {
            await this.setState({ 
              countContracts : response.data.count ,
              });
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  loadingDataTasks =async () => {
    callApiPaging('tasks',null,null,1)
        .then(async(response) => {
            await this.setState({ 
              countTasks : response.data.count ,
              });
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  loadingDataProject =async () => {
    
    callApiGetAllAll('projects',null)
        .then(async(response) => {
            await this.setState({ 
              reposProject : response.data.results ,
              });
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  loadingDataTeam =async () => {
    callApiPaging('teams',null,null,1)
        .then(async(response) => {
            await this.setState({ 
              repos: response.data.results,
              count : response.data.count ,
              });
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  loadingData =async () => {
     
    callApiPaging('projects',null,null,this.state.page)
        .then(async(response) => {
            await this.setState({ 
              reposProject: response.data.results,
              count : response.data.count
              });
        })
        .catch(function (error) {
            console.log(error);
        })

  }

  showListTable = (repos) =>{
    var result =[] ;
    if(repos.length > 0){
        result = repos.map((tableJson, index) =>{
          if(index >= repos.length-8 ){
            return <tr key={tableJson.index}> 
            <td style={{width : "250px"}}>{tableJson['name']}</td>
            <td>
            {tableJson['status']=== "Active" ? <label style={{width: "100%"}} className="btn btn-xs btn-danger pull-right"> Đã kích hoạt</label> : '' }
              {tableJson['status']=== "On Processing" ? <label style={{width: "100%"}} className="btn btn-xs btn-warning pull-right">Đang thực hiện</label> : '' }
              {tableJson['status']=== "Finished" ? <label style={{width: "100%"}} className="btn btn-xs btn-success pull-right">Đã hoàn thành</label> : '' }
            </td>
            <td  style={{textAlign: "center"}}>{tableJson['date_start'].substr(0,10)}</td>
        </tr>
          }
        } );
    }
 
    return  result;
}    

  componentDidMount (){
    this.loadingDataProject();
    this.loadingDataTeam();
    this.loadingDataDev();
    this.loadingDataTasks();
    this.loadingDataContracts();
  }

  converData(){
    var data = [];
    
    
    data.push(
      {name: "2016", uv: 100000},
      {name: "2017", uv: 150000},
      {name: "2018", uv: 300000},
      {name: "2019", uv: 250000},
      );
    return data;
  }
  render() {
    var repos = this.state.reposProject;
    return (
        <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Dashboard
            <small>Version 2.0</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li className="active">Dashboard</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          {/* Info boxes */}
          <div className="row">
            {/* /.col */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-red"><i className="fa ion-code-working" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Tổng số dự án </span>
                  <span className="info-box-number">{this.state.countProjects}</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            {/* fix for small devices only */}
            <div className="clearfix visible-sm-block" />
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-green"><i className="ion ion-ios-contact" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Tổng số nhân sự</span>
                  <span className="info-box-number">{this.state.countDevelopers}</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-yellow"><i className="ion ion-ios-people-outline" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Tổng số nhóm</span>
                  <span className="info-box-number">{this.state.countTeams}</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-md-12">
              <div className="box">
                <div className="box-header with-border">
                  <h3 className="box-title">Báo cáo tháng trước</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    <div className="btn-group">
                      <button type="button" className="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-wrench" /></button>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li className="divider" />
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <div className="row">
                    <div className="col-md-9">
                      <p className="text-center">
                        <strong>Doanh thu theo từng năm</strong>
                      </p>
                      <div className="chart">
                      <LineDetailProject data={this.converData()} /> 
                      </div>
                      {/* /.chart-responsive */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-3">
                      <p className="text-center">
                        <strong>Tổng quan</strong>
                      </p>
                      <div className="progress-group">
                        <span className="progress-text">Số dự án hoàn thành</span>
                        <span className="progress-number"><b>30</b>/{this.state.countProjects}</span>
                        <div className="progress sm">
                          <div className="progress-bar progress-bar-aqua" style={{width: '30%'}} />
                        </div>
                      </div>
                      {/* /.progress-group */}
                      <div className="progress-group">
                        <span className="progress-text">Tổng số công việc</span>
                        <span className="progress-number">400</span>
                        <div className="progress sm">
                          <div className="progress-bar progress-bar-red" style={{width: '50%'}} />
                        </div>
                      </div>
                      {/* /.progress-group */}
                      <div className="progress-group">
                        <span className="progress-text">Nhân sự mới trong năm</span>
                        <span className="progress-number"><b>2/</b>{this.state.countDevelopers}</span>
                        <div className="progress sm">
                          <div className="progress-bar progress-bar-green" style={{width: '80%'}} />
                        </div>
                      </div>
                      {/* /.progress-group */}
                      <div className="progress-group">
                        <span className="progress-text">Hợp đồng</span>
                        <span className="progress-number"><b>250</b>/{this.state.countContracts}</span>
                        <div className="progress sm">
                          <div className="progress-bar progress-bar-yellow" style={{width: '80%'}} />
                        </div>
                      </div>
                      {/* /.progress-group */}
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* ./box-body */}
                <div className="box-footer">
                  <div className="row">
                    <div className="col-sm-6 col-xs-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-green"><i className="fa fa-caret-up" /> 17%</span>
                        <h5 className="description-header">50 nhân sự</h5>
                        <span className="description-text">Tổng số nhân sự</span>
                      </div>
                      {/* /.description-block */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-6 col-xs-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-yellow"><i className="fa fa-caret-down" /> 12%</span>
                        <h5 className="description-header">100</h5>
                        <span className="description-text">Tổng dự án</span>
                      </div>
                      {/* /.description-block */}
                    </div>
                    {/* /.col */}
                    
                  </div>
                  <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Các dự án gần đây được bắt đầu</h3>
          <div className="box-tools pull-right">
            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
            </button>
            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
          </div>
        </div>
        {/* /.box-header */}
        <div className="box-body">
          <div className="col-sm-7 col-xs-7">
            <table className="table no-margin">
              <thead>
                <tr>
                  <th  style={{textAlign: "center"}}>Tên dự án</th>
                  <th  style={{textAlign: "center"}}>TRẠNG THÁI</th>
                  <th  style={{textAlign: "center"}}>NGÀY BẮT ĐẦU</th>
                  
                </tr>
              </thead>
              <tbody>
             
                {this.showListTable(repos)}
              </tbody>
            </table>

            
          </div>
          <br/><br/><br/>
          <div className="info-box  col-sm-5 col-xs-5">
      <div className="info-box bg-yellow" >
        <span className="info-box-icon"><i className="ion ion-ios-pricetag-outline" /></span>
        <div className="info-box-content">
          <span className="info-box-text">Tổng số dự án đã hoàn thành</span>
          <span className="info-box-number">200</span>
          <div className="progress">
            <div className="progress-bar" style={{width: '50%'}} />
          </div>
          <span className="progress-description">
          Trong năm 2019
          </span>
        </div>
        {/* /.info-box-content */}
      </div>
        <div className="info-box bg-green">
          <span className="info-box-icon"><i className="ion ion-ios-heart-outline" /></span>
          <div className="info-box-content">
            <span className="info-box-text">Tổng số dự án khách hàng không hài lòng</span>
            <span className="info-box-number">180</span>
            <div className="progress">
              <div className="progress-bar" style={{width: '20%'}} />
            </div>
            <span className="progress-description">
            Trong năm 2019
            </span>
          </div>
          {/* /.info-box-content */}
        </div>
        {/* /.info-box */}
        <div className="info-box bg-red">
          <span className="info-box-icon"><i className="ion ion-ios-cloud-download-outline" /></span>
          <div className="info-box-content">
            <span className="info-box-text">Tổng số dự án khách hàng hài lòng</span>
            <span className="info-box-number">20</span>
            <div className="progress">
              <div className="progress-bar" style={{width: '70%'}} />
            </div>
            <span className="progress-description">
              Trong năm 2019
            </span>
          </div>
          {/* /.info-box-content */}
        </div>
      </div>
         
        </div>
        {/* /.box-body */}
        <div className="box-footer clearfix">
        
          <Link to="/trang-chu/du-an/danh-sach-du-an" className="btn btn-sm btn-info btn-flat pull-left"> Xem tất cả </Link>
        </div>
        {/* /.box-footer */}
      </div>
      

      
                  
                </div>
              
              </div>
              
            </div>
           
          </div>
       
        
        </section>
      </div>
    )
  }
}
