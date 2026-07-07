import { motion } from 'framer-motion'
import { useInView } from '../../hooks'

const STATS = [
  { value: '5+', label: 'Projects Built' },
  { value: '1+', label: 'Years Learning' },
  { value: '10+', label: 'Technologies' },
  { value: '∞', label: 'Curiosity' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label">Who I am</p>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5 text-muted leading-relaxed"
          >
            <p className="text-slate-200 text-lg">
              I'm <span className="text-accent font-semibold">Harsh Singh</span>, an Information Technology student
              with a deep passion for building things on the web.
            </p>
            <p>
              Currently pursuing my B.Tech in Information Technology, I'm focused on mastering
              the <span className="text-slate-300 font-medium">MERN stack</span> — MongoDB, Express.js, React, and
              Node.js — to create fast, scalable, and meaningful web applications.
            </p>
            <p>
              I enjoy the intersection of <span className="text-slate-300 font-medium">design and engineering</span>,
              turning ideas into experiences that are both functional and aesthetically polished.
              Problem-solving drives me, and I'm constantly exploring new technologies to sharpen my craft.
            </p>
            <p>
              Beyond code, I participate in hackathons, contribute to open-source, and document what I
              learn — because growth compounds fastest when it's shared.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              {['React.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Figma'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md glass-card border border-accent/15 text-xs font-mono text-accent/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center group hover:border-accent/30 transition-all duration-300"
              >
                <div className="text-4xl font-bold gradient-text mb-1 group-hover:glow-text transition-all">
                  {s.value}
                </div>
                <div className="text-xs text-muted uppercase tracking-widest font-mono">{s.label}</div>
              </motion.div>
            ))}

            {/* Currently learning */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="col-span-2 glass-card rounded-2xl p-5 border border-accent/10"
            >
              <p className="text-xs font-mono text-accent mb-3 tracking-wider uppercase">Currently exploring</p>
              <div className="flex flex-wrap gap-2">
                {['AI Integration', 'TypeScript', 'Cloud Deployment', 'System Design'].map((item) => (
                  <span key={item} className="text-xs text-muted px-2.5 py-1 rounded-full bg-white/5 border border-border">
                    → {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
