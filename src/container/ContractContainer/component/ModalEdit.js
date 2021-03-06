import React, { Component } from 'react'
import './ModalCreate.css';
import {callApi, callApiPaging, callApiDelete, callApiAdd,callApiPagingProfile,callApiEdit } from './../../../utils/ConnectApi';
import history from './../../../RouterURL/history';
import {validateformBlank} from './../../../constants/jsCommon/validateForm';
import Loading from './../../../component/Loading/Loading';

//js 




export default class ModalEdit extends Component {
  constructor(props) {
    super(props);
   

    this.state = {
      reposDetail: [],
      editStatus : false,
      name : '',
      birth : '',
      address : '',
      level : 'FR' ,
      email : '' ,
      education : '',
      team : '',
      msg : '' ,
      arrayTeam : [],
      zindex : -1000 ,
      reposDetail: [],
      checkdata : 0 ,
      id : '',
      visibility : 'none',
      msnv: ''
    }
  }
  edit =() =>{
    
    if(validateformBlank()){
     
      var data = {
        "name": this.refs.name.value,
        "descriptions": this.refs.description.value,
        "developer_id": this.refs.msnv.value,
        "developer": [33]
        
      };
      
      callApiEdit('contracts',data ,null,this.props.match.params.id)
      .then(response => {
        this.showMsg();
        this.setState({ 
         
          editStatus :true , 
        
          
          });
    })
    .catch(function (error) {
      console.log(error);
      this.setState({ 
        msg : "bug"
        });
  })}else{
    
    this.setState({ 
       
      msg : "Có trường không hợp lệ, xin kiểm tra lại"
      });
  }
    }
  add =() =>{
    
  if(validateformBlank()){
   
    var data = {
      "name": this.refs.name.value,
      "descriptions": this.refs.description.value,
      "developer_id": this.refs.msnv.value
    };

    callApiAdd('contract',data ,localStorage.getItem('token'))
    .then(response => {
      this.showMsg();
      this.setState({ 
       
        editStatus :true , 
      
        
        });
  })
  .catch(function (error) {
    console.log(error);
    this.setState({ 
      msg : "bug"
      });
})}else{
  
  this.setState({ 
     
    msg : "Có trường không hợp lệ, xin kiểm tra lại"
    });
}
  }
  goBack=()=>{
    history.goBack('/trang-chu/nhan-su-chinh-thuc');
  }
showMsg = () => {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  loadingData = () => {


    callApiPaging('contracts/'+ this.props.match.params.id,null,null,'1')
        .then(response => {
            this.setState({ 
              name: response.data.name,
              description : response.data.descriptions,
              
              
              });
              callApiPaging('developer/'+ response.data.developer,null,null,'1')
        .then(response1 => {
            this.setState({ 
              msnv : response1.data.dev_id
              
              
              });
        })
        .catch(function (error) {
            console.log(error);
        })
        })
        .catch(function (error) {
            console.log(error);
        })
        

  }
  componentDidMount (){
    this.loadingData();
  
  }
  search =() =>{
    callApiPagingProfile('developerById/'+ this.refs.msnv.value)
    .then(response => {
        if(response.data === undefined){
            this.setState({ 
                reposDetail : [],
                visibility : 'none',
                checkdata : 0,
                msg :"Mã số nhân viên không hề tồn tại"
            });
        }else
        this.setState({ 
            id : response.data.id,
            reposDetail : response.data,
            visibility : 'block',
            checkdata : 1,
            msg :""
        });
        
  })
  .catch(function (error) {
  
})
  }

  selectOptionTeam =()=>{

    var result =[] ;
      
      if(this.state.arrayTeam.length !== 0){
          result = this.state.arrayTeam.map((item, index) =>{
              return <option value={item.id}>{item.name}</option>
          } );
      }
      return  result;
  }

  

  onChangeName=(e)=> {
    this.setState({
      name: e.target.value
    });
  }
  onChangeMSNV=(e)=> {
    this.setState({
      msnv: e.target.value
    });
  }
  onChangeSalary =(e)=> {
    this.setState({
      birth: e.target.value
    });
   
  }
  onChangeLanguage=(e)=> {
    this.setState({
      email: e.target.value
    });
   
  }

  onChangeDescription=(e)=> {
    this.setState({
      description: e.target.value
    });
   
  }

  

  render() {
    
    return (

      <div className="container" className="contai" >
      <br /> <br /> <br />
        <div className="row" > 
          <div className="col-md-4">
            <div className="col-md-4">
      <div className="col-md-4">
    
  </div>
  
</div>
          </div>
          <div className="col-md-7" style={{marginBottom: "60px", marginTop: "45px"}} >
          
          
            <form className="form-style-9">
            <div className="title">
            Sửa hợp đồng 
              </div>
              <div style={{paddingLeft: "160px" ,color : "red" ,height: "15px"}} >  {this.state.msg} </div>
              <br/>
          <div className="container">

          <div className="row">
             
                <div className="col-md-6">
                  
                  <label >Tên hợp đồng</label>
                  <input type="text" className="form-control" style={{radius :  "10px"}}
                  onChange={this.onChangeName} value={this.state.name} id='name' ref='name'/>
                </div>
                </div>

          
                <div className="row">
                    <div className="col-md-4">
                        <label >Nhập mã nhân viên </label>
                        <input type="text" value={this.state.msnv} className="form-control" style={{radius :  "10px"}}
                          id="id" ref='msnv'onChange={this.onChangeMSNV}
                         />
                      </div>

                      <div className="col-md-2">
                      <label style={{visibility: "hidden"}} >Nhập mã nhân viên </label><br/>
                      <button type="button" className="btn btn-primary btn-block margin-bottom" onClick={this.search}>Truy vấn</button>
                     
                   </div>
                   
                </div>
                

                <div className="row">
                
                
                </div>

                <div className="row">
                <div className="col-md-6">
                <label >Mô tả </label> <br/>
                <textarea style={{height : "100px"}} rows={4} id='description' value={this.state.description} ref='description' onChange={this.onChangeDescription} className="form-control" />
                </div>
                </div>
                <br/>
                <div className="row" style={{display: this.state.visibility }} >
                <div className="col-md-6">
                
                  <div className="box box-primary">
                    <div className="box-body box-profile">
                    
                   
                      <h3 className="profile-username text-center">{this.state.checkdata === 1 ? this.state.reposDetail.name  : ''}</h3>
                      <p className="text-muted text-center">{this.state.checkdata === 1 ? this.state.reposDetail.dev_id  : ''}</p>
                      
                      <ul className="list-group list-group-unbordered">
                        <li className="list-group-item">
                          <b>Email</b> <p className="pull-right">{this.state.reposDetail  !== '' ?this.state.reposDetail.email : ''}</p>
                        </li>
                        <li className="list-group-item">
                          <b>Địa chỉ</b> <p className="pull-right">{this.state.reposDetail  !== '' ?this.state.reposDetail.address : ''}</p>
                        </li>
                        <li className="list-group-item">
                          <b>Cập độ</b> <p className="pull-right">{this.state.reposDetail  !== '' ?this.state.reposDetail.level : ''}</p>
                        </li>
                        
                       
                      </ul>
                    
                    </div>
                 
                  </div>
                  
                </div>
                
              </div>
                </div>
                
                <br/>
          <div className="bt-action col-md-12 conten-button">
          <center> 
          <button type="reset" className="btn btn-primary btn-block margin-bottom">Làm mới </button>
          <button type="button" className="btn btn-primary btn-block margin-bottom" onClick={this.edit}>Sửa </button>
          </center>
          </div>
          
          <div className="modal-footer" >
            <button type="button" className="btn " onClick={this.goBack} >Quay lại</button>
          </div>
          </form>

          </div>
          <div className="col-md-2">
        <br/>
        <div id="snackbar" >Thêm thành công </div>
        </div>
        </div>
      </div>
          
        
    )
  }
}
