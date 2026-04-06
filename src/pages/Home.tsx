import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiShieldCheck, HiLockClosed } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import StatsCounter from '../components/StatsCounter'
import TestimonialCard from '../components/TestimonialCard'
import FAQAccordion from '../components/FAQAccordion'
import ConsultationModal from '../components/ConsultationModal'
import { testimonials, faqs, blogPosts } from '../data/content'

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden text-white">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://inforeasolutions.com/gtd/wp-content/uploads/2026/02/Image-ServiceGTD.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/85 via-[#12101f]/80 to-[#1a1530]/90" />
        </div>
        {/* Glow effects */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-teal/20 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 py-20 sm:py-28 lg:py-36 relative text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight">
            Caring for Your Parents in India,
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight mt-2 text-gradient">
            No Matter Where You Live
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            End-to-end managed elder care designed exclusively for NRI families. From clinical support to daily assistance,
            we ensure your parents receive trusted, professional care — with complete peace of mind.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2"
            >
              Talk to an Advisor
              <HiArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/care-assessment"
              className="w-full sm:w-auto border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition flex items-center justify-center gap-2"
            >
              Start Care Planning
            </Link>
          </div>

          {/* Trust badges */}
          <p className="mt-8 text-sm text-gray-400">
            Confidential consultation &bull; No pressure &bull; Advisory-first approach
          </p>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { value: '45+', label: 'Cities Served' },
              { value: '100+', label: 'Handpicked Service Partners' },
              { value: '1', label: 'Dedicated Care Manager' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-16 sm:py-24 relative overflow-hidden" id="services">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://inforeasolutions.com/gtd/wp-content/uploads/2026/03/Care-That-Feels-Personal4.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f0b1e]/90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">Comprehensive Care Services</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              A complete care ecosystem designed for NRI families — so you never have to
              coordinate multiple providers again.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: '🏥',
                title: 'Clinical Care',
                desc: 'Professional medical support at home with verified, hospital-trained healthcare providers.',
                items: ['Nursing Care', 'ICU at Home', 'Physiotherapy', 'Palliative Support'],
                link: '/services/clinical-care',
              },
              {
                icon: '🏠',
                title: 'Daily Assistance',
                desc: 'Comprehensive support for everyday needs, companionship, and emotional well-being.',
                items: ['Full-time Caretakers', 'Care Concierge', 'Post-Surgery Support', 'Daily Check-ins'],
                link: '/services/daily-assistance',
              },
              {
                icon: '🌏',
                title: 'Other NRI Services',
                desc: 'Additional support services tailored for families managing responsibilities from abroad.',
                items: ['Property Management', 'Legal Assistance', 'Financial Planning', 'Travel Coordination'],
                link: '/services/nri-services',
              },
            ].map((svc, i) => (
              <div
                key={i}
                className="relative rounded-[14px] backdrop-blur-[51px] p-8 transition-all duration-300 group hover:scale-[1.02]"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <span className="text-4xl block mb-5">{svc.icon}</span>
                <h3 className="text-xl font-bold text-white">{svc.title}</h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">{svc.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {svc.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={svc.link}
                  className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-primary-light group-hover:gap-2.5 transition-all"
                >
                  Learn More <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CARE PHILOSOPHY ===== */}
      <section className="py-16 sm:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">
              Care That Feels Personal.<br className="hidden sm:block" /> Support That Feels Structured.
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Every family's situation is unique. That's why we combine human compassion with a
              managed system built on trust, transparency, and accountability.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Your Personal Care Manager',
                desc: 'A single point of contact who knows your family, coordinates every service, and keeps you updated — like a trusted family member on the ground.',
                img: 'https://inforeasolutions.com/gtd/wp-content/uploads/2026/03/Care-That-Feels-Personal4.jpg',
              },
              {
                title: 'Weekly Video Updates',
                desc: 'See your parents\' daily life through regular video reports — their meals, health metrics, walks, and moments of joy. Bridge the distance with real visibility.',
                img: 'https://inforeasolutions.com/gtd/wp-content/uploads/2026/03/Care-That-Feels-Personal5.jpg',
              },
              {
                title: 'Timezone-Aware Support',
                desc: 'Our team operates across IST, PST, GMT, and SGT. Your 2 AM anxiety gets a 2 AM response — because worry doesn\'t follow business hours.',
                img: 'https://inforeasolutions.com/gtd/wp-content/uploads/2026/03/Care-That-Feels-Personal6.jpg',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[14px] overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <div className="h-56 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COVERAGE ===== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">
            45+ Cities. 100+ Handpicked Partners.
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A structured, managed care system designed specifically for families living abroad —
            covering every major city and growing rapidly into Tier-2 towns.
          </p>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Explore Our Managed Approach <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===== TRUST & ETHICS ===== */}
      <section className="py-16 sm:py-24" id="trust">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">Built on Trust, Driven by Ethics</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We understand the weight of trusting someone with your parents' care.
              That's why trust and ethics aren't just values — they're our operating system.
            </p>
          </div>

          {/* 4 Trust Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: '🔍', title: 'Rigorous Verification', desc: 'Every partner undergoes our 6-step background check including criminal records, skill assessments, and in-person evaluations.' },
              { icon: '⚖️', title: 'Ethics First', desc: 'No commissions, no kickbacks, no bias. We recommend only what genuinely serves your parents\' best interest.' },
              { icon: '🔒', title: 'Privacy Protected', desc: 'Military-grade data encryption and strict confidentiality at every step of the care journey. Your family\'s data is sacred.' },
              { icon: '🤝', title: 'Advisory-First', desc: 'We guide, not sell. Your peace of mind is our only metric of success. Free consultations, zero pressure.' },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-[14px] border border-gray-100 p-6 hover:shadow-lg transition-all text-center">
                <span className="text-3xl block mb-4">{card.icon}</span>
                <h3 className="font-bold text-navy text-lg">{card.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Video + CTA */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-navy">Watch Our Trust Story</h3>
            </div>
            <div
              className="aspect-video rounded-2xl overflow-hidden shadow-xl cursor-pointer relative group"
              onClick={() => setShowVideo(true)}
            >
              <img
                src="https://img.youtube.com/vi/VhBl3dHT5SY/maxresdefault.jpg"
                alt="Watch Our Trust Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  <span className="text-primary text-3xl ml-1">▶</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => setShowModal(true)}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Talk to an Advisor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6-STEP VERIFICATION ===== */}
      <section className="py-16 sm:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">Our 6-Step Partner Verification</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We understand the responsibility of caring for your loved ones. That's why every care partner
              must pass the most rigorous screening process in the industry.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Steps */}
            <div className="space-y-4">
              {[
                { title: 'Background Checks', desc: 'Criminal record, employment history, and credential verification through government databases.' },
                { title: 'Feedback Review', desc: 'Thorough analysis of past client testimonials, service ratings, and professional references.' },
                { title: 'In-Person Evaluation', desc: 'Direct interviews and hands-on skills assessment conducted by our senior care team.' },
                { title: 'Legal Compliance', desc: 'License validation, insurance verification, and regulatory requirement checks.' },
                { title: 'Standards Alignment', desc: 'Ensuring adherence to ServiceGTD\'s quality benchmarks, care protocols, and ethical guidelines.' },
                { title: 'Ongoing Monitoring', desc: 'Continuous performance tracking, surprise audits, and quality reviews every quarter.' },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ${i % 2 === 0 ? 'bg-primary' : 'bg-teal'}`}>
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{step.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image placeholder / Stats */}
            <div>
              <div className="rounded-2xl h-80 overflow-hidden mb-8">
                <img
                  src="https://inforeasolutions.com/gtd/wp-content/uploads/2026/03/Our-6-Step-Partner-Verification1.jpg"
                  alt="6-Step Partner Verification"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '12%', label: 'Partner Approval Rate' },
                  { value: '100%', label: 'Verified Professionals' },
                  { value: '45+', label: 'Cities Covered' },
                ].map((m, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <p className="text-2xl font-bold text-primary">{m.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 sm:py-24" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">How ServiceGTD Works</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From first conversation to ongoing care, we handle every detail with precision and empathy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: 1,
                title: 'Requirement Intake',
                desc: 'Share your parents\' needs through a guided consultation — medical history, daily routine, personality, and your specific concerns.',
                tags: ['Free 30-min consultation', 'No obligation', 'Completely confidential'],
                color: 'bg-primary',
              },
              {
                step: 2,
                title: 'Curated Recommendations',
                desc: 'Receive a personalized care plan with vetted partners matched precisely to your family\'s requirements and budget.',
                tags: ['3-5 verified options', 'Transparent pricing', 'Detailed profiles'],
                color: 'bg-teal',
              },
              {
                step: 3,
                title: 'Partner Selection',
                desc: 'Review profiles, watch video introductions, and select the best-fit service provider for your parents.',
                tags: ['Video introductions', 'Background verification', 'Flexible options'],
                color: 'bg-primary',
              },
              {
                step: 4,
                title: 'Service Setup',
                desc: 'We coordinate onboarding, scheduling, and introductions — ensuring a smooth, comfortable start for your parents.',
                tags: ['Seamless coordination', 'Direct introduction', 'Clear expectations'],
                color: 'bg-teal',
              },
              {
                step: 5,
                title: 'Ongoing Monitoring',
                desc: 'Continuous support with a dedicated Care Manager, regular check-ins, and 24/7 availability for emergencies.',
                tags: ['24/7 WhatsApp support', 'Weekly video updates', 'Quality assurance'],
                color: 'bg-primary',
              },
              {
                step: 6,
                title: 'Care Optimization',
                desc: 'Regular health assessments and proactive adjustments to ensure the best possible care outcomes over time.',
                tags: ['Monthly reviews', 'Feedback integration', 'Adaptive care plans'],
                color: 'bg-teal',
              },
            ].map((step) => (
              <div key={step.step} className="bg-white rounded-[14px] border border-gray-100 p-6 hover:shadow-lg transition-all">
                <div className={`w-10 h-10 rounded-full ${step.color} text-white font-bold text-sm flex items-center justify-center mb-4`}>
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-navy">Step {step.step} — {step.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{step.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {step.tags.map((tag, j) => (
                    <span key={j} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 sm:py-24 bg-gray-light" id="testimonials">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Community Voices</p>
          </div>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">Trusted by 5,000+ NRI Families</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Real stories from families who found peace of mind through ServiceGTD.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>

          {/* Stats */}
          <div className="mt-14">
            <StatsCounter
              stats={[
                { value: 4, suffix: '.9/5', label: 'Average Rating' },
                { value: 5000, suffix: '+', label: 'Happy Families' },
                { value: 98, suffix: '%', label: 'Satisfaction Rate' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Resources &amp; Insights</p>
          </div>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">From Our Blog</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Expert advice, care tips, and insights to help you make informed decisions for your family.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, idx) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-[14px] border border-primary/10 bg-white overflow-hidden shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={`https://inforeasolutions.com/gtd/wp-content/uploads/2026/02/blog${idx + 1}.jpg`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-bold text-navy group-hover:text-primary transition">{post.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Read More <HiArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              View All Articles <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 sm:py-24 bg-gray-light" id="faq">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-sm font-semibold text-primary tracking-wide uppercase">Have Questions?</p>
          </div>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Get answers to common questions about our services, processes, and care approach.
            </p>
          </div>

          <FAQAccordion items={faqs} limit={8} />

          {/* Still have questions */}
          <div className="mt-14 text-center bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-navy">Still Have Questions?</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Our care advisors are here to help. Schedule a free consultation to discuss your specific needs.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => setShowModal(true)}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-all text-sm"
              >
                Talk to an Advisor
              </button>
              <a
                href="https://wa.me/911234567890"
                className="flex items-center gap-2 border border-gray-300 text-gray-700 hover:border-primary hover:text-primary px-6 py-3 rounded-full font-semibold transition text-sm"
              >
                <FaWhatsapp className="w-4 h-4" /> Write to Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-2xl p-8 sm:p-12 lg:p-16 text-center" style={{ background: 'linear-gradient(90deg, rgba(107,70,193,0.1) 0%, rgba(14,184,156,0.1) 100%)' }}>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-navy leading-tight">
              Your Parents Deserve the Best Care.<br />
              <span className="text-primary">You Deserve Peace of Mind.</span>
            </h2>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              No sales pressure. No obligations. Just a caring conversation about how we can support your family.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-600">
              <span className="flex items-center gap-1.5"><HiShieldCheck className="w-4 h-4 text-teal" /> Confidential Consultation</span>
              <span className="flex items-center gap-1.5"><HiShieldCheck className="w-4 h-4 text-teal" /> Zero Commitment</span>
              <span className="flex items-center gap-1.5"><HiShieldCheck className="w-4 h-4 text-teal" /> Same-Day Response</span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:shadow-xl hover:shadow-primary/25"
              >
                Schedule a Free Consultation
              </button>
              <a
                href="tel:+911234567890"
                className="w-full sm:w-auto border-2 border-gray-300 text-navy hover:border-primary hover:text-primary px-8 py-4 rounded-full text-lg font-semibold transition flex items-center justify-center gap-2"
              >
                📞 Call Us Now
              </a>
            </div>

            <p className="mt-6 text-xs text-gray-400 flex items-center justify-center gap-1">
              <HiLockClosed className="w-3.5 h-3.5" />
              Your information is protected. We never share personal details and respect your privacy completely.
            </p>
          </div>
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
