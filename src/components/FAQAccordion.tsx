import { useState } from 'react'
import { HiPlus, HiMinus } from 'react-icons/hi'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQAccordion({ items, limit }: { items: FAQItem[]; limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number>(0)
  const displayItems = limit ? items.slice(0, limit) : items

  return (
    <div className="space-y-3">
      {displayItems.map((item, index) => (
        <div
          key={index}
          className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'border-primary/30 bg-primary-50/30 shadow-sm' : 'border-gray-200 hover:border-gray-300'}`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full flex items-center justify-between px-6 py-4 text-left"
          >
            <span className={`font-medium pr-4 ${openIndex === index ? 'text-primary' : 'text-navy'}`}>
              {item.question}
            </span>
            <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
              {openIndex === index ? <HiMinus className="w-4 h-4" /> : <HiPlus className="w-4 h-4" />}
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'}`}>
            <p className="px-6 text-gray-600 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
