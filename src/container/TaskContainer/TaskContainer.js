import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableTask from "../../component/TableTask/TableTask";
import * as TableOption from  './ConstantsCommon';



class TaskContainer extends Component {
   
    render() {
        
        return (
                <div>
                    <TableTask  headerTable={TableOption.TASK_TABLE_STRING}
                        title={TableOption.TASK_TITLE_STRING} prototype={TableOption.TASK_TABLE_PROTOTYPE} />
                    />
                </div>
        );
    }
}

export default TaskContainer;