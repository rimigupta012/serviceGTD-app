import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { blogPosts } from '../data/content'

const categoryColors: Record<string, string> = {
  'Care Guide': 'bg-primary-50 text-primary',
  'Guide': 'bg-teal-50 text-teal',
  'NRI Guide': 'bg-warm text-saffron',
  'Awareness': 'bg-red-50 text-red-600',
  'Health': 'bg-green-50 text-green-700',
}

export default function Blog() {
  return (
    <>
      <section className="gradient-hero py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            badge="Blog & Resources"
            title="Guides, Stories & Insights for NRI Families"
            subtitle="Practical advice for caring for your parents from abroad. Written by experts, reviewed by families."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary-50 to-teal-50 flex items-center justify-center">
                  <span className="text-6xl opacity-30">
                    {post.image === 'surgery' ? '🏥' : post.image === 'caretaker' ? '👩‍⚕️' : post.image === 'health' ? '💊' : post.image === 'loneliness' ? '🪑' : post.image === 'property' ? '🏘️' : '🧠'}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy group-hover:text-primary transition">{post.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{post.excerpt}</p>
                  <p className="text-xs text-gray-400 mt-4">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-primary-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-serif text-navy">Want These Articles in Your Inbox?</h2>
          <p className="text-gray-600 mt-2">Weekly care tips, NRI guides, and emotional support — curated for families like yours.</p>
          <form className="mt-6 flex max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your.email@abroad.com"
              className="flex-1 px-5 py-3 rounded-l-full border border-gray-300 focus:outline-none focus:border-primary"
            />
            <button className="px-6 py-3 bg-primary text-white font-semibold rounded-r-full hover:bg-primary-dark transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
