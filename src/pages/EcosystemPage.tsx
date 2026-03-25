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
                <span className="marquee-text">ENSA Pharma operates at the intersection of science, commercialization, and investment, connecting key stakeholders across the pharmaceutical industry to unlock global opportunities.</span> • 
                <span className="marquee-text">ENSA Pharma operates at the intersection of science, commercialization, and investment, connecting key stakeholders across the pharmaceutical industry to unlock global opportunities.</span> • 
                <span className="marquee-text">ENSA Pharma operates at the intersection of science, commercialization, and investment, connecting key stakeholders across the pharmaceutical industry to unlock global opportunities.</span> • 
                <span className="marquee-text">ENSA Pharma operates at the intersection of science, commercialization, and investment, connecting key stakeholders across the pharmaceutical industry to unlock global opportunities.</span> • 
              </div>
            </div>
            
            <p className="ecosystem-hero-description">
              The ENSA Pharma platform brings together participants across the pharmaceutical value chain, enabling structured collaborations that support product development, commercialization, and global market expansion.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ECOSYSTEM INTRODUCTION */}
      <Section className="ecosystem-section-white">
        <div className="ecosystem-content-wrapper">
          <div className="ecosystem-section-header">
            <h2 className="ecosystem-section-title">Pharma Growth Ecosystem</h2>
            <p className="ecosystem-section-subtitle">
              Connecting pharmaceutical innovation with global market opportunities
            </p>
          </div>
          
          <div className="ecosystem-introduction-card">
            <p className="ecosystem-paragraph">
              ENSA Pharma operates at the intersection of science, commercialization, and investment, 
              connecting key stakeholders across the pharmaceutical industry to unlock global opportunities. 
              Our platform creates a unified ecosystem where pharmaceutical innovation can flourish through 
              strategic partnerships and structured collaborations.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. ECOSYSTEM PARTICIPANTS */}
      <Section className="ecosystem-section-alt">
        <div className="ecosystem-content-wrapper">
          <div className="ecosystem-section-header">
            <h2 className="ecosystem-section-title">Ecosystem Participants</h2>
            <p className="ecosystem-section-subtitle">
              Key stakeholders driving pharmaceutical innovation and growth
            </p>
          </div>
          
          <div className="ecosystem-grid ecosystem-grid-2">
            <div className="ecosystem-card">
              <h3 className="ecosystem-participant-title">API Manufacturers</h3>
              <ul className="ecosystem-benefits-list">
                <li>Global market access</li>
                <li>Commercial representation</li>
                <li>Long-term supply partnerships</li>
              </ul>
            </div>
            
            <div className="ecosystem-card">
              <h3 className="ecosystem-participant-title">Pharmaceutical Companies</h3>
              <ul className="ecosystem-benefits-list">
                <li>Product in-licensing</li>
                <li>Global out-licensing</li>
                <li>Portfolio expansion</li>
              </ul>
            </div>
            
            <div className="ecosystem-card">
              <h3 className="ecosystem-participant-title">CROs & BA/BE Centers</h3>
              <ul className="ecosystem-benefits-list">
                <li>Sponsor acquisition</li>
                <li>Study partnerships</li>
                <li>Regulatory submission support</li>
              </ul>
            </div>
            
            <div className="ecosystem-card">
              <h3 className="ecosystem-participant-title">Investors & Strategic Partners</h3>
              <ul className="ecosystem-benefits-list">
                <li>Pharmaceutical investment opportunities</li>
                <li>Mergers and acquisitions</li>
                <li>Growth capital advisory</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Visual Divider */}
      <div className="ecosystem-divider"></div>

      {/* 4. RESULT & IMPACT */}
      <Section className="ecosystem-section-white">
        <div className="ecosystem-content-wrapper">
          <div className="ecosystem-section-header">
            <h2 className="ecosystem-section-title">Result</h2>
            <p className="ecosystem-section-subtitle">
              Creating sustainable value through integrated collaboration
            </p>
          </div>
          
          <div className="ecosystem-result-card">
            <p className="ecosystem-paragraph">
              By integrating these stakeholders within a single ecosystem, ENSA Pharma creates a 
              structured pathway for pharmaceutical innovation to reach global markets and generate 
              sustainable commercial value.
            </p>
            
            <p className="ecosystem-paragraph">
              Our ecosystem approach ensures that scientific breakthroughs can efficiently navigate 
              the complex journey from laboratory to market, supported by the right partners at every 
              stage of development and commercialization.
            </p>
            
            <div className="ecosystem-impact-grid">
              <div className="ecosystem-impact-item">
                <div className="ecosystem-impact-number">360°</div>
                <div className="ecosystem-impact-label">Value Chain Integration</div>
              </div>
              <div className="ecosystem-impact-item">
                <div className="ecosystem-impact-number">50+</div>
                <div className="ecosystem-impact-label">Global Markets</div>
              </div>
              <div className="ecosystem-impact-item">
                <div className="ecosystem-impact-number">200+</div>
                <div className="ecosystem-impact-label">Strategic Partners</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default EcosystemPage
