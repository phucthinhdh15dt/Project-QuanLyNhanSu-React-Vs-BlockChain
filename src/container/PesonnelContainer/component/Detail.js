import React, { Component } from 'react'
import './Detail.css';
import {callApi, callApiPaging, callApiDelete } from './../../../utils/ConnectApi';
import history from './../../../RouterURL/history';
import {Line} from 'react-chartjs-2';
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
    history.goBack('/home/nhan-su-chinh-thuc');
  }

  loadingData = () => {
    callApiPaging('developer/'+ this.props.match.params.id,null,null,'1')
        .then(response => {
            this.setState({ 
              info: response.data,
              contract: response.data.contract[0],
              review: response.data.review[0] ,
              task: response.data.task[0] ,
              project: response.data.project[0] ,
              experience: response.data.experience[0] ,
              degree: response.data.degree[0] ,
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
    return (
      <div className="content-wrapper" >
      <br/><br/><br/>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <center>
                <div className="col-xs-8 col-sm-6" >
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
                  <p>Tên : <small>{contract !=null ? contract.name : '' }</small></p>
                  <p>Mô tả  : <small>{contract !=null ? contract.descriptions : ''}</small></p>
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
                  <hr className="pill" />
                </div>

                <div className="col-md-9">
                  <h3><strong> Bằng cấp   </strong></h3>                    
                  <p>Loại bằng : <small>{degree != null ? degree.name : ''}</small></p>
                  <p>Mô tả : <small>{degree !=null ? degree.descriptions : '' }</small></p>
                  <p>Ngày : <small>{degree !=null ? degree.date_start : '' }</small></p>
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
