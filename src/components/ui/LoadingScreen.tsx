import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [show, setShow] = useState(true)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPct((p) => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + Math.floor(Math.random() * 15) + 5
      })
    }, 120)
    const timer = setTimeout(() => setShow(false), 2200)
    return () => { clearInterval(interval); clearTimeout(timer) }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg"
        >
          {/* Radial glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative text-center"
          >
            {/* Logo mark */}
            <div className="mb-8 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center">
                <span className="font-mono text-2xl font-bold gradient-text">HS</span>
              </div>
            </div>

            <p className="font-mono text-xs text-muted tracking-widest uppercase mb-6">
              Initializing Portfolio
            </p>

            {/* Progress bar */}
            <div className="w-56 h-[2px] bg-border rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg,#38BDF8,#818CF8)' }}
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(pct, 100)}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <p className="font-mono text-xs text-muted mt-3">{Math.min(pct, 100)}%</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
