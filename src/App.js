import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Home from './component/App/Home';
import Login from './component/App/Login';
import history from './RouterURL/history';
import "./css/css/AdminLTE.min.css";
import "./css/css/skins/_all-skins.min.css";
import "./css/bower_components/bootstrap/dist/css/bootstrap.min.css";
import "./css/bower_components/bootstrap/dist/css/bootstrap.min.css";
import "./css/bower_components/font-awesome/css/font-awesome.min.css";
import "./css/bower_components/Ionicons/css/ionicons.min.css";
import "./css/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css";

export default class App extends Component {
  componentDidMount() {
  }
  render() {
    
    return (
      <Router history={history}> 

          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/logout" component={Login} />
          <Route  path="/home" component={Home} />
      </Router > 
    )
  }
}


