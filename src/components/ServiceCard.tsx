type CardProps = {
  title: string
  description?: string
  bullets?: string[]
  onClick?: () => void
}

function ServiceCard({ title, description, bullets, onClick }: CardProps) {
  return (
    <div className="card" style={{ padding: 18 }} onClick={onClick}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 700 }}>{title}</div>
        <span className="badge">ENSA</span>
      </div>
      {description && <div className="muted" style={{ marginTop: 8 }}>{description}</div>}
      {bullets && bullets.length > 0 && (
        <ul style={{ marginTop: 10, paddingLeft: 18, color: 'var(--color-text-dim)' }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ margin: '6px 0' }}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ServiceCard
