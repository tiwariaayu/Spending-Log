import React from 'react';

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts"
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

const CustomPieChart = ( {
    data,
    label,
    totalAmount,
    colors,
    showTextAnchor,
} ) => {
  return (
   <ResponsiveContainer width="100%" height={380}>
        <PieChart>
            <Pie 
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={100}
            labelLine={false}
            paddingAngle={5}
            cornerRadius={10}
            >
               {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} stroke="none" />
               ))}
            </Pie>
            <Tooltip content={CustomTooltip} />
            <Legend content={CustomLegend}/>

            {showTextAnchor && (
                <>
                <text
                x="50%"
                y="50%"
                dy={-15}
                textAnchor="middle"
                fill="#6b7280"
                fontSize="14px"
                fontWeight="medium"
                >
                    {label}
                </text>
                <text 
                x="50%"
                y="50%"
                dy={10}
                textAnchor="middle"
                fill="#111827"
                fontSize="28px"
                fontWeight="bold"
                >
                    ₹{totalAmount}
                </text>
                </>
            )}
        </PieChart>
   </ResponsiveContainer>
  )
}

export default CustomPieChart