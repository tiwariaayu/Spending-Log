import React from 'react'
import { XAxis, YAxis , Tooltip,ResponsiveContainer, CartesianGrid, Area, AreaChart  } from 'recharts'

const CustomLineChart = ({ data }) => {

    const CustomTooltip = ({ active, payload}) => {
        if(active && payload && payload.length) {
            return (
                <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
                    <p className="text-xs font-semibold text-red-800 mb-1">{payload[0].payload.category}</p>
                    <p className="text-sm text-gray-600">
                        Amount: <span className="text-sm font-medium text-gray-900">₹{payload[0].payload.amount}</span>
                    </p>
                </div>
            )
        }
        return null;
    }
  return  <div className="bg-white rounded-lg shadow-md p-4">
    <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
        <defs>
            <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />;
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />;

            </linearGradient>
        </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" /> 
            <XAxis dataKey="month" tick={{ fontSize : 12, fill:"#6b7280"}} />
            <YAxis tick={{ fontSize: 12, fill: "#6b7280"}} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="amount" stroke="#dc2626" fill="url(#expenseGradient)" strokeWidth={2} dot={{ r:4, fill: "#dc2626", strokeWidth: 1, stroke: "#fff"}} activeDot={{ r: 6, fill: "#dc2626", strokeWidth: 2, stroke: "#fff"}}/>
        </AreaChart>
    </ResponsiveContainer>
  </div>
}

export default CustomLineChart