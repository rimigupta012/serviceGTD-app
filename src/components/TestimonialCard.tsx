import { HiStar } from 'react-icons/hi'

interface Props {
  name: string
  location: string
  image: string
  rating: number
  text: string
  service: string
}

export default function TestimonialCard({ name, location, image, rating, text, service }: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <HiStar key={i} className="w-5 h-5 text-gold" />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed flex-1 italic">"{text}"</p>
      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-primary-100 flex items-center justify-center text-primary font-bold text-sm">
            {image}
          </div>
          <div>
            <p className="font-semibold text-navy text-sm">{name}</p>
            <p className="text-xs text-gray-500">{location}</p>
          </div>
        </div>
        <span className="text-xs bg-teal-50 text-teal px-3 py-1 rounded-full font-medium">{service}</span>
      </div>
    </div>
  )
}
