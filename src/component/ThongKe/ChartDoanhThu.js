import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {
    name: '2013', dtt: 400000, dtg: 240000, amt: 240000,
  },
  {
    name: '2014', dtt: 300000, dtg: 139800, amt: 221000,
  },
  {
    name: '2015', dtt: -100000, dtg: 980000, amt: 229000,
  },
  {
    name: '2016', dtt: 50000, dtg: 390800, amt: 200000,
  },
  {
    name: '2017', dtt: -200000, dtg: 480000, amt: 218100,
  },
  {
    name: '2018', dtt: -25000, dtg: 380000, amt: 250000,
  },
  {
    name: '2019', dtt: 349000, dtg: 430000, amt: 210000,
  },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map(i => i.dtt));
  const dataMin = Math.min(...data.map(i => i.dtt));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default class ChartDoanhThu extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/64v6ocdx/';
  showTableDoanhThu = () =>{

    var result =[] ;
      if(data.length > 0){
         
          result = data.map((tableJson, index) =>{
              return  <tr>
              <td style={{width: '10px'}}> {index+1} </td>
              <td>{tableJson['name']}</td>
              <td>{tableJson['dtt']}</td>
            </tr>
             
          } );
      }
      return  result;

  }
  render() {
    return (
        <div className="col-md-12">
            <div className="col-md-6">
                {/* LINE CHART */}
                <div className="box box-info">
                  <div className="box-header with-border">
                    <h3 className="box-title">Thống kê doanh thu các năm </h3>
                    <div className="box-tools pull-right">
                      <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-chart" />
                      </button>
                      <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                    </div>
                  </div>
                  <div className="box-body">
                    <div className="chart">
                    <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="green" stopOpacity={1} />
            <stop offset={off} stopColor="red" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="dtt" stroke="#000" fill="url(#splitColor)" />
      </AreaChart>
      
      
      <div className="inline">
        <div className="xanh"> </div> <div className="span-text" >Doanh thu Tăng (dtt) </div>
      </div> <br/>
      <div className="inline">
        <div className="do"> </div> <div className="span-text" >Doanh thu giảm (dtg)</div>
      </div>
      
                    </div>
                  </div>
                  {/* /.box-body */}
                </div>
                </div>
                <div className="col-md-6">
                <div className="box">
                  <div className="box-header">
                    <h3 className="box-title">Bảng biểu Thống kê doanh thu các năm</h3>
                    <div className="box-tools">
                      <ul className="pagination pagination-sm no-margin pull-right">
                        <li><a href="#">«</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">»</a></li>
                      </ul>
                    </div>
                  </div>
        {/* /.box-header */}
        <div className="box-body no-padding">
          <table className="table" style={{textAlign: 'center'}} >
            <tbody >
              <tr >
                <th style={{width: '10px'}} style={{textAlign: 'center'}} >#</th>
                <th style={{textAlign: 'center'}}>Năm</th>
                <th style={{textAlign: 'center'}}>Doanh thu (USD) </th>
                
              </tr>
              {this.showTableDoanhThu()}
             
            </tbody>
            
            
            </table>
        </div>
      </div>
                </div>
                </div> 
      
    );
  }
}
