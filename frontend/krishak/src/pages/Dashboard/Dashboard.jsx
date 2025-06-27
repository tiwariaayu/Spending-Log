import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { LuPlant, LuCalendar, LuClipboardList } from "react-icons/lu";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  const stats = [
    {
      title: "Active Crops",
      value: "3",
      icon: LuPlant,
      color: "bg-green-500",
    },
    {
      title: "Upcoming Tasks",
      value: "5",
      icon: LuCalendar,
      color: "bg-blue-500",
    },
    {
      title: "Farm Records",
      value: "12",
      icon: LuClipboardList,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back, {user?.fullName || 'Farmer'}!
        </h1>
        <p className="text-gray-600 mt-2">
          Here's an overview of your farm's current status
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-800 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-full`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-2 rounded-full">
                <LuPlant className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Wheat Harvest Completed</p>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <LuCalendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Fertilizer Application Scheduled</p>
                <p className="text-sm text-gray-600">Yesterday</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-2 rounded-full">
                <LuClipboardList className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">New Crop Record Added</p>
                <p className="text-sm text-gray-600">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 