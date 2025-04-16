import { Plus } from "lucide-react";

export default function NeedAttentionTable() {
  const data = [
    {
      assetCode: "MED-1234",
      department: "Cardiology",
      service: "Maintenance",
      status: "Urgent",
    },
    {
      assetCode: "MED-2356",
      department: "Radiology",
      service: "Repair",
      status: "High",
    },
    {
      assetCode: "MED-7890",
      department: "Laboratory",
      service: "Calibration",
      status: "Medium",
    },
    {
      assetCode: "MED-4567",
      department: "Emergency",
      service: "Replacement",
      status: "Low",
    },
  ];

  const statusStyles = {
    Urgent: "bg-red-100 text-red-700",
    High: "bg-orange-100 text-orange-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm w-full">
      {/* Title + Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Need Attention</h2>
        <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm">
          <Plus size={16} /> Add New
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm text-left min-w-[600px]">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-6 py-4">Asset Code</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Service</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-100 hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                  {row.assetCode}
                </td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                  {row.department}
                </td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                  {row.service}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${statusStyles[row.status]}`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="flex flex-col gap-4 md:hidden">
        {data.map((row, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="font-semibold text-gray-800">{row.assetCode}</div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[row.status]}`}
              >
                {row.status}
              </span>
            </div>
            <div className="text-sm text-gray-600">
              <p>
                <span className="font-medium">Department:</span> {row.department}
              </p>
              <p>
                <span className="font-medium">Service:</span> {row.service}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
