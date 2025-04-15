import React from "react";
import { PlusCircle } from "lucide-react";
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PieChart, Pie, Cell } from "recharts";

// const pieData = [
//     { name: "Calibrated", value: 45, color: "#3b82f6" },
//     { name: "Not Calibrated", value: 35, color: "#fca5a5" },
//     { name: "Not Required", value: 20, color: "#9ca3af" },
// ];

export default function ServicesCard(props) {
    const {pieData} = props
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl ">
            {/* Left Panel */}
            <div>
                <div className="bg-white rounded-2xl h-full shadow p-6 ">

                    <h2 className="text-lg font-semibold mb-6 text-gray-800"> {props.barTitle}</h2>
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                        {/* Status Cards */}
                        <div className="flex flex-row md:flex-col gap-8 w-full md:w-auto md:max-w-[150px] justify-between">
                            {[
                                {
                                    title: "Open",
                                    value: "24",
                                    percent: 48,
                                    color: "#22c55e",
                                    bg: "bg-green-50",
                                    text: "text-green-700",
                                },
                                {
                                    title: "Closed",
                                    value: "18",
                                    percent: 36,
                                    color: "#ef4444",
                                    bg: "bg-red-50",
                                    text: "text-red-700",
                                },
                                {
                                    title: "Expenditure",
                                    value: "₹45K",
                                    percent: 45,
                                    color: "#3b82f6",
                                    bg: "bg-blue-50",
                                    text: "text-blue-700",
                                },
                            ].map(({ title, value, percent, color, bg, text }, idx) => (
                                <div key={idx} className={`${bg} rounded-xl text-center w-full`}>
                                    <div className="flex gap-2 justify-between pb-2">

                                        <p className="text-[12px] text-gray-600 mb-2">{title}</p>
                                        <p className={`font-semibold ${text}`}>{value}</p>
                                    </div>
                                    <div className="w-10 h-10 mx-auto">
                                        <CircularProgressbarWithChildren
                                            value={percent}
                                            strokeWidth={10}
                                            styles={buildStyles({
                                                pathColor: color,
                                                trailColor: "#e5e7eb",
                                            })}
                                        >
                                            <div className="text-[12px] font-semibold text-gray-800">{percent}%</div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bar Chart Section */}
                        <div className="flex-1 flex flex-col">
                            <div className="flex grow justify-between items-center mb-4 flex-wrap gap-2">
                                <div className="flex gap-2 bg-gray-100 p-1 rounded-lg text-sm">
                                    <button className="bg-white text-gray-800 px-3 py-1 rounded-md shadow">Day</button>
                                    <button className="px-3 py-1 text-gray-500">Month</button>
                                    <button className="px-3 py-1 text-gray-500">Year</button>
                                </div>
                                <button className="bg-blue-600 text-white text-sm flex items-center gap-2 px-4 py-2 rounded-xl">
                                    <PlusCircle size={16} /> Add New
                                </button>
                            </div>

                            <div className="h-40 flex-none bg-gradient-to-t from-blue-100 to-white rounded-xl flex items-end justify-around p-4">
                                {[40, 60, 45, 80, 100, 60].map((h, i) => (
                                    <div
                                        key={i}
                                        className="w-6 rounded bg-blue-300"
                                        style={{ height: `${h}%` }}
                                    ></div>
                                ))}
                            </div>

                            <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
                                {['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'].map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel - Calibration Status */}
            <div className="bg-white rounded-2xl shadow p-6 w-full flex flex-col justify-between">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">{props.pieTitle}</h2>
                    <div className="text-sm text-gray-500 border px-3 py-1 rounded-xl">📅 Mar 2025</div>
                </div>

                <div className="flex justify-center">
                    <PieChart width={200} height={200}>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {pieData.map((item, idx) => (
                        <div
                            key={idx}
                            className={`rounded-xl p-4 text-center ${idx == "0"
                                    ? "bg-blue-50 text-blue-600"
                                    : idx == "1"
                                        ? "bg-red-50 text-red-600"
                                        : "bg-gray-100 text-gray-700"
                                }`}
                        >
                            <div className="text-xl font-bold">{item.value}%</div>
                            <div className="text-sm mt-1">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
