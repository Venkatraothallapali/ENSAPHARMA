import React from 'react'
import './StrategicApproach.css'

interface StrategicApproachProps {
  id?: string
  subtitle?: string
  children: React.ReactNode
}

function StrategicApproach({ id, subtitle, children }: StrategicApproachProps) {
  return (
    <div id={id} className="home-strategic-approach-wrapper">
      <h2 className="home-strategic-approach-title">Our Strategic Approach</h2>
      {subtitle && <p className="home-strategic-approach-subtitle">{subtitle}</p>}
      <div className="home-strategic-approach-content">
        {children}
      </div>
    </div>
  )
}

export default StrategicApproach
