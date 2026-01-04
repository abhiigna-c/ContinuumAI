import { CheckCircle, Circle, AlertCircle } from "lucide-react"

const carePlan = {
  medication: [
    { name: "Metformin 500mg", frequency: "Twice daily", status: "completed" },
    { name: "Lisinopril 10mg", frequency: "Once daily", status: "completed" },
    { name: "Aspirin 75mg", frequency: "Once daily", status: "pending" },
  ],
  diet: [
    { task: "Low glycemic breakfast", status: "completed" },
    { task: "Avoid sugar and refined carbs", status: "completed" },
    { task: "Increase leafy greens", status: "pending" },
  ],
  activity: [
    { task: "30 minutes walking", duration: "30 mins", status: "completed" },
    { task: "Yoga or stretching", duration: "15 mins", status: "pending" },
  ],
}

export default function CarePlanPage() {
  return (
    <div className="p-8">
      <h3 className="text-2xl font-semibold text-neutral-900 mb-8">Your Personalized Care Plan</h3>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Medication */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
          <h4 className="text-lg font-semibold text-neutral-900 mb-4">Medications</h4>
          <div className="space-y-4">
            {carePlan.medication.map((item, i) => (
              <div key={i} className="flex gap-3">
                {item.status === "completed" ? (
                  <CheckCircle size={20} className="text-success flex-shrink-0 mt-0.5" />
                ) : (
                  <Circle size={20} className="text-neutral-300 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-medium text-neutral-900">{item.name}</p>
                  <p className="text-xs text-neutral-600">{item.frequency}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diet */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
          <h4 className="text-lg font-semibold text-neutral-900 mb-4">Diet Plan</h4>
          <div className="space-y-4">
            {carePlan.diet.map((item, i) => (
              <div key={i} className="flex gap-3">
                {item.status === "completed" ? (
                  <CheckCircle size={20} className="text-success flex-shrink-0 mt-0.5" />
                ) : (
                  <Circle size={20} className="text-neutral-300 flex-shrink-0 mt-0.5" />
                )}
                <p className="font-medium text-neutral-900 text-sm">{item.task}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
          <h4 className="text-lg font-semibold text-neutral-900 mb-4">Daily Activity</h4>
          <div className="space-y-4">
            {carePlan.activity.map((item, i) => (
              <div key={i} className="flex gap-3">
                {item.status === "completed" ? (
                  <CheckCircle size={20} className="text-success flex-shrink-0 mt-0.5" />
                ) : (
                  <Circle size={20} className="text-neutral-300 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-medium text-neutral-900 text-sm">{item.task}</p>
                  <p className="text-xs text-neutral-600">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reminders */}
      <div className="mt-8 bg-warning/10 border border-warning/30 rounded-lg p-6">
        <div className="flex gap-3 mb-3">
          <AlertCircle size={24} className="text-warning flex-shrink-0" />
          <h4 className="text-lg font-semibold text-neutral-900">Follow-up Reminders</h4>
        </div>
        <ul className="text-neutral-700 space-y-2 ml-9 text-sm">
          <li>• Daily medication reminder - 8:00 AM & 8:00 PM</li>
          <li>• Weekly vitals check - Every Monday 10:00 AM</li>
          <li>• Monthly doctor follow-up - 15th of each month</li>
          <li>• Quarterly health assessment - Next: March 2025</li>
        </ul>
      </div>
    </div>
  )
}
