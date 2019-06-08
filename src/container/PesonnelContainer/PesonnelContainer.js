import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from "../../component/Table/Table" ;
import * as TableOption from  './ConstantsCommon';



class PesonnelContainer extends Component {
   
    render() {
        
        return (
                <div>
                    <Table  headerTable={TableOption.PERSONNEL_TABLE_STRING}
                        title={TableOption.PERSONNEL_TITLE_STRING} prototype={TableOption.PERSONNEL_TABLE_PROTOTYPE} />
                    />
                </div>
        );
    }
}

export default PesonnelContainer;