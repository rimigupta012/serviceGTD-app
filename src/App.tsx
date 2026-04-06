import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import ClinicalCare from './pages/services/ClinicalCare'
import DailyAssistance from './pages/services/DailyAssistance'
import NRIServices from './pages/services/NRIServices'
import HowItWorks from './pages/HowItWorks'
import TrustEthics from './pages/TrustEthics'
import Locations from './pages/Locations'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import FAQ from './pages/FAQ'
import EmergencySOS from './pages/EmergencySOS'
import CareAssessment from './pages/CareAssessment'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/clinical-care" element={<ClinicalCare />} />
        <Route path="/services/daily-assistance" element={<DailyAssistance />} />
        <Route path="/services/nri-services" element={<NRIServices />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/trust-ethics" element={<TrustEthics />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/emergency-sos" element={<EmergencySOS />} />
        <Route path="/care-assessment" element={<CareAssessment />} />
      </Route>
    </Routes>
  )
}
