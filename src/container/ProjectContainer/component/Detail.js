import React, { Component } from 'react'
import './Detail.css';
import {callApi, callApiPaging, callApiDelete } from './../../../utils/ConnectApi';
import history from './../../../RouterURL/history';
export default class Detail extends Component {
  state = {
    reposDetail: []
  }
  goBack=()=>{
    history.goBack('/trang-chu/nhan-su-chinh-thuc');
  }

  loadingData = () => {
    callApiPaging('developer/'+ this.props.match.params.id,null,null,'1')
        .then(response => {
            this.setState({ 
              reposDetail: response.data
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
    var reposDetail = this.state.reposDetail;
    return (
      <div className="content-wrapper" >
      <br/><br/><br/><br/><br/><br/>
       <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
           
              <div className="col-sm-12">
                <div className="col-xs-6 col-sm-6">
                  <h3>{reposDetail.name}</h3>
                  <p><strong>NGÀY SINH : </strong>  {reposDetail.birth} </p>
                  <p><strong>CẤP ĐỘ : </strong>  {reposDetail.level}  </p>
                  <p><strong>Email : </strong>  {reposDetail.email}  </p>
                  <p><strong>Địa chỉ : {reposDetail.address} </strong>
                    
                  </p>
                </div>             
                <div className="col-xs-12 col-sm-4 text-center">
                  <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsN7_4Pzpjqf1SvLhu6F3aaeayGXE-cCoY5FX-3szRmW7DPKPZ" alt className="img-circle img-responsive" />
                    
                  </figure>
                </div>
              </div>            
              <div className="col-xs-12 divider text-center">
                <div className="col-xs-12 col-sm-4 emphasis">
                  <h2><strong> 20,7K </strong></h2>                    
                  <p><small>Followers</small></p>
                  <button className="btn btn-success btn-block"><span className="fa fa-plus-circle" /> Follow </button>
                </div>
                <div className="col-xs-12 col-sm-4 emphasis">
                  <h2><strong>245</strong></h2>                    
                  <p><small>Following</small></p>
                  <button className="btn btn-info btn-block"><span className="fa fa-user" /> View Profile </button>
                </div>
                <div className="col-xs-12 col-sm-4 emphasis">
                  <h2><strong>43</strong></h2>                    
                  <p><small>Snippets</small></p>
                  <div className="btn-group dropup btn-block">
                    <button type="button" className="btn btn-primary"><span className="fa fa-gear" /> Options </button>
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                      <span className="caret" />
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu text-left" role="menu">
                      <li><a href="#"><span className="fa fa-envelope pull-right" /> Send an email </a></li>
                      <li><a href="#"><span className="fa fa-list pull-right" /> Add or remove from a list</a></li>
                      <li className="divider" />
                      <li><a href="#"><span className="fa fa-warning pull-right" />Report this user for spam</a></li>
                      <li className="divider" />
                      <li><a href="#" className="btn disabled" role="button"> Unfollow </a></li>
                    </ul>
                  </div>
                </div>
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
