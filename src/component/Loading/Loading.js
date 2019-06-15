import React, { Component } from 'react'
import './loading.css';
export default class Loading extends Component {
    render() {
        var {zindex} =this.props;
        return (
            
             <div className="loaderBox" style={{zIndex : zindex}}>
                <div className="loadAnim">
                <div className="loadeAnim1" />
                <div className="loadeAnim2" />
                <div className="loadeAnim3" />
                </div>
            </div>
            
        )
    }
}
