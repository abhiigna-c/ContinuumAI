import { Video, Calendar, MapPin, Star } from "lucide-react"

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
        <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Available Doctors</h3>
        <p className="text-neutral-600">Book a consultation with verified healthcare professionals</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold text-neutral-900">{doctor.name}</h4>
                <p className="text-sm text-neutral-600">{doctor.specialty}</p>
              </div>
              <div className="flex items-center gap-1">
                <Star size={16} className="text-warning fill-warning" />
                <span className="font-semibold text-neutral-900">{doctor.rating}</span>
              </div>
            </div>

            <div className="space-y-2 mb-6 text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <span className="font-medium text-neutral-600">Experience:</span>
                {doctor.experience}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                {doctor.available}
              </div>
            </div>

            <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition text-sm font-semibold">
              Book Consultation
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
        <h4 className="text-lg font-semibold text-neutral-900 mb-4">Consultation Features</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex gap-3">
            <Video size={24} className="text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold text-neutral-900">Video Consultation</p>
              <p className="text-sm text-neutral-600">Face-to-face with specialists</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Calendar size={24} className="text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold text-neutral-900">Flexible Scheduling</p>
              <p className="text-sm text-neutral-600">Choose time that works for you</p>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPin size={24} className="text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold text-neutral-900">Prescriptions Online</p>
              <p className="text-sm text-neutral-600">Receive digital prescriptions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
