import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import HospitalDashboardCard from "./components/HospitalDashboardCard"
import ServicesCard from "./components/ServiceCard"
import NeedAttentionTable from "./components/NeedAttentionTable"
import DowntimeCards from "./components/DownTimeCard"

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        
        {/* Yeh raha main area */}
        <main className="p-6 bg-[#F5F7FA] flex-1 overflow-y-auto">
          <div className="flex flex-col gap-6">
          <HospitalDashboardCard/>
          <DowntimeCards/>
          <ServicesCard/>
          <NeedAttentionTable/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
