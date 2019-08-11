import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableReview from "../../component/Review/TableReview";
import * as TableOption from  './ConstantsCommon';



class ReviewContainer extends Component {
   
    render() {
        
        return (
                <div>
                    <TableReview  headerTable={TableOption.PERSONNEL_TABLE_STRING}
                        title={TableOption.PERSONNEL_TITLE_STRING} prototype={TableOption.PERSONNEL_TABLE_PROTOTYPE} />
                    />
                </div>
        );
    }
}

export default ReviewContainer;