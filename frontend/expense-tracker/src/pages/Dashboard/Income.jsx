import React, { useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import IncomeOverview from '../../components/Income/IncomeOverview';



const Income = () => {

  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] =useState({
    show:false,
    data:null,
  });

  const [OpenAddIncomeModal, setOpenAddIncomeModal] = useState(false)

  return (
      <DashboardLayout activeMenu= "Income">
      <div className="my-5 mx-auto">   
        <div className="grid grid-cols-1 gap-6">
          <div className="">
          <IncomeOverview
          transaction ={incomeData}
          onAddIncome={() => setOpenAddIncomeModal(true)}
          />
          </div> 
        </div>
      </div>
      </DashboardLayout>
  )
}

export default Income