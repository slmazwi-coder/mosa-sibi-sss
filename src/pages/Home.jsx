import { Link } from 'react-router-dom'
import { ArrowRight, Award, Target, BookOpen, Users, Bell } from 'lucide-react'
import Hero from '../components/Hero'
import NewsSection from '../components/NewsSection'

const PILLARS = [
  { icon: Award,     title: 'Academic Excellence', desc: 'Comprehensive curriculum preparing learners for NSC examinations and beyond.' },
  { icon: Target,    title: 'Sport & Athletics',   desc: 'Competitive teams in soccer, netball, and athletics at district and regional level.' },
  { icon: BookOpen,  title: 'Learner Support',     desc: 'Grade 12 exam preparation, career guidance, and NSFAS bursary application support.' },
  { icon: Users,     title: 'Community Values',    desc: 'A school rooted in respect, discipline, and pride — First Things First.' },
]

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <NewsSection />

      {/* Tie Ceremony Banner */}
      <section style={{ background: '#0A0F1E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div style={{ background: '#1A4FAD', padding: '2rem', borderRadius: '8px' }}>
              <h2 className="font-display font-black text-xl mb-1" style={{ color: '#fff', textTransform: 'uppercase' }}>Matric Class<br/>of 2026</h2>
              <p style={{ color: '#A8D4F5', fontSize: '0.85rem', fontWeight: 600 }}>Tie Ceremony — A landmark tradition</p>
            </div>
            <div className="text-center">
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5C400', display: 'block', lineHeight: 1 }}>2026</span>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Matric Year</span>
            </div>
            <div className="text-center">
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5C400', display: 'block', lineHeight: 1 }}>100+</span>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Grade 12 Learners</span>
            </div>
            <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.7 }}>
              "The Tie Ceremony marks the moment our Grade 12s step fully into their final year — First Things First."
            </div>
          </div>
        </div>
      </section>

      {/* Notice banners */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                badge: 'Admissions 2027',
                title: 'Applications are now open',
                body:  'Submit your admission application for the 2027 academic year. Limited spaces available — first things first, apply early.',
                to:    '/admissions',
                label: 'Apply now',
              },
              {
                badge: 'Bursary Support',
                title: 'NSFAS & Higher Education Guidance',
                body:  'Our school counsellor assists Matric graduates with NSFAS applications, university registration, and career guidance.',
                to:    '/contact',
                label: 'Learn More',
              },
            ].map(({ badge, title, body, to, label }) => (
              <div key={to} className="card flex gap-4 items-start"
                style={{ borderLeft: '4px solid #1A4FAD' }}>
                <div className="p-2.5 rounded-xl shrink-0" style={{ background: 'rgba(26,79,173,0.1)', color: '#1A4FAD' }}>
                  <Bell size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ background: 'rgba(26,79,173,0.1)', color: '#0F2F72' }}>
                    {badge}
                  </span>
                  <h3 className="font-display font-bold text-lg mb-1" style={{ color: '#0A0F1E' }}>{title}</h3>
                  <p className="text-sm mb-3" style={{ color: '#4b5563' }}>{body}</p>
                  <Link to={to} className="text-sm font-semibold flex items-center gap-1" style={{ color: '#1A4FAD' }}>
                    {label} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-pad" style={{ background: '#EBF4FD' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="gold-bar mx-auto" />
            <h2 className="section-title">Why Mosa Sibi SSS?</h2>
            <p className="mt-3 max-w-xl mx-auto text-sm" style={{ color: '#4b5563' }}>
              A school where every learner is seen, valued, and challenged to reach their full potential.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card text-center">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(26,79,173,0.1)', color: '#1A4FAD' }}>
                  <Icon size={24} />
                </div>
                <h3 className="font-display font-bold mb-2" style={{ color: '#0A0F1E' }}>{title}</h3>
                <p className="text-sm" style={{ color: '#4b5563' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Info */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="gold-bar" />
              <h2 className="section-title">About Our School</h2>
              <p style={{ color: '#2a3550', lineHeight: 1.85, marginBottom: '1rem' }}>
                Mosa Sibi Senior Secondary School is a public senior secondary school located in <strong style={{ color: '#1A4FAD' }}>Maluti, Eastern Cape</strong>, serving learners in the <strong style={{ color: '#1A4FAD' }}>Alfred Nzo West Education District</strong>.
              </p>
              <p style={{ color: '#2a3550', lineHeight: 1.85, marginBottom: '1rem' }}>
                Our dual motto — <strong style={{ color: '#1A4FAD' }}>"First Things First"</strong> and <strong style={{ color: '#1A4FAD' }}>"Thuto ke Lesedi"</strong> (Education is Light) — defines our purpose. We believe that when learners prioritise education above all else, they unlock futures of limitless possibility.
              </p>
              <p style={{ color: '#2a3550', lineHeight: 1.85 }}>
                As a <strong style={{ color: '#1A4FAD' }}>No-Fee Public School</strong>, we are accessible to all qualifying learners in the district and surrounding areas.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ background: '#1A4FAD', borderRadius: '10px', padding: '1.2rem', textAlign: 'center', color: '#fff' }}>
                  <span style={{ fontWeight: 900, fontSize: '1.7rem', display: 'block', color: '#F5C400' }}>8–12</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.85, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Grades</span>
                </div>
                <div style={{ background: '#1A4FAD', borderRadius: '10px', padding: '1.2rem', textAlign: 'center', color: '#fff' }}>
                  <span style={{ fontWeight: 900, fontSize: '1.7rem', display: 'block', color: '#F5C400' }}>ANW</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.85, letterSpacing: '0.08em', textTransform: 'uppercase' }}>District</span>
                </div>
                <div style={{ background: '#1A4FAD', borderRadius: '10px', padding: '1.2rem', textAlign: 'center', color: '#fff' }}>
                  <span style={{ fontWeight: 900, fontSize: '1.7rem', display: 'block', color: '#F5C400' }}>EC</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, opacity: 0.85, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Province</span>
                </div>
              </div>
            </div>
            <div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', background: '#EBF4FD', borderRadius: '12px', overflow: 'hidden' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(26,79,173,0.1)' }}><td style={{ padding: '0.7rem 1rem', color: '#7a8baa', fontWeight: 600, width: '45%', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.07em' }}>School Name</td><td style={{ padding: '0.7rem 1rem', fontWeight: 700, color: '#1A4FAD' }}>Mosa Sibi Senior Secondary School</td></tr>
                  <tr style={{ borderBottom: '1px solid rgba(26,79,173,0.1)' }}><td style={{ padding: '0.7rem 1rem', color: '#7a8baa', fontWeight: 600, width: '45%', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.07em' }}>Type</td><td style={{ padding: '0.7rem 1rem', fontWeight: 700, color: '#1A4FAD' }}>Public Senior Secondary</td></tr>
                  <tr style={{ borderBottom: '1px solid rgba(26,79,173,0.1)' }}><td style={{ padding: '0.7rem 1rem', color: '#7a8baa', fontWeight: 600, width: '45%', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.07em' }}>Grades</td><td style={{ padding: '0.7rem 1rem', fontWeight: 700, color: '#1A4FAD' }}>Grade 8 – Grade 12</td></tr>
                  <tr style={{ borderBottom: '1px solid rgba(26,79,173,0.1)' }}><td style={{ padding: '0.7rem 1rem', color: '#7a8baa', fontWeight: 600, width: '45%', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.07em' }}>Postal Address</td><td style={{ padding: '0.7rem 1rem', fontWeight: 700, color: '#1A4FAD' }}>P.O. Box 25, Maluti, 4740</td></tr>
                  <tr style={{ borderBottom: '1px solid rgba(26,79,173,0.1)' }}><td style={{ padding: '0.7rem 1rem', color: '#7a8baa', fontWeight: 600, width: '45%', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.07em' }}>District</td><td style={{ padding: '0.7rem 1rem', fontWeight: 700, color: '#1A4FAD' }}>Alfred Nzo West Education District</td></tr>
                  <tr style={{ borderBottom: '1px solid rgba(26,79,173,0.1)' }}><td style={{ padding: '0.7rem 1rem', color: '#7a8baa', fontWeight: 600, width: '45%', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.07em' }}>Fee Status</td><td style={{ padding: '0.7rem 1rem', fontWeight: 700, color: '#1A4FAD' }}>No-Fee Public School</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Motto CTA */}
      <section style={{ background: '#071A45', borderTop: '4px solid #F5C400', borderBottom: '4px solid #F5C400' }}>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="font-display font-black text-3xl sm:text-4xl mb-2" style={{ color: '#F5C400' }}>
            "First Things First"
          </p>
          <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>
            Thuto ke Lesedi — Education is Light
          </p>
          <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            When you put first things first — when you choose the book over distraction, the future over the moment — the sun of knowledge will shine for you.
          </p>
          <Link to="/admissions" className="btn-primary text-base px-8 py-3">
            Start Your Application <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
