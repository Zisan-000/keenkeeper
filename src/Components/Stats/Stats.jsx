import React from "react";
import { useLoaderData } from "react-router";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const Stats = () => {
  const timelineData = useLoaderData() || [];

  const dataMap = timelineData.reduce((acc, entry) => {
    const type = entry.title.split(" ")[0];
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const chartData = [
    { name: "Text", value: dataMap["Text"] || 0, color: "#8b5cf6" },
    { name: "Call", value: dataMap["Call"] || 0, color: "#2d4a3e" },
    { name: "Video", value: dataMap["Video"] || 0, color: "#34a853" },
  ];

  return (
    <div className="bg-[#f8f9fa]  py-12 px-4 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1a202c] mb-8">
          Friendship Analytics
        </h1>

        <div className="card bg-white border border-gray-100 shadow-sm rounded-2xl p-10 min-h-125">
          <h3 className="text-[#2d4a3e] font-semibold text-lg mb-4">
            By Interaction Type
          </h3>

          <div className="h-87.5 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={85}
                  outerRadius={120}
                  paddingAngle={10}
                  cornerRadius={10}
                  dataKey="value"
                  stroke="none"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  wrapperStyle={{
                    paddingTop: "40px",
                    fontSize: "14px",
                    color: "#718096",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {timelineData.length === 0 && (
            <div className="text-center text-gray-400 italic mt-4">
              No interactions logged yet. Go to Friend Details to start
              tracking!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
