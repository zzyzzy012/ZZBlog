import Reveal from '@/components/atoms/Reveal'
import styles from './PhilosophySection.module.css'

export default function PhilosophySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <span className={styles.icon}>✦</span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className={styles.title}>Philosophy</h2>
        </Reveal>
        <Reveal delay={2}>
          <blockquote className={styles.quote}>
            &ldquo;Code is just another medium. What matters is the intention behind it. Clean code, thoughtful structure, and empathy for the next person who reads it: that&apos;s my version of &apos;built to last.&apos;&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={3}>
          <div className={styles.divider} />
        </Reveal>
        <Reveal delay={4}>
          <p className={styles.subtitle}>
            Because the best software, like the best cities, is designed not just for now, but for the people who will live in it long after we&apos;re gone.
          </p>
        </Reveal>
      </div>
    </section>
  )
}