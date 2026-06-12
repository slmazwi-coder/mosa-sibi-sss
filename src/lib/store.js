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
  motto:      'Excellence in Education',
  emis:       '',
  address:    'Mosa Sibi, Eastern Cape, South Africa',
  postal:     '',
  phone:      '000 000 0000',
  cell:       '000 000 0000',
  email:      'info@mosasibisss.edu.za',
  province:   'Eastern Cape',
  district:   '',
  circuit:    '',
  sector:     'Public',
  grades:     'Grade 8 – Grade 12',
  hoursWeek:  '07:30 – 15:30',
  hoursFri:   '07:30 – 13:30',
  coords:     { lat: -31.0, lng: 28.5 },
  facebook:   '#',
  tiktok:     '#',
}

// ── Default data ─────────────────────────────────────────────────────────
const DEFAULT_NEWS = [
  {
    id: '1',
    title: '2027 Admissions Now Open',
    date: '2026-05-01',
    excerpt: 'Applications for Grade 8–12 admission for the 2027 academic year are now open. Three streams available: General, Science, and Commerce.',
    body: 'Mosa Sibi Senior Secondary School is accepting applications for the 2027 academic year. We offer three streams: General Stream (Languages, Tourism, History, Geography, Maths Literacy, L.O), Science Stream (Languages, L.O, Maths, Physics, Life Sciences, Geography/Agriculture), and Commerce Stream (Languages, L.O, Accounting, Business Studies, Economics, Maths/Maths Lit). Contact us for more information.',
    image: '',
    category: 'Admissions',
  },
  {
    id: '2',
    title: 'Matric 2026 Tie Ceremony',
    date: '2026-03-26',
    excerpt: 'The Class of 2026 received their matric ties in a proud ceremony celebrating their journey to Grade 12.',
    body: 'Mosa Sibi SSS celebrated the Class of 2026 with a memorable tie ceremony on 26 March 2026. Learners received their custom-designed matric ties, symbolising their final year of schooling. The event was attended by staff, learners, parents, and community members.',
    image: '/assets/ceremony.jpg',
    category: 'Events',
  },
  {
    id: '3',
    title: 'Community Outreach Program',
    date: '2026-02-15',
    excerpt: 'Mosa Sibi SSS learners participated in a community outreach program benefiting local initiatives.',
    body: 'Our learners engaged in a meaningful community outreach program, demonstrating the strong bond between Mosa Sibi SSS and its surrounding community. We thank all participants for their dedication and service.',
    image: '/assets/campus.jpg',
    category: 'Community',
  },
]

const DEFAULT_ABOUT = {
  history: [
    'Mosa Sibi Senior Secondary School is a public secondary school serving learners from Grade 8 to Grade 12 in the Eastern Cape, South Africa.',
    'The school offers three academic streams — General, Science, and Commerce — preparing learners for the National Senior Certificate (NSC) examinations and further education opportunities.',
    'With our motto "Excellence in Education", Mosa Sibi SSS is committed to academic excellence, community values, and the holistic development of every learner who walks through our doors.',
    'Parents and guardians are encouraged to engage actively with the school through meetings, events, and ongoing learner support. Together we build a culture of achievement and pride.',
  ],
  principal: {
    name: 'The Principal',
    title: 'Principal',
    message: [
      'Welcome to Mosa Sibi Senior Secondary School. We believe every learner carries within them the capacity for greatness. Our role is to unlock it — through discipline, love, and unwavering belief in their potential.',
      'At Mosa Sibi SSS, we value respect, responsibility, and pride in our school community. Our motto — Excellence in Education — inspires us to rise up each day and pursue progress in everything we do.',
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
