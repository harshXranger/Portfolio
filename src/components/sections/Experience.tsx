import { motion } from 'framer-motion'
import { useInView } from '../../hooks'
import { MdWork } from 'react-icons/md'

const EXPERIENCE = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'Tech Company',
    period: 'June 2026 – Present',
    type: 'Internship',
    color: '#38BDF8',
    points: [
      'Building full-stack web applications using React, Node.js, Express.js, and MongoDB.',
      'Developing and consuming RESTful APIs for dynamic data management.',
      'Creating responsive, mobile-first UIs with Tailwind CSS and component-based architecture.',
      'Collaborating with the team using Git for version control and code review.',
      'Optimizing application performance and improving user experience.',
    ],
  },
]

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="py-24 px-6 bg-surface/30">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label">Professional work</p>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
              className="md:pl-20 relative"
            >
              {/* Timeline dot */}
              <div
                className="hidden md:flex absolute left-4 top-8 w-8 h-8 rounded-full items-center justify-center -translate-x-1/2 border-2"
                style={{ borderColor: exp.color, background: '#080C14' }}
              >
                <MdWork size={14} style={{ color: exp.color }} />
              </div>

              <div className="glass-card rounded-2xl p-7 hover:border-accent/20 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                  <div>
                    <h3 className="font-bold text-lg text-slate-200 group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-muted text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono font-medium"
                      style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
                    >
                      {exp.type}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-muted glass-card border border-border">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.points.map((point, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + j * 0.08 }}
                      className="flex gap-3 text-sm text-muted leading-relaxed"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: exp.color }}
                      />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
