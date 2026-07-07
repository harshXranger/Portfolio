import { motion } from 'framer-motion'
import { useInView } from '../../hooks'
import { MdSchool } from 'react-icons/md'

export default function Education() {
  const { ref, inView } = useInView()

  return (
    <section id="education" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label">Academic background</p>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-accent/20 transition-all duration-300"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl group-hover:bg-accent/8 transition-all duration-500" />

          <div className="relative flex flex-col md:flex-row gap-6 items-start">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-accent/10 border border-accent/20 flex-shrink-0">
              <MdSchool size={28} className="text-accent" />
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-bold text-xl text-slate-200 group-hover:text-accent transition-colors">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-accent font-medium text-sm mt-0.5">Information Technology</p>
                </div>
                <span className="px-3 py-1.5 rounded-lg text-xs font-mono text-muted glass-card border border-border self-start">
                  2023 – 2027
                </span>
              </div>

              <p className="text-muted text-sm mb-5">
                Pursuing a comprehensive B.Tech program in Information Technology, covering data structures,
                algorithms, databases, software engineering, and modern web technologies.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: 'Focus', value: 'Web Development & AI' },
                  { label: 'Status', value: 'Final Year' },
                  { label: 'Key Courses', value: 'DSA, DBMS, OS, CN, SE' },
                  { label: 'Activities', value: 'Hackathons, Projects' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-2">
                    <span className="text-xs font-mono text-muted/60">{label}:</span>
                    <span className="text-xs text-slate-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
