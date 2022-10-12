import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

const Statistics = () => {
  const totalCourse = useLoaderData();
  const courseItems = totalCourse.data;
  const data = courseItems;
  const { id, name, total } = courseItems;
  return (
    <div className="flex items-center justify-center">
      <BarChart width={400} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="name" fill="#8884d8" />
        <Bar dataKey="total" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Statistics;
