import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'

interface Props {
  icon: string
  title: string
  description: string
  items: string[]
  link: string
  color: 'purple' | 'teal' | 'saffron'
}

const colorMap = {
  purple: {
    bg: 'bg-primary-50',
    border: 'border-primary/10',
    iconBg: 'bg-primary-100',
    text: 'text-primary',
    hover: 'hover:border-primary/30',
    bullet: 'bg-primary',
  },
  teal: {
    bg: 'bg-teal-50',
    border: 'border-teal/10',
    iconBg: 'bg-teal-50',
    text: 'text-teal',
    hover: 'hover:border-teal/30',
    bullet: 'bg-teal',
  },
  saffron: {
    bg: 'bg-warm',
    border: 'border-saffron/10',
    iconBg: 'bg-warm-100',
    text: 'text-saffron',
    hover: 'hover:border-saffron/30',
    bullet: 'bg-saffron',
  },
}

export default function ServiceCard({ icon, title, description, items, link, color }: Props) {
  const c = colorMap[color]
  return (
    <div className={`rounded-2xl border ${c.border} ${c.hover} p-6 sm:p-8 transition-all duration-300 hover:shadow-lg group`}>
      <div className={`w-14 h-14 rounded-xl ${c.iconBg} flex items-center justify-center text-2xl mb-5`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-5">{description}</p>
      <ul className="space-y-2 mb-6">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
            <span className={`w-1.5 h-1.5 rounded-full ${c.bullet} shrink-0`} />
            {item}
          </li>
        ))}
      </ul>
      <Link
        to={link}
        className={`inline-flex items-center gap-2 text-sm font-semibold ${c.text} group-hover:gap-3 transition-all`}
      >
        Learn More <HiArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
