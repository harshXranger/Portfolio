import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useInView } from '../../hooks'
import { PROJECTS, TECH_FILTERS } from '../../data'

export default function Projects() {
  const { ref, inView } = useInView()
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = PROJECTS.filter((p) =>
    activeFilter === 'All' || p.tech.some((t) => t.includes(activeFilter))
  )

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="section-label">What I've built</p>
          <h2 className="section-title">Projects</h2>
          <p className="text-muted max-w-lg mx-auto mt-3 text-sm">
            A selection of projects that showcase my skills across the MERN stack and beyond.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {TECH_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-accent text-bg font-bold'
                  : 'glass-card text-muted hover:text-slate-200 border border-border'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="project-card glass-card rounded-2xl overflow-hidden group cursor-default transition-all duration-300 hover:border-accent/20 flex flex-col"
              >
                {/* Card header with color accent */}
                <div
                  className="h-40 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${project.color}12, ${project.color}05)` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${project.color}20, transparent 70%)` }}
                  />
                  <span className="text-6xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </span>
                  {/* Corner tag */}
                  <div
                    className="absolute top-3 right-3 w-2 h-2 rounded-full"
                    style={{ background: project.color }}
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-slate-200 mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-xs font-mono text-muted/80 bg-white/5 border border-border/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium text-muted hover:text-slate-200 bg-white/5 hover:bg-white/10 border border-border transition-all duration-200"
                    >
                      <FaGithub size={13} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium transition-all duration-200"
                      style={{
                        background: `${project.color}20`,
                        color: project.color,
                        border: `1px solid ${project.color}40`,
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget
                        el.style.background = `${project.color}35`
                        el.style.boxShadow = `0 0 16px ${project.color}30`
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget
                        el.style.background = `${project.color}20`
                        el.style.boxShadow = 'none'
                      }}
                    >
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted text-sm py-12"
          >
            No projects match this filter yet — more coming soon!
          </motion.p>
        )}
      </div>
    </section>
  )
}
