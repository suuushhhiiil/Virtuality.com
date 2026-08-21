import { useState } from 'react'
import Section from '../components/Section.jsx'
import { contactReasons, contactTimelines, site } from '../content/site.js'
import { usePageTitle } from '../usePageTitle.js'

const emptyForm = {
  name: '',
  email: '',
  reason: contactReasons[0],
  message: '',
  timeline: contactTimelines[0],
}

export default function Contact() {
  usePageTitle('Contact')
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  function update(field) {
    return (event) => setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  function onSubmit(event) {
    event.preventDefault()
    const subject = `Write From Left — ${form.reason}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `About: ${form.reason}`,
      `Timeline: ${form.timeline}`,
      '',
      form.message,
    ].join('\n')
    window.location.href = `mailto:${site.emails.studio}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const field =
    'mt-2 w-full border-0 border-b border-taupe bg-transparent py-3 text-charcoal placeholder:text-charcoal/35 focus:border-burgundy focus:outline-none focus:ring-0'

  return (
    <>
      <Section className="pb-12 pt-16 sm:pb-16 sm:pt-24" reveal>
        <p className="eyebrow">Contact</p>
        <h1 className="display mt-4 max-w-4xl text-5xl sm:text-7xl">
          Let’s talk about your next project.
        </h1>
        <p className="lede mt-8">
          Have an idea, a problem, or simply something you cannot figure out yet? You don’t need to have everything planned before you reach out.
        </p>
        <p className="mt-6 font-serif text-xl italic text-burgundy">
          No pressure. No complicated pitch. Just a conversation.
        </p>
      </Section>

      <Section className="pb-20 sm:pb-28" reveal>
        <div className="grid gap-16 lg:grid-cols-12">
          <form className="lg:col-span-7" onSubmit={onSubmit}>
            <p className="eyebrow">Send me a message</p>
            <label className="mt-8 block text-xs uppercase tracking-brand text-charcoal/50">
              Name
              <input
                required
                className={field}
                value={form.name}
                onChange={update('name')}
                placeholder="Your name"
                autoComplete="name"
              />
            </label>
            <label className="mt-8 block text-xs uppercase tracking-brand text-charcoal/50">
              Email
              <input
                required
                type="email"
                className={field}
                value={form.email}
                onChange={update('email')}
                placeholder="Your email address"
                autoComplete="email"
              />
            </label>
            <label className="mt-8 block text-xs uppercase tracking-brand text-charcoal/50">
              What are you reaching out about?
              <select className={`${field} bg-cream`} value={form.reason} onChange={update('reason')}>
                {contactReasons.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
            </label>
            <label className="mt-8 block text-xs uppercase tracking-brand text-charcoal/50">
              Tell me a little more
              <textarea
                required
                rows="6"
                className={`${field} resize-y`}
                value={form.message}
                onChange={update('message')}
                placeholder="What are you working on? What do you need help with? Where are you currently stuck?"
              />
            </label>
            <label className="mt-8 block text-xs uppercase tracking-brand text-charcoal/50">
              Timeline
              <select className={`${field} bg-cream`} value={form.timeline} onChange={update('timeline')}>
                {contactTimelines.map((timeline) => (
                  <option key={timeline} value={timeline}>
                    {timeline}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit" className="btn-primary mt-10">
              Let’s talk
            </button>
            {sent ? (
              <p className="mt-4 text-sm text-charcoal/60">
                Your email app should open with the message ready to send. If it doesn’t, write to {site.emails.studio}.
              </p>
            ) : null}
          </form>

          <aside className="lg:col-span-5">
            <div className="border-t border-taupe/50 pt-6">
              <p className="eyebrow">What happens next?</p>
              <p className="mt-4 leading-7 text-charcoal/80">
                I’ll read your message and get back to you by email. If your project is a good fit, we can talk about what you’re trying to achieve, what’s getting in the way, and how I can help you move it forward.
              </p>
              <p className="mt-4 leading-7 text-charcoal/80">
                And if I’m not the right person for what you need, I’ll tell you that too.
              </p>
              <p className="mt-6 font-serif text-xl italic text-burgundy">
                You don’t need a perfect plan to start a conversation.
              </p>
            </div>
            <div className="mt-12 border-t border-taupe/50 pt-6">
              <p className="eyebrow">Prefer email?</p>
              <p className="mt-4">
                <a className="text-burgundy hover:text-wine" href={`mailto:${site.emails.studio}`}>
                  {site.emails.studio}
                </a>
              </p>
              <p className="mt-2 text-sm text-charcoal/70">
                Or reach me directly at{' '}
                <a className="text-burgundy hover:text-wine" href={`mailto:${site.emails.direct}`}>
                  {site.emails.direct}
                </a>
              </p>
              <p className="mt-8 font-serif text-xl leading-snug">
                Have an idea? Bring it.
                <br />
                Have a problem? Let’s unpack it.
                <br />
                Have no idea where to start? That’s okay too.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}
