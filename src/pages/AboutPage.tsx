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
          <p className="about-paragraph">
            ENSA Pharma is a strategic pharmaceutical business development platform that enables 
            companies to expand globally, commercialize pharmaceutical assets, and unlock long-term 
            value across regulated and emerging markets.
          </p>
        </div>
      </Section>

      {/* 2. COMPANY OVERVIEW */}
      <Section className="about-accent-bg">
        <div className="about-content-wrapper">
          <div className="about-section-header">
            <h2 className="about-section-title">Company Overview</h2>
          </div>
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
      </Section>

      {/* 3. THE ENSA PHARMA PLATFORM */}
      <Section>
        <div className="about-content-wrapper">
          <div className="about-section-header">
            <h2 className="about-section-title">The ENSA Pharma Platform</h2>
          </div>
          <p className="about-paragraph">
            ENSA Pharma operates at the intersection of science, regulation, commercialization, and investment, creating a platform where pharmaceutical companies, API manufacturers, CROs and BA/BE centers, and strategic investors can identify opportunities and build meaningful partnerships.
          </p>
          <p className="about-paragraph">
            Through expertise in API commercialization, product licensing, mergers and acquisitions, and capital advisory, ENSA Pharma facilitates cross-border collaborations that enable companies to expand product portfolios, access new markets, and unlock the full value of pharmaceutical assets.
          </p>
          <p className="about-paragraph">
            Rather than acting solely as an advisory service, ENSA Pharma functions as a strategic connector within the pharmaceutical ecosystem, bringing together the right partners to support commercialization, licensing, and long-term business development.
          </p>
        </div>
      </Section>

      {/* 4. MISSION */}
      <Section className="about-accent-bg">
        <div className="about-content-wrapper">
          <div className="about-section-header">
            <h2 className="about-section-title">Mission</h2>
          </div>
          <p className="about-paragraph">
            To enable pharmaceutical companies to translate scientific capability into global commercial success through strategic partnerships, licensing opportunities, and investment facilitation.
          </p>
        </div>
      </Section>

      {/* 5. VISION */}
      <Section>
        <div className="about-content-wrapper">
          <div className="about-section-header">
            <h2 className="about-section-title">Vision</h2>
          </div>
          <p className="about-paragraph">
            To become a trusted global platform connecting pharmaceutical innovation with international markets, strategic partners, and investment capital.
          </p>
        </div>
      </Section>

      {/* 6. LEADERSHIP PERSPECTIVE */}
      <Section className="about-accent-bg">
        <div className="about-content-wrapper">
          <div className="about-section-header">
            <h2 className="about-section-title">Leadership Perspective</h2>
          </div>
          <p className="about-paragraph">
            The leadership at ENSA Pharma brings together extensive experience across pharmaceutical manufacturing, regulatory strategy, global commercialization, and strategic partnerships. With a deep understanding of the pharmaceutical value chain—from API development and formulation manufacturing to licensing collaborations and investment strategy—the team focuses on building meaningful industry connections that support sustainable growth.
          </p>
        </div>
      </Section>

      {/* 7. GLOBAL NETWORK */}
      <Section>
        <div className="about-content-wrapper">
          <div className="about-section-header">
            <h2 className="about-section-title">Global Network</h2>
          </div>
          <p className="about-paragraph">
            ENSA Pharma operates through a growing global network of pharmaceutical manufacturers, CROs and BA/BE centers, commercialization partners, regulatory experts, and strategic investors. This network enables the platform to identify opportunities, connect relevant stakeholders, and facilitate partnerships that support product development, licensing, and international market expansion.
          </p>
          <p className="about-paragraph">
            By bridging scientific capability with commercial strategy, ENSA Pharma helps organizations transform pharmaceutical innovation into sustainable global business opportunities.
          </p>
        </div>
      </Section>

      {/* 8. GLOBAL FOOTPRINT */}
      <Section className="accent-bg">
        <div className="about-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p className="about-text">
            ENSA Pharma's strength lies in our extensive global network spanning pharmaceutical 
            companies, API manufacturers, contract research organizations, regulatory consultants, 
            and investment partners across multiple continents.
          </p>
          
          <div className="about-grid about-grid-3" style={{ gap: '24px', margin: '32px 0' }}>
            <div className="about-panel">
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '12px' }}>North America</h4>
              <p className="about-text" style={{ margin: 0, fontSize: '15px' }}>
                US & Canada markets with FDA regulatory expertise
              </p>
            </div>
            <div className="about-panel">
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '12px' }}>Europe</h4>
              <p className="about-text" style={{ margin: 0, fontSize: '15px' }}>
                EU markets with EMA regulatory framework access
              </p>
            </div>
            <div className="about-panel">
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '12px' }}>Gulf Cooperation Council</h4>
              <p className="about-text" style={{ margin: 0, fontSize: '15px' }}>
                Middle East markets with regional regulatory pathways
              </p>
            </div>
            <div className="about-panel">
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '12px' }}>Latin America</h4>
              <p className="about-text" style={{ margin: 0, fontSize: '15px' }}>
                Emerging markets with growing pharmaceutical demand
              </p>
            </div>
            <div className="about-panel">
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '12px' }}>Asia-Pacific</h4>
              <p className="about-text" style={{ margin: 0, fontSize: '15px' }}>
                Strategic manufacturing and research hub access
              </p>
            </div>
            <div className="about-panel">
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '12px' }}>India</h4>
              <p className="about-text" style={{ margin: 0, fontSize: '15px' }}>
                World's largest generic pharmaceutical manufacturing base
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
