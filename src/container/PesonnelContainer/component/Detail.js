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
    
    if(repos.length > 0){
        result = repos.map((tableJson, index) =>{
            return <tr key={tableJson.index}> 
            <td>{index+1}</td>
            <td>{tableJson.author}</td>
            <td>{tableJson.content}</td>
            <td>{tableJson.date_start.substring(0,10)}</td>
        </tr>
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
          return <tr key={tableJson.index}>
      <td>{index+1}.</td>
      <td>{tableJson.name}</td>
      <td>{tableJson.status === "On Processing" ? <span class='label label-warning'>On Processing</span> : tableJson.status === "Finished" ? <span class='label label-success'>Finished</span> :  tableJson.status ==="Closed" ?<span class='label label-danger'>Closed</span> : tableJson.status }</td>
      <td>
        <div className="progress progress-xs">
          <div className="progress-bar progress-striped" style={{width: tableJson.developer}} />
        </div>
      </td>
      <td><span className="badge bg-light-blue">{tableJson.developer}%</span></td>
    </tr>
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
              contract: response.data.contract,
              review: response.data.review ,
              task: response.data.task ,
              project: response.data.project ,
              experience: response.data.experience[0] ,
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
      <div className="content-wrapper" >
      <br/><br/><br/>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <center>
                <div className="col-xs-8 col-sm-6" style={{textAlign:"rigth"}} >
                <h2><strong> {info.name} </strong></h2>
                  <p><strong>NGÀY SINH : </strong>  {info.birth} </p>
                  <p><strong>CẤP ĐỘ : </strong>  {info.level}  </p>
                  <p><strong>Email : </strong>  {info.email}  </p>
                  <p><strong>Địa chỉ : </strong>  {info.address}</p>
                </div> 
              </center>            
                <div className="col-xs-6 col-sm-6 text-center">
                  <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsN7_4Pzpjqf1SvLhu6F3aaeayGXE-cCoY5FX-3szRmW7DPKPZ" alt className="img-circle img-responsive" />
                  </figure>
                </div>
                <hr className="pill" />    
              <div className="col-md-12">
                <div className="col-md-9">
                  <h3><strong> Hợp đồng  </strong></h3>                    
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tên hợp đồng</th>
                        <th>Mô tả</th>
                        <th>Ngày kí hợp đồng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.showListTableContract(contract)}
                    </tbody>
                  </table>
                  <hr className="pill" />
                </div>
                <div className="col-md-9">
                  <h3><strong> Đánh giá  </strong></h3>                    
                  <p>Tổng số dự án đã hoàn thành trong khoảng thời gian </p>
                  
                  <Line data={data}/>
                 
                  <hr className="pill" />
                </div>
              </div>
              <div className="col-md-9">
                  <h3><strong> Kinh nghiệm  </strong></h3>                    
                  <p>Mô tả kinh nghiệm : <small>{experience!=null ?experience.descriptions : '' }</small></p>
                  <hr className="pill" />
                </div>

                <div className="col-md-9">
                  <h3><strong> Nhóm   </strong></h3>                    
                  <p>Thuộc nhóm : <small>{team != null ? team.name : ''}</small></p>
                  <p>Mô tả : <small>{team !=null ? team.descriptions : '' }</small></p>
                  <NavLink to={`/trang-chu/nhom/chi-tiet/${team !=null ? team.id : ''}`} activeClassName="active" title="Chi tiết">Chi tiết ... </NavLink>
                  <hr className="pill" />
                </div>

                <div className="col-md-9">
                  <h3><strong> Bằng cấp   </strong></h3>                    
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Loại bằng</th>
                        <th>Mô tả</th>
                        <th>Ngày nhận bằng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.showListTableDegree(degree)}
                    </tbody>
                  </table>
                  <hr className="pill" />
                </div>
                <div className="col-md-12">
                <div className="col-md-5">
                  
                  <h3><strong> Đánh giá xếp loại</strong></h3>                    
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Người đánh giá</th>
                        <th>Loại</th>
                        <th>Ngày đánh giá</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.showListTableReview(review)}
                    </tbody>
                  </table>
                </div>
               
                <div className="col-md-1"></div>
                <div className="col-md-5">
                  <Bar data={data1} />
                </div>
                <hr className="pill" />
                </div>

                <div className="col-md-12">
                <div className="col-md-9">
                  
                  <h3><strong>Dự án</strong></h3>                    
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tên dự án </th>
                        <th>Mô tả</th>
                        <th>Trưởng nhóm</th>
                        <th>Ngày tạo dự án</th>
          
                      </tr>
                    </thead>
                    <tbody>
                      {this.showListTableProject(project)}
                    </tbody>
                  </table>
                </div>

                <div className="col-md-11">                 
                  <div className="box">
                  <div className="box-header">
                    <h3 className="box-title">Công việc</h3>
                    <div className="box-tools">
                      <ul className="pagination pagination-sm no-margin pull-right">
                        <li><a href="#">«</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">»</a></li>
                      </ul>
                    </div>
                  </div>
        {/* /.box-header */}
        <div className="box-body no-padding">
          <table className="table">
            <tbody>
              <tr>
                <th style={{width: '10px'}}>#</th>
                <th>Tên công việc</th>
                <th>Trạng thái</th>
                <th>Tiến độ</th>
                <th style={{width: '40px'}}></th>
              </tr>
              {this.showListTableTasks(task)}
            </tbody></table>
        </div>
      </div>
                </div>
                {/* review */}
                <div className="col-md-11">
                <div className="box box-success">
        <div className="box-header">
          <i className="fa fa-comments-o" />
          <h3 className="box-title">Đánh giá công việc, thái độ</h3>
          <div className="box-tools pull-right" data-toggle="tooltip" title="Status">
            <div className="btn-group" data-toggle="btn-toggle">
              <button type="button" className="btn btn-default btn-sm active"><i className="fa fa-square text-green" />
              </button>
              <button type="button" className="btn btn-default btn-sm"><i className="fa fa-square text-red" /></button>
            </div>
          </div>
        </div>
        <div className="box-body chat" id="chat-box">
        <div className="item" style={{paddingTop : "30px"}}>
          
          <p className="message">
            <a href="#" className="name">
              <small className="text-muted pull-right"><i className="fa fa-clock-o" /> 5:15</small>
              <i className="fa fa-square text-green" /> Nguyễn Văn Hoàng
            </a>
            Tích cực làm việc , thái độ kỹ luật tốt, đáng khen thưởng .
          </p>
        </div>
        <div className="item" style={{paddingTop : "30px"}}>
          
          <p className="message">
            <a href="#" className="name">
              <small className="text-muted pull-right"><i className="fa fa-clock-o" /> 6:40</small>
              <i className="fa fa-square text-green" /> Nguyễn Văn Không
            </a>
            Tích cực làm việc ,Đi làm thường trễ giờ.
          </p>
        </div>
          
          {/* /.item */}
        </div>
        {/* /.chat */}
        <div className="box-footer">
          <div className="input-group">
            <input className="form-control" placeholder="Bạn muốn đánh giá nhân viên ...." />
            <div className="input-group-btn">
              <button type="button" className="btn btn-success">Đánh giá</button>
            </div>
          </div>
        </div>
      </div>
                </div>
               
                <div className="col-md-1"></div>
                
                </div>
               
            </div>                 
          </div>
        </div>
          
          <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={this.goBack} >Quay lại</button>
              </div>
          
        </div>
    )
  }
}
