import { useState } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  
  const handleLinkClick = () => {
    window.scrollTo(0, 0)
    setOpen(false)
    setServicesOpen(false)
  }
  
  const handleServiceClick = () => {
    setServicesOpen(false)
  }
  
  const handleScrollToSection = (sectionId: string) => {
    setOpen(false)
    setServicesOpen(false)
    
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    } else {
      scrollToSection(sectionId)
    }
  }
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 72
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }
  
  const services = [
    { label: 'API Marketing', slug: 'api-marketing' },
    { label: 'In-Licensing Strategy', slug: 'in-licensing' },
    { label: 'Out-Licensing & Monetization', slug: 'out-licensing' },
    { label: 'Pharma M&A Advisory', slug: 'pharma-mna' },
    { label: 'Analytical & Testing Lab Marketing', slug: 'lab-marketing' },
    { label: 'BA/BE Site Representation', slug: 'babe-site' },
    { label: 'Fundraising & Capital Advisory', slug: 'capital-advisory' },
  ]
  return (
    <header className={`navbar solid`}>
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-badge" />
          <span>ENSA Pharma LLP</span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleLinkClick}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleLinkClick}>
            About
          </NavLink>
          <div
            className="nav-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-link" onClick={() => setServicesOpen((v) => !v)}>
              Services ▾
            </button>
            <div className={`dropdown-menu ${servicesOpen ? 'open' : ''}`}>
              {services.map((s) => (
                <Link key={s.slug} to={`/services?s=${s.slug}`} className="dropdown-item" onClick={handleServiceClick}>
                  {s.label}
                </Link>
              ))}
              <div className="dropdown-divider" />
              <Link to="/services" className="dropdown-item muted" onClick={handleLinkClick}>All Services</Link>
            </div>
          </div>
          <NavLink to="/ecosystem" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleLinkClick}>
            Ecosystem
          </NavLink>
          <button className="nav-link" onClick={() => handleScrollToSection('our-strategic-approach')}>
            Approach
          </button>
          <button className="nav-link" onClick={() => handleScrollToSection('industry-sectors-we-serve')}>
            Sectors
          </button>
          <button className="nav-link" onClick={() => handleScrollToSection('strategic-partnerships')}>
            Partnerships
          </button>
          <button className="nav-link" onClick={() => handleScrollToSection('market-intelligence')}>
            Insights
          </button>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={handleLinkClick}>
            Contact Us
          </NavLink>
        </nav>
        <button className="mobile-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
          ☰
        </button>
      </div>
      <div className={`mobile-panel ${open ? 'open' : ''}`}>
        <div className="container mobile-panel-inner">
          <NavLink to="/" onClick={handleLinkClick} className="mobile-link">
            Home
          </NavLink>
          <NavLink to="/about" onClick={handleLinkClick} className="mobile-link">
            About
          </NavLink>
          <NavLink to="/services" onClick={handleLinkClick} className="mobile-link">
            Services
          </NavLink>
          <div style={{ display: 'grid', gap: 6 }}>
            {services.map((s) => (
              <Link key={s.slug} to={`/services?s=${s.slug}`} onClick={() => setOpen(false)} className="mobile-link" style={{ paddingLeft: 20, opacity: 0.9 }}>
                {s.label}
              </Link>
            ))}
          </div>
          <NavLink to="/ecosystem" onClick={handleLinkClick} className="mobile-link">
            Ecosystem
          </NavLink>
          <button onClick={() => handleScrollToSection('our-strategic-approach')} className="mobile-link">
            Approach
          </button>
          <button onClick={() => handleScrollToSection('industry-sectors-we-serve')} className="mobile-link">
            Sectors
          </button>
          <button onClick={() => handleScrollToSection('strategic-partnerships')} className="mobile-link">
            Partnerships
          </button>
          <button onClick={() => handleScrollToSection('market-intelligence')} className="mobile-link">
            Insights
          </button>
          <NavLink to="/contact" onClick={handleLinkClick} className="mobile-link">
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Navbar
