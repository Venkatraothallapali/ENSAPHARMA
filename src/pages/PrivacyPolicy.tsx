function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="legal-subtitle">Protecting your privacy while delivering pharmaceutical intelligence services.</p>
          <div className="legal-meta">
            <span className="legal-date">Effective: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="legal-category">Privacy & Data Protection</span>
          </div>
        </div>
      </div>

      <div className="legal-content">
        <div className="container">
          <div className="legal-toc">
            <h3>Table of Contents</h3>
            <nav className="toc-nav">
              <a href="#information-we-collect">Information We Collect</a>
              <a href="#how-we-use-information">How We Use Your Information</a>
              <a href="#information-sharing">Information Sharing</a>
              <a href="#data-security">Data Security</a>
              <a href="#your-rights">Your Rights</a>
              <a href="#contact">Contact Us</a>
            </nav>
          </div>

          <div className="legal-sections">
            <section id="information-we-collect" className="legal-section">
              <h2>Information We Collect</h2>
              <div className="section-content">
                <p>We collect minimal information necessary to provide pharmaceutical intelligence services:</p>
                
                <ul className="purpose-list">
                  <li><strong>Personal Details:</strong> Name, email, phone, company information</li>
                  <li><strong>Service Data:</strong> Inquiries, project requirements, communication preferences</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                  <li><strong>Usage Analytics:</strong> How you interact with our platform and services</li>
                </ul>
              </div>
            </section>

            <section id="how-we-use-information" className="legal-section">
              <h2>How We Use Your Information</h2>
              <div className="section-content">
                <p>Your information enables us to deliver exceptional pharmaceutical intelligence services:</p>
                
                <ul className="purpose-list">
                  <li><strong>Service Delivery:</strong> Provide tailored pharmaceutical intelligence and transaction advisory</li>
                  <li><strong>Communication:</strong> Respond to inquiries and send relevant updates</li>
                  <li><strong>Platform Improvement:</strong> Enhance our services based on usage patterns</li>
                  <li><strong>Compliance:</strong> Meet pharmaceutical industry regulations and legal requirements</li>
                  <li><strong>Security:</strong> Protect against fraud and unauthorized access</li>
                </ul>
              </div>
            </section>

            <section id="information-sharing" className="legal-section">
              <h2>Information Sharing</h2>
              <div className="section-content">
                <p>We never sell your personal information. We share data only in these specific situations:</p>
                
                <ul className="purpose-list">
                  <li><strong>Service Providers:</strong> Trusted partners who help operate our platform</li>
                  <li><strong>Legal Requirements:</strong> When required by pharmaceutical regulations or law</li>
                  <li><strong>Business Transfers:</strong> In case of mergers, acquisitions, or asset sales</li>
                  <li><strong>Explicit Consent:</strong> When you give clear permission to share specific information</li>
                </ul>
              </div>
            </section>

            <section id="data-security" className="legal-section">
              <h2>Data Security</h2>
              <div className="section-content">
                <p>We implement enterprise-grade security measures to protect your information:</p>
                
                <ul className="purpose-list">
                  <li><strong>Encryption:</strong> Data protected with industry-standard encryption</li>
                  <li><strong>Access Controls:</strong> Strict role-based access limitations</li>
                  <li><strong>Regular Monitoring:</strong> Continuous security assessments and audits</li>
                  <li><strong>Employee Training:</strong> Ongoing security awareness programs</li>
                </ul>
              </div>
            </section>

            <section id="your-rights" className="legal-section">
              <h2>Your Rights</h2>
              <div className="section-content">
                <p>You maintain control over your personal information with these rights:</p>
                
                <ul className="purpose-list">
                  <li><strong>Access:</strong> Request copies of your personal data</li>
                  <li><strong>Correction:</strong> Update inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request removal of your personal data</li>
                  <li><strong>Portability:</strong> Transfer your data to another service provider</li>
                  <li><strong>Objection:</strong> Limit or object to certain data processing activities</li>
                </ul>
              </div>
            </section>

            <section id="contact" className="legal-section">
              <h2>Contact Us</h2>
              <div className="section-content">
                <p>For privacy-related questions or to exercise your rights:</p>
                
                <div className="contact-grid">
                  <div className="contact-item">
                    <h4>Privacy Inquiries</h4>
                    <p>Email: privacy@ensa.com</p>
                  </div>
                  <div className="contact-item">
                    <h4>General Questions</h4>
                    <p>Email: info@ensa.com</p>
                  </div>
                  <div className="contact-item">
                    <h4>Phone</h4>
                    <p>+91 91541 69469</p>
                  </div>
                  <div className="contact-item">
                    <h4>Address</h4>
                    <p>5th floor, Rama Enclave, Miyapur<br />Hyderabad, Telangana, India 500049</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
