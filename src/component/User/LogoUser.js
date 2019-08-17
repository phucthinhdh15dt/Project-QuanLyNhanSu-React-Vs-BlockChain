import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link ,Switch } from "react-router-dom";
export default class LogoUser extends Component {
    render(){
        return (
        <div >
            <Link to="/trang-chu" className="logo">
              <span className="logo-mini"><b>LV</b>BC</span>
             
              <span className="logo-lg"><b>Luan</b>Van</span>
            </Link>
        </div>

        )
    }
}