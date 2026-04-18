import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Typewriter.module.css'

interface TypewriterProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  cursor?: boolean
}

export default function Typewriter({
  text,
  speed = 50,
  delay = 0,
  className,
  as: Tag = 'span',
  cursor = true
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index))
          index++
        } else {
          clearInterval(interval)
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [text, speed, delay])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      <Tag className={styles[Tag]} style={{ display: 'inline' }}>
        {displayedText}
        {cursor && <span className={styles.cursor}>|</span>}
      </Tag>
    </motion.span>
  )
}