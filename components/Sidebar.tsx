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
    <aside className="w-64 bg-card border-r border-border/50 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-cyan-400 to-teal-400 bg-clip-text text-transparent">
          ContinuumAI
        </h1>
        <p className="text-xs text-muted-foreground mt-1">Prevention to Recovery</p>
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
                isActive
                  ? "bg-gradient-to-r from-primary/30 to-cyan-400/20 text-primary font-semibold border border-primary/30"
                  : "text-muted-foreground hover:bg-background hover:border border border-transparent"
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
