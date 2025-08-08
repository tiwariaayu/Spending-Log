import React from 'react'

const InfoCard = ({ icon, label, value, color }) => {
  return  <div className="flex items-center gap-6 bg-white rounded-xl shadow-md p-6 border border-gray-200/50">
    <div className={`w-14 h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-lg`}>
       {icon}
    </div>
    <div> 
        <h6 className="text-base text-gray-500 mb-1 font-medium">{label}</h6>
        <span className="text-2xl font-bold text-gray-800"> ₹{value}</span>
    </div>
  </div>
  
}

export default InfoCard