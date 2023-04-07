import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { pieChartData } from '../utils/graphData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const LocationComponent = () => {
  return (
    <>
        <PieChart width={800} height={800}>
        <Pie
          data={pieChartData}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </>
  )
}

export default LocationComponent