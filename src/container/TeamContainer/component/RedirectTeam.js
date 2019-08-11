import React, { Component } from 'react'
// import './Redirec.css';
import { callApiPaging, callApibyId, callApiEdit } from './../../../utils/ConnectApi';
import history from './../../../RouterURL/history';
import {validateformBlank} from './../../../constants/jsCommon/validateForm';


//js 




export default class RedirectTeam extends Component {
  constructor(props) {
    super(props);
   

    this.state = {
      reposDetail: [],
      checkdata : 0 ,
      editStatus : false,
      id : '',
      education : '',
      team : '',
      msg : '' ,
      arrayTeam : [],
      visibility : 'hidden'
    }
  }
  redir  =() =>{
   
    if( document.getElementById("id").value !== "" ) {
      
      var data = {
        "team_id": this.refs.team.value
       
      };
     
      callApiEdit('developer',data ,null, document.getElementById("id").value )
      .then(response => {
        this.setState({ 
          editStatus :true , 
          msg : "Chuyển nhóm thành công"
          });
    })
    .catch(function (error) {
      console.log(error);
      this.setState({ 
       
        msg : "bug"
        });
  })}else{
    
    this.setState({ 
       
      msg : "Có trường không hợp lệ ,xin kiểm tra lại"
      });
  }
    }
  search =() =>{
   
    
    callApibyId('developer',null , this.refs.team.value)
    .then(response => {
        if(response.data === undefined){
            this.setState({ 
                reposDetail : [],
                visibility : 'hidden',
                checkdata : 0,
                msg :"Id đã nhập không hề tồn tại"
            });
        }else
        this.setState({ 
            reposDetail : response.data,
            visibility : 'visible',
            checkdata : 1,
            msg :""
        });
        
  })
  .catch(function (error) {
  
})
  }
  goBack=()=>{
    history.goBack('/trang-chu/nhan-su-chinh-thuc');
  }
  loadingData = () => {
    
        callApiPaging('teams',null,null,'1')
        .then(response => {
            this.setState({ 
              arrayTeam : response.data.results
              });
        })
        .catch(function (error) {
          this.setState({ 
            arrayTeam : [] ,
            
            });
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

  

  onChangeId=(e)=> {
    this.setState({
      id: e.target.value
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
            Chuyển nhóm
              </div>
              <div style={{paddingLeft: "160px" ,color : "red" ,height: "15px"}} >  {this.state.msg} </div>
              <br/>
          <div className="container" style={{height: "350px"}}>
          
          <div className="row">
                      <div className="col-md-6">
                   
                     
                        <label >Tên công việc</label>
                        <input type="text" className="form-control" style={{radius :  "10px"}}
                         value={this.state.name} id="name"  onChange={this.onChangeName}
                         ref='name'
                         />
                       </div>
                      
                      </div>
                <br/>
               
                <div className="row">
                    <div className="col-md-4">
                        <label >Nhập mã nhân viên </label>
                        <input type="text" className="form-control" style={{radius :  "10px"}}
                          id="id"  
                         />
                      </div>

                      <div className="col-md-2">
                      <label style={{visibility: "hidden"}} >Nhập mã nhân viên </label><br/>
                      <button type="button" className="btn btn-primary btn-block margin-bottom" onClick={this.search}>Truy vấn</button>
                     
                   </div>
                   
                   
                     
                </div>
               <br/>
                <div className="row">
                <div className="col-md-3">
                     
                     <label >Chọn Đội(Nhóm) làm việc mới</label>
                     <select className="form-control " value={this.state.team} onChange={this.onChangeTeam}
                         ref='team' id="team">
                     {this.selectOptionTeam()}
                    </select>
                   </div>
                     
                </div><br/>
                <div className="row">
                <div className="col-md-6">
                <label >Mô tả công việc </label> <br/>
                <textarea style={{height : "50px"}} rows={4} id='address' value={this.state.address} ref='address' onChange={this.onChangeAddress} className="form-control" />
                </div>
                </div>
                <br/>
               
                {/* <div className="row" style={{dis : '' + this.state.visibility }}  >
                <div className="col-md-1">
                    
                    </div>
                    <div className="col-md-5" style={{paddingLeft: "20px"}}>
                <label > Thông tin truy vấn</label>
                       
                       
                        <p> <u> Tên  </u>  : {this.state.checkdata === 1 ? this.state.reposDetail.name  : ''} </p>  
                        <p> <u> Email</u>  : {this.state.reposDetail  !== '' ?this.state.reposDetail.email : ''} </p>
                        <p> <u> Tốt nghiệp </u>  : {this.state.reposDetail  !== '' ?this.state.reposDetail.education : ''} </p>
                          
                </div>
                </div> */}
                  
                   
                 
                   </div>
             <br/>
          <div className="bt-action col-md-12 conten-button">
          <center> 
          <button type="reset" className="btn btn-primary btn-block margin-bottom">Làm mới </button>
          <button type="button" className="btn btn-primary btn-block margin-bottom" onClick={this.redir}>Chuyển </button>
          </center>
          </div>
          
          <div className="modal-footer" >
            <button type="button" className="btn " onClick={this.goBack} >Quay lại</button>
          </div>
          </form>

          </div>
          <div className="col-md-2">
        <br/>
        <div id="snackbar" >Chuyển nhóm thành công </div>
        </div>
        </div>
      </div>
          
        
    )
  }
}
