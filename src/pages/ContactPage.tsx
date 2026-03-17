import ContactForm from '../components/ContactForm'
import Section from '../components/Section'
import './ContactPage.css'

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
              <div className="contactpage-card-icon">🌍</div>
              <h3 className="contactpage-card-title">Global Market Access</h3>
              <p className="contactpage-card-text">
                Whether you are an API manufacturer seeking global market access, a pharmaceutical company exploring licensing opportunities, a CRO looking to expand sponsor partnerships, or an investor identifying high-potential pharmaceutical assets, ENSA Pharma provides a strategic platform that connects you with the right opportunities.
              </p>
            </div>
            
            <div className="contactpage-network-card">
              <div className="contactpage-card-icon">🤝</div>
              <h3 className="contactpage-card-title">Strategic Network</h3>
              <p className="contactpage-card-text">
                Through its global network and structured advisory approach, ENSA Pharma facilitates partnerships that support product commercialization, market expansion, and long-term business growth.
              </p>
            </div>
            
            <div className="contactpage-growth-card">
              <div className="contactpage-card-icon">🚀</div>
              <h3 className="contactpage-card-title">Accelerated Growth</h3>
              <p className="contactpage-card-text">
                Partner with ENSA Pharma to explore new collaborations, unlock strategic opportunities, and accelerate your journey in the global pharmaceutical industry.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      <Section title="Get In Touch" subtitle="Initiate a confidential discussion about your pharmaceutical objectives." className="reduced-padding contactpage-form-section">
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
                  <span>Pharma M&A Advisory</span>
                </li>
                <li className="contactpage-partnership-item">
                  <span className="contactpage-partnership-bullet">●</span>
                  <span>Laboratory & BA/BE Representation</span>
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
      </Section>
    </div>
  )
}

export default ContactPage
