import { useState, useRef, FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaEnvelope, FaCheckCircle } from 'react-icons/fa'
import { MdSend, MdError } from 'react-icons/md'
import { useInView } from '../../hooks'
import { SOCIAL_LINKS } from '../../data'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const { ref, inView } = useInView()
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Replace with your EmailJS credentials
      await emailjs.sendForm(
        'service_6yeyz5v',
        'template_q5nv0fs',
        formRef.current!,
        'wkVUDFlIegiZJutjg'
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl glass-card border border-border focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 text-slate-200 text-sm placeholder-muted/50 transition-all duration-200 bg-transparent'

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label">Let's connect</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted max-w-md mx-auto mt-3 text-sm">
            Have a project in mind or want to collaborate? I'm open to opportunities and conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 space-y-5">
              {[
                { icon: FaEnvelope, label: 'Email', value: SOCIAL_LINKS.email, href: `mailto:${SOCIAL_LINKS.email}` },
                { icon: FaGithub, label: 'GitHub', value: 'https://github.com/harshXranger', href: SOCIAL_LINKS.github },
                { icon: FaLinkedin, label: 'LinkedIn', value: 'www.linkedin.com/in/harsh-singh-070590298', href: SOCIAL_LINKS.linkedin },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted/60 font-mono">{label}</p>
                    <p className="text-sm text-slate-300 group-hover:text-accent transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-5 border border-green-500/15">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-green-400">Available for work</span>
              </div>
              <p className="text-xs text-muted">
                Open to internships, freelance projects, and full-time opportunities in web development.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-muted mb-2 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Harsh Singh"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="email@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-muted mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : status === 'error'
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'btn-primary text-bg'
                }`}
              >
                {status === 'idle' && <><MdSend size={16} /> Send Message</>}
                {status === 'sending' && (
                  <><span className="w-4 h-4 border-2 border-bg/40 border-t-bg rounded-full animate-spin" /> Sending...</>
                )}
                {status === 'success' && <><FaCheckCircle size={14} /> Message sent!</>}
                {status === 'error' && <><MdError size={16} /> Failed — try again</>}
              </button>

              <p className="text-center text-xs text-muted/50">
                Powered by EmailJS · I typically respond within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
