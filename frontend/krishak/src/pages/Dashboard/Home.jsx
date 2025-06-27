import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { useUserAuth } from '../../hooks/useUserAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import InfoCard from '../../components/cards/InfoCard';
import { LuHandCoins,  LuWalletMinimal } from "react-icons/lu";
import { IoMdCar, IoMdCard } from "react-icons/io";
import { addThousandSeparator } from "../../utils/helper";
import RecentTransactions from '../../components/Dashboard/RecentTransactions';
import FinanceOverview from '../../components/Dashboard/FinanceOverview';
import ExpenseTransactions from '../../components/Dashboard/ExpenseTransactions';
import Last30DaysExpenses from '../../components/Dashboard/Last30DaysExpenses';
import RecentIncomeWithChart from '../../components/Dashboard/RecentIncomeWithChart';
import RecentIncome from '../../components/Dashboard/RecentIncome';

const Home = () => {
  useUserAuth();
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return ;
    setLoading(true);

    try {
      const response = await axiosInstance.get(
        `${API_PATHS.DASHBOARD.GET_DATA}`
      );
      if (response.data) {
        console.log("Dashboard API Response:", response.data);
        setDashboardData(response.data)
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchDashboardData()
    return () => {}
  }, [])
  
  // Combine and sort recent transactions from income and expense data
  const allRecentTransactions = React.useMemo(() => {
    const income = (dashboardData?.last60DaysIncome?.transactions || []).map(item => ({ ...item, type: 'income', amount: Math.abs(item.amount) }));
    const expenses = (dashboardData?.last30DaysExpenses?.transactions || []).map(item => ({ ...item, type: 'expense', amount: Math.abs(item.amount) }));
    const combined = [...income, ...expenses];
    // Sort by date in descending order (most recent first)
    return combined.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [dashboardData]);

  return (
    <DashboardLayout activeMenu= "Dashboard">
      <div className="p-6">
       {/* Info Cards */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <InfoCard
            icon= {<IoMdCard />}
            label="Total Balance"
            value={addThousandSeparator(dashboardData?.totalBalance || 0)}
            color="bg-primary"
          />

          <InfoCard
            icon= {<LuHandCoins />}
            label="Total Income"
            value={addThousandSeparator(dashboardData?.totalIncome || 0)}
            color="bg-orange-500"
          />

          <InfoCard
            icon= {<LuHandCoins />}
            label="Total Expense"
            value={addThousandSeparator(dashboardData?.totalExpense || 0)}
            color="bg-red-500"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column (Overview Charts) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
              <RecentIncomeWithChart
                data={dashboardData?.last60DaysIncome?.transactions?.slice(0, 4) || []}
                totalIncome={dashboardData?.totalIncome || 0}
              />
              <Last30DaysExpenses
                data={dashboardData?.last30DaysExpenses?.transactions || [] }
              /> 
              <FinanceOverview
               totalBalance={dashboardData?.totalBalance || 0}
               totalIncome={dashboardData?.totalIncome || 0}
               totalExpense={dashboardData?.totalExpense || 0}
             />
          </div>

          {/* Right Column (Transaction Lists) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <RecentTransactions
              transactions={allRecentTransactions}
              onSeeMore={() => navigate("/expense")}
            />
             <RecentIncome
                transactions={dashboardData?.last60DaysIncome?.transactions || []}
                onSeeMore={() => navigate("/income")}
              />
              <ExpenseTransactions 
                transactions={dashboardData?.last30DaysExpenses?.transactions || []}
                onSeeMore={() => navigate("/expense")}
              />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Home