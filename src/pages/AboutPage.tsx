import Section from '../components/Section'

function AboutPage() {
  return (
    <>
      <Section title="About" subtitle="Institutional excellence in pharmaceutical intelligence and transaction advisory." className="reduced-padding">
        <div style={{ display: 'grid', gap: 24, marginBottom: 24, width: '100%' }}>
          <div className="card" style={{ padding: 24, borderLeft: '4px solid #1e82c9', width: '100%' }}>
            <h3 style={{ color: '#1e82c9', marginBottom: 12, fontSize: '18px', fontWeight: 600 }}>Our Mission</h3>
            <p style={{ lineHeight: 1.6, color: 'var(--color-text)', marginBottom: 16 }}>
              ENSA operates as a focused commercial intelligence and transaction execution partner for pharmaceutical ecosystem. Our approach combines portfolio-driven market mapping, disciplined documentation alignment, and territory-specific outreach to create clarity, speed and confidentiality across buy- and sell-side mandates.
            </p>
          </div>
          
          <div className="card" style={{ padding: 24, borderLeft: '4px solid #1e82c9', width: '100%' }}>
            <h3 style={{ color: '#1e82c9', marginBottom: 12, fontSize: '18px', fontWeight: 600 }}>Our Expertise</h3>
            <p style={{ lineHeight: 1.6, color: 'var(--color-text)', marginBottom: 16 }}>
              We represent credible manufacturers, laboratories, BA/BE sites and investors with structured processes that safeguard information and deliver long-term continuity. Our boardroom-first orientation ensures that every engagement is mandate-defined, metrics-led and aligned to sustained value creation for stakeholders across global markets.
            </p>
          </div>
          
          <div className="card" style={{ padding: 24, borderLeft: '4px solid #1e82c9', width: '100%' }}>
            <h3 style={{ color: '#1e82c9', marginBottom: 12, fontSize: '18px', fontWeight: 600 }}>Global Reach</h3>
            <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>
              Backed by international regulatory exposure through Masuu Global Solutions, we translate regulatory readiness into commercial outcomes—whether objective is API commercialization, in-licensing, out-licensing, asset monetization, M&A exploration or capital access.
            </p>
          </div>
        </div>
        <div className="grid grid-2">
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Mission</div>
            <div className="muted">To structure global pharmaceutical opportunities through disciplined commercial intelligence and strategic partnerships.</div>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Philosophy</div>
            <div className="muted">“Pharmaceutical growth is not driven by products alone — it is built on positioning, partnerships, and precision execution.”</div>
          </div>
        </div>
      </Section>
      <Section title="Strategic Advantages" subtitle="Our core strengths and positioning in the pharmaceutical ecosystem.">
        <div className="grid grid-3">
          <div className="panel">
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Hyderabad Strategic Positioning</div>
            <div className="muted">Anchored in India’s pharma hub, enabling proximity to API and formulation ecosystems with credible outreach.</div>
          </div>
          <div className="panel">
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Regulatory Exposure</div>
            <div className="muted">Access to regulatory orientation via Masuu Global Solutions ecosystem, aligning dossier and documentation readiness.</div>
          </div>
          <div className="panel">
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Global Transaction Capability</div>
            <div className="muted">Cross-border partner scouting, territory mapping and mandate execution across EU, US, GCC and LATAM.</div>
          </div>
          <div className="panel">
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Structured Mandate Model</div>
            <div className="muted">Clear scope, confidentiality and outcome alignment to ensure sustainable commercial continuity.</div>
          </div>
          <div className="panel">
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Ethical & Confidential Engagement</div>
            <div className="muted">Institutional standards of information handling and relationship stewardship across buyers and sponsors.</div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default AboutPage
