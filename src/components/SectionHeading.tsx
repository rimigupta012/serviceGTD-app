interface Props {
  badge?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeading({ badge, title, subtitle, center = true, light = false }: Props) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 ${light ? 'bg-white/20 text-white' : 'bg-primary-50 text-primary'}`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
