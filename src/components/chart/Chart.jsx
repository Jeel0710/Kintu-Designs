import React from 'react';
import "./chart.scss"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
const data = [
    {
      Month: 'Jan',
      Membership: 4000,
      Training: 2400,
      amt: 2400,
    },
    {
      Month: 'Feb',
      Membership: 3000,
      Training: 1398,
      amt: 2210,
    },
    {
      Month: 'Mar',
      Membership: 2000,
      Training: 9800,
      amt: 2290,
    },
    {
      Month: 'Apr',
      Membership: 2780,
      Training: 3908,
      amt: 2000,
    },
    {
      Month: 'May',
      Membership: 1890,
      Training: 4800,
      amt: 2181,
    },
    {
      Month: 'June',
      Membership: 2390,
      Training: 3800,
      amt: 2500,
    },
    {
      Month: 'July',
      Membership: 3490,
      Training: 4300,
      amt: 2100,
    },
    {
      Month: 'Aug',
      Membership: 2590,
      Training: 5300,
      amt: 2100,
    },
    {
      Month: 'Sept',
      Membership: 1490,
      Training: 6300,
      amt: 2100,
    },
    {
      Month: 'Oct',
      Membership: 3490,
      Training: 4300,
      amt: 2100,
    },
    {
      Month: 'Nov',
      Membership: 6890,
      Training: 3500,
      amt: 2100,
    },
    {
      Month: 'Dec',
      Membership: 3890,
      Training: 4100,
      amt: 2100,
    },
  ];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Revenue History</div>
      <AreaChart width={1600} height={500} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8fd3d9" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8fd3d9" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="Month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
        <Tooltip />
        <Area type="monotone" dataKey="Membership" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="Training" stroke="#8fd3d9" fillOpacity={1} fill="url(#colorPv)" />
  </AreaChart>
    </div>
  )
}

export default Chart