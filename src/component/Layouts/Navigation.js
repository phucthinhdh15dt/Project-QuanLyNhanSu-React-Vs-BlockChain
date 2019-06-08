// Content.js

import React, {Component} from 'react';

export default class Navigation extends Component {
    render(){
     

      function showNavigation(stringNavi){
        var result =null ;
        if(stringNavi.length > 0){
          
            result = stringNavi.map((item, index) =>{
              if(index === stringNavi.length-1){
                return  <li className="active">{item}</li>
              }
                return  <li><a href="#"><i /> {item}</a></li>
            } );
        }
        
        return  result;
    }
     // get state 
     var {title} =this.props;
     var navi =this.props.navi.split("-");
        return (
           
          
          <section className="content-header">
            <h1>
              {title}
              <small>v1</small>
            </h1>
            <ol className="breadcrumb">
            {showNavigation(navi)}
             
            </ol>
          </section>
        


        )
    }
}
