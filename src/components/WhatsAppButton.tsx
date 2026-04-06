import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/911234567890?text=Hi%20ServiceGTD%2C%20I%20need%20help%20with%20elder%20care%20for%20my%20parents%20in%20India"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  )
}
