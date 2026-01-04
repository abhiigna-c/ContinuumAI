"use client"

import { useState } from "react"
import { FileText, Upload, TrendingUp } from "lucide-react"

export default function HealthRecordsPage() {
  const [files, setFiles] = useState<File[]>([])

  const records = [
    { name: "Blood Test Report - Dec 2024", date: "Dec 15, 2024", type: "Lab Report" },
    { name: "CT Scan Results", date: "Dec 1, 2024", type: "Imaging" },
    { name: "Doctor Consultation Notes", date: "Nov 28, 2024", type: "Clinical" },
  ]

  return (
    <div className="p-8">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Upload Section */}
        <div className="md:col-span-1 bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Upload Records</h3>
          <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:bg-primary/5 transition cursor-pointer">
            <Upload size={32} className="text-primary mx-auto mb-2" />
            <p className="text-sm text-neutral-600">Click to upload or drag files</p>
          </div>
        </div>

        {/* Health Score */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
            <TrendingUp size={20} /> Health Metrics
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-neutral-600 mb-1">Overall Health Score</p>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-success h-2 rounded-full w-3/4"></div>
              </div>
              <p className="text-sm font-semibold mt-1">72/100</p>
            </div>
            <div>
              <p className="text-xs text-neutral-600 mb-1">Disease Management</p>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-2/3"></div>
              </div>
              <p className="text-sm font-semibold mt-1">66/100</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Health Summary</h3>
          <p className="text-sm text-neutral-700 mb-4">
            Based on your recent records and monitoring, your chronic conditions are well-managed. Continue with your
            care plan and maintain regular follow-ups.
          </p>
          <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition text-sm">
            Generate Full Report
          </button>
        </div>
      </div>

      {/* Records List */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
        <h3 className="text-lg font-semibold text-neutral-900 mb-6">Your Records</h3>
        <div className="space-y-3">
          {records.map((record, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition"
            >
              <div className="flex items-center gap-3">
                <FileText size={24} className="text-primary" />
                <div>
                  <p className="font-medium text-neutral-900">{record.name}</p>
                  <p className="text-xs text-neutral-600">
                    {record.type} • {record.date}
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 bg-neutral-100 text-neutral-900 rounded hover:bg-neutral-200 transition text-sm">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
