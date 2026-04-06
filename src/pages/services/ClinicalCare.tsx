import { useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import ConsultationModal from '../../components/ConsultationModal'
import { services } from '../../data/content'

export default function ClinicalCare() {
  const [showModal, setShowModal] = useState(false)
  const svc = services.clinical

  return (
    <>
      <section className="gradient-hero py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="Clinical Care"
            title={svc.tagline}
            subtitle={svc.description}
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {svc.items.map((item, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all h-full">
                  <span className="text-4xl block mb-4">{item.icon}</span>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-primary-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-navy text-center mb-10">Why Choose Our Clinical Care?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Hospital-Trained Staff', desc: 'Every nurse and caregiver is trained at accredited hospitals and undergoes our additional certification program.' },
              { title: 'Doctor on Call', desc: 'A qualified physician is always available for teleconsultation. Specialist referrals coordinated within 24 hours.' },
              { title: 'Digital Health Records', desc: 'All health data is digitized and accessible to you via WhatsApp or our portal. Track vitals, medications, and progress.' },
              { title: 'Family Kept Informed', desc: 'You receive real-time updates on health status, medication changes, and doctor consultations. No surprises.' },
              { title: 'Seamless Hospital Coordination', desc: 'When hospitalization is needed, we handle admission, insurance paperwork, and stay with your parents through it all.' },
              { title: 'Recovery-Focused Approach', desc: 'Our goal is always to improve quality of life. Every care plan includes wellness goals and progress tracking.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold shrink-0 mt-1">✓</div>
                <div>
                  <h3 className="font-bold text-navy">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 gradient-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif text-white">Need Clinical Care for Your Parents?</h2>
          <p className="text-white/80 mt-4">Our medical team will create a personalized care plan within 48 hours.</p>
          <button onClick={() => setShowModal(true)} className="mt-8 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Get a Care Plan
          </button>
        </div>
      </section>

      <ConsultationModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
