import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableProject from "../../component/TableProject/TableProject" ;
import * as TableOption from  './ConstantsCommon';



class PesonnelContainer extends Component {
   
    render() {
        
        return (
                <div>
                    <TableProject  headerTable={TableOption.PROJECT_TABLE_STRING}
                        title={TableOption.PROJECT_TITLE_STRING} prototype={TableOption.PROJECT_TABLE_PROTOTYPE} />
                    />
                </div>
        );
    }
}

export default PesonnelContainer;