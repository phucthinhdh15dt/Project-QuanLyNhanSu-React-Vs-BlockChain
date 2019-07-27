import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {callApiInfo} from './../../utils/ConnectApi';
import $ from "jquery";
import "./sidebar.css";
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
    $(document).ready(function(){
      $(".slide1").click(function(){
        $($(this).parent().children(".treeview-menu1")).slideToggle();
      });
      $(".slide2").click(function(){
        $($(this).parent().children(".treeview-menu2")).slideToggle();
      });
      $(".slide3").click(function(){
        $($(this).parent().children(".treeview-menu3")).slideToggle();
      });
      $(".slide4").click(function(){
        $($(this).parent().children(".treeview-menu4")).slideToggle();
      });

      $(".slide5").click(function(){
        $($(this).parent().children(".treeview-menu5")).slideToggle();
      });
      $(".slide6").click(function(){
        $($(this).parent().children(".treeview-menu6")).slideToggle();
      });
      $(".slide7").click(function(){
        $($(this).parent().children(".treeview-menu7")).slideToggle();
      });

    });
  }
  logout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('refreshToken');
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
              <Link className="slide1">
                  <i className="fa fa-dashboard" /> <span>Quản lý công việc</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu1" >
                  <li><Link to="/home/cong-viec-cua-toi"><i className="fa fa-circle-o" /> Công việc của tôi </Link></li>
                  <li><Link to="/home/cong-viec"><i className="fa fa-circle-o" /> Danh sách công viêc </Link></li>
                  <li><Link to="/home/giao-viec"><i className="fa fa-circle-o" /> Giao việc </Link></li>
                </ul>
              </li>
              <li className="slide2" style={{textAlign: 'left'}}>
              <Link  className="slide2">
                  <i className="fa fa-dashboard" /> <span>Quản lý dự án</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu2">
                <li><Link to="/home/du-an/danh-sach-du-an"><i className="fa fa-circle-o" /> Danh sách dự án </Link></li>
                  <li><Link to="/home/du-an/cap-nhat-tien-do"><i className="fa fa-circle-o" /> Cập nhật tiến độ </Link></li>
                </ul>
              </li>
              <li className="slide3" style={{textAlign: 'left'}}> 
              <Link  className="slide3">
                  <i className="fa fa-files-o" />
                  <span>Quản lý nhân sự </span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu3">
                  <li><Link to="/home/nhan-su-chinh-thuc"><i className="fa fa-circle-o" />Nhân sự chính thức</Link></li>
                  <li><Link to="/home/chuyen-nhom"><i className="fa fa-circle-o" />Chuyển nhóm làm việc</Link></li>
                </ul>
              </li>
              <li className="treeview" style={{textAlign: 'left'}}> 
              <Link to="/home/nhom">
                  <i className="fa fa-files-o" />
                  <span>Quản lý Đội nhóm </span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                  
                </Link>
                <ul className="treeview-menu">
                <li><Link to="/home/nhom"><i className="fa fa-circle-o" />Quản lý</Link></li>
                  
                </ul>
              </li>
              <li style={{textAlign: 'left'}}>
              <Link ><i className="fa fa-circle-o" />
                  <i className="fa fa-th" /> <span>Quản Lý hợp đồng </span>
                  <span className="pull-right-container">
                    <small className="label pull-right bg-green">new</small>
                  </span>
                </Link>
              </li>
              <li className="treeview" style={{textAlign: 'left'}}>
              <Link to="/home/chuc-vu"><i className="fa fa-circle-o" />
                  <i className="fa fa-pie-chart" />
                  <span>Quản lý chức vụ</span>
                
                </Link>
              
              </li>
              <li className="treeview" style={{textAlign: 'left'}}>
              <Link>
                  <i className="fa fa-laptop" />
                  <span>Quản lý bằng cấp </span>
                  
                </Link>
               
              </li>
              <li className="treeview" style={{textAlign: 'left'}}>
              <Link to="/home/danh-gia">
                  <i className="fa fa-edit" /> <span>Đánh giá</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                
              </li>
             
            </ul>
          </section>
          {/* /.sidebar */}
        </aside>
       
        </div>
        )
    }
}
