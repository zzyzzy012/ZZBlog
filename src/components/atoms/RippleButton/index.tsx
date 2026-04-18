import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { cn } from '@/utils'
import styles from './RippleButton.module.css'

interface RippleButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  disabled?: boolean
}

export default function RippleButton({
  children,
  onClick,
  variant = 'primary',
  className,
  disabled
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setRipples([...ripples, { x, y, id: Date.now() }])

    setTimeout(() => {
      setRipples(prev => prev.slice(1))
    }, 600)

    onClick?.()
  }

  return (
    <motion.button
      ref={buttonRef}
      className={cn(styles.button, styles[variant], className)}
      onClick={handleClick}
      disabled={disabled}
      whileTap={{ scale: 0.98 }}
    >
      <span className={styles.content}>{children}</span>
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className={styles.ripple}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2.5, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </motion.button>
  )
}