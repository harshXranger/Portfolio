import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { SOCIAL_LINKS } from '../../data'

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center border border-accent/20">
            <span className="font-mono font-bold text-xs gradient-text">HS</span>
          </div>
          <span className="font-mono text-xs text-muted">Harsh Singh</span>
        </div>

        <p className="text-xs text-muted flex items-center gap-1.5">
          Built with <FaHeart className="text-red-400" size={10} /> using React & Tailwind CSS
        </p>

        <div className="flex items-center gap-4">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors">
            <FaGithub size={18} />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href={`mailto:${SOCIAL_LINKS.email}`}
            className="text-muted hover:text-accent transition-colors">
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-muted/50 mt-6">
        © {new Date().getFullYear()} Harsh Singh. All rights reserved.
      </p>
    </footer>
  )
}
