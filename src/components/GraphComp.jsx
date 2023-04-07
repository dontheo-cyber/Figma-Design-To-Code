import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { data } from '../utils/graphData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

 const GraphCompo =() => {
    console.log(data);

    return (
    //     <PieChart width={800} height={400} >
    //     <Pie
    //       data={graphData}
    //       cx={120}
    //       cy={200}
    //       innerRadius={60}
    //       outerRadius={80}
    //       fill="#8884d8"
    //       paddingAngle={5}
    //       dataKey="value"
    //     >
    //       {graphData.map((entry, index) => (
    //         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    //       ))}
    //     </Pie>
    //     <Pie
    //       data={graphData}
    //       cx={420}
    //       cy={200}
    //       startAngle={180}
    //       endAngle={0}
    //       innerRadius={60}
    //       outerRadius={80}
    //       fill="#8884d8"
    //       paddingAngle={5}
    //       dataKey="value"
    //     >
    //       {graphData.map((entry, index) => (
    //         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    //       ))}
    //     </Pie>
    //   </PieChart>
      <ResponsiveContainer width="100%" height={500}>
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke="#FF5403" fill="#FF5403" />
        </AreaChart>
      </ResponsiveContainer>
    );
}
export default GraphCompo
