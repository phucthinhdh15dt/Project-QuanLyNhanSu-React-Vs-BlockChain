import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from "../../component/TableTeam/Table" ;
import * as TableOption from  './ConstantsCommon';

class TeamContainer extends Component {
   
    render() {
        var person = this.props.personnelReducer; 
        return (
                <div>

                    <Table  headerTable={TableOption.TEAM_TABLE_STRING}
                        title={TableOption.TEAM_TITLE_STRING} prototype={TableOption.TEAM_TABLE_PROTOTYPE} />
                    />
                </div>
        );
    }
}

export default TeamContainer;