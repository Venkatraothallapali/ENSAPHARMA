import React from 'react'
import './IndustrySectors.css'

interface IndustrySectorsProps {
  children: React.ReactNode
}

function IndustrySectors({ children }: IndustrySectorsProps) {
  return (
    <div className="home-industry-sectors-section-wrapper">
      <div className="home-industry-sectors-content">
        {children}
      </div>
    </div>
  )
}

export default IndustrySectors
