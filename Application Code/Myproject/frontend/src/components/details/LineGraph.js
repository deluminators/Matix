import React from 'react';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const LineGraph = ({data,name}) => {
	return (
		<div>
		<h1 style={{fontSize:20,fontWeight:'bold',padding:'20px 0'}}>Order of {name}</h1>
		<div >
      <LineChart
        width={950}
        height={500}
        data={data}
        margin={{
          top: 5, right: 50, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis strokeWidth={2} dataKey="name" />
        <YAxis strokeWidth={2} />
        <Tooltip />
        <Legend />
        <Line strokeWidth={3} type="monotone" dataKey="prev week" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line strokeWidth={3} type="monotone" dataKey="this week(pred.)" stroke="#82ca9d" />
      </LineChart></div></div>
    ); 
}

export default LineGraph;