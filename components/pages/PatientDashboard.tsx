import { Heart, AlertCircle } from "lucide-react"

export default function PatientDashboard() {
  const healthScore = 72
  const riskIndicators = [
    { name: "Diabetes", level: "Medium", color: "warning" },
    { name: "Cardiovascular", level: "Low", color: "success" },
    { name: "Mental Health", level: "Medium", color: "warning" },
  ]

  return (
    <div className="p-8">
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card rounded-lg shadow-sm border border-border/40 p-6 hover:shadow-md hover:border-border/60 transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-primary/12 before:to-cyan-400/8 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none">
          <div className="flex items-center justify-between mb-4 relative z-10">
            <h3 className="text-sm font-medium text-muted-foreground">Overall Health Score</h3>
            <Heart className="text-danger" size={24} />
          </div>
          <div className="text-4xl font-bold text-primary mb-2 relative z-10">{healthScore}</div>
          <div className="w-full bg-border rounded-full h-2 relative z-10">
            <div
              className="bg-gradient-to-r from-success to-teal-400 h-2 rounded-full"
              style={{ width: `${healthScore}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-sm border border-border/40 p-6 hover:shadow-md hover:border-border/60 transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-primary/12 before:to-cyan-400/8 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none">
          <h3 className="text-sm font-medium text-muted-foreground mb-4 relative z-10">Last Check-in</h3>
          <p className="text-2xl font-bold text-foreground mb-2 relative z-10">Today at 8:30 AM</p>
          <p className="text-muted-foreground relative z-10">Morning vitals recorded</p>
        </div>

        <div className="bg-card rounded-lg shadow-sm border border-border/40 p-6 hover:shadow-md hover:border-border/60 transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-primary/12 before:to-cyan-400/8 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none">
          <h3 className="text-sm font-medium text-muted-foreground mb-4 relative z-10">Next Appointment</h3>
          <p className="text-2xl font-bold text-foreground mb-2 relative z-10">Tomorrow, 2:00 PM</p>
          <p className="text-muted-foreground relative z-10">Dr. Patel - Follow-up</p>
        </div>
      </div>

      <div className="bg-card rounded-lg shadow-sm border border-border/40 p-6 hover:shadow-md hover:border-border/60 transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-primary/12 before:to-cyan-400/8 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none">
        <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2 relative z-10">
          <AlertCircle size={24} className="text-warning" />
          Risk Indicators
        </h3>
        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {riskIndicators.map((indicator, i) => (
            <div
              key={i}
              className="p-4 border border-border/40 rounded-lg bg-background/50 hover:border-border/60 hover:bg-background transition-all duration-300"
            >
              <h4 className="font-medium text-foreground mb-2">{indicator.name}</h4>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  indicator.color === "success" ? "bg-success/20 text-success" : "bg-warning/20 text-warning"
                }`}
              >
                {indicator.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <button className="bg-gradient-to-br from-primary/20 to-cyan-400/10 border border-primary/20 rounded-lg p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition text-left">
          <h4 className="font-semibold text-primary mb-2">Check Symptoms</h4>
          <p className="text-sm text-muted-foreground">Get AI-powered risk assessment</p>
        </button>
        <button className="bg-gradient-to-br from-success/20 to-teal-400/10 border border-success/20 rounded-lg p-6 hover:border-success/40 hover:shadow-lg hover:shadow-success/20 transition text-left">
          <h4 className="font-semibold text-success mb-2">Log Vitals</h4>
          <p className="text-sm text-muted-foreground">Update blood pressure, sugar, heart rate</p>
        </button>
      </div>
    </div>
  )
}
