import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import styles from './CardCarousel.module.css'

interface CardCarouselProps {
  cards: {
    id: number
    image: string
    title: string
    subtitle: string
  }[]
}

export default function CardCarousel({ cards }: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const progress = useMotionValue(0)

  useEffect(() => {
    const progressPerSlide = 1 / (cards.length - 1 || 1)
    const targetProgress = currentIndex * progressPerSlide

    animate(progress, targetProgress, {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    })
  }, [currentIndex, cards.length, progress])

  const handleScrubberClick = (index: number) => {
    setCurrentIndex(index)
    containerRef.current?.scrollTo({
      left: containerRef.current.scrollWidth * (index / (cards.length - 1 || 1)),
      behavior: 'smooth'
    })
  }

  const handleScroll = () => {
    if (!containerRef.current) return
    const scrollProgress = containerRef.current.scrollLeft / (containerRef.current.scrollWidth - containerRef.current.clientWidth)
    const newIndex = Math.round(scrollProgress * (cards.length - 1))
    setCurrentIndex(newIndex)
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.trackContainer} ref={containerRef} onScroll={handleScroll}>
        <div className={styles.track}>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={styles.slide}
              style={{
                opacity: useTransform(progress, (p) => {
                  const target = index / (cards.length - 1 || 1)
                  const distance = Math.abs(p - target)
                  return 1 - distance * 0.3
                })
              }}
            >
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={card.image} alt={card.title} className={styles.image} />
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardCategory}>{card.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className={styles.scrubber}>
        <div className={styles.scrubberTrack}>
          <motion.div
            className={styles.scrubberProgress}
            style={{ scaleX: progress }}
          />
        </div>
        <div className={styles.dots}>
          {cards.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => handleScrubberClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}