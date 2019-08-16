import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



export default class LineDetailProject extends PureComponent {

  state = {
    opacity: {
      uv: 1,
      pv: 1,
    },
     
  };

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  }

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  }

  render() {
    const { opacity } = this.state;
    const data = this.props.data;
    return (
      <div>
        <LineChart
          width={750}
          height={450}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
          <Line type="monotone" dataKey="uv" strokeOpacity={opacity.uv} stroke="#3c8dbc" />
        </LineChart>
        <span class="label label-primary"><i class="fa fa-area-chart" aria-hidden="true"></i>  Biểu đồ thể hiện tiến độ của dự án</span> 
      </div>
    );
  }
}
