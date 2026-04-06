import SectionHeading from '../components/SectionHeading'
import { verificationSteps } from '../data/content'

export default function TrustEthics() {
  return (
    <>
      <section className="gradient-hero py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="Trust & Ethics"
            title="Built on Trust, Driven by Ethics"
            subtitle="You're trusting us with the most precious people in your life. Here's how we earn and keep that trust."
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔍', title: 'Transparency', desc: 'No hidden fees, no fine print. You see exactly what you pay for. Pricing is published, not negotiated.' },
              { icon: '🚫', title: 'No Upselling', desc: 'Our advisors are not salespeople. They recommend only what your parents genuinely need.' },
              { icon: '🔒', title: 'Privacy First', desc: 'Your family\'s data is encrypted and never sold to third parties. We comply with all data protection laws.' },
              { icon: '📊', title: 'Accountable', desc: 'Monthly reports, satisfaction surveys, and an open feedback system. We measure what matters to you.' },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition text-center">
                <span className="text-4xl">{v.icon}</span>
                <h3 className="font-bold text-navy mt-4 text-lg">{v.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Verification */}
      <section className="py-16 sm:py-20 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading
            badge="Verification"
            title="6-Step Partner Verification Process"
            subtitle="Only 12% of care partner applicants make it through our verification process. Here's why."
          />
          <div className="space-y-4">
            {verificationSteps.map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm flex gap-5">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-navy">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                  <div className="mt-3 bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${step.percentage}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Video */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading
            badge="Watch"
            title="Our Promise to You"
            subtitle="Hear directly from our founder about why ethics is the foundation of everything we do."
          />
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/VhBl3dHT5SY"
              className="w-full h-full"
              allow="encrypted-media"
              allowFullScreen
              title="ServiceGTD Ethics Video"
            />
          </div>
        </div>
      </section>

      {/* Grievance Redressal */}
      <section className="py-16 sm:py-20 bg-warm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif text-navy mb-4">Grievance Redressal</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            If you're ever unhappy with our service, we want to know. Our grievance officer responds within 24 hours, and every complaint is tracked to resolution.
          </p>
          <div className="mt-8 bg-white rounded-xl p-6 inline-block text-left shadow-sm">
            <p className="text-sm"><strong>Grievance Officer:</strong> Priyanka Nair</p>
            <p className="text-sm mt-1"><strong>Email:</strong> <a href="mailto:grievance@servicegtd.com" className="text-primary">grievance@servicegtd.com</a></p>
            <p className="text-sm mt-1"><strong>Response Time:</strong> Within 24 hours</p>
            <p className="text-sm mt-1"><strong>Resolution Time:</strong> Within 7 working days</p>
          </div>
        </div>
      </section>
    </>
  )
}
