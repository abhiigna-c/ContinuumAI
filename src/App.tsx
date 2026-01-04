"use client"

import { useState, useEffect } from "react"
import { auth } from "./firebase"
import { onAuthStateChanged } from "firebase/auth"
import LandingPage from "./app/LandingPage"
import AuthPage from "./app/AuthPage"
import DashboardLayout from "./layouts/DashboardLayout"

export default function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState("landing")

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
      if (currentUser) {
        setCurrentPage("dashboard")
      }
    })
    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-neutral-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (user) {
    return <DashboardLayout setUser={setUser} />
  }

  if (currentPage === "auth") {
    return <AuthPage setCurrentPage={setCurrentPage} />
  }

  return <LandingPage onGetStarted={() => setCurrentPage("auth")} />
}
