import { useState } from 'react'
import { HiX } from 'react-icons/hi'

interface Props {
  open: boolean
  onClose: () => void
}

export default function ConsultationModal({ open, onClose }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    parentCity: '',
    service: '',
    message: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  })
  const [submitted, setSubmitted] = useState(false)

  if (!open) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 transition">
          <HiX className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🙏</div>
              <h3 className="text-2xl font-bold text-navy font-serif">Dhanyavaad!</h3>
              <p className="text-gray-600 mt-2">
                Your Care Advisor will reach out within 24 hours, at a time that works for your timezone ({formData.timezone}).
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Need urgent help? Call us directly at <a href="tel:+911234567890" className="text-primary font-semibold">+91 123 456 7890</a>
              </p>
              <button onClick={onClose} className="mt-6 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition">
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-navy font-serif">Talk to a Care Advisor</h3>
                <p className="text-gray-600 mt-1">No obligations. No sales pitch. Just honest guidance.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm"
                      placeholder="Priya Sharma"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm"
                      placeholder="+1 415 123 4567"
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
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm"
                    placeholder="priya@email.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Country</label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm"
                    >
                      <option value="">Select country</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>UAE</option>
                      <option>Singapore</option>
                      <option>Germany</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent's City in India</label>
                    <input
                      type="text"
                      value={formData.parentCity}
                      onChange={(e) => setFormData({ ...formData, parentCity: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm"
                      placeholder="Bangalore"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">How Can We Help?</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm"
                  >
                    <option value="">Select a service</option>
                    <option>Nursing / Clinical Care</option>
                    <option>Full-time Caretaker</option>
                    <option>Daily Check-ins & Companionship</option>
                    <option>Post-Surgery Recovery</option>
                    <option>Property Management</option>
                    <option>Emergency Care Setup</option>
                    <option>Complete Care Package</option>
                    <option>Not Sure — Need Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tell Us More (Optional)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm resize-none"
                    placeholder="Tell us about your parents' needs, any health conditions, or specific concerns..."
                  />
                </div>

                <p className="text-xs text-gray-500">
                  Detected timezone: <strong>{formData.timezone}</strong>. We'll schedule the call at a convenient time for you.
                </p>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-full font-semibold transition-all hover:shadow-lg"
                >
                  Schedule Free Consultation
                </button>

                <p className="text-xs text-center text-gray-400">
                  No spam. No cold calls. Your data is protected under our privacy policy.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
