import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import HospitalDashboardCard from "./components/HospitalDashboardCard"
import ServicesCard from "./components/ServiceCard"
import NeedAttentionTable from "./components/NeedAttentionTable"
import DowntimeCards from "./components/DownTimeCard"
import AssetCards from "./components/AssetCards"

const pieData = [
  { name: "Calibrated", value: 45, color: "#3b82f6" },
  { name: "Not Calibrated", value: 35, color: "#fca5a5" },
  { name: "Not Required", value: 20, color: "#9ca3af" },
];

const pieData2 = [
  { name: "Total", value: 50, color: "#FBBF24" },
  { name: "Expire Soon", value: 30, color: "#A78BFA" },
  { name: "Requested", value: 20, color: "#34D399" },
];

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />        
        <div className="p-6 bg-[#F5F7FA] flex-1 overflow-y-auto">
          <div className="flex flex-col gap-6">
          <HospitalDashboardCard/>
          <AssetCards/>
          <DowntimeCards/>
          <ServicesCard barTitle={"Services"} pieTitle={"Calibration Status"} pieData={pieData}/>
          <ServicesCard barTitle={"Incidents"} pieTitle={"Warranty Status"} pieData={pieData2}/>
          <NeedAttentionTable/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
