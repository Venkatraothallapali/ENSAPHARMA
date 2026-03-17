import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import './Home.css'
import EcosystemDiagram from '../components/EcosystemDiagram'
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
        title=""
        subtitle="Global Partnerships & Strategic Growth for the Pharmaceutical Industry"
        description="ENSA Pharma supports pharmaceutical companies in expanding internationally, commercializing high-value assets, and building strategic partnerships across regulated and emerging markets."
        supportingStatement="From API commercialization and product licensing to M&A advisory and capital facilitation, ENSA Pharma connects pharmaceutical companies and investors to unlock global growth opportunities."
        primaryCta={<Link to="/services" className="btn btn-primary">Explore Services</Link>}
        secondaryCta={<Link to="/contact" className="btn btn-secondary">Partner With Us</Link>}
      />

      <div className="ecosystem-section">
        <h2 className="ecosystem-title">ENSA Pharma Ecosystem</h2>
        <p className="ecosystem-subtitle">The Strategic Connector in Pharmaceutical Value Chain</p>
        <EcosystemDiagram />
      </div>

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

      <Section id="industry-sectors-we-serve" className="reduced-padding">
        <div className="industry-sectors-wrapper">
          <h2 className="industry-sectors-main-title">INDUSTRY SECTORS WE SERVE</h2>
          <p className="industry-sectors-main-subtitle">Strategic partnerships across the pharmaceutical ecosystem</p>
          <p className="industry-description">
            ENSA Pharma works across key segments of pharmaceutical ecosystem, enabling strategic collaboration and growth opportunities for multiple industry stakeholders.
          </p>
          
          <div className="industry-sectors-grid">
            <div className="industry-sector">
              <h3 className="industry-title">API Manufacturers</h3>
              <p className="industry-description">
                We support API manufacturers in expanding their global commercial reach and establishing long-term supply partnerships.
              </p>
            </div>
            
            <div className="industry-sector">
              <h3 className="industry-title">Pharmaceutical Companies</h3>
              <p className="industry-description">
                For pharmaceutical companies, ENSA Pharma facilitates product licensing, portfolio expansion, and international market access strategies.
              </p>
            </div>
            
            <div className="industry-sector">
              <h3 className="industry-title">CROs and BA/BE Centers</h3>
              <p className="industry-description">
                We also collaborate with CROs and BA/BE centers, connecting them with sponsors seeking reliable partners for regulatory studies and clinical development programs.
              </p>
            </div>
            
            <div className="industry-sector">
              <h3 className="industry-title">Investors and Strategic Funds</h3>
              <p className="industry-description">
                In addition, ENSA Pharma works with investors and strategic funds to identify high-potential pharmaceutical assets and facilitate mergers, acquisitions, and growth capital opportunities within the life sciences sector.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="strategic-partnerships" className="reduced-padding">
        <div className="strategic-partnerships-wrapper">
          <h2 className="strategic-partnerships-title">Strategic Partnerships</h2>
          <p className="strategic-partnerships-subtitle">Building long-term value through aligned partnerships and disciplined execution</p>
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
        </div>
      </Section>

      <Section id="market-intelligence" className="reduced-padding-bottom">
        <div className="market-intelligence-container">
          <div className="market-intelligence-header">
            <h2 className="market-intelligence-title">MARKET INTELLIGENCE</h2>
            <p className="market-intelligence-subtitle">Pharma Trends & Opportunities</p>
            <div className="card philosophy-card">
              <p className="market-intelligence-description">
                At ENSA Pharma, we believe that informed decisions are driven by a deep understanding of industry dynamics and emerging opportunities.
                The Insights and Market Intelligence section provides perspectives on key developments shaping the pharmaceutical industry.
              </p>
            </div>
          </div>
          
          <div className="market-intelligence-content">
            <div className="market-intelligence-main">
              <h3 className="market-intelligence-subtitle">Areas of focus include:</h3>
              <div className="market-intelligence-grid">
                <div className="market-intelligence-item">
                  <div className="market-intelligence-icon">📊</div>
                  <h4>API supply chain trends</h4>
                  <p>Real-time insights into global API manufacturing, sourcing strategies, and supply chain resilience.</p>
                </div>
                <div className="market-intelligence-item">
                  <div className="market-intelligence-icon">🌍</div>
                  <h4>Global licensing opportunities</h4>
                  <p>Identification of strategic licensing partnerships across therapeutic areas and geographic markets.</p>
                </div>
                <div className="market-intelligence-item">
                  <div className="market-intelligence-icon">⚖️</div>
                  <h4>Regulatory developments</h4>
                  <p>Analysis of regulatory changes across major markets and impact on market access strategies.</p>
                </div>
                <div className="market-intelligence-item">
                  <div className="market-intelligence-icon">🔬</div>
                  <h4>CRO and clinical partnerships</h4>
                  <p>Insights into CRO landscape and clinical development collaboration opportunities.</p>
                </div>
                <div className="market-intelligence-item">
                  <div className="market-intelligence-icon">💰</div>
                  <h4>Pharmaceutical investment trends</h4>
                  <p>Analysis of investment patterns, M&A activity, and funding opportunities in pharma.</p>
                </div>
              </div>
            </div>
            
            <div className="market-intelligence-outcome">
              <div className="outcome-card">
                <h4>Strategic Decision Making</h4>
                <p>These insights help industry participants identify opportunities, anticipate market shifts, and make strategic decisions within the global pharmaceutical landscape.</p>
                <div className="outcome-features">
                  <div className="outcome-feature">
                    <span className="outcome-icon">🎯</span>
                    <span>Opportunity Identification</span>
                  </div>
                  <div className="outcome-feature">
                    <span className="outcome-icon">📈</span>
                    <span>Market Trend Analysis</span>
                  </div>
                  <div className="outcome-feature">
                    <span className="outcome-icon">🤝</span>
                    <span>Strategic Partnerships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Home
