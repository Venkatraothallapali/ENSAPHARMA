import type { ReactNode } from 'react'
import PharmaOrbit from './PharmaOrbit'

type HeroProps = {
  title: string
  subtitle?: string
  tagline?: string
  paragraph?: string
  primaryCta?: ReactNode
  secondaryCta?: ReactNode
  className?: string
}

function Hero({ title, subtitle, tagline, paragraph, primaryCta, secondaryCta, className }: HeroProps) {
  return (
    <section className={`hero ${className ?? ''}`}>
      <div className="container hero-grid">
        <div className="hero-left">
          <h1 className="hero-title">{title}</h1>
          {subtitle && <div className="hero-subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />}
          {tagline && <div className="hero-tagline">{tagline}</div>}
          {paragraph && <p className="hero-text">{paragraph}</p>}
          <div className="hero-actions">
            {primaryCta}
            {secondaryCta}
          </div>
        </div>
        <div className="hero-right">
          <PharmaOrbit />
        </div>
      </div>
    </section>
  )
}

export default Hero
