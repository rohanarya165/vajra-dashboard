import React from "react";
import { Plus } from "lucide-react";

export default function HospitalDashboardCard() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow w-full max-w-7xl mx-auto flex flex-col gap-6">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        {/* Left Info */}
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-xl">
            <div className="bg-blue-600 w-6 h-6 rounded flex items-center justify-center">
              <span className="text-white text-sm">🏥</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-xl font-semibold">City General Hospital</div>
            <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
              <span className="text-green-500">● Online</span>
              <span>• Last updated 2 mins ago</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">Active Client</span>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col sm:flex-row items-stretch gap-4 ml-auto">
          <button className="bg-blue-900 text-white flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm whitespace-nowrap">
            <Plus size={16} /> Generate Report
          </button>
          <div className="bg-gradient-to-br from-blue-100 to-blue-300 w-full sm:w-40 h-20 rounded-xl flex items-center justify-center text-white font-mono text-sm text-center">
            XXXXXXXXXXXX<br />XXXXXXXXXXXX
          </div>
        </div>
      </div>

      {/* Main Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <p className="text-sm text-gray-500">Annual Contract Value</p>
          <p className="text-2xl font-bold text-gray-800">₹2,50,00,000</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-xl">
          <p className="text-sm text-blue-700 font-medium">Performance</p>
          <p className="text-xl font-bold text-blue-800">98.5%</p>
          <div className="bg-blue-200 h-2 rounded mt-2">
            <div className="bg-blue-600 h-2 rounded w-[98.5%]"></div>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-xl">
          <p className="text-sm text-green-700 font-medium">Satisfaction</p>
          <p className="text-xl font-bold text-green-800">4.8/5</p>
          <div className="flex gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-green-500 text-lg leading-none">★</span>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-xl">
          <p className="text-sm text-purple-700 font-medium">Asset Utilization</p>
          <p className="text-xl font-bold text-purple-800">95.3%</p>
          <div className="flex gap-1 mt-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i < 5 ? 'bg-purple-600' : 'bg-purple-200'}`}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-4">
        <div>
          <p className="text-sm text-gray-500">Assets</p>
          <p className="text-xl font-semibold text-gray-800">487</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Services</p>
          <p className="text-xl font-semibold text-gray-800">24</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Uptime</p>
          <p className="text-xl font-semibold text-gray-800">99.9%</p>
        </div>
      </div>
    </div>
  );
}
