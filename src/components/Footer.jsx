import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook } from 'lucide-react'
import { SCHOOL } from '../lib/store'

export default function Footer() {
  return (
    <footer style={{ background: '#071A45', borderTop: '4px solid #F5C400' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/assets/Copilot_20260616_195155.png"
                alt="Mosa Sibi SSS Logo"
                className="w-14 h-14 rounded-lg object-contain shrink-0"
              />
              <div>
                <p className="font-display text-xl font-bold leading-tight" style={{ color: '#ffffff' }}>
                  Mosa Sibi SSS
                </p>
                <p className="text-xs italic leading-tight mt-0.5" style={{ color: '#F5C400' }}>
                  {SCHOOL.motto} · {SCHOOL.tagline}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href={SCHOOL.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.1)', color: '#F5C400' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F5C400'; e.currentTarget.style.color = '#071A45' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#F5C400' }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#4DA6E8', borderBottom: '1px solid rgba(77,166,232,0.2)', paddingBottom: '0.5rem' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {[
                ['About',      '/about'],
                ['Academics',  '/academics'],
                ['Facilities', '/facilities'],
                ['Admissions', '/admissions'],
                ['News',       '/news'],
                ['Contact',    '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-amber-300 transition-colors"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#F5C400' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#4DA6E8', borderBottom: '1px solid rgba(77,166,232,0.2)', paddingBottom: '0.5rem' }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>Maluti, Eastern Cape, 4740</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="shrink-0" />
                <span>Contact school office</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="shrink-0" />
                <span className="break-all">P.O. Box 25, Maluti, 4740</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#4DA6E8', borderBottom: '1px solid rgba(77,166,232,0.2)', paddingBottom: '0.5rem' }}>
              School Info
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <li>Grades 8 – 12</li>
              <li>No-Fee Public School</li>
              <li>Alfred Nzo West District</li>
              <li style={{ marginTop: '0.8rem', color: '#4DA6E8', fontWeight: 700 }}>Matric Class of 2026 🎗️</li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>
          <p>&copy; {new Date().getFullYear()} Mosa Sibi Senior Secondary School. All Rights Reserved.</p>
          <p>Alfred Nzo West Education District, Eastern Cape</p>
        </div>

      </div>
    </footer>
  )
}
