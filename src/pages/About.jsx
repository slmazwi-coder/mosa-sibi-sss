import { useEffect, useState } from 'react'
import { getAbout } from '../lib/store'

export default function About() {
  const [data, setData] = useState(null)
  useEffect(() => { setData(getAbout()) }, [])
  if (!data) return null

  return (
    <main className="flex-1 section-pad" style={{ background: '#FFFDF5' }}>
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
            <h2 className="font-display font-bold text-2xl mb-6" style={{ color: '#1B5E20' }}>Our School</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
              {data.history.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          {/* Quick facts */}
          <div className="card p-8" style={{ background: '#6B2D15' }}>
            <h3 className="font-display font-bold text-xl mb-6" style={{ color: '#DAA520' }}>School at a Glance</h3>
            <dl className="space-y-4">
              {[
                ['Phase',       'Secondary (Grades 8–12)'],
                ['Sector',      'Public School'],
                ['Province',    'Eastern Cape'],
                ['Streams',     'General, Science, Commerce'],
                ['Address',     'Colana, Eastern Cape'],
                ['Phone',       '078 671 7415'],
                ['Email',       'onkenoleen@gmail.com'],
                ['School Hours','Mon–Thu 07:30–15:30 · Fri 07:30–13:30'],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-xs font-bold uppercase tracking-widest w-28 shrink-0 mb-0.5 sm:mb-0 pt-0.5"
                    style={{ color: 'rgba(218,165,32,0.6)' }}>{label}</dt>
                  <dd className="text-sm" style={{ color: '#FFD966' }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Uniform */}
        <div className="mb-20">
          <h2 className="font-display font-bold text-2xl mb-6" style={{ color: '#1B5E20' }}>School Uniform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card" style={{ borderLeft: '4px solid #DAA520' }}>
              <h3 className="font-display font-bold text-lg mb-3" style={{ color: '#1B5E20' }}>Girls</h3>
              <p className="text-sm" style={{ color: '#374151' }}>
                Maroon pleated skirt, maroon V-neck jersey with gold and yellow trim stripes, light blue collared shirt, white socks, black school shoes.
              </p>
            </div>
            <div className="card" style={{ borderLeft: '4px solid #DAA520' }}>
              <h3 className="font-display font-bold text-lg mb-3" style={{ color: '#1B5E20' }}>Boys</h3>
              <p className="text-sm" style={{ color: '#374151' }}>
                Dark trousers (black/charcoal), light blue collared shirt, maroon jersey/blazer with gold trim, school tie.
              </p>
            </div>
          </div>
        </div>

        {/* Principal */}
        <div style={{ background: '#FDF5E6', border: '1px solid rgba(107,45,21,0.15)', borderRadius: '1.25rem', overflow: 'hidden' }}>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center p-10 text-center"
              style={{ background: '#6B2D15', borderRight: '3px solid #DAA520' }}>
              <div className="w-24 h-24 rounded-full mb-4 flex items-center justify-center font-display font-black text-3xl"
                style={{ background: '#DAA520', color: '#1B5E20' }}>
                {data.principal.name.split(' ').filter(w => w.length > 1).slice(0,2).map(w => w[0]).join('')}
              </div>
              <p className="font-display font-bold text-lg" style={{ color: '#DAA520' }}>{data.principal.name}</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(218,165,32,0.6)' }}>{data.principal.title}</p>
            </div>
            <div className="col-span-2 p-8 md:p-12 flex flex-col justify-center">
              <div className="font-display text-5xl leading-none mb-4 opacity-30 select-none" style={{ color: '#DAA520' }}>"</div>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
                {data.principal.message.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="font-display text-5xl leading-none mt-2 text-right opacity-30 select-none" style={{ color: '#DAA520' }}>"</div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
