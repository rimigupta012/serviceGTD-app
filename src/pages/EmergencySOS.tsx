import { HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaWhatsapp, FaAmbulance } from 'react-icons/fa'

export default function EmergencySOS() {
  return (
    <>
      {/* Emergency Hero */}
      <section className="bg-red-600 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-5xl mb-4 block">🚨</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif">
            Emergency SOS
          </h1>
          <p className="text-red-100 mt-4 text-lg">
            If your parent is in immediate danger, call us NOW. We respond in under 20 minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+911234567890"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-red-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-red-50 transition shadow-xl"
            >
              <HiPhone className="w-6 h-6" />
              Call Emergency: +91 123 456 7890
            </a>
            <a
              href="https://wa.me/911234567890?text=EMERGENCY%3A%20Need%20immediate%20help%20for%20my%20parent"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 transition"
            >
              <FaWhatsapp className="w-6 h-6" />
              WhatsApp SOS
            </a>
          </div>
        </div>
      </section>

      {/* What happens when you call */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-navy text-center mb-10">What Happens When You Call</h2>
          <div className="space-y-6">
            {[
              { time: '0 min', title: 'You Call Us', desc: 'Our 24/7 emergency line picks up. No IVR, no hold music — a real person answers within 3 rings.', icon: '📞' },
              { time: '2 min', title: 'Situation Assessment', desc: 'We assess the emergency, ask critical questions, and immediately begin dispatching help.', icon: '📋' },
              { time: '5 min', title: 'Help Dispatched', desc: 'Ambulance called, nearest hospital contacted, our ground team mobilized to your parent\'s location.', icon: '🚑' },
              { time: '10-20 min', title: 'Ground Team Arrives', desc: 'Our local emergency responder reaches your parent, ensures they\'re stable, and coordinates with paramedics.', icon: '🏃' },
              { time: 'Ongoing', title: 'Real-Time Updates', desc: 'You receive updates every 15 minutes via WhatsApp — photos, doctor notes, hospital details. Until the situation is resolved.', icon: '📱' },
              { time: 'After', title: 'Follow-Up Care', desc: 'Post-emergency, we arrange follow-up care — nursing, medicines, recovery support. You don\'t have to figure anything out alone.', icon: '💊' },
            ].map((step, i) => (
              <div key={i} className="flex gap-5 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="text-center shrink-0 w-20">
                  <span className="text-3xl">{step.icon}</span>
                  <p className="text-xs font-bold text-red-600 mt-1">{step.time}</p>
                </div>
                <div>
                  <h3 className="font-bold text-navy">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Preparedness */}
      <section className="py-16 sm:py-20 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-navy text-center mb-4">Be Prepared Before an Emergency</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            The best emergency response starts with preparation. Here's what every NRI family should have ready.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Emergency Card', desc: 'A laminated card with blood type, allergies, medications, emergency contacts, and insurance details. Keep one in wallet, one by the phone.', icon: '🪪' },
              { title: 'Hospital Shortlist', desc: 'Know the nearest 2-3 hospitals, their emergency numbers, and the route from your parent\'s home. Share with neighbors.', icon: '🏥' },
              { title: 'Neighbor Network', desc: 'Introduce yourself to 2-3 neighbors. Share your number. Ask them to check if they don\'t see your parents for a day.', icon: '🏘️' },
              { title: 'Digital Health File', desc: 'All medical records, prescriptions, and insurance papers scanned and stored in a shared Google Drive or WhatsApp group.', icon: '📁' },
              { title: 'ServiceGTD Emergency Plan', desc: 'Our subscribers get a pre-configured emergency plan with local responders, hospital tie-ups, and instant dispatch capability.', icon: '🛡️' },
              { title: 'Regular Check-ins', desc: 'Daily check-ins catch problems early. A fall at 8 AM is discovered at 8:15 AM — not 4 hours later.', icon: '⏰' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm flex gap-4">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-navy">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-red-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaAmbulance className="w-8 h-8 text-white" />
            <HiLocationMarker className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Don't Wait for an Emergency. Set Up Care Now.</h2>
          <p className="text-red-100 mt-2">Our subscribers have emergency plans pre-configured and ready to activate.</p>
          <a href="tel:+911234567890" className="mt-6 inline-block bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-red-50 transition">
            Call: +91 123 456 7890
          </a>
        </div>
      </section>
    </>
  )
}
