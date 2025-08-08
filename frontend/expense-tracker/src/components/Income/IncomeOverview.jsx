import React, { useEffect, useState } from 'react'
import { LuPlus } from 'react-icons/lu'
import CustomBarChart from '../Charts/CustomBarChart'
import { prepareIncomeBarChart } from '../../utils/helper';

const IncomeOverview = ({transactions, onAddIncome}) => {
const [chartData , setChartData] = useState([]);

useEffect(()=>{
  const result = prepareIncomeBarChart(transactions);
  setChartData(result);

  return () => {};
}, [transactions]);
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h5 className="text-xl font-semibold text-indigo-900">Income Overview</h5>
          <p className="text-sm text-gray-600 mt-1">
            Track your earnings over time and analyze your income trends.
          </p>
        </div>

        <button className="add-btn" onClick={onAddIncome}>
          <LuPlus className="text-lg mr-1" />
          Add Income
        </button>
      </div>

      <div>
        <CustomBarChart data={chartData}/>
      </div>
    </div>
  )
}

export default IncomeOverview