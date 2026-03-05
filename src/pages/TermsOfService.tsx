function TermsOfService() {
  return (
    <div className="legal-page">
      <div className="legal-header">
        <div className="container">
          <h1>Terms of Service</h1>
          <p className="legal-subtitle">These terms govern your use of ENSA Pharma's pharmaceutical intelligence and transaction advisory services.</p>
          <div className="legal-meta">
            <span className="legal-date">Effective: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="legal-category">Legal Agreement</span>
          </div>
        </div>
      </div>

      <div className="legal-content">
        <div className="container">
          <div className="legal-toc">
            <h3>Table of Contents</h3>
            <nav className="toc-nav">
              <a href="#acceptance">Acceptance of Terms</a>
              <a href="#services">Services Overview</a>
              <a href="#client-responsibilities">Client Responsibilities</a>
              <a href="#confidentiality">Confidentiality</a>
              <a href="#fees-payment">Fees & Payment Terms</a>
              <a href="#intellectual-property">Intellectual Property</a>
              <a href="#disclaimers">Disclaimers & Limitations</a>
              <a href="#termination">Termination</a>
              <a href="#governing-law">Governing Law</a>
              <a href="#contact">Contact Information</a>
            </nav>
          </div>

          <div className="legal-sections">
            <section id="acceptance" className="legal-section">
              <h2>Acceptance of Terms</h2>
              <div className="section-content">
                <p>By accessing or using ENSA Pharma LLP's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                
                <div className="acceptance-box">
                  <h4>Your Agreement Includes:</h4>
                  <ul>
                    <li>These Terms of Service</li>
                    <li>Our Privacy Policy</li>
                    <li>Any applicable service agreements</li>
                    <li>Pharmaceutical industry regulations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="services" className="legal-section">
              <h2>Services Overview</h2>
              <div className="section-content">
                <p>ENSA Pharma LLP provides specialized pharmaceutical intelligence and transaction advisory services:</p>
                
                <div className="services-grid">
                  <div className="service-card">
                    <h4>API Marketing & Commercialization</h4>
                    <p>Market access strategies and commercial expansion planning.</p>
                  </div>
                  <div className="service-card">
                    <h4>Licensing Services</h4>
                    <p>In-licensing and out-licensing strategies and portfolio optimization.</p>
                  </div>
                  <div className="service-card">
                    <h4>M&A Advisory</h4>
                    <p>Target identification, valuation analysis, and transaction structuring.</p>
                  </div>
                  <div className="service-card">
                    <h4>Laboratory Services</h4>
                    <p>Method validation, stability studies, and BA/BE site representation.</p>
                  </div>
                  <div className="service-card">
                    <h4>Capital Advisory</h4>
                    <p>Investment readiness assessment and fundraising strategies.</p>
                  </div>
                  <div className="service-card">
                    <h4>Analytical Services</h4>
                    <p>Testing lab marketing and regulatory compliance support.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="client-responsibilities" className="legal-section">
              <h2>Client Responsibilities</h2>
              <div className="section-content">
                <p>As a client of ENSA Pharma LLP, you agree to the following responsibilities:</p>
                
                <div className="responsibilities-list">
                  <div className="responsibility-item">
                    <h4>Information Accuracy</h4>
                    <p>Provide complete, accurate, and current information.</p>
                  </div>
                  <div className="responsibility-item">
                    <h4>Regulatory Compliance</h4>
                    <p>Comply with all applicable pharmaceutical regulations.</p>
                  </div>
                  <div className="responsibility-item">
                    <h4>Timely Response</h4>
                    <p>Respond promptly to communications and provide documentation.</p>
                  </div>
                  <div className="responsibility-item">
                    <h4>Confidentiality Maintenance</h4>
                    <p>Maintain confidentiality of shared information.</p>
                  </div>
                  <div className="responsibility-item">
                    <h4>Payment Obligations</h4>
                    <p>Fulfill all financial obligations as outlined in agreements.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="confidentiality" className="legal-section">
              <h2>Confidentiality</h2>
              <div className="section-content">
                <p>Confidentiality is fundamental to our pharmaceutical intelligence services:</p>
                
                <div className="confidentiality-framework">
                  <div className="confidentiality-item">
                    <h4>Information Protection</h4>
                    <p>All client information is treated as confidential and protected.</p>
                  </div>
                  <div className="confidentiality-item">
                    <h4>Non-Disclosure</h4>
                    <p>We do not disclose client information without explicit consent.</p>
                  </div>
                  <div className="confidentiality-item">
                    <h4>Employee Obligations</h4>
                    <p>All team members sign confidentiality agreements.</p>
                  </div>
                  <div className="confidentiality-item">
                    <h4>Data Retention</h4>
                    <p>Client data is retained only as necessary for service delivery.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="fees-payment" className="legal-section">
              <h2>Fees & Payment Terms</h2>
              <div className="section-content">
                <p>Our fee structure is designed to align with your success:</p>
                
                <div className="fee-structure">
                  <div className="fee-item">
                    <h4>Consultation Fees</h4>
                    <p>Initial assessment and strategic planning fees.</p>
                  </div>
                  <div className="fee-item">
                    <h4>Success-Based Fees</h4>
                    <p>Transaction completion fees tied to successful outcomes.</p>
                  </div>
                  <div className="fee-item">
                    <h4>Retainer Arrangements</h4>
                    <p>Monthly retainers for ongoing advisory services.</p>
                  </div>
                  <div className="fee-item">
                    <h4>Expense Reimbursement</h4>
                    <p>Travel, due diligence, and other approved expenses.</p>
                  </div>
                </div>

                <div className="payment-terms">
                  <h4>Payment Terms:</h4>
                  <ul>
                    <li>Payments due within 30 days of invoice</li>
                    <li>Late payments subject to interest charges</li>
                    <li>Payment methods: Bank transfer, check, or wire</li>
                    <li>Currency: Indian Rupees (INR) unless otherwise agreed</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="intellectual-property" className="legal-section">
              <h2>Intellectual Property</h2>
              <div className="section-content">
                <p>Intellectual property rights are clearly defined to protect both parties:</p>
                
                <div className="ip-framework">
                  <div className="ip-item">
                    <h4>ENSA Pharma IP</h4>
                    <p>All methodologies, databases, and analytical tools remain our intellectual property.</p>
                  </div>
                  <div className="ip-item">
                    <h4>Client IP</h4>
                    <p>Client retains all rights to their existing intellectual property.</p>
                  </div>
                  <div className="ip-item">
                    <h4>Deliverables</h4>
                    <p>Clients receive usage rights for deliverables specific to their engagement.</p>
                  </div>
                  <div className="ip-item">
                    <h4>Third-Party IP</h4>
                    <p>Respect for third-party intellectual property rights.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="disclaimers" className="legal-section">
              <h2>Disclaimers & Limitations</h2>
              <div className="section-content">
                <p>Our services are provided with the following disclaimers and limitations:</p>
                
                <div className="disclaimer-box">
                  <h4>Service Disclaimers:</h4>
                  <ul>
                    <li>We do not guarantee specific transaction outcomes or timelines</li>
                    <li>Market conditions and regulatory environments are beyond our control</li>
                    <li>Third-party decisions and approvals cannot be guaranteed</li>
                    <li>Intelligence is based on available information at analysis time</li>
                  </ul>
                </div>

                <div className="limitation-box">
                  <h4>Limitation of Liability:</h4>
                  <p>Our liability is limited to the fees paid for services in the six months preceding the claim. We are not liable for indirect, consequential, or punitive damages.</p>
                </div>
              </div>
            </section>

            <section id="termination" className="legal-section">
              <h2>Termination</h2>
              <div className="section-content">
                <p>Either party may terminate the engagement under the following conditions:</p>
                
                <div className="termination-conditions">
                  <div className="condition-item">
                    <h4>Notice Period</h4>
                    <p>30 days written notice for termination without cause, 15 days for termination with cause.</p>
                  </div>
                  <div className="condition-item">
                    <h4>Final Settlement</h4>
                    <p>All outstanding fees and expenses must be paid within 15 days of termination.</p>
                  </div>
                  <div className="condition-item">
                    <h4>Data Return</h4>
                    <p>Client data and deliverables must be returned or destroyed upon request.</p>
                  </div>
                  <div className="condition-item">
                    <h4>Survival</h4>
                    <p>Confidentiality and IP provisions survive termination.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="governing-law" className="legal-section">
              <h2>Governing Law & Jurisdiction</h2>
              <div className="section-content">
                <div className="governing-info">
                  <h4>Governing Law:</h4>
                  <p>These Terms of Service are governed by and construed in accordance with the laws of India.</p>
                  
                  <h4>Jurisdiction:</h4>
                  <p>Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, India.</p>
                  
                  <h4>Compliance:</h4>
                  <p>Services comply with applicable Indian pharmaceutical regulations and international best practices.</p>
                </div>
              </div>
            </section>

            <section id="contact" className="legal-section">
              <h2>Contact Information</h2>
              <div className="section-content">
                <div className="contact-grid">
                  <div className="contact-item">
                    <h4>Legal Department</h4>
                    <p>For questions about these Terms of Service</p>
                    <p>Email: legal@ensa.com</p>
                  </div>
                  <div className="contact-item">
                    <h4>Client Services</h4>
                    <p>For service-related inquiries</p>
                    <p>Email: info@ensa.com</p>
                  </div>
                  <div className="contact-item">
                    <h4>Phone</h4>
                    <p>+91 91541 69469</p>
                  </div>
                  <div className="contact-item">
                    <h4>Corporate Office</h4>
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

export default TermsOfService
