import { useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import ConsultationModal from '../../components/ConsultationModal'
import { services } from '../../data/content'

export default function DailyAssistance() {
  const [showModal, setShowModal] = useState(false)
  const svc = services.daily

  return (
    <>
      <section className="gradient-hero py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading badge="Daily Assistance" title={svc.tagline} subtitle={svc.description} />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {svc.items.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-teal/20 hover:shadow-lg transition-all">
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-xl font-bold text-navy mb-3">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-warm">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif text-navy mb-6">A Typical Day with Our Care Team</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">Here's what a day looks like for your parents with our daily assistance service.</p>
          <div className="space-y-4 max-w-2xl mx-auto text-left">
            {[
              { time: '7:00 AM', activity: 'Wake-up assistance, morning routine, and medication reminder' },
              { time: '8:00 AM', activity: 'Breakfast preparation based on nutritionist-approved meal plan' },
              { time: '9:30 AM', activity: 'Morning walk in the park with the caregiver' },
              { time: '11:00 AM', activity: 'Doctor appointment or physiotherapy session (if scheduled)' },
              { time: '12:30 PM', activity: 'Lunch preparation and serving, medication reminder' },
              { time: '2:00 PM', activity: 'Rest time. Caregiver handles housekeeping tasks' },
              { time: '4:00 PM', activity: 'Evening tea and snack. Social time — newspaper, TV, or hobby' },
              { time: '5:30 PM', activity: 'Evening walk or temple visit' },
              { time: '7:00 PM', activity: 'Video call with family (you!). Care Manager shares daily report' },
              { time: '8:00 PM', activity: 'Dinner, medication, and bedtime routine' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-xl p-4 shadow-sm">
                <span className="text-sm font-bold text-primary whitespace-nowrap w-20 shrink-0">{item.time}</span>
                <span className="text-sm text-gray-700">{item.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 gradient-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif text-white">Give Your Parents the Daily Support They Deserve</h2>
          <p className="text-white/80 mt-4">Start with daily check-ins or go full-time. Flexible plans for every need.</p>
          <button onClick={() => setShowModal(true)} className="mt-8 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

      <ConsultationModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
