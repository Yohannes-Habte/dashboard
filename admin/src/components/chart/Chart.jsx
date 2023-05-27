import React from 'react';
import './Chart.scss';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

const Chart = ( {aspect, title} ) => {
  // aspect is used to control the size of the diagram
  const data = [
    { name: 'January', total: 1200 },
    { name: 'February', total: 2400 },
    { name: 'March', total: 1800 },
    { name: 'April', total: 1600 },
    { name: 'May', total: 1200 },
    { name: 'June', total: 1500 },
    
  ];
  return (
    <section className="chart">
      <h3 className='revenue'> {title} </h3>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            
          </defs>
          <XAxis dataKey="name" stroke='gray' />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className='chart-Grid' />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
         
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Chart;
