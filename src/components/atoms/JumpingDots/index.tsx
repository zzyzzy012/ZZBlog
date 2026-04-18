import styles from './Loading.module.css'

interface JumpingDotsProps {
  size?: 'small' | 'medium' | 'large'
  color?: string
}

export default function JumpingDots({ size = 'medium', color }: JumpingDotsProps) {
  return (
    <div className={styles.container} data-size={size} style={{ '--dot-color': color } as React.CSSProperties}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  )
}