import Section from '../components/Section'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="about-page">
      {/* 1. HERO SECTION - Matching Home Page Hero */}
      <section className="about-hero-section">
        <div className="about-hero-background">
          <div className="about-hero-overlay" />
        </div>
        
        <div className="about-hero-container">
          <div className="about-hero-content">
            <div className="value-proposition-marquee-wrapper">
              <div className="marquee-content">
                <span className="marquee-text">Strategic pharmaceutical business development platform enabling companies to expand globally, commercialize pharmaceutical assets, and unlock long-term value across regulated and emerging markets.</span> • 
                <span className="marquee-text">Strategic pharmaceutical business development platform enabling companies to expand globally, commercialize pharmaceutical assets, and unlock long-term value across regulated and emerging markets.</span> • 
                <span className="marquee-text">Strategic pharmaceutical business development platform enabling companies to expand globally, commercialize pharmaceutical assets, and unlock long-term value across regulated and emerging markets.</span> • 
                <span className="marquee-text">Strategic pharmaceutical business development platform enabling companies to expand globally, commercialize pharmaceutical assets, and unlock long-term value across regulated and emerging markets.</span> • 
              </div>
            </div>
            
            <p className="about-hero-description">
              ENSA Pharma is a strategic pharmaceutical business development platform that enables 
              companies to expand globally, commercialize pharmaceutical assets, and unlock long-term 
              value across regulated and emerging markets.
            </p>
          </div>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW */}
      <Section className="about-section-white">
        <div className="about-content-wrapper">
          <div className="about-section-header">
            <h2 className="about-section-title">Company Overview</h2>
            <p className="about-section-subtitle">
              Bridging scientific excellence with global commercial opportunity in the pharmaceutical landscape.
            </p>
          </div>
          
          <div className="about-grid about-grid-asymmetric">
            <div>
              <p className="about-paragraph">
                The pharmaceutical industry operates in a complex global environment where regulatory 
                frameworks, market access strategies, and commercial partnerships must align for 
                successful product development and commercialization. Many companies possess strong 
                scientific capabilities but often face challenges in translating these strengths into 
                sustainable global business opportunities.
              </p>
              <p className="about-paragraph">
                ENSA Pharma addresses this gap by connecting key participants across the pharmaceutical 
                value chain and enabling structured collaborations that support global growth.
              </p>
            </div>
            <div className="about-card">
              <h3 style={{ fontSize: 'var(--heading-card)', fontWeight: 'var(--font-weight-subheading)', color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
                Strategic Approach
              </h3>
              <p className="about-paragraph" style={{ marginBottom: 0 }}>
                We function as strategic connectors, bringing together the right partners to support 
                commercialization, licensing, and long-term business development across the pharmaceutical ecosystem.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. THE ENSA PHARMA PLATFORM */}
      <Section className="about-section-alt">
        <div className="about-content-wrapper">
          <div className="about-section-header">
            <h2 className="about-section-title">The ENSA Pharma Platform</h2>
            <p className="about-section-subtitle">
              Operating at the intersection of science, regulation, commercialization, and investment.
            </p>
          </div>
          
          <div className="about-grid about-grid-3">
            <div className="about-panel">
              <h4 style={{ fontSize: 'var(--heading-small)', fontWeight: 'var(--font-weight-subheading)', color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
                Science & Innovation
              </h4>
              <p className="about-paragraph" style={{ marginBottom: 0, fontSize: 'var(--text-secondary)' }}>
                Connecting cutting-edge research with commercial opportunities through strategic partnerships.
              </p>
            </div>
            <div className="about-panel">
              <h4 style={{ fontSize: 'var(--heading-small)', fontWeight: 'var(--font-weight-subheading)', color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
                Regulatory Excellence
              </h4>
              <p className="about-paragraph" style={{ marginBottom: 0, fontSize: 'var(--text-secondary)' }}>
                Navigating complex regulatory frameworks across regulated and emerging markets.
              </p>
            </div>
            <div className="about-panel">
              <h4 style={{ fontSize: 'var(--heading-small)', fontWeight: 'var(--font-weight-subheading)', color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
                Commercial Strategy
              </h4>
              <p className="about-paragraph" style={{ marginBottom: 0, fontSize: 'var(--text-secondary)' }}>
                Developing market access strategies and commercial partnerships for global success.
              </p>
            </div>
          </div>
          
          <div style={{ marginTop: 'var(--spacing-section)' }}>
            <p className="about-paragraph">
              Through expertise in API commercialization, product licensing, mergers and acquisitions, 
              and capital advisory, ENSA Pharma facilitates cross-border collaborations that enable 
              companies to expand product portfolios, access new markets, and unlock the full value 
              of pharmaceutical assets.
            </p>
            <p className="about-paragraph">
              Rather than acting solely as an advisory service, ENSA Pharma functions as a strategic 
              connector within the pharmaceutical ecosystem, bringing together the right partners to 
              support commercialization, licensing, and long-term business development.
            </p>
          </div>
        </div>
      </Section>

      {/* Visual Divider */}
      <div className="about-divider"></div>

      {/* 4. MISSION & VISION */}
      <Section className="about-section-white">
        <div className="about-content-wrapper">
          <div className="about-mission-vision">
            <div className="about-card">
              <h2 className="about-section-title" style={{ fontSize: 'var(--heading-subsection)' }}>Mission</h2>
              <p className="about-paragraph">
                To enable pharmaceutical companies to translate scientific capability into global commercial 
                success through strategic partnerships, licensing opportunities, and investment facilitation.
              </p>
            </div>
            <div className="about-card">
              <h2 className="about-section-title" style={{ fontSize: 'var(--heading-subsection)' }}>Vision</h2>
              <p className="about-paragraph">
                To become a trusted global platform connecting pharmaceutical innovation with international 
                markets, strategic partners, and investment capital.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. GLOBAL IMPACT METRICS */}
      <Section className="about-section-alt">
        <div className="about-content-wrapper">
          <div className="about-section-header">
            <h2 className="about-section-title">Global Impact</h2>
            <p className="about-section-subtitle">
              Measurable success across the pharmaceutical value chain.
            </p>
          </div>
          
          <div className="about-metrics">
            <div className="about-metric">
              <div className="about-metric-number">50+</div>
              <div className="about-metric-label">Global Markets</div>
            </div>
            <div className="about-metric">
              <div className="about-metric-number">200+</div>
              <div className="about-metric-label">Strategic Partners</div>
            </div>
            <div className="about-metric">
              <div className="about-metric-number">$2B+</div>
              <div className="about-metric-label">Value Facilitated</div>
            </div>
            <div className="about-metric">
              <div className="about-metric-number">15+</div>
              <div className="about-metric-label">Years Experience</div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. LEADERSHIP PERSPECTIVE */}
      <Section className="about-section-white">
        <div className="about-content-wrapper">
          <div className="about-section-header">
            <h2 className="about-section-title">Leadership Perspective</h2>
            <p className="about-section-subtitle">
              Deep industry expertise driving strategic growth.
            </p>
          </div>
          
          <div className="about-grid about-grid-2">
            <div>
              <p className="about-paragraph">
                The leadership at ENSA Pharma brings together extensive experience across pharmaceutical 
                manufacturing, regulatory strategy, global commercialization, and strategic partnerships. 
                With a deep understanding of the pharmaceutical value chain—from API development and 
                formulation manufacturing to licensing collaborations and investment strategy—the team 
                focuses on building meaningful industry connections that support sustainable growth.
              </p>
            </div>
            <div className="about-card">
              <h4 style={{ fontSize: 'var(--heading-small)', fontWeight: 'var(--font-weight-subheading)', color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
                Our Expertise
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: 'var(--spacing-sm)', fontSize: 'var(--text-secondary)' }}>• Pharmaceutical Manufacturing</li>
                <li style={{ marginBottom: 'var(--spacing-sm)', fontSize: 'var(--text-secondary)' }}>• Regulatory Strategy</li>
                <li style={{ marginBottom: 'var(--spacing-sm)', fontSize: 'var(--text-secondary)' }}>• Global Commercialization</li>
                <li style={{ marginBottom: 'var(--spacing-sm)', fontSize: 'var(--text-secondary)' }}>• Strategic Partnerships</li>
                <li style={{ fontSize: 'var(--text-secondary)' }}>• Investment Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. GLOBAL NETWORK */}
      <Section className="about-section-alt">
        <div className="about-content-wrapper">
          <div className="about-section-header">
            <h2 className="about-section-title">Global Network</h2>
            <p className="about-section-subtitle">
              Connecting pharmaceutical innovation worldwide.
            </p>
          </div>
          
          <p className="about-paragraph">
            ENSA Pharma operates through a growing global network of pharmaceutical manufacturers, 
            CROs and BA/BE centers, commercialization partners, regulatory experts, and strategic 
            investors. This network enables the platform to identify opportunities, connect relevant 
            stakeholders, and facilitate partnerships that support product development, licensing, 
            and international market expansion.
          </p>
          
          <p className="about-paragraph">
            By bridging scientific capability with commercial strategy, ENSA Pharma helps organizations 
            transform pharmaceutical innovation into sustainable global business opportunities.
          </p>
          
          <div className="about-grid about-grid-3" style={{ marginTop: 'var(--spacing-section)' }}>
            <div className="about-panel">
              <h4 style={{ fontSize: 'var(--heading-small)', fontWeight: 'var(--font-weight-subheading)', color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
                North America
              </h4>
              <p className="about-paragraph" style={{ marginBottom: 0, fontSize: 'var(--text-secondary)' }}>
                US & Canada markets with FDA regulatory expertise and established pharmaceutical networks.
              </p>
            </div>
            <div className="about-panel">
              <h4 style={{ fontSize: 'var(--heading-small)', fontWeight: 'var(--font-weight-subheading)', color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
                Europe
              </h4>
              <p className="about-paragraph" style={{ marginBottom: 0, fontSize: 'var(--text-secondary)' }}>
                EU & UK markets with EMA regulatory expertise and comprehensive market access strategies.
              </p>
            </div>
            <div className="about-panel">
              <h4 style={{ fontSize: 'var(--heading-small)', fontWeight: 'var(--font-weight-subheading)', color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
                Asia-Pacific
              </h4>
              <p className="about-paragraph" style={{ marginBottom: 0, fontSize: 'var(--text-secondary)' }}>
                India, Japan, Australia & emerging markets with local regulatory and commercial expertise.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default AboutPage
