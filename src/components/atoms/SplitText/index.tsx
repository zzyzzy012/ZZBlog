import { motion } from 'framer-motion'
import { useMemo } from 'react'
import styles from './SplitText.module.css'

interface SplitTextProps {
  text: string
  className?: string
  animation?: 'fadeUp' | 'fadeIn' | 'slideUp' | 'wave'
  delay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export default function SplitText({
  text,
  className,
  animation = 'fadeUp',
  delay = 0,
  stagger = 0.02,
  as: Tag = 'span'
}: SplitTextProps) {
  const words = useMemo(() => text.split(' '), [text])

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: delay + i * stagger, duration: 0.5 }
      })
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: (i: number) => ({
        opacity: 1,
        transition: { delay: delay + i * stagger, duration: 0.5 }
      })
    },
    slideUp: {
      hidden: { y: 40, opacity: 0 },
      visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: delay + i * stagger, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
      })
    },
    wave: {
      hidden: { y: 10, opacity: 0 },
      visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: delay + i * 0.1, duration: 0.4 }
      })
    }
  }

  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          custom={wordIndex}
          variants={variants[animation]}
          initial="hidden"
          animate="visible"
          style={{ display: 'inline-block', marginRight: '0.3em', whiteSpace: 'pre-wrap' }}
        >
          <Tag className={styles[Tag]}>{word}</Tag>
        </motion.span>
      ))}
    </span>
  )
}