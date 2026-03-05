import ContactForm from '../components/ContactForm'
import Section from '../components/Section'

function ContactPage() {
  return (
    <>
      <Section title="Connect With ENSA Pharma LLP" subtitle="Strategic pharmaceutical partnerships and confidential transaction facilitation." className="reduced-padding reduced-padding-bottom">
        <div style={{ display: 'grid', gap: 24, maxWidth: '100%' }}>
          <div className="card" style={{ padding: 20, borderLeft: '4px solid #1e82c9', width: '100%' }}>
            <p style={{ lineHeight: 1.6, color: 'var(--color-text)', marginBottom: 20 }}>
              Engage with a mandate to explore API commercialization, licensing, M&A, laboratory or BA/BE representation, and capital pathways. Our institutional approach ensures confidentiality, precision, and sustainable value creation across global pharmaceutical ecosystems.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#1e82c9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px' }}>📍</div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>Headquarters</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Hyderabad, India</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#1e82c9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px' }}>🌍</div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>Global Reach</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>International pharmaceutical markets</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#1e82c9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px' }}>🔒</div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>Confidential Mandates</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Discreet transaction facilitation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section title="Get In Touch" subtitle="Initiate a confidential discussion about your pharmaceutical objectives." className="reduced-padding">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
          <div>
            <ContactForm />
          </div>
          <div style={{ display: 'grid', gap: 20 }}>
            <div className="card" style={{ padding: 18, borderLeft: '4px solid #1e82c9' }}>
              <h4 style={{ color: '#1e82c9', marginBottom: 10, fontSize: '16px', fontWeight: 600 }}>Strategic Partnership Areas</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#1e82c9', fontSize: '12px' }}>●</span>
                  <span style={{ color: 'var(--color-text)', fontSize: '14px' }}>API Marketing & Commercialization</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#1e82c9', fontSize: '12px' }}>●</span>
                  <span style={{ color: 'var(--color-text)', fontSize: '14px' }}>In-Licensing & Out-Licensing</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#1e82c9', fontSize: '12px' }}>●</span>
                  <span style={{ color: 'var(--color-text)', fontSize: '14px' }}>Pharma M&A Advisory</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#1e82c9', fontSize: '12px' }}>●</span>
                  <span style={{ color: 'var(--color-text)', fontSize: '14px' }}>Laboratory & BA/BE Representation</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#1e82c9', fontSize: '12px' }}>●</span>
                  <span style={{ color: 'var(--color-text)', fontSize: '14px' }}>Capital Advisory & Fundraising</span>
                </li>
              </ul>
            </div>
            
            <div className="card" style={{ padding: 18, borderLeft: '4px solid #1e82c9' }}>
              <h4 style={{ color: '#1e82c9', marginBottom: 10, fontSize: '16px', fontWeight: 600 }}>Why Choose ENSA</h4>
              <div style={{ display: 'grid', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: 10 }}>
                  <span style={{ color: '#1e82c9', fontSize: '14px', marginTop: 2 }}>✓</span>
                  <span style={{ color: 'var(--color-text)', fontSize: '14px' }}>Boardroom-first orientation with institutional approach</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'start', gap: 10 }}>
                  <span style={{ color: '#1e82c9', fontSize: '14px', marginTop: 2 }}>✓</span>
                  <span style={{ color: 'var(--color-text)', fontSize: '14px' }}>Confidential mandate-driven engagement</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'start', gap: 10 }}>
                  <span style={{ color: '#1e82c9', fontSize: '14px', marginTop: 2 }}>✓</span>
                  <span style={{ color: 'var(--color-text)', fontSize: '14px' }}>Global regulatory exposure through Masuu Global Solutions</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'start', gap: 10 }}>
                  <span style={{ color: '#1e82c9', fontSize: '14px', marginTop: 2 }}>✓</span>
                  <span style={{ color: 'var(--color-text)', fontSize: '14px' }}>Disciplined documentation alignment and execution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default ContactPage
