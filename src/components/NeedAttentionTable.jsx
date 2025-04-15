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
    <div className="bg-white rounded-2xl p-6 shadow-sm w-full overflow-x-auto">
      <div className="flex justify-between items-center mb-6 min-w-[600px]">
        <h2 className="text-xl font-semibold text-gray-800">Need Attention</h2>
        <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm">
          <Plus size={16} /> Add New
        </button>
      </div>

      <div className="overflow-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th scope="col" className="px-6 py-4">Asset Code</th>
              <th scope="col" className="px-6 py-4">Department</th>
              <th scope="col" className="px-6 py-4">Service</th>
              <th scope="col" className="px-6 py-4">Status</th>
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
    </div>
  );
}
