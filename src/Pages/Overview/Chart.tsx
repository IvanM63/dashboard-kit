import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: 0,
    uv: 28,
    pv: 10,
    amt: 2400,
  },
  {
    name: 1,
    uv: 30,
    pv: 20,
    amt: 2210,
  },
  {
    name: 2,
    uv: 32,
    pv: 30,
    amt: 2290,
  },
  {
    name: 3,
    uv: 30,
    pv: 25,
    amt: 2000,
  },
  {
    name: 4,
    uv: 28,
    pv: 24,
    amt: 2181,
  },
  {
    name: 5,
    uv: 25,
    pv: 28,
    amt: 2500,
  },
  {
    name: 6,
    uv: 22,
    pv: 30,
    amt: 2100,
  },
  {
    name: 7,
    uv: 24,
    pv: 40,
    amt: 2100,
  },
  {
    name: 8,
    uv: 26,
    pv: 50,
    amt: 2100,
  },
  {
    name: 9,
    uv: 28,
    pv: 40,
    amt: 2100,
  },
  {
    name: 10,
    uv: 28,
    pv: 30,
    amt: 2100,
  },
  {
    name: 11,
    uv: 25,
    pv: 25,
    amt: 2100,
  },
  {
    name: 12,
    uv: 22,
    pv: 30,
    amt: 2100,
  },
  {
    name: 13,
    uv: 20,
    pv: 35,
    amt: 2100,
  },
  {
    name: 14,
    uv: 25,
    pv: 45,
    amt: 2100,
  },
  {
    name: 15,
    uv: 30,
    pv: 50,
    amt: 2100,
  },
  {
    name: 16,
    uv: 34,
    pv: 50,
    amt: 2100,
  },
  {
    name: 17,
    uv: 37,
    pv: 45,
    amt: 2100,
  },
  {
    name: 18,
    uv: 40,
    pv: 43,
    amt: 2100,
  },
  {
    name: 19,
    uv: 41,
    pv: 40,
    amt: 2100,
  },
  {
    name: 20,
    uv: 28,
    pv: 38,
    amt: 2100,
  },
  {
    name: 21,
    uv: 30,
    pv: 35,
    amt: 2100,
  },
  {
    name: 22,
    uv: 33,
    pv: 35,
    amt: 2100,
  },
];

export default class Chart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-area-chart-4ujxw";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={730}
          height={500}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3751ff" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#3751ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid horizontal={true} vertical={false} />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#808080"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#3751ff"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
