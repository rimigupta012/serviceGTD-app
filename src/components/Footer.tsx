import { Link } from 'react-router-dom'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white font-serif">Stay Connected with Home</h3>
              <p className="text-gray-400 mt-1">Care tips, NRI guides, and updates — straight to your inbox.</p>
            </div>
            <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your.email@abroad.com"
                className="flex-1 md:w-80 px-5 py-3 rounded-l-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-r-full transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-lg">G</div>
              <span className="text-xl font-bold text-white">Service<span className="text-primary-light">GTD</span></span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Caring for your parents in India, no matter where you live. End-to-end managed elder care — for NRIs, by NRIs.
            </p>
            <div className="flex gap-3 mt-5">
              {[FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center text-gray-400 hover:text-white transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services/clinical-care" className="hover:text-primary-light transition">Clinical Care</Link></li>
              <li><Link to="/services/daily-assistance" className="hover:text-primary-light transition">Daily Assistance</Link></li>
              <li><Link to="/services/nri-services" className="hover:text-primary-light transition">NRI Services</Link></li>
              <li><Link to="/emergency-sos" className="hover:text-primary-light transition">Emergency SOS</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-primary-light transition">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary-light transition">How It Works</Link></li>
              <li><Link to="/trust-ethics" className="hover:text-primary-light transition">Trust & Ethics</Link></li>
              <li><Link to="/locations" className="hover:text-primary-light transition">Locations</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/blog" className="hover:text-primary-light transition">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-primary-light transition">FAQ</Link></li>
              <li><Link to="/care-assessment" className="hover:text-primary-light transition">Care Assessment</Link></li>
              <li><Link to="/contact" className="hover:text-primary-light transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <HiPhone className="w-4 h-4 mt-0.5 text-primary-light shrink-0" />
                <div>
                  <a href="tel:+911234567890" className="hover:text-primary-light transition">+91 123 456 7890</a>
                  <p className="text-xs text-gray-500">India (24/7)</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <HiPhone className="w-4 h-4 mt-0.5 text-primary-light shrink-0" />
                <div>
                  <a href="tel:+14151234567" className="hover:text-primary-light transition">+1 415 123 4567</a>
                  <p className="text-xs text-gray-500">US Office</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <HiMail className="w-4 h-4 mt-0.5 text-primary-light shrink-0" />
                <a href="mailto:care@servicegtd.com" className="hover:text-primary-light transition">care@servicegtd.com</a>
              </li>
              <li className="flex items-start gap-2">
                <HiLocationMarker className="w-4 h-4 mt-0.5 text-primary-light shrink-0" />
                <span className="text-gray-400">Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>&copy; 2026 ServiceGTD by Inforea Solutions. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
