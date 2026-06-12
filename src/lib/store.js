// ── Storage helpers ────────────────────────────────────────────────────────
const get = (key, fallback) => {
  try {
    const raw = localStorage.getItem(`mss_${key}`)
    return raw ? JSON.parse(raw) : fallback
  } catch { return fallback }
}

const set = (key, value) => {
  try { localStorage.setItem(`mss_${key}`, JSON.stringify(value)) } catch {}
}

// ── School constants ────────────────────────────────────────────────────────
export const SCHOOL = {
  name:       'Mosa Sibi Senior Secondary School',
  short:      'Mosa Sibi SSS',
  motto:      'First Things First',
  tagline:    'Thuto ke Lesedi',
  emis:       '',
  address:    'Maluti, Eastern Cape, 4740',
  postal:     'P.O. Box 25, Maluti, 4740',
  phone:      '',
  cell:       '',
  email:      '',
  province:   'Eastern Cape',
  district:   'Alfred Nzo West Education District',
  circuit:    '',
  sector:     'Public',
  feeStatus:  'No-Fee Public School',
  grades:     'Grade 8 – Grade 12',
  hoursWeek:  '07:30 – 15:30',
  hoursFri:   '07:30 – 13:30',
  coords:     { lat: -30.8, lng: 28.5 },
  facebook:   '#',
  tiktok:     '#',
}

// ── Default data ─────────────────────────────────────────────────────────
const DEFAULT_NEWS = [
  {
    id: '1',
    title: 'Tie Ceremony — Matric Class of 2026',
    date: '2026',
    excerpt: 'The annual Tie Ceremony marked the formal start of the Grade 12 journey for the Class of 2026. Learners received their Matric 2026 ties in a vibrant celebration of commitment, pride, and purpose.',
    body: 'The Tie Ceremony is our beloved annual tradition where Grade 12 learners receive their Matric 2026 ties. It marks the formal beginning of their final year — a celebration of commitment and pride! First Things First.',
    image: '/assets/ceremony.jpg',
    category: 'Tradition',
  },
  {
    id: '2',
    title: '2027 Grade 8 Registration Now Open',
    date: 'June 2026',
    excerpt: 'Applications for Grade 8 enrolment for the 2027 academic year are now open. Visit the school admin office with all required documents. Spaces are limited — first things first, apply early.',
    body: 'Applications for Grade 8 enrolment for the 2027 academic year are now open. Visit the school admin office with all required documents. Spaces are limited — first things first, apply early.',
    image: '',
    category: 'Admissions',
  },
  {
    id: '3',
    title: 'Bursary & Higher Education Support for Graduates',
    date: 'May 2026',
    excerpt: 'Our school counsellor is available to assist Matric graduates with NSFAS applications, bursary searches, university registration, and career guidance. Thuto ke Lesedi — education is light.',
    body: 'Our school counsellor helps Grade 12 learners with NSFAS applications, bursaries, university registrations, and career guidance. Thuto ke Lesedi — education opens every door!',
    image: '/assets/campus.jpg',
    category: 'Opportunities',
  },
]

const DEFAULT_ABOUT = {
  history: [
    'Mosa Sibi Senior Secondary School is a public senior secondary school located in Maluti, Eastern Cape, serving learners in the Alfred Nzo West Education District.',
    'Our dual motto — "First Things First" and "Thuto ke Lesedi" (Education is Light) — defines our purpose. We believe that when learners prioritise education above all else, they unlock futures of limitless possibility.',
    'Known for our vibrant school community, strong academic culture, and distinctive royal blue identity, Mosa Sibi nurtures confident, principled graduates who are ready to lead and serve.',
    'As a No-Fee Public School, we are accessible to all qualifying learners in the district and surrounding areas.',
  ],
  principal: {
    name: 'The Principal',
    title: 'School Leadership',
    message: [
      'Our crest is a statement of purpose — a radiant sun above an open book, framed in royal blue. It reminds every learner: education is your light, and first things must always come first.',
      'When you put first things first — when you choose the book over distraction, the future over the moment — the sun of knowledge will shine for you.',
    ],
  },
}

