import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Dashboard
            <small>Version 2.0</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li className="active">Dashboard</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          {/* Info boxes */}
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">CPU Traffic</span>
                  <span className="info-box-number">90<small>%</small></span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-red"><i className="fa fa-google-plus" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">41,410</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            {/* fix for small devices only */}
            <div className="clearfix visible-sm-block" />
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-green"><i className="ion ion-ios-cart-outline" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">Sales</span>
                  <span className="info-box-number">760</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-yellow"><i className="ion ion-ios-people-outline" /></span>
                <div className="info-box-content">
                  <span className="info-box-text">New Members</span>
                  <span className="info-box-number">2,000</span>
                </div>
                {/* /.info-box-content */}
              </div>
              {/* /.info-box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-md-12">
              <div className="box">
                <div className="box-header with-border">
                  <h3 className="box-title">Monthly Recap Report</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    <div className="btn-group">
                      <button type="button" className="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-wrench" /></button>
                      <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li className="divider" />
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <div className="row">
                    <div className="col-md-8">
                      <p className="text-center">
                        <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                      </p>
                      <div className="chart">
                        {/* Sales Chart Canvas */}
                        <canvas id="salesChart" style={{height: '180px'}} />
                      </div>
                      {/* /.chart-responsive */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-4">
                      <p className="text-center">
                        <strong>Goal Completion</strong>
                      </p>
                      <div className="progress-group">
                        <span className="progress-text">Add Products to Cart</span>
                        <span className="progress-number"><b>160</b>/200</span>
                        <div className="progress sm">
                          <div className="progress-bar progress-bar-aqua" style={{width: '80%'}} />
                        </div>
                      </div>
                      {/* /.progress-group */}
                      <div className="progress-group">
                        <span className="progress-text">Complete Purchase</span>
                        <span className="progress-number"><b>310</b>/400</span>
                        <div className="progress sm">
                          <div className="progress-bar progress-bar-red" style={{width: '80%'}} />
                        </div>
                      </div>
                      {/* /.progress-group */}
                      <div className="progress-group">
                        <span className="progress-text">Visit Premium Page</span>
                        <span className="progress-number"><b>480</b>/800</span>
                        <div className="progress sm">
                          <div className="progress-bar progress-bar-green" style={{width: '80%'}} />
                        </div>
                      </div>
                      {/* /.progress-group */}
                      <div className="progress-group">
                        <span className="progress-text">Send Inquiries</span>
                        <span className="progress-number"><b>250</b>/500</span>
                        <div className="progress sm">
                          <div className="progress-bar progress-bar-yellow" style={{width: '80%'}} />
                        </div>
                      </div>
                      {/* /.progress-group */}
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* ./box-body */}
                <div className="box-footer">
                  <div className="row">
                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-green"><i className="fa fa-caret-up" /> 17%</span>
                        <h5 className="description-header">$35,210.43</h5>
                        <span className="description-text">TOTAL REVENUE</span>
                      </div>
                      {/* /.description-block */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-yellow"><i className="fa fa-caret-left" /> 0%</span>
                        <h5 className="description-header">$10,390.90</h5>
                        <span className="description-text">TOTAL COST</span>
                      </div>
                      {/* /.description-block */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-green"><i className="fa fa-caret-up" /> 20%</span>
                        <h5 className="description-header">$24,813.53</h5>
                        <span className="description-text">TOTAL PROFIT</span>
                      </div>
                      {/* /.description-block */}
                    </div>
                    {/* /.col */}
                    <div className="col-sm-3 col-xs-6">
                      <div className="description-block">
                        <span className="description-percentage text-red"><i className="fa fa-caret-down" /> 18%</span>
                        <h5 className="description-header">1200</h5>
                        <span className="description-text">GOAL COMPLETIONS</span>
                      </div>
                     
                    </div>
                  </div>
                  
                </div>
              
              </div>
              
            </div>
           
          </div>
       }
        
        </section>
      </div>
    )
  }
}
