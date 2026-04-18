import { useEffect, useRef, useState } from 'react'

interface UseRevealOptions {
  threshold?: number
  rootMargin?: string
  delay?: number
}

export function useReveal(options: UseRevealOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, delay])

  return { ref, isVisible }
}

export function useScrollReveal() {
  const [revealed, setRevealed] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1, rootMargin: '0px' }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return { ref, revealed }
}