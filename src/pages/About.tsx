import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import StatsCounter from '../components/StatsCounter'
import ConsultationModal from '../components/ConsultationModal'
import { founder, teamMembers } from '../data/content'

export default function About() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 bg-primary-50 text-primary">Our Story</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-navy leading-tight">
            Born from <span className="text-gradient">an NRI's Concern</span>,<br />
            Built for Every Family Abroad
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ServiceGTD wasn't born in a boardroom. It was born from the quiet guilt
            that every NRI carries — the worry that lives in the back of your mind,
            no matter how far you've come.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-warm rounded-2xl p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary text-xl font-bold">
                {founder.initials}
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg">{founder.name}</h3>
                <p className="text-gray-500 text-sm">{founder.role}</p>
              </div>
            </div>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                "Living abroad, you build a life you're proud of — a career, a home, a routine.
                But there's always this undercurrent of worry. Are Mummy-Papa okay? Did they take
                their medicines? Why didn't Maa pick up the phone this morning?
              </p>
              <p>
                I lived with that worry for years. Every missed call from home would send
                my heart racing. Every news headline about elderly accidents in India would
                make me think of my own parents. I'd plan trips home, but two weeks a year
                can't make up for the other fifty.
              </p>
              <p>
                The turning point came when I spoke to friends, colleagues, people at the
                temple, at community gatherings abroad — and realized this wasn't just my
                story. Millions of NRIs carry the same silent burden. The guilt of not being
                there. The helplessness of being thousands of miles away when your parents
                need you the most.
              </p>
              <p>
                I looked for a solution — a single, trustworthy service that could be my
                eyes, ears, and hands in India. Something that went beyond just hiring a
                nurse. Something that managed everything — health, daily care, emergencies,
                even the property and paperwork. It didn't exist.
              </p>
              <p className="font-semibold text-navy">
                So I decided to build it. ServiceGTD — Getting Things Done for your family —
                exists because no one should have to choose between their dreams abroad and
                their parents' well-being at home. If you've ever felt that guilt, this
                service was built for you."
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-orange-200">
              <p className="text-sm text-gray-500 italic">— {founder.name}, Founder & CEO, ServiceGTD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 sm:py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="Our Mission"
            title="Care That Feels Like Family"
            subtitle="We're not a staffing agency. We're a managed care platform that takes personal responsibility for your parents' well-being."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🤲', title: 'Seva', subtitle: 'Service', desc: 'We serve with humility. Every parent we care for is someone\'s world.' },
              { icon: '🪷', title: 'Satya', subtitle: 'Truth', desc: 'Transparent pricing, honest assessments, no hidden agendas. Always.' },
              { icon: '🔥', title: 'Sankalp', subtitle: 'Commitment', desc: 'Once we take on your family, we\'re committed for the long haul.' },
              { icon: '🙏', title: 'Samman', subtitle: 'Respect', desc: 'Your parents\' dignity is non-negotiable. Every interaction reflects that.' },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <span className="text-4xl">{v.icon}</span>
                <h3 className="font-bold text-navy mt-3 text-lg">{v.title}</h3>
                <p className="text-sm text-primary font-medium italic">{v.subtitle}</p>
                <p className="text-sm text-gray-600 mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="Our Team"
            title="People Who Get It"
            subtitle="Every leader on our team has a personal connection to the NRI experience. This isn't just a job for us."
          />

          {/* Founder Card */}
          <div className="max-w-md mx-auto mb-10">
            <div className="bg-primary-50 rounded-2xl p-6 border-2 border-primary/20 text-center">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-bold mx-auto shadow-lg shadow-primary/25">
                {founder.initials}
              </div>
              <h3 className="font-bold text-navy mt-4 text-lg">{founder.name}</h3>
              <p className="text-sm text-primary font-semibold">{founder.role}</p>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">{founder.bio}</p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className={`rounded-2xl p-6 border text-center transition ${member.placeholder ? 'border-dashed border-gray-300 bg-gray-50' : 'border-gray-100 bg-white hover:shadow-lg'}`}>
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto ${member.placeholder ? 'bg-gray-200 text-gray-400' : 'bg-primary-100 text-primary'}`}>
                  {member.placeholder ? '?' : member.initials}
                </div>
                <h3 className={`font-bold mt-4 ${member.placeholder ? 'text-gray-400' : 'text-navy'}`}>{member.name}</h3>
                <p className={`text-sm font-medium ${member.placeholder ? 'text-gray-400' : 'text-primary'}`}>{member.role}</p>
                <p className={`text-sm mt-3 leading-relaxed ${member.placeholder ? 'text-gray-400 italic' : 'text-gray-600'}`}>{member.bio}</p>
                {member.placeholder && (
                  <span className="inline-block mt-3 text-xs bg-primary-50 text-primary px-3 py-1 rounded-full font-medium">
                    Update in content.ts
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-white text-center mb-10">Our Impact in Numbers</h2>
          <StatsCounter
            stats={[
              { value: 5000, suffix: '+', label: 'NRI Families Served' },
              { value: 45, suffix: '+', label: 'Cities in India' },
              { value: 100, suffix: '+', label: 'Verified Partners' },
              { value: 98, suffix: '%', label: 'Family Satisfaction' },
            ]}
            light
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 gradient-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">Want to Know More?</h2>
          <p className="text-white/80 mt-4">We'd love to tell you more about how we can help your family.</p>
          <button onClick={() => setShowModal(true)} className="mt-8 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Talk to Us
          </button>
        </div>
      </section>

      <ConsultationModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
