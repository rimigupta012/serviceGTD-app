import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiPlay, HiShieldCheck, HiUserGroup, HiClock, HiHeart } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import StatsCounter from '../components/StatsCounter'
import TestimonialCard from '../components/TestimonialCard'
import FAQAccordion from '../components/FAQAccordion'
import ConsultationModal from '../components/ConsultationModal'
import { testimonials, faqs, howItWorksSteps, pricingPlans } from '../data/content'

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Emotional Hindi tagline */}
            <p className="text-primary font-medium mb-4 text-sm sm:text-base tracking-wide">
              "Dooriyan chahe kitni bhi ho, apnon ka khayal rakhna zaroori hai" 🙏
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif text-navy leading-tight">
              Caring for Your Parents in India,{' '}
              <span className="text-gradient">No Matter Where You Live</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              End-to-end managed elder care — from daily check-ins to emergency response.
              So you can live your life abroad, without the guilt.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center gap-2"
              >
                Talk to an Advisor — It's Free
                <HiArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowVideo(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-gray-700 hover:text-primary transition group"
              >
                <span className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition">
                  <HiPlay className="w-5 h-5 text-primary ml-0.5" />
                </span>
                Watch Our Story
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><HiShieldCheck className="w-4 h-4 text-teal" /> Verified Care Partners</span>
              <span className="flex items-center gap-1.5"><HiClock className="w-4 h-4 text-teal" /> 24/7 Emergency Support</span>
              <span className="flex items-center gap-1.5"><HiHeart className="w-4 h-4 text-teal" /> 5,000+ Happy Families</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 sm:p-10">
            <StatsCounter
              stats={[
                { value: 45, suffix: '+', label: 'Cities Across India' },
                { value: 100, suffix: '+', label: 'Verified Partners' },
                { value: 5000, suffix: '+', label: 'NRI Families Served' },
                { value: 98, suffix: '%', label: 'Satisfaction Rate' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ===== EMOTIONAL NRI SECTION ===== */}
      <section className="py-16 sm:py-20 bg-warm">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy leading-snug">
            "Every missed call from home makes your heart skip a beat.<br className="hidden sm:block" />
            <span className="text-primary">We understand. We've been there too.</span>"
          </h2>
          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            ServiceGTD was founded by Navneet Gupta — an NRI who spent years carrying the quiet guilt of being
            away from his parents. When he looked around, he saw millions sharing the same struggle.
            Every service, every process, every late-night WhatsApp reply — it comes from that shared promise.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {[
              { icon: '🌙', title: 'Late Night Worries?', desc: 'Our team operates across timezones. Your 2 AM worry is our morning priority.' },
              { icon: '📱', title: 'One Call Away', desc: 'WhatsApp your Care Manager anytime. Average response: under 5 minutes.' },
              { icon: '👁️', title: 'See for Yourself', desc: 'Weekly video updates of your parents — their meals, walks, health, smiles.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-bold text-navy mt-3">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-16 sm:py-20" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="What We Do"
            title="Comprehensive Care, Managed End-to-End"
            subtitle="From medical needs to daily companionship to managing your Indian property — we handle everything so you don't have to worry."
          />
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: '🏥', title: 'Clinical Care', tagline: 'Hospital-grade care in the comfort of home.', link: '/services/clinical-care', gradient: 'from-primary-50 to-white', border: 'hover:border-primary/30', iconBg: 'bg-primary-100' },
              { icon: '🏠', title: 'Daily Assistance', tagline: 'Everyday support that feels like family.', link: '/services/daily-assistance', gradient: 'from-teal-50 to-white', border: 'hover:border-teal/30', iconBg: 'bg-teal-50' },
              { icon: '🌏', title: 'NRI Services', tagline: 'Your eyes, ears & hands in India.', link: '/services/nri-services', gradient: 'from-warm to-white', border: 'hover:border-saffron/30', iconBg: 'bg-warm-100' },
            ].map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className={`group rounded-2xl border border-gray-100 ${svc.border} bg-gradient-to-br ${svc.gradient} p-8 sm:p-10 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className={`w-16 h-16 rounded-2xl ${svc.iconBg} flex items-center justify-center text-3xl mx-auto`}>
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mt-5">{svc.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{svc.tagline}</p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Learn More <HiArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 sm:py-20 bg-gray-light" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="How It Works"
            title="From First Call to Daily Care — In 6 Simple Steps"
            subtitle="We've designed a process that's thorough yet simple. Because you already have enough on your plate."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorksSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary-50 text-primary font-bold text-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                <p className="mt-3 text-xs text-teal font-medium bg-teal-50 inline-block px-3 py-1 rounded-full">{step.detail}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Learn more about our process <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TRUST & ETHICS ===== */}
      <section className="py-16 sm:py-20 bg-navy text-white" id="trust">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="Trust & Ethics"
            title="Built on Trust, Driven by Ethics"
            subtitle="You're trusting us with the most precious people in your life. We don't take that lightly."
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <HiShieldCheck className="w-7 h-7" />, title: 'Rigorous Verification', desc: '6-step partner verification. Only 12% of applicants qualify. Background checks, skill tests, and in-person evaluations.' },
              { icon: <HiHeart className="w-7 h-7" />, title: 'Ethics First', desc: 'No upselling. No unnecessary services. Our Care Advisors recommend what your parents actually need — nothing more.' },
              { icon: <HiUserGroup className="w-7 h-7" />, title: 'Privacy Protected', desc: 'Your family data is encrypted and never shared. We comply with Indian data protection regulations.' },
              { icon: <HiClock className="w-7 h-7" />, title: 'Advisory-First', desc: 'Every engagement starts with a free, no-obligation consultation. We believe in earning your trust before your business.' },
            ].map((card, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
                <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/trust-ethics" className="inline-flex items-center gap-2 text-primary-light font-semibold hover:text-white transition">
              Explore our Trust Framework <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-16 sm:py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="Transparent Pricing"
            title="Simple Plans. Honest Pricing. No Hidden Fees."
            subtitle="Choose a plan that fits your parents' needs. Upgrade, downgrade, or cancel anytime."
          />
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 sm:p-8 transition-all ${plan.popular ? 'bg-primary text-white shadow-xl shadow-primary/25 scale-[1.02] ring-2 ring-primary' : 'bg-white border border-gray-200 hover:shadow-lg'}`}
              >
                {plan.popular && (
                  <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-2xl font-bold font-serif ${plan.popular ? 'text-white' : 'text-navy'}`}>{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>{plan.subtitle}</p>
                <div className="mt-4 mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-navy'}`}>₹{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>{plan.period}</span>
                </div>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm ${plan.popular ? 'text-white/90' : 'text-gray-700'}`}>
                      <span className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px] ${plan.popular ? 'bg-white/20 text-white' : 'bg-teal-50 text-teal'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowModal(true)}
                  className={`w-full py-3 rounded-full font-semibold transition-all text-sm ${plan.popular ? 'bg-white text-primary hover:bg-gray-100' : 'bg-primary text-white hover:bg-primary-dark'}`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            All plans include a dedicated Care Manager. Custom plans available for complex needs. <br />
            <strong>First week free</strong> — experience the care before committing.
          </p>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 sm:py-20 bg-gray-light" id="testimonials">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="Real Stories"
            title="Trusted by 5,000+ NRI Families Worldwide"
            subtitle="Don't take our word for it. Hear from families who found peace of mind with ServiceGTD."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ PREVIEW ===== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading
            badge="FAQ"
            title="Questions We Get Asked a Lot"
            subtitle="Can't find your answer? We're just a WhatsApp message away."
          />
          <FAQAccordion items={faqs} limit={5} />
          <div className="text-center mt-8 space-y-3">
            <Link to="/faq" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              View All FAQs <HiArrowRight />
            </Link>
            <p className="text-sm text-gray-500">
              Or{' '}
              <a href="https://wa.me/911234567890" className="text-green-600 font-medium inline-flex items-center gap-1">
                <FaWhatsapp className="w-3.5 h-3.5" /> WhatsApp us
              </a>{' '}
              — we typically reply in under 5 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 sm:py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white leading-tight">
            Your Parents Deserve the Best Care.<br />
            <span className="text-white/80">You Deserve Peace of Mind.</span>
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            One conversation can change everything. Talk to our Care Advisor today —
            and take the first step toward worry-free living.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold transition-all hover:shadow-xl"
            >
              Schedule a Free Consultation
            </button>
            <a
              href="tel:+911234567890"
              className="w-full sm:w-auto border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition flex items-center justify-center gap-2"
            >
              📞 Call Us Now
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Available 24/7 across all timezones. Hindi, English, Tamil, Telugu, Bengali, Marathi spoken.
          </p>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80" onClick={() => setShowVideo(false)}>
          <div className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <ConsultationModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
