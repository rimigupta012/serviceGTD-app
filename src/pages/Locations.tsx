import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import ConsultationModal from '../components/ConsultationModal'
import { cities } from '../data/content'

export default function Locations() {
  const [showModal, setShowModal] = useState(false)
  const [filter, setFilter] = useState<'all' | 1 | 2>('all')

  const filtered = filter === 'all' ? cities : cities.filter((c) => c.tier === filter)
  const tier1 = cities.filter((c) => c.tier === 1)
  const tier2 = cities.filter((c) => c.tier === 2)

  return (
    <>
      <section className="gradient-hero py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="Coverage"
            title="45+ Cities. 100+ Handpicked Partners."
            subtitle="From metros to smaller cities, our care network covers where your parents live."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter */}
          <div className="flex items-center justify-center gap-3 mb-10">
            {[
              { label: `All Cities (${cities.length})`, value: 'all' as const },
              { label: `Metro (${tier1.length})`, value: 1 as const },
              { label: `Tier 2 (${tier2.length})`, value: 2 as const },
            ].map((f) => (
              <button
                key={f.label}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${filter === f.value ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((city) => (
              <div key={city.name} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-primary/20 hover:shadow-md transition">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-navy">{city.name}</h3>
                    <p className="text-xs text-gray-500">{city.state}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${city.tier === 1 ? 'bg-primary-50 text-primary' : 'bg-teal-50 text-teal'}`}>
                    {city.tier === 1 ? 'Metro' : 'Tier 2'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{city.partners} verified partners</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Can't find city */}
      <section className="py-16 sm:py-20 bg-warm">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif text-navy">Don't See Your Parents' City?</h2>
          <p className="text-gray-600 mt-4">
            We're expanding rapidly. If your parents live in a city not listed above,
            reach out anyway — we may have partners nearby, or can set up coverage within 2 weeks.
          </p>
          <button onClick={() => setShowModal(true)} className="mt-8 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition">
            Request Coverage for Your City
          </button>
        </div>
      </section>

      <ConsultationModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
