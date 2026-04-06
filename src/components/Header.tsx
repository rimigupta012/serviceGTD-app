import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX, HiPhone, HiChevronDown } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import ConsultationModal from './ConsultationModal'

const navLinks = [
  {
    label: 'Services',
    children: [
      { label: 'All Services', path: '/services' },
      { label: 'Clinical Care', path: '/services/clinical-care' },
      { label: 'Daily Assistance', path: '/services/daily-assistance' },
      { label: 'NRI Services', path: '/services/nri-services' },
    ],
  },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Trust & Ethics', path: '/trust-ethics' },
  { label: 'Locations', path: '/locations' },
  {
    label: 'Resources',
    children: [
      { label: 'Blog', path: '/blog' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Care Assessment', path: '/care-assessment' },
    ],
  },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+911234567890" className="flex items-center gap-1 hover:text-primary-100 transition">
              <HiPhone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+91 123 456 7890</span>
            </a>
            <a href="https://wa.me/911234567890" className="flex items-center gap-1 hover:text-primary-100 transition">
              <FaWhatsapp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp Support</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-primary-100">
            <span className="hidden md:inline">🇮🇳 For NRIs, By NRIs</span>
            <span className="hidden lg:inline ml-2">|</span>
            <Link to="/emergency-sos" className="hidden lg:inline text-red-200 hover:text-white font-semibold transition">
              🚨 Emergency SOS
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 glassmorphism shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-lg">
                G
              </div>
              <div>
                <span className="text-xl font-bold text-navy">Service<span className="text-primary">GTD</span></span>
                <span className="hidden sm:block text-[10px] text-gray-warm -mt-1">Getting Things Done for Your Family</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition rounded-lg hover:bg-primary-50">
                      {link.label}
                      <HiChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-2.5 text-sm hover:bg-primary-50 hover:text-primary transition ${isActive(child.path) ? 'text-primary bg-primary-50' : 'text-gray-700'}`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path!}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition ${isActive(link.path!) ? 'text-primary bg-primary-50' : 'text-gray-700 hover:text-primary hover:bg-primary-50'}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowModal(true)}
                className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Talk to an Advisor
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-primary transition"
              >
                {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-primary-50"
                    >
                      {link.label}
                      <HiChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === link.label && (
                      <div className="ml-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary rounded-lg hover:bg-primary-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path!}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg ${isActive(link.path!) ? 'text-primary bg-primary-50' : 'text-gray-700 hover:bg-primary-50'}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <button
                onClick={() => { setShowModal(true); setMobileOpen(false) }}
                className="w-full mt-3 bg-primary text-white py-3 rounded-full text-sm font-semibold"
              >
                Talk to an Advisor
              </button>
              <Link
                to="/emergency-sos"
                onClick={() => setMobileOpen(false)}
                className="block text-center mt-2 text-red-600 font-semibold text-sm py-2"
              >
                🚨 Emergency SOS
              </Link>
            </div>
          </div>
        )}
      </header>

      <ConsultationModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
