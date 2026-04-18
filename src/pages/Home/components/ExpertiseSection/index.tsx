import Reveal from '@/components/atoms/Reveal'
import styles from './ExpertiseSection.module.css'

const expertiseItems = [
  {
    number: '01',
    title: 'Language & Communication',
    description:
      'Bilingual fluency (CN/EN) — reading documentation in its original language, writing tech articles, and bridging cultural gaps in technical discussions.',
  },
  {
    number: '02',
    title: 'Frontend Engineering',
    description: 'Solid foundation in HTML/CSS/JavaScript/TypeScript, deep diving into React ecosystem, with Vue 3 and Node.js for exploration.',
  },
  {
    number: '03',
    title: 'Build & Development Tools',
    description: 'Vite for project scaffolding, Git for version control, committed to clean, maintainable, well-documented code.',
  },
  {
    number: '04',
    title: 'Visual & UI Design',
    description: 'Figma for UI/UX prototyping, basic Photoshop for visual polish—believing that interfaces should be a joy to use.',
  },
  {
    number: '05',
    title: 'Spatial & Systems Thinking',
    description: 'Urban planning training in GIS/AutoCAD has wired my brain for spatial relationships, systems thinking, and the ability to see the whole picture while caring about every detail.',
  },
]

export default function ExpertiseSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <Reveal>
            <span className={styles.label}>SKILL MATRIX</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className={styles.title}>What I Work With</h2>
          </Reveal>
        </div>
        <Reveal delay={2}>
          <p className={styles.subtitle}>Cross-disciplinary thinking meets engineering precision—building for the web with intention.</p>
        </Reveal>
      </div>
      <div className={styles.grid}>
        {expertiseItems.map((item, index) => (
          <Reveal key={item.number} delay={((index % 3) + 1) as 1 | 2 | 3}>
            <article className={styles.card}>
              <span className={styles.number}>{item.number}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}