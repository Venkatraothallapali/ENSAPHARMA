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
      <div className="container hero-grid" style={{
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/services_ENSA.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(0.8px) brightness(0.5)',
          zIndex: -1
        }} />
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
        <div className="hero-right" style={{ marginTop: '-20px' }}>
          <PharmaOrbit />
        </div>
      </div>
    </section>
  )
}

export default Hero
