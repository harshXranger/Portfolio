import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks'
import { SKILLS } from '../../data'

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Tools']

const SKILL_ICONS: Record<string, string> = {
  'HTML': '🌐', 'CSS': '🎨', 'JavaScript': '⚡', 'React.js': '⚛️',
  'Tailwind CSS': '🎯', 'Node.js': '🟢', 'Express.js': '🚂',
  'MongoDB': '🍃', 'REST APIs': '🔗', 'Git & GitHub': '🐙',
  'Figma': '🖌️', 'DSA': '🧮',
}

export default function Skills() {
  const { ref, inView } = useInView()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = SKILLS.filter(
    (s) => activeCategory === 'All' || s.category === activeCategory
  )

  return (
    <section id="skills" className="py-24 px-6 bg-surface/30">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="section-label">What I work with</p>
          <h2 className="section-title">Skills & Technologies</h2>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-accent text-bg font-semibold shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                  : 'glass-card text-muted hover:text-slate-200 border border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.07 }}
              whileHover={{ y: -4, borderColor: 'rgba(56,189,248,0.3)' }}
              className="glass-card rounded-xl p-5 group cursor-default transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{SKILL_ICONS[skill.name] || '💡'}</span>
                  <div>
                    <p className="font-semibold text-slate-200 text-sm">{skill.name}</p>
                    <p className="text-xs text-muted/70 font-mono">{skill.category}</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-accent">{skill.level}%</span>
              </div>

              <div className="skill-bar">
                <motion.div
                  className="skill-fill"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
