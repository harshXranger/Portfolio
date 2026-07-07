import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import { useTypingEffect } from '../../hooks'
import { SOCIAL_LINKS } from '../../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function Hero() {
  const typed = useTypingEffect()

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] bg-accent/10 top-[-100px] right-[-100px]" />
      <div className="orb w-[400px] h-[400px] bg-accent-2/8 bottom-[-80px] left-[-120px]" />
      <div className="orb w-[200px] h-[200px] bg-accent/5 top-1/3 left-1/4" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-accent/20 text-xs font-mono text-accent tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Hi, I'm{' '}
            <span className="gradient-text glow-text">Harsh Singh</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div {...fadeUp(0.3)} className="flex items-center gap-2 text-xl md:text-2xl text-muted font-medium mb-6 h-9">
            <span className="text-accent font-mono text-lg">&gt;</span>
            <span className="font-mono">{typed}</span>
            <span className="typing-cursor" />
          </motion.div>

          {/* Description */}
          <motion.p {...fadeUp(0.4)} className="text-muted text-lg leading-relaxed mb-10 max-w-xl">
            I design <span className="text-slate-200 font-medium">deploy responsive, scalable web applications</span> using the MERN stack, with a focus on embedding AI-powered features like predictive analytics, natural language processing, and adaptive interfaces. My goal is to combine clean code with intelligent automation to create seamless, data-driven user journeys.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-12">
            <a
              href="/resume.pdf"
              download
              className="btn-primary text-bg font-bold flex items-center gap-2"
            >
              <FaDownload size={14} />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-outline flex items-center gap-2"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div {...fadeUp(0.6)} className="flex items-center gap-6">
            <span className="text-xs text-muted/60 font-mono uppercase tracking-widest">Find me on</span>
            <div className="flex items-center gap-4">
              {[
                { href: SOCIAL_LINKS.github, icon: FaGithub, label: 'GitHub' },
                { href: SOCIAL_LINKS.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
                { href: `mailto:${SOCIAL_LINKS.email}`, icon: FaEnvelope, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, color: '#38BDF8' }}
                  className="text-muted transition-colors"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Code decoration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 glass-card rounded-2xl p-6 font-mono text-sm w-80"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-2 text-xs text-muted/50">developer.ts</span>
          </div>
          <div className="text-xs leading-6 text-muted">
            <span className="text-accent-2">const</span>{' '}
            <span className="text-accent">developer</span>{' = {'}
            <br />
            {'  '}<span className="text-slate-300">name</span>:{' '}
            <span className="text-green-400">'Harsh Singh'</span>,
            <br />
            {'  '}<span className="text-slate-300">role</span>:{' '}
            <span className="text-green-400">'MERN Dev & Ml engineer'</span>,
            <br />
            {'  '}<span className="text-slate-300">stack</span>: [
            <br />
            {'    '}<span className="text-green-400">'React'</span>,{' '}
            <span className="text-green-400">'Node'</span>,
            <br />
            {'    '}<span className="text-green-400">'MongoDB'</span>,
            <span className="text-green-400">'Scikit-learn'</span>
            <br />
            {'  '}],
            <br />
            {'  '}<span className="text-slate-300">available</span>:{' '}
            <span className="text-accent">true</span>,
            <br />
            {'}'};
            <br />
            <br />
            <span className="text-accent-2">export default</span>{' '}
            <span className="text-accent">developer</span>;
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted hover:text-accent transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
        >
          <HiArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
