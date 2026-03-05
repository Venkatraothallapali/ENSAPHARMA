import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const services = [
  {
    slug: 'api-marketing',
    title: 'API Marketing',
    intro: 'Primary focus area aligning regulatory readiness with commercial access across regulated markets.',
    bullets: [
      'CEP & DMF-Based Buyer Identification',
      'Regulated Market Commercialization Strategy',
      'Territory-Based Representation',
      'Long-Term Supply Alignment',
      'Confidential Commercial Mandates',
    ],
    expansion: [
      'EU, US, GCC, LATAM targeting',
      'Audit-readiness alignment',
      'Commercial continuity planning',
    ],
  },
  {
    slug: 'in-licensing',
    title: 'In-Licensing Strategy',
    intro: 'Portfolio-aligned product access through disciplined in-licensing frameworks.',
    bullets: [
      'Dossier Scouting',
      'Commercial Feasibility Screening',
      'Regulatory Documentation Coordination',
      'Licensing Negotiation Support',
    ],
    expansion: [
      'Competitive landscape review',
      'Term-sheet structuring',
    ],
  },
  {
    slug: 'out-licensing',
    title: 'Out-Licensing & Monetization',
    intro: 'Territory-led monetization strategies for developed assets.',
    bullets: [
      'International Partner Scouting',
      'Product Positioning Strategy',
      'Confidential Negotiations',
      'Market-Entry Alignment',
    ],
    expansion: [
      'Revenue diversification strategy',
      'Territory licensing frameworks',
    ],
  },
  {
    slug: 'pharma-mna',
    title: 'Pharma M&A Advisory',
    intro: 'Investment banking-grade advisory tailored for pharma transactions.',
    bullets: [
      'Target Identification',
      'Buyer–Seller Matchmaking',
      'Preliminary Valuation Alignment',
      'Due Diligence Coordination',
      'Confidential Mandate Execution',
    ],
  },
  {
    slug: 'lab-marketing',
    title: 'Analytical & Testing Lab Marketing',
    intro: 'Commercial pipelines for stability, method validation and regulatory projects.',
    bullets: [
      'Sponsor Identification',
      'Stability & Method Validation Pipeline Development',
      'Long-Term Client Acquisition Strategy',
      'Regulatory project alignment',
    ],
  },
  {
    slug: 'babe-site',
    title: 'BA/BE Site Representation',
    intro: 'Study opportunity origination and repeat collaboration development.',
    bullets: [
      'Sponsor Outreach',
      'Study Opportunity Matchmaking',
      'Repeat Collaboration Development',
      'Regulated submission alignment',
    ],
  },
  {
    slug: 'capital-advisory',
    title: 'Fundraising & Capital Advisory',
    intro: 'Capital intermediation frameworks tailored to growth-stage pharma.',
    bullets: [
      'Investment Readiness Preparation',
      'Financial Positioning Strategy',
      'Strategic Investor Introductions',
      'Cross-Border Capital Facilitation',
    ],
    expansion: [
      'Growth-stage pharma positioning',
      'Structured capital frameworks',
    ],
  },
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
      <Section title="OUR CORE SERVICES" subtitle="Large service windows with institutional presentation and clear scope." className="reduced-padding">
        <div className="grid" style={{ gap: 18 }}>
          {services.map((s) => (
            <div
              key={s.title}
              id={`service-${s.slug}`}
              data-slug={s.slug}
              className={`panel service-panel ${active === s.slug ? 'targeted' : ''}`}
              style={{ padding: 18 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ fontSize: 20, fontWeight: 800 }}>{s.title}</div>
                <span className="badge">Service</span>
              </div>
              <div className="muted" style={{ marginBottom: 10 }}>{s.intro}</div>
              <ServiceCard title="Scope" bullets={s.bullets} />
              {s.expansion && s.expansion.length > 0 && (
                <div className="card" style={{ padding: 18, marginTop: 12 }}>
                  <div style={{ fontWeight: 700, marginBottom: 6 }}>Expansion</div>
                  <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-dim)' }}>
                    {s.expansion.map((e) => <li key={e} style={{ margin: '6px 0' }}>{e}</li>)}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

export default ServicesPage
