import React, {Component} from 'react';
import {connect} from 'react-redux';
import productsReducers from "../../reducers/products" ;
 class Product extends Component {
    render(){
        var {product} =this.props;
        return (
            <div className="login-box">
                
                  {this.showProducts(product)}
                </div>
            )
        }
        showProducts(products){
            var result =null ;
            result=products.map((product,index) =>{
                return <Product key={index} />
            });
        }
    }
    const mapStateToProps = state =>{

      return {
        product : state.products

      }
    }
    export default connect(mapStateToProps,null)(Product);