import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {callApiInfo} from './../../utils/ConnectApi';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      reposDetail: []
    }
  }
  loadingData = () => {
    callApiInfo('me/',null,localStorage.getItem('token'))
        .then(response => {
            this.setState({ 
              reposDetail : response.data.results[0]
              });
        })
        .catch(function (error) {
            console.log(error);
        })
  }
  componentDidMount (){
    this.loadingData();
  }
  logout = () =>{
    localStorage.removeItem('token');
  }

    render(){
        return (
          <div  >
             
          
    
            <aside className="main-sidebar" style={{position: "fixed" }}>
            
            <section className="sidebar" >
            {/* Sidebar user panel */}
            <div className="user-panel" >
              <div className="pull-left image">
                <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
              </div>
              <div className="pull-left info">
                <p>{this.state.reposDetail.username}</p>
                
                <a href="#"> Trực tuyến</a>
                <Link to="/login" onClick={this.logout}><i className="fa fa-circle text-success"  /> Đăng xuất</Link>
              </div>
            </div>
            {/* search form */}
            <form action="#" method="get" className="sidebar-form">
              <div className="input-group">
                <input type="text" name="q" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </form>
            {/* /.search form */}
            {/* sidebar menu: : style can be found in sidebar.less */}
            <ul className="sidebar-menu" data-widget="tree">
              <li className="header">THANH ĐIỀU HƯỚNG</li>
              <li className="treeview" style={{textAlign: 'left'}}>
                <a href="#">
                  <i className="fa fa-dashboard" /> <span>Quản lý công việc</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><Link to="/logout"><i className="fa fa-circle-o" /> Công việc được giao </Link></li>
                  <li><a href="../../index2.html"><i className="fa fa-circle-o" /> Giao việc</a></li>
                </ul>
              </li>
              <li className="treeview" style={{textAlign: 'left'}}>
                <a href="#">
                  <i className="fa fa-dashboard" /> <span>Quản lý dự án</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="../../index.html"><i className="fa fa-circle-o" /> Tiến độ</a></li>
                  <li><a href="../../index2.html"><i className="fa fa-circle-o" /> Lịch sử</a></li>
                </ul>
              </li>
              <li className="treeview" style={{textAlign: 'left'}}> 
                <a href="#">
                  <i className="fa fa-files-o" />
                  <span>Quản lý nhân sự </span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><Link to="/home/nhan-su-chinh-thuc"><i className="fa fa-circle-o" />Nhân sự chính thức</Link></li>
                  <li><Link to="/home/chuyen-nhom"><i className="fa fa-circle-o" />Chuyển nhóm làm việc</Link></li>
                </ul>
              </li>
              <li className="treeview" style={{textAlign: 'left'}}> 
                <a href="#">
                  <i className="fa fa-files-o" />
                  <span>Quản lý quá trình làm việc </span>
                  
                </a>
                <ul className="treeview-menu">
                  <li><a href="../layout/top-nav.html"><i className="fa fa-circle-o" />Xem tiến độ</a></li>
                  <li><a href="../layout/boxed.html"><i className="fa fa-circle-o" /> Cập nhật tiến độ</a></li>
                  <li><a href="../layout/collapsed-sidebar.html"><i className="fa fa-circle-o" /> Collapsed Sidebar</a></li>
                </ul>
              </li>
              <li style={{textAlign: 'left'}}>
                <a href="../widgets.html">
                  <i className="fa fa-th" /> <span>Quản Lý hợp đồng </span>
                  <span className="pull-right-container">
                    <small className="label pull-right bg-green">new</small>
                  </span>
                </a>
              </li>
              <li className="treeview" style={{textAlign: 'left'}}>
                <a href="#">
                  <i className="fa fa-pie-chart" />
                  <span>Quản lý chức vụ</span>
                
                </a>
              
              </li>
              <li className="treeview" style={{textAlign: 'left'}}>
                <a href="#">
                  <i className="fa fa-laptop" />
                  <span>Quản lý bằng cấp </span>
                  
                </a>
               
              </li>
              <li className="treeview" style={{textAlign: 'left'}}>
                <a href="#">
                  <i className="fa fa-edit" /> <span>Đánh giá</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><a href="../forms/general.html"><i className="fa fa-circle-o" /> Thái độ làm việc</a></li>
                  <li><a href="../forms/advanced.html"><i className="fa fa-circle-o" /> Hoàn thành công việc</a></li>
                  <li><a href="../forms/editors.html"><i className="fa fa-circle-o" /> Khen thưởng</a></li>
                </ul>
              </li>
             
            </ul>
          </section>
          {/* /.sidebar */}
        </aside>
       
        </div>
        )
    }
}
