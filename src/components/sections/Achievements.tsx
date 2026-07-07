import { motion } from 'framer-motion'
import { useInView } from '../../hooks'
import { ACHIEVEMENTS } from '../../data'

export default function Achievements() {
  const { ref, inView } = useInView()

  return (
    <section id="achievements" className="py-24 px-6 bg-surface/30">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label">Milestones</p>
          <h2 className="section-title">Achievements</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 text-center group cursor-default transition-all duration-300 hover:border-accent/25"
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
              >
                {a.icon}
              </motion.div>
              <h3 className="font-bold text-sm text-slate-200 mb-2 group-hover:text-accent transition-colors">
                {a.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
