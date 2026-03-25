import ServiceCard from '../components/ServiceCard'
import ServicesPageTitle from '../components/ServicesPageTitle'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const services = [
  {
    slug: 'api-marketing',
    title: 'API Marketing & Global Commercial Representation',
    intro: 'ENSA Pharma acts as a strategic commercial partner for Active Pharmaceutical Ingredient (API) manufacturers seeking to expand their presence in international markets.',
    bullets: [
      'Global industry network for buyer identification',
      'Commercial partnership facilitation',
      'Long-term supply agreement support',
      'International market access strategies',
      'Focus on production excellence while expanding market reach'
    ],
    expansion: [
      'Connecting API manufacturers with reliable international partners',
      'Strengthening market access across regulated and emerging markets',
      'Supporting formulation manufacturers and distributors partnerships'
    ]
  },
  {
    slug: 'in-licensing',
    title: 'In-Licensing Strategy',
    intro: 'ENSA Pharma assists pharmaceutical companies in identifying and acquiring high-value product dossiers and formulation technologies that align with their regulatory and commercial objectives.',
    bullets: [
      'High-value product dossier identification',
      'Formulation technology evaluation',
      'Regulatory feasibility assessment',
      'Licensing partnership structuring',
      'Faster market entry and portfolio expansion support'
    ],
    expansion: [
      'Ready-to-commercialize pharmaceutical products access',
      'Structured in-licensing strategies',
      'Regulatory and commercial objective alignment'
    ]
  },
  {
    slug: 'out-licensing',
    title: 'Out-Licensing & Product Monetization',
    intro: 'For pharmaceutical companies that hold valuable products, dossiers, or proprietary technologies, ENSA Pharma facilitates global out-licensing partnerships that convert pharmaceutical assets into international revenue opportunities.',
    bullets: [
      'Global out-licensing partnership facilitation',
      'Distribution partner identification',
      'Marketing authorization holder connections',
      'Regional commercialization partner matching',
      'International revenue opportunity maximization'
    ],
    expansion: [
      'Multi-market partner identification',
      'Product portfolio commercial value optimization',
      'Global market presence expansion strategies'
    ]
  },
  {
    slug: 'pharma-mna',
    title: 'Pharma Mergers & Acquisitions Advisory',
    intro: 'ENSA Pharma provides strategic advisory and transaction support for mergers, acquisitions, and business divestments within the pharmaceutical sector.',
    bullets: [
      'Strategic advisory for pharmaceutical M&A transactions',
      'High-value pharmaceutical asset identification',
      'Transaction structuring for long-term growth',
      'Investor and company support services',
      'Confidential deal facilitation'
    ],
    expansion: [
      'API manufacturing facilities transactions',
      'Finished formulation company acquisitions',
      'Contract Research Organizations (CROs) deals',
      'Analytical laboratory investments and divestments'
    ]
  },
  {
    slug: 'babe-site',
    title: 'BA/BE Site Representation',
    intro: 'ENSA Pharma represents Bioavailability (BA) and Bioequivalence (BE) centers and connects them with pharmaceutical sponsors seeking reliable partners for regulatory studies.',
    bullets: [
      'BA/BE center representation services',
      'Pharmaceutical sponsor connections',
      'Regulatory study partner alignment',
      'Multi-market regulatory submission support',
      'Clinical research organization collaboration'
    ],
    expansion: [
      'Qualified BA/BE facility identification',
      'Consistent study pipeline development',
      'Global sponsor network expansion for CROs and BA/BE centers'
    ]
  },
  {
    slug: 'capital-advisory',
    title: 'Fundraising & Capital Advisory',
    intro: 'ENSA Pharma supports pharmaceutical companies in preparing for investment and securing growth capital through structured financial advisory.',
    bullets: [
      'Investment readiness preparation',
      'Growth capital securing strategies',
      'Structured financial advisory services',
      'Strategic investor connections',
      'Private equity and institutional partner access'
    ],
    expansion: [
      'Growth-stage pharmaceutical company support',
      'Strategic investor and private equity fund connections',
      'International expansion and innovation acceleration funding',
      'Institutional partnership facilitation'
    ]
  }
]

function ServicesPage() {
  const [params] = useSearchParams()
  const requested = params.get('s') || ''
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!requested) return
    const el = document.querySelector<HTMLElement>(`[data-slug="${requested}"]`)
    if (el) {
      const navbarHeight = 80 // Approximate navbar height
      const offset = el.offsetTop - navbarHeight - 20 // 20px extra spacing
      window.scrollTo({ behavior: 'smooth', top: offset })
      
      // Use setTimeout to avoid synchronous setState in effect
      const setActiveTimeout = setTimeout(() => setActive(requested), 0)
      const clearActiveTimeout = setTimeout(() => setActive(null), 2500)
      
      return () => {
        clearTimeout(setActiveTimeout)
        clearTimeout(clearActiveTimeout)
      }
    }
  }, [requested])

  return (
    <>
      <ServicesPageTitle subtitle="Large service windows with institutional presentation and clear scope.">
        <div className="services-page-grid" style={{ gap: 18 }}>
          {services.map((s) => (
            <div
              key={s.title}
              id={`service-${s.slug}`}
              data-slug={s.slug}
              className={`panel service-panel ${active === s.slug ? 'targeted' : ''}`}
              style={{ padding: 18 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ fontSize: 20, fontWeight: 800, color:'#1e82c9' }}>{s.title}</div>
                <span className="badge">Service</span>
              </div>
              <div className="muted" style={{ marginBottom: 10 }}>{s.intro}</div>
              <ServiceCard title="Scope" bullets={s.bullets} />
              {s.expansion && s.expansion.length > 0 && (
                <div className="services-page-card" style={{ padding: 18, marginTop: 12 }}>
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>Expansion</div>
                  <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-dim)' }}>
                    {s.expansion.map((e) => <li key={e} style={{ margin: '6px 0' }}>{e}</li>)}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </ServicesPageTitle>
    </>
  )
}

export default ServicesPage
