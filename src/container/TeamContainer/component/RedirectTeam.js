import React, { Component } from 'react'
import './ModalCreate.css';
import { callApiPaging, callApibyId, callApiAdd } from './../../../utils/ConnectApi';
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
  search =() =>{
   
    
    callApibyId('developer',null , this.refs.id.value)
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
    history.goBack('/home/nhan-su-chinh-thuc');
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
            
              <div className="row"> 
              <div className="col-md-4">
              </div>
              <div className="col-md-8">
              <br /> <br /> <br />  <br/>
                 <div className="title">
                Chuyển nhóm
                </div>
                <div style={{paddingLeft: "160px" ,color : "red" ,height: "30px"}} >  {this.state.msg} </div>
                <form  name="myForm">
              <div className="modal-body container">
               
              <div className="row">
                    <div className="col-md-1">
                    {/* can le */}
                    </div>
                      <div className="col-md-4">
                     
                        <label >Nhập mã nhân viên </label>
                        <input type="text" className="form-control" style={{radius :  "10px"}}
                          id="id"  onChange={this.onChangeId}
                         ref='id'
                         />
                      </div>
                      <div className="col-md-1">
                      <label >&nbsp; &nbsp;   </label>
                      <button type="button" className="btn btn-success" onClick={this.search}>Truy vấn</button>
                     
                   </div>
                   
                   
                     
                </div>
               <br/>
                <div className="row">
                <div className="col-md-1">
                    {/* can le */}
                    </div>
                <div className="col-md-4">
                     
                     <label >Chọn Đội(Nhóm) làm việc mới</label>
                     <select className="form-control " value={this.state.team} >
                     {this.selectOptionTeam()}
                    </select>
                   </div>
                     
                </div>
                <br/>
               
                <div className="row" style={{visibility : '' + this.state.visibility }}  >
                <div className="col-md-1">
                    {/* can le */}
                    </div>
                    <div className="col-md-5" style={{paddingLeft: "20px"}}>
                <label > Thông tin truy vấn</label>
                       
                       
                        <p> <u> Tên  </u>  : {this.state.checkdata === 1 ? this.state.reposDetail.name  : ''} </p>  
                        <p> <u> Email</u>  : {this.state.reposDetail  !== '' ?this.state.reposDetail.email : ''} </p>
                        <p> <u> Tốt nghiệp </u>  : {this.state.reposDetail  !== '' ?this.state.reposDetail.education : ''} </p>
                </div>
                </div>
                  
                   
                 
                   </div>
                   
               <br/>
              <div className="bt-action" style={{marginTop : "50px"}}>
              <button type="reset" className="btn btn-success">Làm mới </button>
              <button type="button" className="btn btn-success" onClick={this.add}>Chuyển </button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn " onClick={this.goBack} >Quay lại</button>
              </div>
              </form>
              </div>
              </div>
            </div>
          
        
    )
  }
}
