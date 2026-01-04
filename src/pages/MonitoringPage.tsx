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
        {/* Input Form */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">Log Your Vitals</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Blood Pressure (e.g., 120/80)</label>
              <input
                type="text"
                value={vitals.bp}
                onChange={(e) => setVitals({ ...vitals, bp: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Blood Sugar (mg/dL)</label>
              <input
                type="number"
                value={vitals.sugar}
                onChange={(e) => setVitals({ ...vitals, sugar: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Heart Rate (bpm)</label>
              <input
                type="number"
                value={vitals.hr}
                onChange={(e) => setVitals({ ...vitals, hr: e.target.value })}
                className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
            >
              Save Vitals
            </button>
            {submitted && (
              <div className="p-3 bg-success/10 text-success rounded-lg text-sm">✓ Vitals saved successfully</div>
            )}
          </form>
        </div>

        {/* Trend Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center gap-2">
            <TrendingUp size={24} /> Health Trends
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-neutral-700 mb-2">Blood Sugar (Last 7 days)</p>
              <div className="h-32 bg-neutral-100 rounded-lg flex items-end justify-between p-4">
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

      {/* Recent Readings */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
        <h3 className="text-xl font-semibold text-neutral-900 mb-6">Recent Readings</h3>
        <div className="space-y-3">
          {recentVitals.map((reading, i) => (
            <div key={i} className="flex justify-between items-center p-4 border border-neutral-200 rounded-lg">
              <div>
                <p className="font-medium text-neutral-900">{reading.date}</p>
              </div>
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="text-neutral-600">BP</p>
                  <p className="font-semibold">{reading.bp}</p>
                </div>
                <div>
                  <p className="text-neutral-600">Sugar</p>
                  <p className="font-semibold">{reading.sugar}</p>
                </div>
                <div>
                  <p className="text-neutral-600">HR</p>
                  <p className="font-semibold">{reading.hr} bpm</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
