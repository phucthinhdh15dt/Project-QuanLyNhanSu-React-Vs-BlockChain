import React, { Component } from 'react'
import "./thongke.css";
import ChartDoanhThu from "./ChartDoanhThu";
import PieChartDoanhThu from "./PieChartDoanhThu";
import {callApi, callApiPaging, callApiDelete,callApiGetAllAll } from './../../utils/ConnectApi';
import LineDetailProject from "./../../container/ProjectContainer/component/LineDetailProject";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Text,
} from 'recharts';
const data = [
  {
    name: '2013', uv: 7, pv: 1, amt: 1,
  },
  {
    name: '2014', uv: 4, pv: 3, amt: 4,
  },{
    name: '2015', uv: 5, pv: 3, amt: 4,
  },
  {
    name: '2016', uv: 3, pv: 3, amt: 4,
  },
  {
    name: '2017', uv: 5, pv: 2, amt: 6,
  },
  {
    name: '2018', uv: 7, pv: 1, amt: 4,
  },
  {
    name: '2019', uv: 2, pv: 5, amt: 8,
  },
];
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
              countProjects : response.data.count
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
              countTeams : response.data.count ,
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
  showTableDoanhThu = () =>{

    var result =[] ;
      if(data.length > 0){
         
          result = data.map((tableJson, index) =>{
              return  <tr>
              <td style={{width: '10px'}}> {index+1} </td>
              <td>{tableJson['name']}</td>
              <td>{tableJson['uv']}</td>
              <td>{tableJson['pv']}</td>
              <td>{tableJson['amt']}</td>
              <td>{Number(tableJson['uv'])+ Number(tableJson['pv']) + Number(tableJson['amt'])}</td>
            </tr>
             
          } );
      }
      return  result;

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
            <div className="col-md-12">
            <div className="col-md-7">
                {/* LINE CHART */}
                <div className="box box-info">
                  <div className="box-header with-border">
                    <h3 className="box-title">Thống kê số dự án trong các năm </h3>
                    <div className="box-tools pull-right">
                      <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-chart" />
                      </button>
                      <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                    </div>
                  </div>
                  <div className="box-body">
                    <div className="chart">
                    <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
       
        <Legend />
        <Bar dataKey="pv" fill="#00a65a"  /> 
        <Bar dataKey="uv" fill="#f39c12" />
        <Bar dataKey="amt" fill="#dd4b39" />
      </BarChart>
      
      
      <div className="inline">
        <div className="xanh"> </div> <div className="span-text" >Dự án khách hàng hài lòng </div>
      </div> <br/>
      <div className="inline"> 
        <div className="vang"> </div> <div className="span-text" >Dự án tiếp tục duy trì   </div>
      </div> <br/>
      <div className="inline">
        <div className="do"> </div> <div className="span-text" >Dự án khách hàng không hài lòng</div>
      </div>
      
                    </div>
                  </div>
                  {/* /.box-body */}
                </div>
                </div>
                <div className="col-md-5">
                <div className="box">
                  <div className="box-header">
                    <h3 className="box-title">Bảng biểu thống kê dự án các năm</h3>
                    
                  </div>
        {/* /.box-header */}
        <div className="box-body no-padding">
          <table className="table">
            <tbody style={{textAlign : "center"}}>
              <tr>
                <th style={{width: '10px'}}>#</th>
                <th>Năm</th>
                <th>Hài lòng</th>
                <th>Duy trì </th>
                <th>Không hài lòng</th>
                <th>Tổng</th>
              </tr>
              {this.showTableDoanhThu()}
             
            </tbody>
            
            
            </table>
        </div>
      </div>
                </div>
                {/* /.box */}
                </div>  
            <ChartDoanhThu /> 
            <div className="col-md-12">
          {/* LINE CHART */}
          <div className="box box-info">
            <div className="box-header with-border">
                        <strong>Doanh thu theo từng năm</strong>
                      
                      <div className="chart">
                      <LineDetailProject data={this.converData()} /> 
                      </div>
                      {/* /.chart-responsive */}
                    </div>
                    {/* /.col */}
                    
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
            </div>
           
            </div>
          
        
        </section>
      </div>
    )
  }
}
