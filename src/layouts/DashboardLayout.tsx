"use client"

import { useState } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import Sidebar from "../components/Sidebar"
import PatientDashboard from "../app/PatientDashboard"
import SymptomChecker from "../app/SymptomChecker"
import DoctorConsultation from "../app/DoctorConsultation"
import CarePlanPage from "../app/CarePlanPage"
import MonitoringPage from "../app/MonitoringPage"
import MentalHealthPage from "../app/MentalHealthPage"
import HealthRecordsPage from "../app/HealthRecordsPage"
import { LogOut } from "lucide-react"

export default function DashboardLayout({ setUser }: { setUser: (user: null) => void }) {
  const [currentPage, setCurrentPage] = useState("dashboard")

  const handleLogout = async () => {
    await signOut(auth)
    setUser(null)
  }

  return (
    <div className="flex h-screen bg-neutral-50">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-neutral-200 px-8 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-neutral-900">
            {currentPage === "dashboard" && "Health Dashboard"}
            {currentPage === "symptom" && "AI Symptom Checker"}
            {currentPage === "doctor" && "Doctor Consultation"}
            {currentPage === "care" && "Care Plan"}
            {currentPage === "monitoring" && "Vital Monitoring"}
            {currentPage === "mental" && "Mental Health"}
            {currentPage === "records" && "Health Records"}
          </h2>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-danger hover:bg-danger/10 rounded-lg transition"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {currentPage === "dashboard" && <PatientDashboard />}
          {currentPage === "symptom" && <SymptomChecker />}
          {currentPage === "doctor" && <DoctorConsultation />}
          {currentPage === "care" && <CarePlanPage />}
          {currentPage === "monitoring" && <MonitoringPage />}
          {currentPage === "mental" && <MentalHealthPage />}
          {currentPage === "records" && <HealthRecordsPage />}
        </div>
      </div>
    </div>
  )
}
