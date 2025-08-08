import React, { useEffect, useState } from 'react';
import { LuPlus } from "react-icons/lu"
import { prepareExpenseLineChartdata } from '../../utils/helper';
import CustomLineChart from '../Charts/CustomLineChart';

const ExpenseOverview = ({transactions, onExpenseIncome }) => {
    const [chartData, setChartData ] = useState([]);

    useEffect (() => {
        const result = prepareExpenseLineChartdata(transactions);
        setChartData(result);

        return () => {};
    },[transactions]);
    
  return <div className="card">
    <div className="flex items-center justify-between mb-4">
        <div>
        <h5 className="text-xl font-semibold text-indigo-900">Expense Overview</h5>
        <p className="text-sm text-gray-600 mt-1">
            Track your spending trends over time and gain insights into where 
            your money goes.
        </p>
        </div>
        <button className="add-btn" onClick={onExpenseIncome}>
            <LuPlus className="text-lg mr-1" />
            Add Expense
        </button>
    </div>
    <div>
    <CustomLineChart data= {chartData} />
    </div>
  </div>
}

export default ExpenseOverview