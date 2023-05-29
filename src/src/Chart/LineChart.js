import React from 'react';
import {ResponsiveContainer,LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip} from 'recharts';

const chartData = [
    {
        name:'React.js',
        employe:95,
        salary:85000
    },
    {
        name:'Node.js',
        employe:85,
        salary:75000
    },
    {
        name:'Next.js',
        employe:65,
        salary:62000
    },
    {
        name:'Python',
        employe:90,
        salary:80000
    },
    {
        name:'Java',
        employe:99,
        salary:95000
    },
    {
        name:'.Net',
        employe:67,
        salary:55000
    },
    {
        name:'Html',
        employe:45,
        salary:45000
    },
    {
        name:'Blockchaine',
        employe:90,
        salary:75000
    },

]

export default function LineChartData() {
  return (
    <div>
       LineChart
       <br/>
       <ResponsiveContainer width='100%' aspect={3} >
         <LineChart data={chartData} width={500} height={300} margin={{top:25,right:100,left:15, bottom:10}}>
         <CartesianGrid/>
         <XAxis dataKey="name" interval={'preserveStartEnd'}
         tickFormatter={(value)=>value + " "+"Technology" } />
         <YAxis/>
         <Tooltip contentStyle={{backgroundColor:'lightgray'}} />
         <Legend/>
           <Line type="monotone" dataKey="employe" stroke='red' activeDot={{r:8}} />
           <Line type="monotone" dataKey="salary" stroke='green' activeDot={{r:8}} />
         </LineChart>
       </ResponsiveContainer>
    </div>
  )
}
