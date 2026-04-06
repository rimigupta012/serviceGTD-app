import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import ConsultationModal from '../components/ConsultationModal'
import { howItWorksSteps } from '../data/content'

export default function HowItWorks() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className="gradient-hero py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="How It Works"
            title="Simple Process. Exceptional Care."
            subtitle="We've made it as easy as possible for you. One call sets everything in motion."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {howItWorksSteps.map((step, index) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/25">
                    {step.step}
                  </div>
                  {index < howItWorksSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-primary/20 mt-3" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">{step.description}</p>
                  <span className="inline-block mt-3 text-xs bg-teal-50 text-teal px-4 py-1.5 rounded-full font-medium">
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-navy text-center mb-10">What Makes Us Different</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Advisory-First', desc: 'We don\'t sell services. We understand your situation first and advise honestly — even if it means recommending you don\'t need us.', icon: '🤝' },
              { title: 'Managed, Not Marketplace', desc: 'We don\'t just connect you with caregivers and walk away. We manage the entire relationship, quality, and outcome.', icon: '🎯' },
              { title: 'NRI-Native', desc: 'Our team understands timezone challenges, visa pressures, and the emotional weight of being away. We\'re built specifically for the NRI experience.', icon: '🌏' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="font-bold text-navy mt-4 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 gradient-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">Ready to Begin?</h2>
          <p className="text-white/80 mt-4 text-lg">
            The first step is always the hardest. Let us make it easy. Schedule a free call — timed to your timezone.
          </p>
          <button onClick={() => setShowModal(true)} className="mt-8 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Schedule Free Consultation
          </button>
        </div>
      </section>

      <ConsultationModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
