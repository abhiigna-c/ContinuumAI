import { Video, Calendar, Star } from "lucide-react"

const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Patel",
    specialty: "Endocrinology",
    experience: "15 years",
    rating: 4.8,
    available: "Today, 3:00 PM",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialty: "Cardiology",
    experience: "12 years",
    rating: 4.9,
    available: "Tomorrow, 10:00 AM",
  },
  {
    id: 3,
    name: "Dr. Amit Gupta",
    specialty: "General Medicine",
    experience: "10 years",
    rating: 4.7,
    available: "Tomorrow, 4:30 PM",
  },
]

export default function DoctorConsultation() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-2">Available Doctors</h3>
        <p className="text-muted-foreground">Book a consultation with verified healthcare professionals</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-card rounded-lg shadow-sm border border-border p-6 hover:shadow-md hover:border-border/60 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold text-foreground">{doctor.name}</h4>
                <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
              </div>
              <div className="flex items-center gap-1">
                <Star size={16} className="text-warning fill-warning" />
                <span className="font-semibold text-foreground">{doctor.rating}</span>
              </div>
            </div>

            <div className="space-y-2 mb-6 text-sm text-foreground/80">
              <div className="flex items-center gap-2">
                <span className="font-medium text-muted-foreground">Experience:</span>
                {doctor.experience}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                {doctor.available}
              </div>
            </div>

            <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition text-sm font-semibold">
              Book Consultation
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-card border border-primary/30 rounded-lg p-8 hover:shadow-md hover:border-primary/50 transition-all duration-300">
        <h4 className="text-lg font-semibold text-foreground mb-4">Consultation Features</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex gap-3">
            <Video size={24} className="text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Video Consultation</p>
              <p className="text-sm text-muted-foreground">Face-to-face with specialists</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Calendar size={24} className="text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Flexible Scheduling</p>
              <p className="text-sm text-muted-foreground">Choose time that works for you</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Video size={24} className="text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Prescriptions Online</p>
              <p className="text-sm text-muted-foreground">Receive digital prescriptions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
