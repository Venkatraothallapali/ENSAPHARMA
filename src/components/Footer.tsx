import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()
  
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand" style={{ marginBottom: 8 }}>
            <span className="brand-badge" />
            <span>ENSA Pharma LLP</span>
          </div>
          <div className="footer-description">
            Pharmaceutical Commercial Intelligence<br />
            & Strategic Transaction Platform
          </div>
        </div>
        <div>
          <div className="footer-title">Quick Links</div>
          <div className="footer-list">
            <Link to="/" onClick={handleLinkClick}>Home</Link>
            <Link to="/about" onClick={handleLinkClick}>About</Link>
            <Link to="/services" onClick={handleLinkClick}>Services</Link>
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          </div>
        </div>
        <div>
          <div className="footer-title">Services</div>
          <div className="footer-list">
            <Link to="/services?s=api-marketing" onClick={handleLinkClick}>API Marketing</Link>
            <Link to="/services?s=in-licensing" onClick={handleLinkClick}>In-Licensing Strategy</Link>
            <Link to="/services?s=out-licensing" onClick={handleLinkClick}>Out-Licensing & Monetization</Link>
            <Link to="/services?s=pharma-mna" onClick={handleLinkClick}>Pharma M&A Advisory</Link>
            <Link to="/services?s=lab-marketing" onClick={handleLinkClick}>Analytical & Testing Lab Marketing</Link>
            <Link to="/services?s=babe-site" onClick={handleLinkClick}>BA/BE Site Representation</Link>
            <Link to="/services?s=capital-advisory" onClick={handleLinkClick}>Fundraising & Capital Advisory</Link>
          </div>
        </div>
        <div>
          <div className="footer-title">Contact</div>
          <div className="footer-list">
            <div className="footer-contact-item">
              <svg className="footer-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-10 5L2 7"/>
              </svg>
              <span>info@ensa.com</span>
            </div>
            <div className="footer-contact-item">
              <svg className="footer-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+91 91541 69469</span>
            </div>
            <div className="footer-contact-item">
              <svg className="footer-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>
                5th floor, Rama Enclave, Miyapur<br />
                Hyderabad, Telangana, India 500049
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div className="footer-copyright">
            Copyright © {year} ENSA Pharma LLP. All Rights Reserved.
          </div>
          <div className="footer-links">
            <Link to="/privacy" onClick={handleLinkClick}>Privacy Policy</Link>
            <span className="footer-separator">|</span>
            <Link to="/terms" onClick={handleLinkClick}>Terms of Use</Link>
          </div>
        </div>
        <div className="footer-bottom-right">
        </div>
      </div>
    </footer>
  )
}

export default Footer
