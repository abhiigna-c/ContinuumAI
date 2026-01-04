"use client"

import type React from "react"

import { useState } from "react"
import { TrendingUp } from "lucide-react"

export default function MonitoringPage() {
  const [vitals, setVitals] = useState({ bp: "", sugar: "", hr: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app, save to Firestore with real-time updates
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const recentVitals = [
    { date: "Today, 8:30 AM", bp: "120/80", sugar: "110", hr: "72" },
    { date: "Yesterday, 8:00 AM", bp: "122/82", sugar: "115", hr: "75" },
    { date: "Dec 28, 8:15 AM", bp: "118/78", sugar: "108", hr: "70" },
  ]

  return (
    <div className="p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg shadow-sm border border-border/40 p-6 hover:shadow-md hover:border-border/60 transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-primary/12 before:to-cyan-400/8 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none">
          <h3 className="text-xl font-semibold text-foreground mb-6 relative z-10">Log Your Vitals</h3>
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Blood Pressure (e.g., 120/80)</label>
              <input
                type="text"
                value={vitals.bp}
                onChange={(e) => setVitals({ ...vitals, bp: e.target.value })}
                className="w-full px-4 py-2 border border-border/40 rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Blood Sugar (mg/dL)</label>
              <input
                type="number"
                value={vitals.sugar}
                onChange={(e) => setVitals({ ...vitals, sugar: e.target.value })}
                className="w-full px-4 py-2 border border-border/40 rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Heart Rate (bpm)</label>
              <input
                type="number"
                value={vitals.hr}
                onChange={(e) => setVitals({ ...vitals, hr: e.target.value })}
                className="w-full px-4 py-2 border border-border/40 rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            >
              Save Vitals
            </button>
            {submitted && (
              <div className="p-3 bg-success/10 text-success rounded-lg text-sm">✓ Vitals saved successfully</div>
            )}
          </form>
        </div>

        <div className="bg-card rounded-lg shadow-sm border border-border/40 p-6 hover:shadow-md hover:border-border/60 transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-primary/12 before:to-cyan-400/8 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2 relative z-10">
            <TrendingUp size={24} /> Health Trends
          </h3>
          <div className="space-y-4 relative z-10">
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Blood Sugar (Last 7 days)</p>
              <div className="h-32 bg-background rounded-lg flex items-end justify-between p-4">
                {[95, 110, 108, 115, 112, 120, 105].map((val, i) => (
                  <div
                    key={i}
                    className={`flex-1 mx-1 rounded-t ${val > 120 ? "bg-danger" : "bg-success"}`}
                    style={{ height: `${(val / 130) * 100}%` }}
                    title={`${val} mg/dL`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-card rounded-lg shadow-sm border border-border/40 p-6 hover:shadow-md hover:border-border/60 transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-primary/12 before:to-cyan-400/8 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none">
        <h3 className="text-xl font-semibold text-foreground mb-6 relative z-10">Recent Readings</h3>
        <div className="space-y-3 relative z-10">
          {recentVitals.map((reading, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-4 border border-border/40 rounded-lg hover:bg-background/50 transition"
            >
              <div>
                <p className="font-medium text-foreground">{reading.date}</p>
              </div>
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="text-muted-foreground">BP</p>
                  <p className="font-semibold text-foreground">{reading.bp}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Sugar</p>
                  <p className="font-semibold text-foreground">{reading.sugar}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">HR</p>
                  <p className="font-semibold text-foreground">{reading.hr} bpm</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
