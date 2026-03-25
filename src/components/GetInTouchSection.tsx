import React from 'react'
import './GetInTouchSection.css'

interface GetInTouchSectionProps {
  subtitle?: string
  children: React.ReactNode
}

function GetInTouchSection({ subtitle, children }: GetInTouchSectionProps) {
  return (
    <div className="get-in-touch-wrapper">
      <div className="get-in-touch-header">
        <h2 className="get-in-touch-title">Get In Touch</h2>
        {subtitle && <p className="get-in-touch-subtitle">{subtitle}</p>}
      </div>
      <div className="get-in-touch-content">
        {children}
      </div>
    </div>
  )
}

export default GetInTouchSection
