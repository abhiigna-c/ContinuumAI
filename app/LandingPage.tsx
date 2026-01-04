"use client"

import { ArrowRight, Heart, Brain, Pill, TrendingUp, FileText } from "lucide-react"

export default function LandingPage({ onGetStarted }: { onGetStarted: () => void }) {
  const continuum = [
    { icon: Heart, label: "Symptoms", desc: "AI-powered symptom checker" },
    { icon: Heart, label: "Doctor", desc: "Expert consultation" },
    { icon: Pill, label: "Care Plan", desc: "Personalized treatment" },
    { icon: TrendingUp, label: "Monitoring", desc: "Real-time vitals tracking" },
    { icon: Brain, label: "Mental Health", desc: "Emotional wellness support" },
    { icon: FileText, label: "Reports", desc: "Health insights & trends" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            ContinuumAI
          </h1>
          <button
            onClick={onGetStarted}
            className="px-6 py-2 bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition"
          >
            Sign In
          </button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold text-foreground mb-4">Continuous Healthcare for Chronic Conditions</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Manage your health journey from prevention to recovery with AI-powered insights, expert doctors, and
          personalized care plans designed for Indian adults.
        </p>
        <button
          onClick={onGetStarted}
          className="px-8 py-3 bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition inline-flex items-center gap-2"
        >
          Get Started <ArrowRight size={20} />
        </button>
      </section>

      <section className="bg-background py-16 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Your Healthcare Continuum</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {continuum.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="p-6 border border-primary/15 rounded-lg bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition"
                >
                  <Icon size={32} className="text-primary mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.label}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Why ContinuumAI?</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-success text-xl">✓</span>
                <span className="text-muted-foreground">AI-powered risk assessment without diagnosis</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success text-xl">✓</span>
                <span className="text-muted-foreground">
                  Connected healthcare continuum for chronic disease management
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-success text-xl">✓</span>
                <span className="text-muted-foreground">Real-time monitoring of vital signs and health trends</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success text-xl">✓</span>
                <span className="text-muted-foreground">24/7 AI health assistant for emotional support</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success text-xl">✓</span>
                <span className="text-muted-foreground">Secure health records and insights in plain language</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-cyan-400/10 rounded-lg h-80"></div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-background via-primary/20 to-background text-foreground py-8 mt-16 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">© 2025 ContinuumAI. Healthcare for all.</p>
        </div>
      </footer>
    </div>
  )
}
