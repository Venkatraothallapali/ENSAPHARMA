import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'

const strategicCards = [
  { title: 'API Commercialization', description: 'Market access and long-term supply alignment across regulated markets.' },
  { title: 'Global Licensing', description: 'Structured in-/out-licensing aligned to portfolio strategy and territory focus.' },
  { title: 'Pharma M&A', description: 'Target mapping, valuation alignment and mandate-driven execution.' },
  { title: 'Laboratory Representation', description: 'Method validation, stability and sponsor acquisition pipelines.' },
  { title: 'BA/BE Partnerships', description: 'Study matchmaking, repeat collaboration development and submission alignment.' },
  { title: 'Capital Advisory', description: 'Investment readiness and cross-border capital facilitation frameworks.' },
]

function Home() {
  return (
    <>
      <Hero
        title="ENSA Pharma LLP"
        subtitle="Pharmaceutical Commercial Intelligence<br />& Strategic Transaction Platform"
        tagline="Where Pharmaceutical Deals Take Shape"
        paragraph="ENSA Pharma LLP, headquartered in Hyderabad, India, is a specialized pharmaceutical marketing and transaction advisory platform bridging global opportunities with credible execution partners across the pharma value chain. Backed by the strategic ecosystem and international regulatory exposure of Masuu Global Solutions, ENSA enables commercial expansion, structured transactions, asset monetization, and cross-border collaborations — connecting APIs, formulations, laboratories, investors, licensors, and acquirers through disciplined and confidential mandates."
        primaryCta={<Link to="/services" className="btn btn-primary">Explore Services</Link>}
        secondaryCta={<Link to="/contact" className="btn btn-secondary">Contact Us</Link>}
      />

      <Section className="story-section reduced-padding" title="How ENSA Works" subtitle="Mandate-driven engagement. Confidential outreach. Sustainable outcomes.">
        <div className="grid grid-3">
          <div className="card" style={{ padding: 18 }}>
            <div className="badge" style={{ marginBottom: 10 }}>Identify</div>
            <div className="muted">Opportunity origination through portfolio fit, regulatory readiness and commercial feasibility.</div>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <div className="badge" style={{ marginBottom: 10 }}>Structure</div>
            <div className="muted">Mandate frameworks, documentation alignment and territory-focused negotiation pathways.</div>
          </div>
          <div className="card" style={{ padding: 18 }}>
            <div className="badge" style={{ marginBottom: 10 }}>Execute</div>
            <div className="muted">Confidential outreach, due diligence coordination and long-term continuity planning.</div>
          </div>
        </div>
      </Section>

      <Section title="Who We Serve" subtitle="Global pharmaceutical ecosystem partners" className="reduced-padding">
        <div className="card-grid">
          {['API Manufacturers','Formulation Companies','CROs','Laboratories','BA/BE Centers','Promoters','Investors'].map((t) => (
            <div key={t} className="card" style={{ padding: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: 700 }}>{t}</div>
              <span className="badge">Global</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Strategic Positioning" subtitle="Commercial intelligence translated into disciplined transaction execution." className="strategic-positioning">
        <div className="card-grid">
          {strategicCards.map((c) => (
            <ServiceCard key={c.title} title={c.title} description={c.description} />
          ))}
        </div>
      </Section>

      <Section accent title="Why ENSA" subtitle="Hyderabad Advantage • Confidential Mandates • Cross-Border Commercial Intelligence" className="reduced-padding">
        <div className="grid grid-3">
          <div className="panel">
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Hyderabad Advantage</div>
            <div className="muted">Proximity to India's pharma ecosystem enabling credible execution and partner access.</div>
          </div>
          <div className="panel">
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Confidential Mandates</div>
            <div className="muted">Institutional engagement models with disciplined information handling and aligned incentives.</div>
          </div>
          <div className="panel">
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Cross-Border Intelligence</div>
            <div className="muted">Commercial insights and regulatory mapping across EU, US, GCC and LATAM.</div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Home
