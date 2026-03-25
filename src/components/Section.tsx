type SectionProps = {
  title?: string
  subtitle?: string
  accent?: boolean
  className?: string
  id?: string
  children: React.ReactNode
}

function Section({ title, subtitle, accent, className, id, children }: SectionProps) {
  return (
    <section id={id} className={`section ${accent ? 'accent-bg' : ''} ${className ?? ''}`}>
      <div className="global-container">
        {(title || subtitle) && (
          <div className="section-header">
            {title && <div className="section-title">{title}</div>}
            {subtitle && <div className="section-subtitle">{subtitle}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
