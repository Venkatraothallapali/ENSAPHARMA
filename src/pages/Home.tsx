import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import StrategicApproach from '../components/StrategicApproach'
import IndustrySectors from '../components/IndustrySectors'
import './Home.css'
import EcosystemDiagram from '../components/EcosystemDiagram'
import ServiceCard from '../components/ServiceCard'

const strategicCards = [
  { 
    title: 'Products', 
    description: 'Identifying and commercializing high-value pharmaceutical assets through structured licensing and commercialization strategies.' 
  },
  { 
    title: 'Partnerships', 
    description: 'Building global collaborations between pharmaceutical companies, API manufacturers, CROs, and investors that support international market expansion.' 
  },
  { 
    title: 'Capital', 
    description: 'Connecting pharmaceutical companies with strategic investors and financial partners to support business growth and long-term innovation.' 
  },
]

function Home() {
  return (
    <>
      <Hero
        title=""
        subtitle="Global Partnerships & Strategic Growth for the Pharmaceutical Industry"
        description="ENSA Pharma supports pharmaceutical companies in expanding internationally, commercializing high-value assets, and building strategic partnerships across regulated and emerging markets."
        supportingStatement="From API commercialization and product licensing to M&A advisory and capital facilitation, ENSA Pharma connects pharmaceutical companies and investors to unlock global growth opportunities."
        primaryCta={<Link to="/services" className="global-btn global-btn-primary">Explore Services</Link>}
        secondaryCta={<Link to="/contact" className="global-btn global-btn-secondary">Partner With Us</Link>}
      />

      <div className="home-ecosystem-section">
        <h2 className="home-ecosystem-title">ENSA Pharma Ecosystem</h2>
        <p className="home-ecosystem-subtitle">The Strategic Connector in Pharmaceutical Value Chain</p>
        <EcosystemDiagram />
      </div>

      <StrategicApproach id="our-strategic-approach" subtitle="Our work is built around three pillars of pharmaceutical growth.">
        <div className="global-card-grid">
          {strategicCards.map((c) => (
            <ServiceCard key={c.title} title={c.title} description={c.description} />
          ))}
        </div>
      </StrategicApproach>

      <IndustrySectors>
        <div id="industry-sectors-we-serve" className="home-industry-sectors-wrapper">
          <h2 className="home-industry-sectors-main-title">INDUSTRY SECTORS WE SERVE</h2>
          <p className="home-industry-sectors-main-subtitle">Strategic partnerships across the pharmaceutical ecosystem</p>
          <p className="home-industry-sectors-description">
            ENSA Pharma works across key segments of pharmaceutical ecosystem, enabling strategic collaboration and growth opportunities for multiple industry stakeholders.
          </p>
          
          <div className="home-industry-sectors-content-wrapper">
            <div className="home-industry-sectors-grid">
              <ServiceCard 
                key="api-manufacturers"
                title="API Manufacturers"
                description="We support API manufacturers in expanding their global commercial reach and establishing long-term supply partnerships."
              />
              <ServiceCard 
                key="pharmaceutical-companies"
                title="Pharmaceutical Companies"
                description="We help pharmaceutical companies identify licensing opportunities, manufacturing partnerships, and market access strategies across regulated and emerging markets."
              />
              <ServiceCard 
                key="cros-be-centers"
                title="CROs and BA/BE Centers"
                description="We connect research organizations with pharmaceutical companies seeking clinical research, bioequivalence studies, and regulatory submission support."
              />
              <ServiceCard 
                key="investors-strategic-funds"
                title="Investors and Strategic Funds"
                description="In addition, ENSA Pharma works with investors and strategic funds to identify high-potential pharmaceutical assets and facilitate mergers, acquisitions, and growth capital opportunities within the life sciences sector."
              />
            </div>
          </div>
      </div>
      </IndustrySectors>

      {/* Strategic Partnerships Section */}
      <div id="strategic-partnerships" className="home-strategic-partnerships-wrapper">
        <h2 className="home-strategic-partnerships-main-title">STRATEGIC PARTNERSHIPS</h2>
        <p className="home-strategic-partnerships-main-subtitle">A Global Collaboration Network</p>
        <p className="home-strategic-partnerships-description">
          Strategic partnerships form the foundation of ENSA Pharma's approach to enabling sustainable growth within the pharmaceutical industry.
        </p>
        
        <div className="home-strategic-partnerships-content-wrapper">
          <div className="home-strategic-partnerships-grid">
            <div className="industry-sector">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 className="industry-sector-title" style={{ margin: 0 }}>Product Licensing Partnerships</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="industry-sector-description" style={{ marginTop: 8 }}>
                Structured licensing opportunities between pharmaceutical companies and manufacturing partners across global markets.
              </p>
            </div>
            <div className="industry-sector">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 className="industry-sector-title" style={{ margin: 0 }}>API Supply Collaborations</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="industry-sector-description" style={{ marginTop: 8 }}>
                Long-term supply partnerships between API manufacturers and pharmaceutical companies ensuring quality and reliability.
              </p>
            </div>
            <div className="industry-sector">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 className="industry-sector-title" style={{ margin: 0 }}>CRO Study Partnerships</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="industry-sector-description" style={{ marginTop: 8 }}>
                Strategic collaborations between research organizations and pharmaceutical companies for clinical development programs.
              </p>
            </div>
            <div className="industry-sector">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 className="industry-sector-title" style={{ margin: 0 }}>International Market Entry</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="industry-sector-description" style={{ marginTop: 8 }}>
                Market access strategies and partnerships for pharmaceutical companies expanding into regulated and emerging markets.
              </p>
            </div>
            <div className="industry-sector">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 className="industry-sector-title" style={{ margin: 0 }}>Strategic Investment</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="industry-sector-description" style={{ marginTop: 8 }}>
                Connecting pharmaceutical companies with investors and financial partners for growth capital and M&A opportunities.
              </p>
            </div>
            <div className="industry-sector">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 className="industry-sector-title" style={{ margin: 0 }}>Technology Transfer</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="industry-sector-description" style={{ marginTop: 8 }}>
                Facilitating technology transfer agreements and knowledge sharing between pharmaceutical innovators and manufacturing partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Insights / Market Intelligence Section */}
      <div id="market-intelligence" className="home-insights-wrapper">
        <h2 className="home-insights-main-title">INSIGHTS / MARKET INTELLIGENCE</h2>
        <p className="home-insights-main-subtitle">Pharma Trends & Opportunities</p>
        <p className="home-insights-description">
          ENSA Pharma provides strategic insights and market intelligence to support informed decision-making in pharmaceutical business development, licensing, and investment activities.
        </p>
        
        <div className="home-insights-content-wrapper">
          <div className="home-insights-grid">
            <div className="industry-sector">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 className="industry-sector-title" style={{ margin: 0 }}>API Supply Chain Trends</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="industry-sector-description" style={{ marginTop: 8 }}>
                Analysis of global API manufacturing dynamics, supply chain resilience, and emerging sourcing strategies.
              </p>
            </div>
            <div className="industry-sector">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 className="industry-sector-title" style={{ margin: 0 }}>Global Licensing Opportunities</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="industry-sector-description" style={{ marginTop: 8 }}>
                Identification of high-value licensing opportunities across regulated and emerging pharmaceutical markets.
              </p>
            </div>
            <div className="industry-sector">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 className="industry-sector-title" style={{ margin: 0 }}>Regulatory Developments</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="industry-sector-description" style={{ marginTop: 8 }}>
                Comprehensive analysis of regulatory changes across major markets and their impact on market access.
              </p>
            </div>
            <div className="industry-sector">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 className="industry-sector-title" style={{ margin: 0 }}>CRO & Clinical Partnerships</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="industry-sector-description" style={{ marginTop: 8 }}>
                Insights into CRO landscape evolution and strategic clinical development partnership opportunities.
              </p>
            </div>
            <div className="industry-sector">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 className="industry-sector-title" style={{ margin: 0 }}>Pharmaceutical Investment</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="industry-sector-description" style={{ marginTop: 8 }}>
                Analysis of investment patterns, M&A activity, and capital flows in the pharmaceutical sector.
              </p>
            </div>
            <div className="industry-sector">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 className="industry-sector-title" style={{ margin: 0 }}>Market Access Strategies</h4>
                <span className="badge">ENSA</span>
              </div>
              <p className="industry-sector-description" style={{ marginTop: 8 }}>
                Strategic insights into pricing, reimbursement, and market entry strategies across global pharmaceutical markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
