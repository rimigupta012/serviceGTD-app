import { useParams, Link } from 'react-router-dom'
import { HiArrowLeft, HiClock, HiTag } from 'react-icons/hi'
import { blogPosts } from '../data/content'

const blogContent: Record<string, string[]> = {
  'post-surgery-care-at-home': [
    'Bringing your parent home after surgery is a moment of mixed emotions. Relief that the operation is over, anxiety about what comes next. As an NRI, this anxiety is multiplied — you might not be able to fly down, or your visit window is limited.',
    'The first 72 hours after surgery are critical. Here\'s what you need to ensure:',
    '**Medication Management:** Create a detailed schedule. Our Care Managers use a digital tracker that sends you alerts when medications are administered. No missed doses, no guesswork.',
    '**Wound Care:** Depending on the surgery, wound care might need trained hands. Don\'t rely on family members who aren\'t trained. A professional nurse can prevent infections and speed recovery.',
    '**Mobility & Physiotherapy:** Early, gentle movement is crucial after most surgeries. Our physiotherapists start with bedside exercises and gradually increase activity. They send you video progress reports.',
    '**Nutrition:** Post-surgery diet is often specific and important. Our nutrition coordinators work with the surgeon\'s dietary guidelines and your parent\'s food preferences to create meal plans that aid recovery.',
    '**Emotional Support:** Surgery takes a toll mentally too. Your parent might feel vulnerable, frustrated, or scared. Our caregivers are trained in emotional first aid — patience, conversation, and reassurance.',
    '**What to Look For (Red Flags):** Fever above 100°F, increased pain, redness/swelling at the wound site, difficulty breathing, or confusion. Our care team monitors these 24/7 and escalates immediately.',
    'The bottom line: post-surgery care at home can be better than hospital recovery — if done right. With the right support system, your parent heals faster, in comfort, surrounded by familiar things.',
  ],
  'choosing-right-caretaker': [
    'Finding the right caretaker for aging parents is one of the most important decisions you\'ll make. It\'s not just about skills — it\'s about chemistry, trust, and cultural fit.',
    '**Quality #1: Genuine Empathy.** You can train skills. You can\'t train compassion. Look for someone who naturally treats elders with warmth, not just professionalism.',
    '**Quality #2: Cultural Understanding.** Your parent might need someone who understands their language, food preferences, religious practices, and social norms. A caretaker from a similar background reduces friction.',
    '**Quality #3: Medical Competence.** Even for non-medical care, basic medical knowledge is essential — recognizing signs of stroke, managing diabetes, handling a fall. Insist on first-aid certification at minimum.',
    '**Quality #4: Patience.** Elderly care requires extraordinary patience. Repetitive questions, slow movements, mood swings — these are normal. The right caretaker handles them with grace.',
    '**Quality #5: Communication Skills.** They need to communicate clearly with your parent, with you, and with medical professionals. Language barriers can be dangerous in emergencies.',
    '**Quality #6: Physical Fitness.** Caregiving is physical work. Lifting, supporting, walking alongside — the caretaker needs to be physically capable of these tasks without risking injury to themselves or your parent.',
    '**Quality #7: Reliability.** Showing up on time, every time. No excuses, no last-minute cancellations. Your parent\'s routine depends on it.',
    '**Red Flags to Watch For:** Reluctance to provide references, gaps in employment history, over-promising, being dismissive of your concerns, or treating your parent like a task rather than a person.',
    'At ServiceGTD, every caretaker goes through our 6-step verification and a 2-week supervised trial period before they\'re assigned to your family.',
  ],
  'nri-guide-managing-parents-health': [
    'Managing your parents\' health from thousands of miles away feels like trying to hold water in your hands. Information slips through, appointments get missed, and you\'re always one time zone away from being helpful.',
    'Here\'s a system that works — built from the experience of 5,000+ NRI families we\'ve served.',
    '**Step 1: Digitize Everything.** Get all medical records scanned and uploaded to a shared drive. Prescriptions, test results, doctor notes — everything. This is your single source of truth.',
    '**Step 2: Build a Local Support Network.** Identify 2-3 trusted local contacts — a neighbor, a relative, a friend. Share their numbers and ensure your parents do too. ServiceGTD can serve as this network if you don\'t have one.',
    '**Step 3: Establish a Doctor Relationship.** Find a primary care physician who understands the NRI dynamic. They should be willing to communicate with you via phone or email after each visit.',
    '**Step 4: Set Up Medication Management.** Use pill organizers, set phone reminders, or better yet, have a caregiver manage medications. Missed medications are the #1 preventable health issue in elderly Indians.',
    '**Step 5: Regular Health Screenings.** Schedule quarterly health check-ups. Full blood work, heart check, eye exam, bone density. Prevention is infinitely cheaper than treatment.',
    '**Step 6: Emergency Preparedness.** Ensure your parents have a laminated card with emergency numbers, allergies, blood type, and medications — kept in their wallet and by the phone.',
    '**Step 7: Stay Emotionally Connected.** Health isn\'t just physical. Daily video calls, sharing photos, including them in your daily life — all of this affects their will to stay healthy.',
    'The key insight: you can\'t be there physically, but you can build a system that works as if you were.',
  ],
  'loneliness-epidemic-indian-elderly': [
    'India has one of the fastest-growing elderly populations in the world. And with an increasing number of children moving abroad for work, a silent epidemic is spreading: loneliness.',
    '**The Numbers Are Alarming:**\n- 40% of elderly Indians live alone or only with a spouse\n- 65% of NRI parents report feeling lonely "often" or "always"\n- Loneliness increases the risk of dementia by 40%\n- Lonely elders have a 26% higher risk of mortality',
    'The cultural shift is real. In a country where the joint family was the norm, nuclear families and NRI migration have left a generation of parents without their traditional support systems.',
    '**Why It Matters:** Loneliness isn\'t just sadness. It\'s a health crisis. Chronic loneliness triggers the same stress response as physical pain. It weakens immunity, raises blood pressure, and accelerates cognitive decline.',
    '**The Signs to Watch For:**\n- Your parent seems to have nothing to share on calls\n- They\'ve stopped going out or meeting friends\n- Changes in eating or sleeping patterns\n- Increased irritability or withdrawal\n- Repeated health complaints that have no medical basis',
    '**What You Can Do From Abroad:**\n1. Schedule regular, predictable call times (not random)\n2. Encourage them to join senior groups or hobby classes\n3. Arrange for a companion — even 2-3 hours a day makes a difference\n4. Send them something to look forward to — gifts, visits, planned activities\n5. Consider professional companionship services',
    'At ServiceGTD, our companionship service isn\'t about filling time. It\'s about genuine human connection — someone who listens, shares, laughs, and cares.',
  ],
  'property-management-nris': [
    'Your family home in India. Your parents\' retirement flat. That plot of land your grandfather bought in 1985. For NRIs, Indian property is both an emotional anchor and a logistical headache.',
    '**Common Property Nightmares NRIs Face:**',
    '**Tenants from Hell.** They seemed nice during the agreement. Now they\'re not paying rent, have subleted to others, and won\'t vacate. And you\'re 8,000 miles away.',
    '**Maintenance Neglect.** That leak you asked your neighbor to get fixed 6 months ago? It\'s now a wall of mold. Empty properties deteriorate fast in Indian weather.',
    '**Documentation Chaos.** Property tax receipts, society maintenance bills, khata certificates, encumbrance certificates — the paperwork never ends, and missing any of it can cause legal headaches.',
    '**Illegal Encroachment.** It happens more than you think. Your vacant land slowly gets encroached upon, and by the time you find out, it\'s a legal battle.',
    '**What Smart NRIs Do:**\n- Assign a Power of Attorney to a trusted person\n- Get monthly photo/video documentation of all properties\n- Maintain all paperwork digitally with regular updates\n- Have a local legal advisor on retainer\n- Conduct surprise inspections periodically',
    'ServiceGTD\'s property management service handles all of this. Monthly photo reports, tenant management, maintenance coordination, tax payments, and legal compliance — all for a fraction of what a missed problem would cost.',
  ],
  'dementia-care-india': [
    'Every 4 seconds, someone in the world develops dementia. India has an estimated 5.3 million people living with dementia, and this number is expected to double by 2030.',
    'For NRI families, a dementia diagnosis for a parent is devastating — not just emotionally, but logistically. How do you ensure safe, dignified care from across the world?',
    '**Understanding the Stages:**\n- **Early Stage:** Forgetfulness, difficulty finding words, getting lost in familiar places. Most people can still live independently with some support.\n- **Middle Stage:** Increased confusion, wandering, personality changes, difficulty with daily tasks. Requires significant daily assistance.\n- **Late Stage:** Complete dependence for all activities. May not recognize family members. Requires round-the-clock care.',
    '**Care Options in India:**\n1. **Home-based care** with trained dementia caregivers (recommended for early-mid stages)\n2. **Day care centers** that offer structured activities and social interaction\n3. **Memory care facilities** for advanced stages\n4. **Combination approach** — home care with day center visits',
    '**What Good Dementia Care Looks Like:**\n- Structured daily routine (reduces anxiety)\n- Memory exercises and cognitive stimulation\n- Physical activity (walking, gentle yoga)\n- Social interaction and music therapy\n- Safe environment (no sharp corners, locked doors)\n- Patient, trained caregivers who never argue or correct',
    '**The NRI Challenge:** You can\'t just hire any caregiver. Dementia care requires specialized training. The caregiver needs to understand that your parent isn\'t being "difficult" — their brain is changing.',
    'ServiceGTD partners with certified dementia care specialists across India. Our care plans are reviewed by geriatric psychiatrists and adjusted as the condition progresses.',
  ],
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy">Post Not Found</h1>
          <Link to="/blog" className="text-primary mt-4 inline-block">Back to Blog</Link>
        </div>
      </div>
    )
  }

  const content = blogContent[slug!] || ['This article is coming soon. Check back later for the full content.']

  return (
    <>
      <section className="gradient-hero py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6 hover:gap-3 transition-all">
            <HiArrowLeft /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs bg-primary-50 text-primary px-3 py-1 rounded-full font-medium flex items-center gap-1">
              <HiTag className="w-3 h-3" /> {post.category}
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <HiClock className="w-3 h-3" /> {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-navy leading-tight">{post.title}</h1>
          <p className="text-gray-500 mt-4">{post.date}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            {content.map((paragraph, i) => (
              <div key={i} className="mb-6">
                {paragraph.split('\n').map((line, j) => (
                  <p key={j} className="text-gray-700 leading-relaxed mb-2">
                    {line.split('**').map((part, k) =>
                      k % 2 === 0 ? part : <strong key={k} className="text-navy">{part}</strong>
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-navy font-serif">Need Help With This?</h3>
            <p className="text-gray-600 mt-2">Our Care Advisors can guide you based on your specific situation.</p>
            <Link
              to="/contact"
              className="mt-4 inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition"
            >
              Talk to an Advisor
            </Link>
          </div>

          {/* Related Posts */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-navy mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {blogPosts.filter((p) => p.slug !== slug).slice(0, 2).map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition">
                  <span className="text-xs text-primary font-medium">{p.category}</span>
                  <h4 className="font-bold text-navy mt-1 text-sm">{p.title}</h4>
                  <p className="text-xs text-gray-500 mt-2">{p.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
