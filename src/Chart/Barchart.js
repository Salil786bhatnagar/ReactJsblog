import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const barData = [
  {
    name: "Page A",
    leads: 400
  },
  {
    name: "Page B",
    leads: 380
  },
  {
    name: "Page C",
    leads: 2800
  },
  {
    name: "Page D",
    leads: 980
  },
  {
    name: "Page E",
    leads: 90
  },
  {
    name: "Page F",
    leads: 260
  },
  {
    name: "Page G",
    leads: 280
  },
  {
    name: "Page H",
    leads: 660
  },
  {
    name: "Page I",
    leads: 980
  },
  {
    name: "Page J",
    leads: 780
  },
  {
    name: "Page K",
    leads: 420
  },
  {
    name: "Page L",
    leads: 422
  },
  {
    name: "Page M",
    leads: 570
  },
  {
    name: "Page N",
    leads: 276
  },
  {
    name: "Page 0",
    leads: 450
  },
  {
    name: "Page P",
    leads: 334
  },
  {
    name: "Page Q",
    leads: 678
  },
  {
    name: "Page R",
    leads: 680
  },
  {
    name: "Page S",
    leads: 778
  },
  {
    name: "Page T",
    leads: 780
  },
  {
    name: "Page U",
    leads: 213
  },  {
    name: "Page V",
    leads: 290
  },
  {
    name: "Page x",
    leads: 280
  },
  {
    name: "Page Y",
    leads: 888
  },
  {
    name: "Page Z",
    leads: 567
  },
];

export default function BarChartData() {
  return (
    <BarChart
      data={barData} width={1500} height={800} margin={{top:10,right:100,left:15, bottom:10}}
      barSize={20}
    >
      <XAxis scale="point" dataKey="name" interval={'preserveStartEnd'}  padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip contentStyle={{backgroundColor:'lightgray'}} />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="leads" fill="pink" background={{ fill: "#eee" }} stroke='red' />
    </BarChart>
  );
}