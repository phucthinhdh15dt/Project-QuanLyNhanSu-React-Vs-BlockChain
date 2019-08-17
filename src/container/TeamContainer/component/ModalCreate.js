import React, { Component } from 'react'
import './ModalCreate.css';
import {callApi, callApiPaging, callApiDelete, callApiAdd } from './../../../utils/ConnectApi';
import history from './../../../RouterURL/history';
import {validateformBlank} from './../../../constants/jsCommon/validateForm';


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
      msg : '',
      arrayTeam : [],
      descriptions : ''
    }
  }
  add =() =>{
    // alert(this.refs.name.value+ "-" + this.refs.descriptions.value + "-" + this.refs.leader.value)
  if(validateformBlank()){
    var data = {
      "name": this.refs.name.value,
      "descriptions": this.refs.descriptions.value,
      "num_member": 0,
      "leader": this.refs.leader.value,
    };
    
    callApiAdd('teams',data ,localStorage.getItem('token'))
    .then(response => {
      this.setState({ 
        editStatus :true 
        
        });
        this.showMsg();
  })
  .catch(function (error) {
    console.log(error);
    
    
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
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
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
  onChangeSothanhvien =(e)=> {
    this.setState({
      birth: e.target.value
    });
   
  }
  onChangeLeader=(e)=> {
    this.setState({
      leader: e.target.value
    });
   
  }

  onChangeLevel=(e)=> {
    this.setState({
      level: e.target.value
    });
   
  }

  onChangeEducation=(e)=> {
    this.setState({
      education: e.target.value
    });
   
  }

  onChangeDescriptions=(e)=> {
    this.setState({
      descriptions: e.target.value
    });
   
  }
  onChangeTeam =(e)=> {
    this.setState({
      team: e.target.value
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
            Thêm đội nhóm mới
              </div>
              <div style={{paddingLeft: "160px" ,color : "red" ,height: "15px"}} >  {this.state.msg} </div>
              <br/>
          <div className="container">
          
          <div className="row">
                      <div className="col-md-6">
                     
                        <label >Tên </label>
                        <input type="text" className="form-control" style={{radius :  "10px"}}
                          id="name"  onChange={this.onChangeName}
                         ref='name'
                         />
                      </div>
                     
                </div>
               
                  
                   <div className="row">
                   <div className="col-md-2">
                     <label >Số thành viên</label>
                     <input type="number" readOnly value ="0" className="form-control" name="sothanhvien" 
                      onChange={this.onChangeEmail}   ref='sothanhvien' id="sothanhvien" />
                   </div>
                    
                   <div className="col-md-4">
                   <div>
                     <label> Đội trưởng</label>
                      <input list="leader" name="browser" onChange={this.onChangeLeader}  ref='leader' className="form-control" style={{radius :  "10px"}} />
                    <datalist id="leader">
                      <option value="Đàm Quang Khoa">
                      </option><option value="Nguyễn Phúc Thịnh">
                      </option><option value="Phan Đức Thành">
                      </option>
                      </datalist>
       
      </div>
                </div>
                   </div>
                   <div className="row">
                   <div className="col-md-6">
                   <label >Mô tả </label> <br/>
                   <textarea rows={4} id='address'  ref='descriptions' onChange={this.onChangeDescriptions} className="form-control" />
                    {/* <textarea rows={4} classname="form-control" cols={50} ref="address" onchange={this.onChangeAddress} defaultValue={this.state.education} /> */}
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
