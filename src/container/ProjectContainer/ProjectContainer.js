import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from "../../component/Table/Table" ;
import * as TableOption from  './ConstantsCommon';
import {reqGetAllData} from '../../redux/Pessonnel/action';


class ProjectContainer extends Component {
    //Lấy Tất cả data sau khi load hết component
    componentWillMount(){
        this.props.getAllData();
    }
   
    //Reder ra các component
    render() {
        var person = this.props.personnelReducer; 
        return (
                <div>
                 

                    <Table personnels={person} headerTable={TableOption.PROJECT_TABLE_STRING}
                        title={TableOption.PROJECT_TITLE_STRING} />
                        
                </div>
        );
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
export default connect(mapStateToProps,mapDispatchToProps)(ProjectContainer);