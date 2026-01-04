"use client"

import { Heart, Stethoscope, Pill, TrendingUp, Brain, FileText, Home } from "lucide-react"

const menuItems = [
  { id: "dashboard", icon: Home, label: "Dashboard" },
  { id: "symptom", icon: Heart, label: "Symptom Checker" },
  { id: "doctor", icon: Stethoscope, label: "Doctor Consultation" },
  { id: "care", icon: Pill, label: "Care Plan" },
  { id: "monitoring", icon: TrendingUp, label: "Monitoring" },
  { id: "mental", icon: Brain, label: "Mental Health" },
  { id: "records", icon: FileText, label: "Health Records" },
]

export default function Sidebar({
  currentPage,
  setCurrentPage,
}: {
  currentPage: string
  setCurrentPage: (page: string) => void
}) {
  return (
    <aside className="w-64 bg-white border-r border-neutral-200 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">SanjeevanAI</h1>
        <p className="text-xs text-neutral-500 mt-1">Healthcare Continuum</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.id
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive ? "bg-primary/10 text-primary font-semibold" : "text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
