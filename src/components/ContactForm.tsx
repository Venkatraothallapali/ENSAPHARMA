import { useState } from 'react'

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm({ ...form, [k]: v })
  }
  function submit(e: React.FormEvent) {
    e.preventDefault()
    alert('Thank you. We will reach out shortly.')
  }
  return (
    <form onSubmit={submit} className="panel">
      <div style={{ display: 'grid', gap: 12 }}>
        <input placeholder="Name *" value={form.name} onChange={(e) => update('name', e.target.value)} required />
        <input placeholder="Company" value={form.company} onChange={(e) => update('company', e.target.value)} />
        <input type="email" placeholder="Email *" value={form.email} onChange={(e) => update('email', e.target.value)} required />
        <input placeholder="Phone" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
        <select value={form.interest} onChange={(e) => update('interest', e.target.value)} required>
          <option value="">Service Interest *</option>
          <option>API Marketing</option>
          <option>In-Licensing Strategy</option>
          <option>Out-Licensing & Monetization</option>
          <option>Pharma M&A Advisory</option>
          <option>Analytical & Testing Lab Marketing</option>
          <option>BA/BE Site Representation</option>
          <option>Fundraising & Capital Advisory</option>
        </select>
        <textarea rows={5} placeholder="Message *" value={form.message} onChange={(e) => update('message', e.target.value)} required />
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="global-btn global-btn-primary" type="submit">Submit</button>
          <button className="global-btn global-btn-ghost" type="reset" onClick={() => setForm({ name: '', company: '', email: '', phone: '', interest: '', message: '' })}>Reset</button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
