import React, { Component } from 'react'
import { Link,Redirect } from 'react-router-dom';
import {callApi, callApiPaging, callApiDelete } from '../../utils/ConnectApi';
import ModalDelete from './../Modal/ModalDelete';
import { connect } from 'react-redux';
import {reqGetAllData, reqDeleteById} from '../../redux/Pessonnel/action';
import * as TableOption from  './../../container/PesonnelContainer/ConstantsCommon';
<script src="https://unpkg.com/react/umd/react.production.js" crossorigin />
   class TableRow extends Component {
 
  confirmDelete = () =>{
    if(window.confirm("Ban chac chan muon xoa")){
      this.setState({
        loading: true
      })
    }
  }
  //Lấy Tất cả data sau khi load hết component
  componentWillMount(){
    this.props.getAllData();
}

  

  render() {
    var list =this.props.personnelReducer;
    return (
        <tr key={this.props.personnelReducer.index}> 
          
          <td>{list[this.props.prototype[0]]}</td>
          <td>{list[this.props.prototype[1]]}</td>
          <td>{list[this.props.prototype[2]]}</td>
          <td>{list[this.props.prototype[3]]}</td>
          <td>{list[this.props.prototype[4]]}</td>
        <td> 
        {/* data-toggle="modal" data-target="#exampleModalDelete" */}
            <button className="btn btn-danger btn-xs" onClick={this.confirmDelete} >Xóa</button> &nbsp;
            <button className="btn btn-primary btn-xs" name="BUTTON_EDIT" data-toggle="modal" data-target="#exampleModalEdit" >Sửa</button>  &nbsp;
            <button className="btn btn-primary btn-xs" name="BUTTON_DETAIL" onClick={this.text}  > <Link to="/home/nhan-su-chinh-thuc/chi-tiet" >Chi tiết</Link></button> 
            <ModalDelete idDelete={list[this.props.prototype[0]]}  titleModalDelete={TableOption.PERSONNEL_MODAL_DELETE_TITLE} />
        </td>
        
      </tr>

    )
  }
}
//Chuyển State thành Props cho component sử dụng
const mapStateToProps = (state) => {
  return {
      personnelReducer: state.personnelReducer,
      person: state.person
  }
}
//Dispatch action và props
const mapDispatchToProps = (dispatch, props) => {
  return {
      getAllData:()=>{
          dispatch(reqGetAllData()) ;
         
      },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TableRow);
