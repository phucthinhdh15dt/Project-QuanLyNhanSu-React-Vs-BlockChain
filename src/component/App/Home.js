import React, { Component } from 'react';
import SideBar from './../../component/Layouts/SideBar ';
import HeaderTop from './../../component/Layouts/HeaderTop';
import Footer from './../../component/Layouts/Footer';
import LogoUser from './../../component/User/LogoUser';
import ControlSidebar from './../../component/Layouts/ControlSidebar'
import RouterURL from './../../RouterURL/RouterURL';

export default class Home extends Component {
  render() {
    return (
        <div className="App">
         <div className="wrapper">
            <header className="main-header" style={{position: "fixed",width:"100%" }}>
                <LogoUser />
                <HeaderTop />
            </header >
            <RouterURL />
            <SideBar />
            <Footer />
            <ControlSidebar /> 
        </div> 
         
       
      <product />
       </div>
    )
  }
}
