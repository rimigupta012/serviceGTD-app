import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import SectionHeading from '../components/SectionHeading'
import ConsultationModal from '../components/ConsultationModal'
import { services } from '../data/content'

const serviceCategories = [
  { key: 'clinical' as const, color: 'primary', link: '/services/clinical-care' },
  { key: 'daily' as const, color: 'teal', link: '/services/daily-assistance' },
  { key: 'nri' as const, color: 'saffron', link: '/services/nri-services' },
]

export default function Services() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className="gradient-hero py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="Our Services"
            title="Everything Your Family Needs. One Trusted Partner."
            subtitle="From medical care to daily assistance to managing your Indian affairs — we are your complete support system."
          />
        </div>
      </section>

      {serviceCategories.map(({ key, link }) => {
        const svc = services[key]
        return (
          <section key={key} className="py-16 sm:py-20 even:bg-gray-light">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
                <div>
                  <span className="text-4xl mb-3 block">{svc.icon}</span>
                  <h2 className="text-3xl font-bold font-serif text-navy">{svc.title}</h2>
                  <p className="text-gray-600 mt-2 max-w-xl">{svc.description}</p>
                </div>
                <Link to={link} className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-primary font-semibold shrink-0">
                  View Details <HiArrowRight />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {svc.items.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="text-lg font-bold text-navy mt-3">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="py-16 sm:py-20 gradient-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">Not Sure What Your Parents Need?</h2>
          <p className="text-white/80 mt-4 text-lg">
            Take our free 5-minute care assessment, or talk to an advisor who'll guide you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/care-assessment" className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Take Care Assessment
            </Link>
            <button onClick={() => setShowModal(true)} className="border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </section>

      <ConsultationModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
