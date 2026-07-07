import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ringX = 0, ringY = 0
    let dotX = 0, dotY = 0
    let animId: number

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX
      dotY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`
        dotRef.current.style.top = `${dotY}px`
      }
    }

    const animate = () => {
      ringX += (dotX - ringX) * 0.12
      ringY += (dotY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      animId = requestAnimationFrame(animate)
    }

    const onEnterLink = () => {
      if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(2)'
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.5)'
        ringRef.current.style.borderColor = 'rgba(56,189,248,0.8)'
      }
    }

    const onLeaveLink = () => {
      if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
        ringRef.current.style.borderColor = 'rgba(56,189,248,0.5)'
      }
    }

    window.addEventListener('mousemove', onMove)
    animId = requestAnimationFrame(animate)

    const links = document.querySelectorAll('a, button, [role="button"]')
    links.forEach((l) => {
      l.addEventListener('mouseenter', onEnterLink)
      l.addEventListener('mouseleave', onLeaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
      links.forEach((l) => {
        l.removeEventListener('mouseenter', onEnterLink)
        l.removeEventListener('mouseleave', onLeaveLink)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
