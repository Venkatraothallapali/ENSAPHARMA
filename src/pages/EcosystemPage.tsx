import Section from '../components/Section'
import './EcosystemPage.css'

function EcosystemPage() {
  return (
    <div className="ecosystem-page">
      {/* 1. HERO SECTION */}
      <section className="ecosystem-hero-section">
        <div className="ecosystem-hero-background">
          <div className="ecosystem-hero-overlay" />
        </div>
        
        <div className="ecosystem-hero-container">
          <div className="ecosystem-hero-content">
            <div className="value-proposition-marquee-wrapper">
              <div className="marquee-content">
                <span className="marquee-text">PHARMA GROWTH ECOSYSTEM</span> • 
                <span className="marquee-text">PHARMA GROWTH ECOSYSTEM</span> • 
                <span className="marquee-text">PHARMA GROWTH ECOSYSTEM</span> • 
                <span className="marquee-text">PHARMA GROWTH ECOSYSTEM</span> • 
              </div>
            </div>
            
            <p className="ecosystem-hero-description">
              ENSA Pharma operates at the intersection of science, commercialization, and investment, 
              connecting key stakeholders across the pharmaceutical industry to unlock global opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ECOSYSTEM INTRODUCTION */}
      <Section className="ecosystem-section-white">
        <div className="ecosystem-content-wrapper">
          <div className="ecosystem-section-header">
            <h2 className="ecosystem-section-title">The ENSA Pharma Platform</h2>
            <p className="ecosystem-section-subtitle">
              Connecting the pharmaceutical value chain for global success
            </p>
          </div>
          
          <p className="ecosystem-paragraph">
            The ENSA Pharma platform brings together participants across the pharmaceutical value chain, 
            enabling structured collaborations that support product development, commercialization, and 
            global market expansion.
          </p>
        </div>
      </Section>

      {/* Visual Divider */}
      <div className="ecosystem-divider"></div>

      {/* 3. ECOSYSTEM PARTICIPANTS */}
      <Section className="ecosystem-section-alt">
        <div className="ecosystem-content-wrapper">
          <div className="ecosystem-section-header">
            <h2 className="ecosystem-section-title">Ecosystem Participants</h2>
            <p className="ecosystem-section-subtitle">
              Key stakeholders driving pharmaceutical innovation
            </p>
          </div>
          
          <div className="ecosystem-grid">
            <div className="ecosystem-card">
              <h3 className="ecosystem-participant-title">API Manufacturers</h3>
              <ul className="ecosystem-participant-list">
                <li>Global market access</li>
                <li>Commercial representation</li>
                <li>Long-term supply partnerships</li>
              </ul>
            </div>
            
            <div className="ecosystem-card">
              <h3 className="ecosystem-participant-title">Pharmaceutical Companies</h3>
              <ul className="ecosystem-participant-list">
                <li>Product in-licensing</li>
                <li>Global out-licensing</li>
                <li>Portfolio expansion</li>
              </ul>
            </div>
            
            <div className="ecosystem-card">
              <h3 className="ecosystem-participant-title">CROs & BA/BE Centers</h3>
              <ul className="ecosystem-participant-list">
                <li>Sponsor acquisition</li>
                <li>Study partnerships</li>
                <li>Regulatory submission support</li>
              </ul>
            </div>
            
            <div className="ecosystem-card">
              <h3 className="ecosystem-participant-title">Investors & Strategic Partners</h3>
              <ul className="ecosystem-participant-list">
                <li>Pharmaceutical investment opportunities</li>
                <li>Mergers and acquisitions</li>
                <li>Growth capital advisory</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. RESULT SECTION */}
      <Section className="ecosystem-section-white">
        <div className="ecosystem-content-wrapper">
          <div className="ecosystem-result-section">
            <div className="ecosystem-result-card">
              <h2 className="ecosystem-section-title" style={{ fontSize: 'var(--heading-subsection)' }}>Result</h2>
              <p className="ecosystem-paragraph">
                By integrating these stakeholders within a single ecosystem, ENSA Pharma creates a 
                structured pathway for pharmaceutical innovation to reach global markets and generate 
                sustainable commercial value.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default EcosystemPage
