import React, { Component } from 'react'
import './Detail.css';
import {callApi, callApiPaging, callApiDelete } from '../../../utils/ConnectApi';
import history from '../../../RouterURL/history';
import {Line, Bar} from 'react-chartjs-2';
import { Link,Redirect,NavLink  } from 'react-router-dom';
import {callApiInfo, callApiRefresh} from './../../../utils/ConnectApi';
import {callApibyIdHost2} from './../../../utils/ConnectApiHost2';
import Loading from './../../../component/Loading/Loading';
export default class NotificationDetail extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      reposDetail: [],
      listNotifi : [],
      countListNotify : 0,
      zindex : 1
    }
  }
  loadingData = () => {
    var data = {
      "refresh": localStorage.getItem('refreshToken')
      
    };
    var username = {
      "username": localStorage.getItem('username')
      
    };
    callApiInfo('me/',null,localStorage.getItem('token'))
        .then(response => {
            this.setState({ 
              reposDetail : response.data.results[0]
              });
        })
        .catch(function (error) {
          callApiRefresh('api/token/refresh/',data,null)
          .then(responsere => {
            localStorage.setItem('token', responsere.data.access);
          })
          .catch(function (error) {
              console.log(error);
          })
        })
        // get notification
        callApibyIdHost2('TaskNoti',null,"?userName="+username.username)
        .then(response => {
          this.setState({ 
            listNotifi : response.data,
            zindex : -1000
            });
      })
      .catch(function (error) {
          console.log(error);
      })
      // get notification
      callApibyIdHost2('TaskNoti/getNotiCount',null, username.username)
      .then(response => {
        this.setState({ 
          countListNotify : response.data
          });
    })
    .catch(function (error) {
        console.log(error);
    })
  }
  getNotifi = () =>{

    var result =[] ;
      
      if(this.state.listNotifi.length > 0){
         
          result = this.state.listNotifi.map((tableJson, index) =>{
           
            if(tableJson.status === 0){
             
              return <tr>
                      <td><input type="checkbox" /></td>
                      <td className="mailbox-star"><a href="#"><i className="fa fa-calendar text-blue" /> {tableJson['createDate'].substring(0, 10)}</a></td>
                      <td className="mailbox-name"><a href="read-mail.html"></a></td>
                      <td className="mailbox-subject"> <i class="fa fa-star-o text-yellow"></i> {tableJson['contentNotify']}
                      </td>
                      <td className="mailbox-attachment" />
                      <td className="mailbox-date"> <i className="fa fa-clock-o text-blue" /> {tableJson['createDate'].substring(11, 16)}</td>
                    </tr>
            } if(tableJson.status === 1){
              return <tr>
              <td><input type="checkbox" /></td>
              <td className="mailbox-star"><a href="#"><i className="fa fa-calendar text-blue" /> {tableJson['createDate'].substring(0, 10)}</a></td>
              <td className="mailbox-name"><a href="read-mail.html"></a></td>
              <td className="mailbox-subject"><i class="fa fa-star text-yellow"></i>  {tableJson['contentNotify']}
              </td>
              <td className="mailbox-attachment" />
              <td className="mailbox-date"> <i className="fa fa-clock-o text-blue" /> {tableJson['createDate'].substring(11, 16)}</td>
            </tr>
            }
             
          } );
      }else {
        return <li> </li>
      }
   
      return  result;

  }
  componentDidMount (){
    this.loadingData();
  
  }
  render() {
    
    
    return (
      <div className="content-wrapper">
        <Loading  zindex ={this.state.zindex}/>
        <section className="content-header">
          <h1>
            Mailbox
            <small>13 new messages</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li className="active">Mailbox</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-3">
              
              <div className="box box-solid">
                <div className="box-body no-padding">
                  <ul className="nav nav-pills nav-stacked">
                    <li className="active"><a href="#"><i className="fa fa-inbox" /> Thông báo của tôi
                        <span className="label label-primary pull-right">12</span></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /> Thông báo công việc</a></li>
                    <li><a href="#"><i className="fa fa-file-text-o" /> Thông báo cá nhân</a></li>
                    <li><a href="#"><i className="fa fa-filter" /> Tất cả thông báo chưa đọc <span className="label label-warning pull-right">65</span></a>
                    </li>
                    <li><a href="#"><i className="fa fa-trash-o" /> Thùng rác</a></li>
                  </ul>
                </div>
                {/* /.box-body */}
              </div>
              {/* /. box */}
              <div className="box box-solid">
                <div className="box-header with-border">
                  <h3 className="box-title">Chú thích</h3>
                  <div className="box-tools">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                  </div>
                </div>
                <div className="box-body no-padding">
                  <ul className="nav nav-pills nav-stacked">
                  <li><a href="#"><i class="fa fa-star-o text-yellow"></i> Chưa đọc</a></li>
                    <li><a href="#"><i class="fa fa-star text-yellow"></i> Đã đọc </a></li>
                    
                    
                  </ul>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
            <div className="col-md-9">
              <div className="box box-primary" style={{minHeight:'500px'}}>
                <div className="box-header with-border">
                  <h3 className="box-title">Thông báo của tôi</h3>
                  <div className="box-tools pull-right">
                    <div className="has-feedback">
                      <input type="text" className="form-control input-sm" placeholder="Search Mail" />
                      <span className="glyphicon glyphicon-search form-control-feedback" />
                    </div>
                  </div>
                  {/* /.box-tools */}
                </div>
                {/* /.box-header */}
                <div className="box-body no-padding">
                  <div className="mailbox-controls">
                    {/* Check all button */}
                    <button type="button" className="btn btn-default btn-sm checkbox-toggle"><i className="fa fa-square-o" />
                    </button>
                    <div className="btn-group">
                      <button type="button" className="btn btn-default btn-sm"><i className="fa fa-trash-o" /></button>
      
                    </div>
                    {/* /.btn-group */}
                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-refresh" /></button>
                    <div className="pull-right">
                      1-50/200
                      <div className="btn-group">
                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-left" /></button>
                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-right" /></button>
                      </div>
                      {/* /.btn-group */}
                    </div>
                    {/* /.pull-right */}
                  </div>
                  <div className="table-responsive mailbox-messages">
                    <table className="table table-hover table-striped">
                      <tbody>
                      {this.getNotifi()} 
                      </tbody>
                    </table>
                    {/* /.table */}
                  </div>
                  {/* /.mail-box-messages */}
                </div>
                {/* /.box-body */}
                <div className="box-footer no-padding">
                  <div className="mailbox-controls">
                   
                    
                    <div className="pull-right">
                      1-50/200
                      <div className="btn-group">
                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-left" /></button>
                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-right" /></button>
                      </div>
                      {/* /.btn-group */}
                    </div>
                    {/* /.pull-right */}
                  </div>
                </div>
              </div>
              {/* /. box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}
      </div>
      // <div className="content-wrapper">
      //   <Loading  zindex ={this.state.zindex}/>
      // <br/><br/><br/>
      //   <div class="container">
      //     <div class="row">
      //     <div className="col-md-11">
      //   <div className="Thông báo của tôi" style={{minHeight:'350px'}}>
      //     <div className="box-header with-border">
      //       <h3 className="box-title">Tất cả thông báo của tôi</h3>
      //       <div className="box-tools pull-right">
      //         <div className="has-feedback">
      //           <input type="text" className="form-control input-sm" placeholder="Tìm kiếm thông báo" />
      //           <span className="glyphicon glyphicon-search form-control-feedback" />
      //         </div>
      //       </div>
      //       {/* /.box-tools */}
      //     </div>
      //     {/* /.box-header */}
      //     <div className="box-body no-padding">
      //       <div className="mailbox-controls">
      //         {/* Check all button */}
      //         <button type="button" className="btn btn-default btn-sm checkbox-toggle"><i className="fa fa-square-o" />
      //         </button>
      //         <div className="btn-group">
      //           <button type="button" className="btn btn-default btn-sm"><i className="fa fa-trash-o" /></button>
      //         </div>
      //         {/* /.btn-group */}
      //         <button type="button" className="btn btn-default btn-sm"><i className="fa fa-refresh" /></button>
      //         {/* /.pull-right */}
      //       </div>
      //       <div className="table-responsive mailbox-messages">
      //         <table className="table table-hover table-striped">
      //           <tbody>
      //             {this.getNotifi()}  
      //           </tbody>
      //         </table>
      //         {/* /.table */}
      //       </div>
      //       {/* /.mail-box-messages */}
      //     </div>
      //     {/* /.box-body */}
      //     <div className="box-footer no-padding">
      //       <div className="mailbox-controls">
      //         {/* Check all button */}
      //         <div className="pull-right">
      //           1-50/200
      //           <div className="btn-group">
      //             <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-left" /></button>
      //             <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-right" /></button>
      //           </div>
      //           {/* /.btn-group */}
      //         </div>
      //         {/* /.pull-right */}
      //       </div>
      //     </div>
      //   </div>
      //   {/* /. box */}
      // </div>             
      //     </div>
      //   </div>
          
      //     <div className="modal-footer" style={{marginTop : '80px'}}>
      //           <button type="button" className="btn btn-secondary" onClick={this.goBack} >Quay lại</button>
      //         </div>
          
      //   </div>
    )
  }
}
