import Section from '../components/Section'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
      <Section className="about-hero-section">
        <div className="about-content-wrapper">
          <h1 className="about-hero-title">Company Overview</h1>
          <p className="about-hero-subtitle">
            ENSA Pharma is a strategic pharmaceutical business development platform that enables companies to expand globally, commercialize pharmaceutical assets, and unlock long-term value across regulated and emerging markets.
          </p>
        </div>
      </Section>

      {/* 2. COMPANY OVERVIEW */}
      <Section className="about-accent-bg">
        <div className="about-content-wrapper">
          <div className="about-story-card">
            <h2 className="about-overview-title">Story</h2>
            <p className="about-story-card-description" style={{ marginTop: 'var(--spacing-md)' }}>
              The pharmaceutical industry operates in a complex global environment where regulatory 
              frameworks, market access strategies, and commercial partnerships must align for 
              successful product development and commercialization. Many companies possess strong 
              scientific capabilities but often face challenges in translating these strengths into 
              sustainable global business opportunities.
            </p>
            <p className="about-story-card-description" style={{ marginTop: 'var(--spacing-md)' }}>
              ENSA Pharma addresses this gap by connecting key participants across the pharmaceutical 
              value chain and enabling structured collaborations that support global growth.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. THE ENSA PHARMA PLATFORM */}
      <Section>
        <div className="about-content-wrapper">
          <div className="about-platform-card">
            <h2 className="about-overview-title">The ENSA Pharma Platform</h2>
            <p className="about-platform-card-description" style={{ marginTop: 'var(--spacing-md)' }}>
              ENSA Pharma operates at the intersection of science, regulation, commercialization, and investment, creating a platform where pharmaceutical companies, API manufacturers, CROs and BA/BE centers, and strategic investors can identify opportunities and build meaningful partnerships.
            </p>
            <p className="about-platform-card-description" style={{ marginTop: 'var(--spacing-md)' }}>
              Through expertise in API commercialization, product licensing, mergers and acquisitions, and capital advisory, ENSA Pharma facilitates cross-border collaborations that enable companies to expand product portfolios, access new markets, and unlock the full value of pharmaceutical assets.
            </p>
            <p className="about-platform-card-description" style={{ marginTop: 'var(--spacing-md)' }}>
              Rather than acting solely as an advisory service, ENSA Pharma functions as a strategic connector within the pharmaceutical ecosystem, bringing together the right partners to support commercialization, licensing, and long-term business development.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. MISSION & VISION */}
      <Section>
        <div className="about-mission-vision-wrapper">
          <div className="about-section-header">
            <h2>Mission & Vision</h2>
          </div>
          <p className="premium-paragraph">
            Our core purpose and aspirations for the pharmaceutical industry
          </p>
          <div className="about-grid about-grid-2">
            <div className="about-mission-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 className="about-mission-card-title" style={{ margin: 0 }}>Mission</h3>
                <span className="badge">ENSA</span>
              </div>
              <p className="about-mission-card-description" style={{ marginTop: 8 }}>
                To enable pharmaceutical companies to translate scientific capability into global commercial success through strategic partnerships, licensing opportunities, and investment facilitation.
              </p>
            </div>
            <div className="about-vision-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 className="about-vision-card-title" style={{ margin: 0 }}>Vision</h3>
                <span className="badge">ENSA</span>
              </div>
              <p className="about-vision-card-description" style={{ marginTop: 8 }}>
                To become a trusted global platform connecting pharmaceutical innovation with international markets, strategic partners, and investment capital.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. LEADERSHIP PERSPECTIVE */}
      <Section className="about-accent-bg">
        <div className="about-content-wrapper">
          <div className="about-leadership-card">
            <h2 className="about-overview-title">Leadership Perspective</h2>
            <p className="about-leadership-card-description" style={{ marginTop: 'var(--spacing-md)' }}>
              The leadership at ENSA Pharma brings together extensive experience across pharmaceutical manufacturing, regulatory strategy, global commercialization, and strategic partnerships. With a deep understanding of the pharmaceutical value chain—from API development and formulation manufacturing to licensing collaborations and investment strategy—the team focuses on building meaningful industry connections that support sustainable growth.
            </p>
          </div>
        </div>
      </Section>

      {/* 7. GLOBAL NETWORK */}
      <Section>
        <div className="about-content-wrapper">
          <div className="about-section-header">
            <h2>Global Network</h2>
          </div>
          <p className="about-network-card-description">
            ENSA Pharma operates through a growing global network of pharmaceutical manufacturers, CROs and BA/BE centers, commercialization partners, regulatory experts, and strategic investors. This network enables the platform to identify opportunities, connect relevant stakeholders, and facilitate partnerships that support product development, licensing, and international market expansion.
          </p>
          <p className="about-network-card-description" style={{ marginTop: 'var(--spacing-md)' }}>
            By bridging scientific capability with commercial strategy, ENSA Pharma helps organizations transform pharmaceutical innovation into sustainable global business opportunities.
          </p>
          <p className="about-network-card-description" style={{ marginTop: 'var(--spacing-md)' }}>
            ENSA Pharma's strength lies in our extensive global network spanning pharmaceutical companies, API manufacturers, contract research organizations, regulatory consultants, and investment partners across multiple continents.
          </p>
        </div>
      </Section>

      {/* 8. GLOBAL FOOTPRINT */}
      <Section className="accent-bg">
        <div className="about-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="about-grid about-grid-3" style={{ gap: '24px', margin: '32px 0' }}>
            <div className="about-region-panel">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '12px', margin: 0 }}>North America</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="about-region-panel-text" style={{ margin: 0, fontSize: '15px', marginTop: '12px' }}>
                US & Canada markets with FDA regulatory expertise
              </p>
            </div>
            <div className="about-region-panel">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '12px', margin: 0 }}>Europe</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="about-region-panel-text" style={{ margin: 0, fontSize: '15px', marginTop: '12px' }}>
                EU markets with EMA regulatory framework access
              </p>
            </div>
            <div className="about-region-panel">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '12px', margin: 0 }}>Gulf Cooperation Council</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="about-region-panel-text" style={{ margin: 0, fontSize: '15px', marginTop: '12px' }}>
                Middle East markets with regional regulatory pathways
              </p>
            </div>
            <div className="about-region-panel">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '12px', margin: 0 }}>Latin America</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="about-region-panel-text" style={{ margin: 0, fontSize: '15px', marginTop: '12px' }}>
                Emerging markets with growing pharmaceutical demand
              </p>
            </div>
            <div className="about-region-panel">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '12px', margin: 0 }}>Asia-Pacific</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="about-region-panel-text" style={{ margin: 0, fontSize: '15px', marginTop: '12px' }}>
                Strategic manufacturing and research hub access
              </p>
            </div>
            <div className="about-region-panel">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '12px', margin: 0 }}>India</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="about-region-panel-text" style={{ margin: 0, fontSize: '15px', marginTop: '12px' }}>
                World's largest generic manufacturer and API supplier
              </p>
            </div>
          </div>
          
          <p className="about-text">
            This global footprint enables us to identify opportunities, facilitate partnerships, 
            and execute transactions across borders with cultural awareness, regulatory insight, 
            and market intelligence that drives successful outcomes.
          </p>
        </div>
      </Section>
    </div>
  )
}

export default AboutPage
