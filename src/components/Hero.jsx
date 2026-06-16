import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const SLIDES = [
  { caption: 'First Things First',             sub: 'Thuto ke Lesedi — Education is Light' },
  { caption: 'Matric Class of 2026',          sub: 'Tie Ceremony — A Landmark Tradition' },
  { caption: 'Alfred Nzo West District',       sub: 'Maluti, Eastern Cape' },
  { caption: 'No-Fee Public School',           sub: 'Grades 8 – 12' },
  { caption: 'Admissions Open',               sub: 'Apply now for 2027' },
]

const STATS = [
  { value: 'Grade 8–12', label: 'Full Secondary' },
  { value: 'ANW District', label: 'Alfred Nzo West' },
  { value: 'No-Fee',       label: 'Public School' },
  { value: 'EC',           label: 'Eastern Cape' },
]

export default function Hero() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), 5500)
    return () => clearInterval(t)
  }, [])

  const prev = () => setIdx(i => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setIdx(i => (i + 1) % SLIDES.length)

  return (
    <section className="relative overflow-hidden diagonal-strip" style={{ minHeight: '88vh', background: 'linear-gradient(160deg, #071A45 0%, #1A4FAD 55%, #4DA6E8 100%)' }}>

      <div className="absolute inset-0">
        <img
          src="/assets/FB_IMG_1780831401512.jpg"
          alt="Mosa Sibi SSS Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(7,26,69,0.82)' }} />
      </div>

      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #F5C400 0, #F5C400 1px, transparent 0, transparent 50%)',
        backgroundSize: '32px 32px',
      }} />

      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: '#F5C400' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center" style={{ minHeight: '78vh' }}>
        <div className="max-w-3xl pt-16 pb-8">

          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-6 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(245,196,0,0.15)', color: '#F5C400', border: '1px solid rgba(245,196,0,0.3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#F5C400' }} />
            {SLIDES[idx].sub}
          </div>

          <h1 className="font-display font-black mb-6 fade-up" style={{
            fontSize: 'clamp(2.25rem, 6vw, 4rem)',
            color: '#ffffff',
            lineHeight: 1.1,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}>
            {SLIDES[idx].caption}
          </h1>

          <p className="text-lg mb-8 max-w-xl delay-1 fade-up" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            Mosa Sibi Senior Secondary School — Maluti, Eastern Cape
          </p>

          <div className="flex flex-wrap gap-3 delay-2 fade-up">
            <Link to="/admissions" className="btn-primary">
              Apply Now <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-outline">
              About Us
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#F5C400' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
            aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="rounded-full transition-all"
                style={{
                  width: i === idx ? '24px' : '8px',
                  height: '8px',
                  background: i === idx ? '#F5C400' : 'rgba(255,255,255,0.3)',
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#F5C400' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
            aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative z-10" style={{ background: 'rgba(0,0,0,0.25)', borderTop: '1px solid rgba(245,196,0,0.2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {STATS.map(({ value, label }, i) => (
              <div
                key={i}
                className="py-5 px-4 text-center"
                style={{ borderRight: i < 3 ? '1px solid rgba(245,196,0,0.15)' : 'none' }}
              >
                <p className="font-display font-black text-2xl sm:text-3xl" style={{ color: '#F5C400' }}>{value}</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
