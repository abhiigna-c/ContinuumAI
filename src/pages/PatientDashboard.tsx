import { Heart, AlertCircle } from "lucide-react"

export default function PatientDashboard() {
  // Mock health data - in real app, fetch from Firestore
  const healthScore = 72
  const riskIndicators = [
    { name: "Diabetes", level: "Medium", color: "warning" },
    { name: "Cardiovascular", level: "Low", color: "success" },
    { name: "Mental Health", level: "Medium", color: "warning" },
  ]

  return (
    <div className="p-8">
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Health Score */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-neutral-600">Overall Health Score</h3>
            <Heart className="text-danger" size={24} />
          </div>
          <div className="text-4xl font-bold text-primary mb-2">{healthScore}</div>
          <div className="w-full bg-neutral-200 rounded-full h-2">
            <div className="bg-success h-2 rounded-full" style={{ width: `${healthScore}%` }}></div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
          <h3 className="text-sm font-medium text-neutral-600 mb-4">Last Check-in</h3>
          <p className="text-2xl font-bold text-neutral-900 mb-2">Today at 8:30 AM</p>
          <p className="text-neutral-600">Morning vitals recorded</p>
        </div>

        {/* Next Appointment */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
          <h3 className="text-sm font-medium text-neutral-600 mb-4">Next Appointment</h3>
          <p className="text-2xl font-bold text-neutral-900 mb-2">Tomorrow, 2:00 PM</p>
          <p className="text-neutral-600">Dr. Patel - Follow-up</p>
        </div>
      </div>

      {/* Risk Indicators */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
        <h3 className="text-lg font-semibold text-neutral-900 mb-6 flex items-center gap-2">
          <AlertCircle size={24} className="text-warning" />
          Risk Indicators
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {riskIndicators.map((indicator, i) => (
            <div key={i} className="p-4 border border-neutral-200 rounded-lg">
              <h4 className="font-medium text-neutral-900 mb-2">{indicator.name}</h4>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  indicator.color === "success" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                }`}
              >
                {indicator.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <button className="bg-primary/10 border border-primary/20 rounded-lg p-6 hover:bg-primary/20 transition text-left">
          <h4 className="font-semibold text-primary mb-2">Check Symptoms</h4>
          <p className="text-sm text-neutral-600">Get AI-powered risk assessment</p>
        </button>
        <button className="bg-success/10 border border-success/20 rounded-lg p-6 hover:bg-success/20 transition text-left">
          <h4 className="font-semibold text-success mb-2">Log Vitals</h4>
          <p className="text-sm text-neutral-600">Update blood pressure, sugar, heart rate</p>
        </button>
      </div>
    </div>
  )
}
