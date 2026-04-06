import { useState } from 'react'
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="gradient-hero py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="Contact Us"
            title="We're Here for You — Anytime, Any Timezone"
            subtitle="Whether it's a quick question or an urgent need, reach out. We respond to every message."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-navy mb-6">Get in Touch</h3>
                <div className="space-y-5">
                  {[
                    { icon: HiPhone, title: 'India Office (24/7)', value: '+91 123 456 7890', link: 'tel:+911234567890' },
                    { icon: HiPhone, title: 'US Office', value: '+1 415 123 4567', link: 'tel:+14151234567' },
                    { icon: FaWhatsapp, title: 'WhatsApp', value: 'Chat with us', link: 'https://wa.me/911234567890' },
                    { icon: HiMail, title: 'Email', value: 'care@servicegtd.com', link: 'mailto:care@servicegtd.com' },
                    { icon: HiLocationMarker, title: 'Head Office', value: 'Bangalore, Karnataka, India', link: '#' },
                  ].map((item, i) => (
                    <a key={i} href={item.link} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.title}</p>
                        <p className="font-semibold text-navy group-hover:text-primary transition">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-teal-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <HiClock className="w-5 h-5 text-teal" />
                  <h4 className="font-bold text-navy">Office Hours</h4>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><strong>India:</strong> 24/7 (Emergency always available)</p>
                  <p><strong>US Office:</strong> Mon-Fri, 9 AM - 6 PM PST</p>
                  <p><strong>UK Office:</strong> Mon-Fri, 9 AM - 6 PM GMT</p>
                </div>
                <p className="text-xs text-teal font-medium mt-3">
                  We schedule calls at YOUR convenient time, regardless of timezone.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-teal-50 rounded-2xl p-12 text-center">
                  <span className="text-5xl">🙏</span>
                  <h3 className="text-2xl font-bold text-navy mt-4 font-serif">Message Received!</h3>
                  <p className="text-gray-600 mt-2">We'll get back to you within 4 hours during business hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-primary font-semibold">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-5">
                  <h3 className="text-xl font-bold text-navy">Send Us a Message</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                        placeholder="+1 xxx xxx xxxx"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    >
                      <option value="">Select a topic</option>
                      <option>General Inquiry</option>
                      <option>Care Services</option>
                      <option>Emergency Support</option>
                      <option>Property Management</option>
                      <option>Partnership Opportunities</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white py-3.5 rounded-full font-semibold transition-all hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
