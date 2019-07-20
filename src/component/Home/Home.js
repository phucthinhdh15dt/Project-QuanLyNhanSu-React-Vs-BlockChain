import React, { Component } from 'react'
import {callApi, callApiPaging, callApiDelete } from './../../utils/ConnectApi';
export default class Home extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      countProjects: 0,
      countDevelopers : 0,
      countTeams : 0 ,
      countTasks : 0 ,
      countContracts : 0
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
    callApiPaging('projects',null,null,1)
        .then(async(response) => {
            await this.setState({ 
              countProjects : response.data.count ,
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
              countTeams : response.data.count ,
              });
        })
        .catch(function (error) {
            console.log(error);
        })
  }
  componentDidMount (){
    this.loadingDataProject();
    this.loadingDataTeam();
    this.loadingDataDev();
    this.loadingDataTasks();
    this.loadingDataContracts();
  }
  render() {
    
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
                    <div className="col-md-8">
                      <p className="text-center">
                        <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                      </p>
                      <div className="chart">
                        {/* Sales Chart Canvas */}
                        <canvas id="salesChart" style={{height: '180px'}} />
                      </div>
                      {/* /.chart-responsive */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-4">
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
                        <span className="progress-number"><b>1</b>/{this.state.tasks}</span>
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
                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-green"><i className="fa fa-caret-up" /> 17%</span>
                        <h5 className="description-header">$35,210.43</h5>
                        <span className="description-text">TOTAL REVENUE</span>
                      </div>
                      {/* /.description-block */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-yellow"><i className="fa fa-caret-left" /> 0%</span>
                        <h5 className="description-header">$10,390.90</h5>
                        <span className="description-text">TOTAL COST</span>
                      </div>
                      {/* /.description-block */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-green"><i className="fa fa-caret-up" /> 20%</span>
                        <h5 className="description-header">$24,813.53</h5>
                        <span className="description-text">TOTAL PROFIT</span>
                      </div>
                      {/* /.description-block */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block">
                        <span className="description-percentage text-red"><i className="fa fa-caret-down" /> 18%</span>
                        <h5 className="description-header">1200</h5>
                        <span className="description-text">GOAL COMPLETIONS</span>
                      </div>
                     
                    </div>
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
