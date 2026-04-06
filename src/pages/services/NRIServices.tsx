import { useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import ConsultationModal from '../../components/ConsultationModal'
import { services } from '../../data/content'

export default function NRIServices() {
  const [showModal, setShowModal] = useState(false)
  const svc = services.nri

  return (
    <>
      <section className="gradient-hero py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading badge="NRI Services" title={svc.tagline} subtitle={svc.description} />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {svc.items.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-saffron/20 hover:shadow-lg transition-all">
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-xl font-bold text-navy mb-3">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-warm">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-navy text-center mb-4">The NRI Struggle is Real</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            We've lived it. We know the guilt of missing festivals, the anxiety of 3 AM phone calls,
            the frustration of managing things from afar. That's exactly why we built these services.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { problem: '"I can\'t be there for Amma\'s doctor visits"', solution: 'Our Care Concierge accompanies them and sends you a detailed report after every visit.' },
              { problem: '"My flat in Bangalore has tenant issues"', solution: 'We manage everything — rent collection, repairs, legal notices, and monthly photo reports.' },
              { problem: '"Tax season in India stresses me out"', solution: 'Our financial coordination team handles tax filings, property taxes, and bank paperwork.' },
              { problem: '"What if there\'s an emergency at 2 AM my time?"', solution: 'Our 24/7 team responds immediately. You wake up to a situation already being handled.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <p className="font-semibold text-navy italic">{item.problem}</p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">→ {item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 gradient-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif text-white">Let Us Be Your Family's Support System in India</h2>
          <p className="text-white/80 mt-4">Focus on your life abroad. We'll handle everything at home.</p>
          <button onClick={() => setShowModal(true)} className="mt-8 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Talk to an NRI Specialist
          </button>
        </div>
      </section>

      <ConsultationModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
