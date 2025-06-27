import React from 'react'
import { LuTrendingUpDown, LuPiggyBank, LuWallet, LuTrendingUp } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="/krishak.svg"
          alt="Krishak"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Krishak
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Your Digital Farming Assistant
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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