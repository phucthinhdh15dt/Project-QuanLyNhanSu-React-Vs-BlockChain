import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {callApiInfo} from './../../utils/ConnectApi';
import {authorization, DEVERLOPER, LEADER ,ADMIN} from './../../utils/authoze';
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
    localStorage.removeItem('refreshToken');
    localStorage.setItem('username','');
    localStorage.setItem('id','');
    localStorage.setItem('is_active','');
    localStorage.setItem('is_staff','');
    localStorage.setItem('is_superuser','');
    localStorage.setItem('dev_id','');
    localStorage.setItem('team','');
  }

    render(){
        return (
          <div  >
             
          
    
            <aside className="main-sidebar" style={{position: "fixed" }}>
            
            <section className="sidebar" >
            {/* Sidebar user panel */}
            <div className="user-panel" >
              <div className="pull-left image">
              <i className="fa fa-user-circle" aria-hidden="true" style={{fontSize : "50px" , color: "#3c8dbc"}}></i>
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

              {(authorization() != LEADER || authorization() != DEVERLOPER) ? 
                <li className="treeview" style={{textAlign: 'left' }}  >
                <Link className="slide1" >
                    <i className="fa fa-tasks" /> <span>Quản lý công việc </span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </Link>
                  <ul className="treeview-menu1" >
                    {/* <li><Link to="/trang-chu/cong-viec-cua-toi"><i className="fa fa-circle-o" /> Công việc của tôi </Link></li> */}
                    <li><Link to="/trang-chu/cong-viec"><i className="fa fa-circle-o" /> Danh sách công viêc </Link></li>
                    {(authorization() != DEVERLOPER) ? 
                    <li><Link to="/trang-chu/giao-viec"><i className="fa fa-circle-o" /> Giao việc </Link></li>
                    : ''}
                  </ul>
                </li>
                : "" }
              
              <li className="slide2" style={{textAlign: 'left'}}>
              <Link  className="slide2">
                  <i className="fa fa-file-code-o" /> <span>Quản lý dự án</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu2">
                <li><Link to="/trang-chu/du-an/danh-sach-du-an"><i className="fa fa-circle-o" /> Danh sách dự án </Link></li>
                  {/* <li><Link to="/trang-chu/du-an/cap-nhat-tien-do"><i className="fa fa-circle-o" /> Cập nhật tiến độ </Link></li> */}
                </ul>
              </li>
              <li className="slide3" style={{textAlign: 'left'}}> 
              <Link  className="slide3">
                  <i className="fa fa-users" />
                  <span>Quản lý lập trình viên </span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu3">
                  <li><Link to="/trang-chu/nhan-su-chinh-thuc"><i className="fa fa-circle-o" /> Danh sách lập trình viên</Link></li>
                  {(authorization() != DEVERLOPER) ? 
                  <li><Link to="/trang-chu/chuyen-nhom"><i className="fa fa-circle-o" /> Chuyển nhóm làm việc</Link></li>
                  : ''}
                  <li><Link to="/trang-chu/nhom"><i className="fa fa-circle-o" /> Quản lý nhóm</Link></li>
                </ul>
              </li>
              <li className="treeview" style={{textAlign: 'left'}}> 
                <ul className="treeview-menu">
                <li><Link to="/trang-chu/nhom"><i className="fa fa-circle-o" />Quản lý</Link></li>
                  
                </ul>
              </li>
             
            

              {(authorization() == ADMIN) ?
              <li className="treeview" style={{textAlign: 'left'}}>
              <Link to="/trang-chu/hop-dong">
                  <i className="fa fa-th" /> <span>Quản Lý hợp đồng </span>
                
                </Link>
              
              </li>
              : ''}
             
              {(authorization() == ADMIN) ?
              <li className="treeview" style={{textAlign: 'left'}}>
              <Link to="/trang-chu/chuc-vu">
                  <i className="fa  fa-id-card-o" />
                  <span>Quản lý chức vụ</span>
                
                </Link>
              
              </li>
              : ''}

              {(authorization() == ADMIN) ?
              <li className="treeview" style={{textAlign: 'left'}}>
              <Link to="/trang-chu/bang-cap">
                  <i className="fa fa-book" />
                  <span>Quản lý bằng cấp </span>
                  
                </Link>
               
              </li>
              :  ''}

              {(authorization() == ADMIN) ?
              <li className="treeview" style={{textAlign: 'left'}}>
              <Link  to="/trang-chu/thong-ke">
                  <i className="fa fa-bar-chart" />
                  <span>Thống kê </span>
                </Link>
              </li>
              : ''}

              {(authorization() == ADMIN || authorization() == LEADER ) ?
              <li className="treeview" style={{textAlign: 'left'}}>
              <Link to="/trang-chu/danh-gia">
                  <i className="fa fa-edit" /> <span>Đánh giá</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                
              </li>
               : ''}
             
            </ul>
          </section>
          {/* /.sidebar */}
        </aside>
       
        </div>
        )
    }
}
