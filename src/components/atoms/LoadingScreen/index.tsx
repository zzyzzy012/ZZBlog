import { useState, useEffect } from 'react'
import JumpingDots from '@/components/atoms/JumpingDots'
import styles from './LoadingScreen.module.css'

interface LoadingScreenProps {
  children: React.ReactNode
  minDuration?: number
}

export default function LoadingScreen({ children, minDuration = 800 }: LoadingScreenProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, minDuration)

    return () => clearTimeout(timer)
  }, [minDuration])

  return (
    <>
      {loading ? (
        <div className={styles.loader}>
          <JumpingDots size="large" />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  )
}