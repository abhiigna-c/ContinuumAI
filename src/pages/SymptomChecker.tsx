"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function SymptomChecker() {
  const [symptoms, setSymptoms] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<null | { riskLevel: string; description: string }>()

  const handleCheck = async () => {
    setLoading(true)
    // In real app, call Firebase Cloud Function
    // const response = await fetch('/.netlify/functions/symptomCheck', { ... })

    // Mock response
    setTimeout(() => {
      const mockResults = [
        { riskLevel: "Low", description: "Your symptoms suggest a minor condition. Rest and monitor." },
        { riskLevel: "Medium", description: "You should consult a doctor within 24 hours." },
        { riskLevel: "High", description: "Please seek medical attention immediately." },
      ]
      setResult(mockResults[Math.floor(Math.random() * mockResults.length)])
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="p-8">
      <div className="max-w-2xl">
        <div className="bg-warning/10 border border-warning rounded-lg p-4 mb-8 flex gap-3">
          <AlertCircle className="text-warning flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-semibold text-warning mb-1">Important Disclaimer</h4>
            <p className="text-sm text-neutral-700">
              This AI symptom checker provides risk assessment only and is NOT a medical diagnosis. Always consult
              qualified healthcare professionals for proper diagnosis and treatment.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
          <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Describe Your Symptoms</h3>

          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Describe what you're experiencing... (e.g., severe headache, dizziness, chest pain)"
            className="w-full h-32 px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />

          <button
            onClick={handleCheck}
            disabled={!symptoms || loading}
            className="mt-6 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Check Symptoms"}
          </button>

          {result && (
            <div
              className={`mt-8 p-6 rounded-lg border-2 ${
                result.riskLevel === "Low"
                  ? "bg-success/10 border-success"
                  : result.riskLevel === "Medium"
                    ? "bg-warning/10 border-warning"
                    : "bg-danger/10 border-danger"
              }`}
            >
              <div className="flex gap-3 mb-3">
                <CheckCircle
                  className={
                    result.riskLevel === "Low"
                      ? "text-success"
                      : result.riskLevel === "Medium"
                        ? "text-warning"
                        : "text-danger"
                  }
                  size={24}
                />
                <h4 className="text-lg font-semibold">Risk Level: {result.riskLevel}</h4>
              </div>
              <p className="text-neutral-700">{result.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
