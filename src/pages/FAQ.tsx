import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'
import { faqs } from '../data/content'

export default function FAQ() {
  return (
    <>
      <section className="gradient-hero py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about ServiceGTD. Can't find your answer? We're just a message away."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-warm">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-serif text-navy">Still Have Questions?</h2>
          <p className="text-gray-600 mt-3">We're here to help. Reach out through any of these channels.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/911234567890"
              className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
            >
              <FaWhatsapp className="w-5 h-5" /> WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition"
            >
              Write to Us
            </Link>
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 border-2 border-gray-300 text-navy px-6 py-3 rounded-full font-semibold hover:border-primary hover:text-primary transition"
            >
              Call: +91 123 456 7890
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
