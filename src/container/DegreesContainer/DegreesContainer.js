import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableDegrees from "../../component/Degrees/TableDegrees" ;
import * as TableOption from  './ConstantsCommon';



class PesonnelContainer extends Component {
   
    render() {
        
        return (
                <div>
                    <TableDegrees  headerTable={TableOption.PERSONNEL_TABLE_STRING}
                        title={TableOption.PERSONNEL_TITLE_STRING} prototype={TableOption.PERSONNEL_TABLE_PROTOTYPE} />
                    />
                </div>
        );
    }
}

export default PesonnelContainer;