import React from 'react'
import './ServicesPageTitle.css'

interface ServicesPageTitleProps {
  subtitle?: string
  children: React.ReactNode
}

function ServicesPageTitle({ subtitle, children }: ServicesPageTitleProps) {
  return (
    <div className="services-page-title-wrapper">
      <h2 className="services-page-title">OUR CORE SERVICES</h2>
      {subtitle && <p className="services-page-subtitle">{subtitle}</p>}
      <div className="services-page-content">
        {children}
      </div>
    </div>
  )
}

export default ServicesPageTitle
