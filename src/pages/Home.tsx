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
        subtitle="Global Partnerships <br />& Strategic Growth for the Pharmaceutical Industry"
        tagline="Where Pharmaceutical Deals Take Shape"
        paragraph="ENSA Pharma LLP, headquartered in Hyderabad, India, is a specialized pharmaceutical marketing and transaction advisory platform bridging global opportunities with credible execution partners across the pharma value chain. Backed by the strategic ecosystem and international regulatory exposure of Masuu Global Solutions, ENSA enables commercial expansion, structured transactions, asset monetization, and cross-border collaborations — connecting APIs, formulations, laboratories, investors, licensors, and acquirers through disciplined and confidential mandates."
        primaryCta={<Link to="/services" className="btn btn-primary">Explore Services</Link>}
        secondaryCta={<Link to="/contact" className="btn btn-secondary">Contact Us</Link>}
      />

      <Section id="our-strategic-approach" title="Our Strategic Approach" subtitle="API Commercialization | Global Licensing | Pharma M&A | Laboratory Representation | BA/BE Partnerships | Capital Advisory" className="reduced-padding">
        <div className="card-grid">
          {strategicCards.map((c) => (
            <ServiceCard key={c.title} title={c.title} description={c.description} />
          ))}
        </div>
      </Section>

      <Section id="our-core-services" title="OUR CORE SERVICES" subtitle="" className="reduced-padding">
        <div className="grid grid-2">
          <div className="card" style={{ padding: 20 }}>
            <h4 style={{ color: '#1e82c9', marginBottom: 12 }}>API Marketing</h4>
            <p className="muted">Global commercial representation for API manufacturers targeting regulated and semi-regulated markets through structured buyer alignment and long-term supply strategy.</p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <h4 style={{ color: '#1e82c9', marginBottom: 12 }}>In-Licensing Strategy</h4>
            <p className="muted">Targeted dossier acquisition and formulation partnerships aligned with regulatory feasibility and sustainable market positioning.</p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <h4 style={{ color: '#1e82c9', marginBottom: 12 }}>Out-Licensing & Monetization</h4>
            <p className="muted">Cross-border licensing and distribution partnerships to convert product strength into international revenue streams.</p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <h4 style={{ color: '#1e82c9', marginBottom: 12 }}>Pharma Mergers & Acquisitions</h4>
            <p className="muted">Buy-side and sell-side advisory across API, formulation, CRO, and laboratory assets.</p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <h4 style={{ color: '#1e82c9', marginBottom: 12 }}>Testing Laboratory Marketing</h4>
            <p className="muted">Global sponsor access and project pipeline development for analytical and stability laboratories.</p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <h4 style={{ color: '#1e82c9', marginBottom: 12 }}>BA/BE Site Representation</h4>
            <p className="muted">Sponsor alignment for Bioavailability/Bioequivalence centers targeting regulated submissions.</p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <h4 style={{ color: '#1e82c9', marginBottom: 12 }}>Fundraising & Capital Advisory</h4>
            <p className="muted">Investment readiness and structured capital facilitation for growth-stage pharma enterprises.</p>
          </div>
        </div>
      </Section>

      <Section id="how-ensa-works" title="HOW ENSA WORKS" subtitle="Identify. Structure. Execute." className="story-section reduced-padding">
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

      <Section id="industry-sectors-we-serve" title="Industry sectors we serve " subtitle="API Manufacturers | Formulation Companies | CROs | Laboratories | BA/BE Centers | Promoters | Investors" className="reduced-padding">
        <div className="card-grid">
          {['API Manufacturers','Formulation Companies','CROs','Laboratories','BA/BE Centers','Promoters','Investors'].map((t) => (
            <div key={t} className="card" style={{ padding: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: 700 }}>{t}</div>
              <span className="badge">Global</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="why-ensa" title="WHY ENSA" subtitle="Hyderabad Advantage • Confidential Mandates • Cross-Border Commercial Intelligence" className="reduced-padding-bottom">
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
        <div className="card" style={{ padding: 24, borderLeft: '4px solid #1e82c9', width: '100%', marginTop: 24, marginBottom: 8 }}>
            <div className="section-title">Our Philosophy</div>
            <h4 style={{ color: '#1e82c9', marginBottom: 8, fontSize: '20px', fontWeight: 500 }}>At ENSA Pharma, we believe:</h4>
            <p style={{ lineHeight: 1.6, color: 'var(--color-text)', marginBottom: 8 }}>
              "Pharmaceutical growth is not driven by products alone — it is built on positioning, partnerships, and precision execution."
            </p>
          </div>
      </Section>

      <Section id="pharma-growth-ecosystem" title="Pharma Growth Ecosystem" subtitle="Connecting the global pharmaceutical value chain through strategic partnerships and commercial intelligence" className="reduced-padding">
        <div className="grid grid-3">
          <div className="card" style={{ padding: 20 }}>
            <h4 style={{ color: '#1e82c9', marginBottom: 12 }}>API Ecosystem</h4>
            <p className="muted">Bridging manufacturers with global markets through structured commercial partnerships and long-term supply alignment.</p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <h4 style={{ color: '#1e82c9', marginBottom: 12 }}>Formulation Network</h4>
            <p className="muted">Connecting formulation companies with licensing opportunities and market expansion pathways across regulated territories.</p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <h4 style={{ color: '#1e82c9', marginBottom: 12 }}>Service Providers</h4>
            <p className="muted">Linking CROs, laboratories, and BA/BE centers with sponsor pipelines and strategic collaboration opportunities.</p>
          </div>
        </div>
      </Section>

      <Section id="strategic-partnerships" title="Strategic Partnerships" subtitle="Building long-term value through aligned partnerships and disciplined execution" className="reduced-padding">
        <div className="grid grid-2">
          <div className="card" style={{ padding: 20 }}>
            <h4 style={{ color: '#1e82c9', marginBottom: 12 }}>Partnership Framework</h4>
            <p className="muted">Structured engagement models ensuring confidentiality, aligned incentives, and sustainable growth trajectories for all stakeholders.</p>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <h4 style={{ color: '#1e82c9', marginBottom: 12 }}>Global Network</h4>
            <p className="muted">Extensive network across EU, US, GCC, LATAM, and Asian markets enabling cross-border commercial expansion and regulatory navigation.</p>
          </div>
        </div>
      </Section>

      <Section id="market-intelligence" title="Market Intelligence" subtitle="Data-driven insights powering strategic pharmaceutical decisions" className="reduced-padding-bottom">
        <div className="card" style={{ padding: 24, borderLeft: '4px solid #23b04d', width: '100%' }}>
          <h4 style={{ color: '#23b04d', marginBottom: 12 }}>Commercial Intelligence Platform</h4>
          <p className="muted" style={{ marginBottom: 16 }}>
            Comprehensive market analysis, regulatory mapping, and competitive intelligence to inform strategic decision-making and opportunity identification across the pharmaceutical value chain.
          </p>
          <div className="grid grid-3" style={{ gap: 16 }}>
            <div>
              <h5 style={{ color: '#1e82c9', marginBottom: 8, fontSize: '16px' }}>Market Analysis</h5>
              <p className="muted">Deep market insights and opportunity assessment across therapeutic areas and geographic regions.</p>
            </div>
            <div>
              <h5 style={{ color: '#1e82c9', marginBottom: 8, fontSize: '16px' }}>Regulatory Intelligence</h5>
              <p className="muted">Regulatory pathway analysis and compliance strategies for global market entry.</p>
            </div>
            <div>
              <h5 style={{ color: '#1e82c9', marginBottom: 8, fontSize: '16px' }}>Competitive Landscape</h5>
              <p className="muted">Comprehensive competitive analysis and positioning strategies for market success.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Home
