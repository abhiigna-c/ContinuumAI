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
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">SanjeevanAI</h1>
          <button
            onClick={onGetStarted}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
          >
            Sign In
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold text-neutral-900 mb-4">Continuous Healthcare for Chronic Conditions</h2>
        <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
          Manage your health journey with AI-powered insights, expert doctors, and personalized care plans designed for
          Indian adults.
        </p>
        <button
          onClick={onGetStarted}
          className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition inline-flex items-center gap-2"
        >
          Get Started <ArrowRight size={20} />
        </button>
      </section>

      {/* Healthcare Continuum */}
      <section className="bg-white py-16 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-neutral-900 mb-12 text-center">Your Healthcare Continuum</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {continuum.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="p-6 border border-neutral-200 rounded-lg hover:shadow-md transition">
                  <Icon size={32} className="text-primary mb-4" />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{item.label}</h4>
                  <p className="text-neutral-600">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-neutral-900 mb-6">Why SanjeevanAI?</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-success text-xl">✓</span>
                <span className="text-neutral-700">AI-powered risk assessment without diagnosis</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success text-xl">✓</span>
                <span className="text-neutral-700">Connected healthcare continuum for chronic disease management</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success text-xl">✓</span>
                <span className="text-neutral-700">Real-time monitoring of vital signs and health trends</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success text-xl">✓</span>
                <span className="text-neutral-700">24/7 AI health assistant for emotional support</span>
              </li>
              <li className="flex gap-3">
                <span className="text-success text-xl">✓</span>
                <span className="text-neutral-700">Secure health records and insights in plain language</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg h-80"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-neutral-400">© 2025 SanjeevanAI. Healthcare for all.</p>
        </div>
      </footer>
    </div>
  )
}
