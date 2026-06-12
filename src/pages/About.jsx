import { useEffect, useState } from 'react'
import { getAbout } from '../lib/store'

export default function About() {
  const [data, setData] = useState(null)
  useEffect(() => { setData(getAbout()) }, [])
  if (!data) return null

  return (
    <main className="flex-1 section-pad" style={{ background: '#EBF4FD' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="gold-bar" />
        <h1 className="section-title mb-12">About Mosa Sibi SSS</h1>

        {/* Campus image */}
        <div className="mb-12 rounded-2xl overflow-hidden" style={{ maxHeight: '400px' }}>
          <img
            src="/assets/campus.jpg"
            alt="Mosa Sibi SSS Campus"
            className="w-full h-full object-cover"
          />
        </div>

        {/* History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h2 className="font-display font-bold text-2xl mb-6" style={{ color: '#0A0F1E' }}>Our School</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: '#2a3550' }}>
              <p>Mosa Sibi Senior Secondary School is a public senior secondary school located in <strong style={{ color: '#1A4FAD' }}>Maluti, Eastern Cape</strong>, serving learners in the <strong style={{ color: '#1A4FAD' }}>Alfred Nzo West Education District</strong>.</p>
              <p>Our dual motto — <strong style={{ color: '#1A4FAD' }}>"First Things First"</strong> and <strong style={{ color: '#1A4FAD' }}>"Thuto ke Lesedi"</strong> (Education is Light) — defines our purpose. We believe that when learners prioritise education above all else, they unlock futures of limitless possibility.</p>
              <p>Known for our vibrant school community, strong academic culture, and distinctive royal blue identity, Mosa Sibi nurtures confident, principled graduates who are ready to lead and serve.</p>
            </div>
          </div>

          {/* Quick facts */}
          <div className="card p-8" style={{ background: '#071A45' }}>
            <h3 className="font-display font-bold text-xl mb-6" style={{ color: '#F5C400' }}>School at a Glance</h3>
            <dl className="space-y-4">
              {[
                ['Phase',       'Secondary (Grades 8–12)'],
                ['Sector',      'Public School - No-Fee'],
                ['Province',    'Eastern Cape'],
                ['District',    'Alfred Nzo West'],
                ['Location',    'Maluti, 4740'],
                ['Postal',      'P.O. Box 25, Maluti, 4740'],
                ['Motto',       '"First Things First"'],
                ['Tagline',     'Thuto ke Lesedi'],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-xs font-bold uppercase tracking-widest w-28 shrink-0 mb-0.5 sm:mb-0 pt-0.5"
                    style={{ color: 'rgba(77,166,232,0.6)' }}>{label}</dt>
                  <dd className="text-sm" style={{ color: '#ffffff' }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Uniform */}
        <div className="mb-20">
          <h2 className="font-display font-bold text-2xl mb-6" style={{ color: '#0A0F1E' }}>School Colours & Uniform</h2>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: '#1A4FAD', border: '3px solid rgba(0,0,0,0.1)' }}></div>
              <div><strong style={{ fontSize: '0.85rem', fontWeight: 700 }}>Royal Blue</strong><span style={{ fontSize: '0.75rem', color: '#888' }}> #1A4FAD</span></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: '#4DA6E8', border: '3px solid rgba(0,0,0,0.1)' }}></div>
              <div><strong style={{ fontSize: '0.85rem', fontWeight: 700 }}>Sky Blue</strong><span style={{ fontSize: '0.75rem', color: '#888' }}> #4DA6E8</span></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: '#F5C400', border: '3px solid rgba(0,0,0,0.1)' }}></div>
              <div><strong style={{ fontSize: '0.85rem', fontWeight: 700 }}>Golden Sun</strong><span style={{ fontSize: '0.75rem', color: '#888' }}> #F5C400</span></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card" style={{ borderLeft: '4px solid #1A4FAD' }}>
              <h3 className="font-display font-bold text-lg mb-3" style={{ color: '#0A0F1E' }}>Formal Uniform</h3>
              <p className="text-sm" style={{ color: '#2a3550' }}>
                Royal blue blazer with embroidered school crest, sky blue formal shirt, royal/sky blue tie, grey formal trousers or skirt, black formal shoes.
              </p>
            </div>
            <div className="card" style={{ borderLeft: '4px solid #1A4FAD' }}>
              <h3 className="font-display font-bold text-lg mb-3" style={{ color: '#0A0F1E' }}>Matric 2026 Tie</h3>
              <p className="text-sm" style={{ color: '#2a3550' }}>
                Grade 12s receive their special Matric 2026 tie at the annual Tie Ceremony — a landmark tradition marking the start of their final year.
              </p>
            </div>
          </div>
        </div>

        {/* Principal */}
        <div style={{ background: '#F2F8FE', border: '1px solid rgba(26,79,173,0.15)', borderRadius: '1.25rem', overflow: 'hidden' }}>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center p-10 text-center"
              style={{ background: '#1A4FAD', borderRight: '3px solid #F5C400' }}>
              <div className="w-24 h-24 rounded-full mb-4 flex items-center justify-center font-display font-black text-3xl"
                style={{ background: '#F5C400', color: '#071A45' }}>
                P
              </div>
              <p className="font-display font-bold text-lg" style={{ color: '#ffffff' }}>The Principal</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>School Leadership</p>
            </div>
            <div className="col-span-2 p-8 md:p-12 flex flex-col justify-center">
              <div className="font-display text-5xl leading-none mb-4 opacity-30 select-none" style={{ color: '#1A4FAD' }}>"</div>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#2a3550' }}>
                <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Our crest is a statement of purpose — a radiant sun above an open book, framed in royal blue. It reminds every learner: education is your light, and first things must always come first.</p>
                <p>When you put first things first — when you choose the book over distraction, the future over the moment — the sun of knowledge will shine for you.</p>
              </div>
              <div className="font-display text-5xl leading-none mt-2 text-right opacity-30 select-none" style={{ color: '#1A4FAD' }}>"</div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
