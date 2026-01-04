"use client"

import { useState } from "react"
import { Send, MessageCircle } from "lucide-react"

export default function MentalHealthPage() {
  const [mood, setMood] = useState<string>("")
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [input, setInput] = useState("")

  const moodOptions = ["😞", "😐", "🙂", "😊", "😄"]

  const handleMoodCheck = (selectedMood: string) => {
    setMood(selectedMood)
  }

  const handleSendMessage = () => {
    if (!input.trim()) return

    setMessages([...messages, { role: "user", content: input }])
    setInput("")

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I appreciate you sharing that with me. Remember, your feelings are valid. Would you like to talk about what's on your mind? I'm here to listen and support you in a non-judgmental way.",
        },
      ])
    }, 500)
  }

  return (
    <div className="p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg shadow-sm border border-border/40 p-8 hover:shadow-md hover:border-border/60 transition-all duration-300">
          <h3 className="text-xl font-semibold text-foreground mb-6">How are you feeling today?</h3>
          <div className="flex justify-between gap-4 mb-8">
            {moodOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleMoodCheck(option)}
                className={`text-4xl p-4 rounded-lg transition ${
                  mood === option
                    ? "bg-gradient-to-br from-primary/40 to-cyan-400/30 ring-2 ring-primary"
                    : "hover:bg-background"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {mood && (
            <div className="p-4 bg-gradient-to-r from-primary/20 to-cyan-400/10 border border-primary/30 rounded-lg">
              <p className="text-foreground/80">
                Thank you for sharing. I'm here to support your emotional wellness journey.
              </p>
            </div>
          )}
        </div>

        <div className="bg-card rounded-lg shadow-sm border border-border/40 p-8 hover:shadow-md hover:border-border/60 transition-all duration-300">
          <h3 className="text-xl font-semibold text-foreground mb-6">Wellness Tips</h3>
          <div className="space-y-4">
            <div className="p-4 border border-border/40 rounded-lg bg-background/50 hover:shadow-sm hover:border-border/60 hover:bg-background transition-all duration-300">
              <p className="font-semibold text-foreground mb-2">Practice Mindfulness</p>
              <p className="text-sm text-muted-foreground">Take 5 minutes daily for deep breathing exercises</p>
            </div>
            <div className="p-4 border border-border/40 rounded-lg bg-background/50 hover:shadow-sm hover:border-border/60 hover:bg-background transition-all duration-300">
              <p className="font-semibold text-foreground mb-2">Stay Connected</p>
              <p className="text-sm text-muted-foreground">Reach out to loved ones regularly</p>
            </div>
            <div className="p-4 border border-border/40 rounded-lg bg-background/50 hover:shadow-sm hover:border-border/60 hover:bg-background transition-all duration-300">
              <p className="font-semibold text-foreground mb-2">Quality Sleep</p>
              <p className="text-sm text-muted-foreground">Aim for 7-8 hours of restful sleep</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-card rounded-lg shadow-sm border border-border/40 p-6 hover:shadow-md hover:border-border/60 transition-all duration-300">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          <div className="p-2 bg-gradient-to-r from-primary to-cyan-400 rounded-lg">
            <MessageCircle size={24} className="text-primary-foreground" />
          </div>
          AI Health Assistant
        </h3>

        <div className="h-96 bg-background rounded-lg mb-4 p-4 overflow-y-auto space-y-4 border border-border/40">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <p>Start a conversation. I'm here to support your wellness journey.</p>
            </div>
          ) : (
            messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground"
                      : "bg-border/40 text-foreground border border-border/50"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Tell me how you're feeling..."
            className="flex-1 px-4 py-2 border border-border/40 rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
