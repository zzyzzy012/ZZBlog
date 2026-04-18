import { useScrollReveal } from '@/hooks/useReveal'
import { cn } from '@/utils'
import styles from './Reveal.module.css'

interface RevealProps {
  children: React.ReactNode
  delay?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  as?: React.ElementType
  visible?: boolean
}

export default function Reveal({ children, delay, className, as: Component = 'div', visible }: RevealProps) {
  const { ref, revealed } = useScrollReveal()
  const isVisible = visible ?? revealed

  return (
    <Component
      ref={ref}
      className={cn(
        styles.reveal,
        isVisible && styles.visible,
        delay && styles[`delay-${delay}`],
        className
      )}
    >
      {children}
    </Component>
  )
}