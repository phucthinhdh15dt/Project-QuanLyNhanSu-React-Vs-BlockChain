import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },

];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class PieChartDoanhThu extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    return (
      <div className="col-md-12">
      
      <div className="col-md-10">
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
                <center>
      <PieChart width={700} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
      </center>
      
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
                
                </div> 
    );
  }
}
