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
              reposDetail : response.data
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
                <p>{this.state.reposDetail != null ? this.state.reposDetail.username : 'hethantoken'}</p>
                
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
                  <li><Link to="/home/cong-viec-cua-toi"><i className="fa fa-circle-o" /> Công việc của tôi </Link></li>
                  <li><Link to="/home/cong-viec"><i className="fa fa-circle-o" /> Danh sách công viêc </Link></li>
                  <li><Link to="/home/giao-viec"><i className="fa fa-circle-o" /> Giao việc </Link></li>
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
                <li><Link to="/home/du-an/tien-do-du-an"><i className="fa fa-circle-o" /> Danh sách dự án </Link></li>
                  <li><Link to="/home/du-an/cap-nhat-tien-do"><i className="fa fa-circle-o" /> Cập nhật tiến độ </Link></li>
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
                  <span>Quản lý Đội nhóm </span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                  
                </a>
                <ul className="treeview-menu">
                <li><Link to="/home/nhom"><i className="fa fa-circle-o" />Quản lý</Link></li>
                  
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