const DEFAULT_RESULTS = {
  '2025': {
    passRate: 0,
    bachelors: 0,
    bachelorRate: 0,
    distinctions: 0,
    wrote: 0,
    subjects: [],
  },
  '2024': { passRate: 0, bachelors: 0, bachelorRate: 0, distinctions: 0, wrote: 0, subjects: [] },
  '2023': { passRate: 0, bachelors: 0, bachelorRate: 0, distinctions: 0, wrote: 0, subjects: [] },
}

const DEFAULT_ACTIVITIES = [
  { id: '1', name: 'Soccer',    category: 'Sport',    description: 'Boys and girls teams competing at district and regional level.',      image: '' },
  { id: '2', name: 'Netball',   category: 'Sport',    description: 'Competitive teams across all age groups.',                           image: '' },
  { id: '3', name: 'Athletics', category: 'Sport',    description: 'Track and field development and inter-district competition.',         image: '' },
  { id: '4', name: 'Debating',  category: 'Academic', description: 'Building critical thinking and public speaking skills.',              image: '' },
  { id: '5', name: 'Spelling Bee', category: 'Academic', description: 'Language enrichment and vocabulary building.',                    image: '' },
  { id: '6', name: 'Choir',     category: 'Culture',  description: 'Celebrating our heritage through choral music.',                     image: '' },
  { id: '7', name: 'Drama',     category: 'Culture',  description: 'Performances celebrating culture, language, and community.',         image: '' },
]

const DEFAULT_HALL = [
  { id: '1', name: 'Top Achiever', title: 'Best Matric Learner', year: '2025', desc: '', image: '' },
  { id: '2', name: 'Top Achiever', title: '2nd Best Matric Learner', year: '2025', desc: '', image: '' },
  { id: '3', name: 'Top Achiever', title: '3rd Best Matric Learner', year: '2025', desc: '', image: '' },
]

const DEFAULT_CONTACT = {
  address: SCHOOL.address,
  postal:  SCHOOL.postal,
  phone:   SCHOOL.phone,
  cell:    SCHOOL.cell,
  email:   SCHOOL.email,
  monThu:  '07:30 – 15:30',
  friday:  '07:30 – 13:30',
  hoursWeek: SCHOOL.hoursWeek,
  hoursFri:  SCHOOL.hoursFri,
}

// ── Getters / Setters ───────────────────────────────────────────────────────
export const getNews       = ()      => get('news',       DEFAULT_NEWS)
export const setNews       = (v)     => set('news',       v)
export const getAbout      = ()      => get('about',      DEFAULT_ABOUT)
export const setAbout      = (v)     => set('about',      v)
export const getActivities = ()      => get('activities', DEFAULT_ACTIVITIES)
export const setActivities = (v)     => set('activities', v)
export const getHallOfFame = ()      => get('hall',       DEFAULT_HALL)
export const setHallOfFame = (v)     => set('hall',       v)
export const getContact    = ()      => get('contact',    DEFAULT_CONTACT)
export const setContact    = (v)     => set('contact',    v)
export const getDocuments  = ()      => get('documents',  [])
export const setDocuments  = (v)     => set('documents',  v)
export const getApplications = ()   => get('applications', [])
export const setApplications = (v)  => set('applications', v)
export const getResultsByYear = (y)  => get(`results_${y}`, DEFAULT_RESULTS[y] || null)
export const setResultsByYear = (y, v) => set(`results_${y}`, v)
export const getAchievers = (y)      => get(`achievers_${y}`, [])
export const setAchievers = (y, v)   => set(`achievers_${y}`, v)

// ── Auth ────────────────────────────────────────────────────────────
export const isAuthenticated = () => localStorage.getItem('mss_auth') === 'true'
export const login  = (pw) => { if (pw === 'admin2026') { localStorage.setItem('mss_auth', 'true'); return true } return false }
export const logout = ()   => localStorage.removeItem('mss_auth')

// ── IDs ────────────────────────────────────────────────────────────
export const generateId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`

export const generateStudentNumber = (year) => {
  const key = `mss_ctr_${year}`
  const n = Number(localStorage.getItem(key) || 0) + 1
  localStorage.setItem(key, String(n))
  return `${year}-${String(n).padStart(6, '0')}`
}

export const calcAvg = (marks = []) => {
  if (!marks.length) return 0
  return Math.round((marks.reduce((s, m) => s + (m.mark || 0), 0) / marks.length) * 10) / 10
}
