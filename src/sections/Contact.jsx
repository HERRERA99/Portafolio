import { useState } from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

export function Contact({ copy }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [state, setState] = useState({ loading: false, message: '', error: false })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setState({ loading: true, message: '', error: false })
    try {
      const response = await fetch('/api/send-email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, asunto: `Portfolio — ${formData.name}` }) })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.error)
      setFormData({ name: '', email: '', message: '' })
      setState({ loading: false, message: copy.success, error: false })
    } catch {
      setState({ loading: false, message: copy.error, error: true })
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-panel" data-reveal>
        <div className="contact-copy">
          <p className="section-index">04</p><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}</h2><p>{copy.description}</p>
          <a href="mailto:angulosalasaitor@gmail.com">angulosalasaitor@gmail.com <HiArrowUpRight /></a>
        </div>
        <form onSubmit={handleSubmit}>
          <label><span>{copy.name}</span><input name="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder={copy.namePlaceholder} required /></label>
          <label><span>{copy.email}</span><input type="email" name="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="hello@email.com" required /></label>
          <label><span>{copy.message}</span><textarea name="message" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder={copy.messagePlaceholder} rows="4" required /></label>
          <button className="button button-primary" type="submit" disabled={state.loading}>{state.loading ? copy.sending : copy.send}<HiArrowUpRight /></button>
          {state.message && <p className={`form-status ${state.error ? 'error' : ''}`} role="status">{state.message}</p>}
        </form>
      </div>
    </section>
  )
}
