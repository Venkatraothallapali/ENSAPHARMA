import ContactForm from '../components/ContactForm'
import Section from '../components/Section'
import GetInTouchSection from '../components/GetInTouchSection'
import './contactpage.css'

function ContactPage() {
  return (
    <div className="contactpage-page">
      <Section className="reduced-padding reduced-padding-bottom contactpage-hero-section">
        <div className="contactpage-hero-content">
          <div className="contactpage-header">
            <h1 className="contactpage-title">Partner with ENSA Pharma</h1>
            <p className="contactpage-subtitle">Strategic pharmaceutical partnerships & confidential transaction facilitation.</p>
          </div>
          <div className="contactpage-cards-container">
            <div className="contactpage-opportunity-card">
              <div className="contactpage-card-icon">
                <img src="/icons/globalmarketaccess.png" alt="Growth" style={{ width: '65px', height: '65px', display: 'block', margin: '0 auto', backgroundColor: 'white', padding: '12px', borderRadius: '100%' }} />
              </div>
              <h3 className="contactpage-card-title">Global Market Access</h3>
              <p className="contactpage-card-text">
                Whether you are an API manufacturer seeking global market access, a pharmaceutical company exploring licensing opportunities, a CRO looking to expand sponsor partnerships, or an investor identifying high-potential pharmaceutical assets, ENSA Pharma provides a strategic platform that connects you with the right opportunities.
              </p>
            </div>
            
            <div className="contactpage-network-card">
              <div className="contactpage-card-icon">
                <img src="/icons/strategicnetwork.png" alt="Growth" style={{ width: '65px', height: '65px', display: 'block', margin: '0 auto', backgroundColor: 'white', padding: '12px', borderRadius: '100%' }} />

              </div>
              <h3 className="contactpage-card-title">Strategic Network</h3>
              <p className="contactpage-card-text">
                Through its global network and structured advisory approach, ENSA Pharma facilitates partnerships that support product commercialization, market expansion, and long-term business growth.
              </p>
            </div>
            
            <div className="contactpage-growth-card">
              <div className="contactpage-card-icon">
                <img src="/icons/acceleratedgrowth.png" alt="Growth" style={{ width: '65px', height: '65px', display: 'block', margin: '0 auto', backgroundColor: 'white', padding: '12px', borderRadius: '100%' }} />
              </div>
              <h3 className="contactpage-card-title">Accelerated Growth</h3>
              <p className="contactpage-card-text">
                Partner with ENSA Pharma to explore new collaborations, unlock strategic opportunities, and accelerate your journey in the global pharmaceutical industry.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      <GetInTouchSection subtitle="Initiate a confidential discussion about your pharmaceutical objectives.">
        <div className="contactpage-form-grid">
          <div>
            <ContactForm />
          </div>
          <div className="contactpage-form-column">
            <div className="contactpage-info-card">
              <h4 className="contactpage-info-title">Strategic Partnership Areas</h4>
              <ul className="contactpage-partnership-list">
                <li className="contactpage-partnership-item">
                  <span className="contactpage-partnership-bullet">●</span>
                  <span>API Marketing & Commercialization</span>
                </li>
                <li className="contactpage-partnership-item">
                  <span className="contactpage-partnership-bullet">●</span>
                  <span>In-Licensing & Out-Licensing</span>
                </li>
                <li className="contactpage-partnership-item">
                  <span className="contactpage-partnership-bullet">●</span>
                  <span>Pharma Mergers & Acquisitions</span>
                </li>
                <li className="contactpage-partnership-item">
                  <span className="contactpage-partnership-bullet">●</span>
                  <span>CRO / BA-BE Center Partnerships</span>
                </li>
                <li className="contactpage-partnership-item">
                  <span className="contactpage-partnership-bullet">●</span>
                  <span>Capital Advisory & Fundraising</span>
                </li>
              </ul>
            </div>
            
            <div className="contactpage-info-card">
              <h4 className="contactpage-info-title">Why Choose ENSA</h4>
              <div className="contactpage-why-list">
                <div className="contactpage-why-item">
                  <span className="contactpage-why-check">✓</span>
                  <span>Boardroom-first orientation with institutional approach</span>
                </div>
                <div className="contactpage-why-item">
                  <span className="contactpage-why-check">✓</span>
                  <span>Confidential mandate-driven engagement</span>
                </div>
                <div className="contactpage-why-item">
                  <span className="contactpage-why-check">✓</span>
                  <span>Global regulatory exposure through Masuu Global Solutions</span>
                </div>
                <div className="contactpage-why-item">
                  <span className="contactpage-why-check">✓</span>
                  <span>Disciplined documentation alignment and execution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GetInTouchSection>
      
      {/* Our Philosophy Section */}
      <Section className="reduced-padding contactpage-philosophy-section">
        <div className="contactpage-philosophy-card">
          <h3 className="contactpage-philosophy-title">Our Philosophy</h3>
          <p className="contactpage-philosophy-text">
            Pharmaceutical growth is not driven by products alone — it is built on positioning, partnerships, and precision execution.
          </p>
        </div>
      </Section>
    </div>
  )
}

export default ContactPage
