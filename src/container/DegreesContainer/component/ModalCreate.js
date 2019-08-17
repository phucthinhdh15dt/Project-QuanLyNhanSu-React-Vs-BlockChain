import React, { Component } from 'react'
import './ModalCreate.css';
import {callApi, callApiPaging, callApiDelete, callApiAdd } from './../../../utils/ConnectApi';
import history from './../../../RouterURL/history';
import {validateformBlank} from './../../../constants/jsCommon/validateForm';
import Loading from './../../../component/Loading/Loading';

//js 




export default class ModalCreate extends Component {
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
      zindex : -1000 
    }
  }
  add =() =>{
    
  if(validateformBlank()){
   
    var data = {
      "name": this.refs.name.value,
      "descriptions": this.refs.description.value,
      "developer": 33
    };
    
    callApiAdd('degrees',data ,localStorage.getItem('token'))
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
    
        callApiPaging('teams',null,null,'1')
        .then(response => {
            this.setState({ 
              arrayTeam : response.data.results
              });
        })
        .catch(function (error) {
            console.log(error);
        })

  }
  componentDidMount (){
    this.loadingData();
  
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
      level: e.target.value
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
          <div className="col-md-7"  >
          
          
            <form className="form-style-9">
            <div className="title">
            Thêm bằng cấp
              </div>
              <div style={{paddingLeft: "160px" ,color : "red" ,height: "15px"}} >  {this.state.msg} </div>
              <br/>
          <div className="container">

          <div className="row">
             
                <div className="col-md-6">
                  
                  <label >Tên bằng cấp</label>
                  <input type="text" className="form-control" style={{radius :  "10px"}}
                  onChange={this.onChangeName} id='name' ref='name'/>
                </div>
                </div>

          
          <div className="row">
              <div className="col-md-6">
                  <label >Ngày nhận bằng </label>
                  <div className="input-group"> 
                  <input type="date" className="form-control" name="salary" 
                  onChange={this.onChangeSalary}   ref='salary' id="salary" />
                  </div>
                </div>
               
                </div>

                
                <div className="row">
                <div className="col-md-6">
                <label >Mô tả </label> <br/>
                <textarea style={{height : "100px"}} rows={4} id='description' value={this.state.description} ref='description' onChange={this.onChangeDescription} className="form-control" />
                </div>
                </div>
                </div>
                
                <br/>
          <div className="bt-action col-md-12 conten-button">
          <center> 
          <button type="reset" className="btn btn-primary btn-block margin-bottom">Làm mới </button>
          <button type="button" className="btn btn-primary btn-block margin-bottom" onClick={this.add}>Thêm </button>
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
