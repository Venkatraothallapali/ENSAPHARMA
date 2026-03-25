import type { ReactNode } from 'react'

type HeroProps = {
  title: string
  subtitle?: string
  description?: string
  supportingStatement?: string
  primaryCta?: ReactNode
  secondaryCta?: ReactNode
  className?: string
}

function Hero({ subtitle, description, supportingStatement, primaryCta, secondaryCta, className }: HeroProps) {
  return (
    <section className={`hero-section ${className ?? ''}`}>
      <div className="hero-background">
        <div className="hero-overlay" />
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          
          {subtitle && (
            <div className="value-proposition-marquee-wrapper">
              <div className="marquee-content">
                <span className="marquee-text">{subtitle}</span> • 
                <span className="marquee-text">{subtitle}</span> • 
                <span className="marquee-text">{subtitle}</span> • 
                <span className="marquee-text">{subtitle}</span> • 
              </div>
            </div>
          )}
          
          {description && <p className="hero-description">{description}</p>}
          
          {supportingStatement && <p className="hero-supporting-statement">{supportingStatement}</p>}
          
          {(primaryCta || secondaryCta) && (
            <div className="hero-actions">
              {primaryCta}
              {secondaryCta}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
