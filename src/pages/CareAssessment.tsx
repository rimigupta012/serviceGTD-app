import { useState } from 'react'
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi'
import ConsultationModal from '../components/ConsultationModal'

const questions = [
  {
    id: 'living',
    question: 'How are your parents currently living?',
    options: [
      { label: 'Independently — no regular help needed', score: 1 },
      { label: 'Mostly independent — need occasional help', score: 2 },
      { label: 'Need daily help with some activities', score: 3 },
      { label: 'Need constant assistance throughout the day', score: 4 },
    ],
  },
  {
    id: 'health',
    question: 'How would you describe their health?',
    options: [
      { label: 'Generally healthy — minor age-related issues', score: 1 },
      { label: 'Chronic conditions (diabetes, BP) — managed with medication', score: 2 },
      { label: 'Multiple health issues — regular doctor visits needed', score: 3 },
      { label: 'Serious health conditions — needs medical supervision', score: 4 },
    ],
  },
  {
    id: 'mobility',
    question: 'How is their mobility?',
    options: [
      { label: 'Fully mobile — walks and moves independently', score: 1 },
      { label: 'Slightly limited — uses a walking stick occasionally', score: 2 },
      { label: 'Limited — needs support for walking', score: 3 },
      { label: 'Very limited — uses wheelchair or bedridden', score: 4 },
    ],
  },
  {
    id: 'social',
    question: 'How is their social life and emotional well-being?',
    options: [
      { label: 'Active social life — friends, activities, outings', score: 1 },
      { label: 'Some social contact but less than before', score: 2 },
      { label: 'Mostly isolated — few visitors or outings', score: 3 },
      { label: 'Very lonely — rarely meets anyone', score: 4 },
    ],
  },
  {
    id: 'local_support',
    question: 'Do they have local family/support nearby?',
    options: [
      { label: 'Yes — family members visit regularly', score: 1 },
      { label: 'Some support — neighbors or distant relatives check in', score: 2 },
      { label: 'Very limited local support', score: 3 },
      { label: 'No local support — completely on their own', score: 4 },
    ],
  },
  {
    id: 'concern',
    question: 'What worries you the most?',
    options: [
      { label: 'Just want to make sure someone checks on them', score: 1 },
      { label: 'Their daily needs — meals, medication, hygiene', score: 2 },
      { label: 'Medical care and health management', score: 3 },
      { label: 'Everything — I worry about them constantly', score: 4 },
    ],
  },
]

function getRecommendation(score: number) {
  if (score <= 10) {
    return {
      plan: 'Sathi (Companion Care)',
      price: '₹15,000/month',
      summary: 'Your parents seem to be doing well! A light-touch plan with regular check-ins and emergency backup would give you peace of mind.',
      features: ['Daily phone check-ins', 'Weekly in-person visits', 'Emergency helpline', 'Monthly health assessment'],
      color: 'teal',
    }
  }
  if (score <= 18) {
    return {
      plan: 'Seva (Comprehensive Care)',
      price: '₹35,000/month',
      summary: 'Your parents need regular support. Our comprehensive plan covers daily assistance, health management, and keeps you connected.',
      features: ['Full-time caretaker', 'Medication management', 'Weekly video updates', 'Doctor coordination', 'Meal planning'],
      color: 'primary',
    }
  }
  return {
    plan: 'Sampoorna (Total Care)',
    price: '₹65,000/month',
    summary: 'Your parents need significant support. Our total care plan provides round-the-clock medical and personal care with complete management.',
    features: ['24/7 nursing care', 'Specialist consultations', 'Daily video updates', 'Emergency priority', 'Complete life management'],
    color: 'saffron',
  }
}

export default function CareAssessment() {
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResult, setShowResult] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleSelect = (questionId: string, score: number) => {
    setAnswers({ ...answers, [questionId]: score })
  }

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0)
  const recommendation = getRecommendation(totalScore)
  const isAnswered = answers[questions[currentQ].id] !== undefined

  return (
    <>
      <section className="gradient-hero py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 bg-primary-50 text-primary">
            Free Assessment
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-navy">
            What Care Do Your Parents Need?
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Answer 6 simple questions. Get a personalized care recommendation in 2 minutes.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4">
          {!showResult ? (
            <>
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Question {currentQ + 1} of {questions.length}</span>
                  <span className="text-sm text-primary font-medium">{Math.round(((currentQ + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-navy mb-6">{questions[currentQ].question}</h2>
                <div className="space-y-3">
                  {questions[currentQ].options.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => handleSelect(questions[currentQ].id, option.score)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        answers[questions[currentQ].id] === option.score
                          ? 'border-primary bg-primary-50 text-primary'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setCurrentQ(currentQ - 1)}
                  disabled={currentQ === 0}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition ${currentQ === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-primary'}`}
                >
                  <HiArrowLeft /> Previous
                </button>
                {currentQ < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQ(currentQ + 1)}
                    disabled={!isAnswered}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition ${isAnswered ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                  >
                    Next <HiArrowRight />
                  </button>
                ) : (
                  <button
                    onClick={() => setShowResult(true)}
                    disabled={!isAnswered}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition ${isAnswered ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                  >
                    See Recommendation <HiArrowRight />
                  </button>
                )}
              </div>
            </>
          ) : (
            /* Result */
            <div className="text-center">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10">
                <span className="text-5xl mb-4 block">🎯</span>
                <h2 className="text-2xl font-bold text-navy font-serif">Your Recommended Plan</h2>
                <div className="mt-6 bg-primary-50 rounded-xl p-6">
                  <h3 className="text-3xl font-bold text-primary">{recommendation.plan}</h3>
                  <p className="text-2xl font-bold text-navy mt-2">{recommendation.price}</p>
                </div>
                <p className="text-gray-600 mt-6 leading-relaxed">{recommendation.summary}</p>
                <div className="mt-6 text-left bg-gray-light rounded-xl p-6">
                  <h4 className="font-bold text-navy mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {recommendation.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-teal flex items-center justify-center text-white text-xs shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 space-y-3">
                  <button
                    onClick={() => setShowModal(true)}
                    className="w-full bg-primary text-white py-3.5 rounded-full font-semibold hover:bg-primary-dark transition"
                  >
                    Talk to an Advisor About This Plan
                  </button>
                  <button
                    onClick={() => { setShowResult(false); setCurrentQ(0); setAnswers({}) }}
                    className="w-full text-gray-500 py-2 text-sm hover:text-primary transition"
                  >
                    Retake Assessment
                  </button>
                </div>
                <p className="mt-4 text-xs text-gray-400">
                  This is a general recommendation. Your Care Advisor will customize the plan based on a detailed conversation.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <ConsultationModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
