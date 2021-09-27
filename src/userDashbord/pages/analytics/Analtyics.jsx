import React from 'react';
import './analytics.css';
import {
   LineChart,
    Line, 
    XAxis,
    Legend, 
     CartesianGrid,
     Tooltip,  
     ResponsiveContainer 
    } from 'recharts';

export default function Analytics({title,data,dataKey,grid}) {
  

    return (
        <div className="chart">
            <h2 className="chartTitle">{title}</h2>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
               <LineChart data={data}>
                  <XAxis dataKey="name" stroke="#008000"/>
                  <Line type="monotone" dataKey={dataKey} stroke="#008000"/>
                  <Tooltip/>
                  {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                  <Legend/>
               </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
