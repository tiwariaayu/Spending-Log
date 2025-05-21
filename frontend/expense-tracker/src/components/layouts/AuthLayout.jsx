import React from 'react'
import {LuTrendingUpDown, LuPiggyBank, LuWallet, LuTrendingUp} from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      {/* Left side - Decorative */}
      <div className="hidden md:block w-[60%] relative overflow-hidden">
        {/* Main Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHiem0xMC04Yy0xLjY1NyAwLTMtMS4zNDMtMy0zcyAxLjM0My0zIDMtMyAzIDEuMzQzIDMgMy0xLjM0MyAzLTMgMy4wMDMtNC4zNDMtMy0zLTEuMzQzLTIuOTk3LTQtMi45OTctNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjE1Ii8+PGNpcmNsIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iMTgiIGN5PSIzNiIgcj0iMyIvPjw/Zz48L3N2Zz4=')] opacity-10"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 p-8">
          {/* Floating Cards */}
          <div className="absolute top-20 left-10 w-72 h-48 bg-white/10 backdrop-blur-sm rounded-2xl p-4 animate-float">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <LuPiggyBank className="text-3xl text-white" />
              </div>
              <h3 className="text-white font-medium text-lg">Savings</h3>
            </div>
            <p className="text-white/80 text-base">Track your savings goals and watch your money grow</p>
          </div>

          <div className="absolute top-40 right-10 w-72 h-48 bg-white/10 backdrop-blur-sm rounded-2xl p-4 animate-float-delayed">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <LuWallet className="text-3xl text-white" />
              </div>
              <h3 className="text-white font-medium text-lg">Expenses</h3>
            </div>
            <p className="text-white/80 text-base">Monitor your spending habits and stay within budget</p>
          </div>

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-48 bg-white/10 backdrop-blur-sm rounded-2xl p-4 animate-float">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <LuTrendingUp className="text-3xl text-white" />
              </div>
              <h3 className="text-white font-medium text-lg">Analytics</h3>
            </div>
            <p className="text-white/80 text-base">Get insights into your financial patterns and trends</p>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-[40%] px-8 md:px-12 pt-8 pb-12 relative">
         <h2 className="text-3xl font-bold text-indigo-900 mb-8">Expense Tracker</h2>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZWdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiM0ZjQ2ZTUiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-md mx-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout;

const StatsInfocard = ({ icon, label, value, color }) => {
  return <div className="flex gap-6 bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-md shadow-black/5 border border-white/20 z-10">
    <div
      className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
      {icon}
    </div>
    <div>
      <h6 className="text-xs text-white/80 mb-1">{label}</h6>
      <span className="text-[20px] text-white">${value}</span>
    </div>
  </div>
}