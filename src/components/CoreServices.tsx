import React from 'react'
import './CoreServices.css'

interface CoreServicesProps {
  children: React.ReactNode
}

function CoreServices({ children }: CoreServicesProps) {
  return (
    <div className="core-services-wrapper">
      <h2 className="core-services-title">OUR CORE SERVICES</h2>
      <div className="core-services-content">
        {children}
      </div>
    </div>
  )
}

export default CoreServices
