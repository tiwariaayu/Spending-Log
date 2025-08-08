import React from 'react' ;
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts" ; 



const CustomBarChart = ({data}) => {

  //Function to alternate colors
  const getBarColor = (index) => {
    return index % 2 === 0 ? "#10b981" : "#34d399" ;
  };

  const CustomTooltip = ({ active, payload}) => {
    if(active && payload && payload.length) {
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          <p className="text-xs font-semibold text-green-800 mb-1">{payload[0].payload.source || payload[0].payload.month || payload[0].payload.category}</p>
          <p className="text-sm text-gray-600">
            Amount : <span className="text-sm font-medium text-gray-900">₹{payload[0].payload.amount}</span>
          </p>
        </div>
      )
    }
    return null ; 
  };
  
  return (
    <div className="bg-white mt-6 rounded-lg shadow-md p-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#6b7280"}} />
          <YAxis tick={{ fontSize: 12, fill: "#6b7280"}} />

          <Tooltip content={CustomTooltip} />

          <Bar 
            dataKey="amount"
            radius={[4, 4, 0, 0]}
            >
              {data.map((entry, index) =>(
                <Cell key={index} fill={getBarColor(index)} />
              ))}
            </Bar>

        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CustomBarChart