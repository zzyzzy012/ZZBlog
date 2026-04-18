import { useState } from 'react'
import Reveal from '@/components/atoms/Reveal'
import styles from './Docs.module.css'

const docs = [
  {
    id: 1,
    title: 'Getting Started',
    category: 'Introduction',
    description: 'Learn how to set up and configure your development environment.',
  },
  {
    id: 2,
    title: 'Component Architecture',
    category: 'Guides',
    description: 'Understanding the atomic design pattern and component structure.',
  },
  {
    id: 3,
    title: 'State Management',
    category: 'Guides',
    description: 'Managing application state with TanStack Query and Zustand.',
  },
  {
    id: 4,
    title: 'API Integration',
    category: 'Reference',
    description: 'How to properly integrate and type API responses.',
  },
  {
    id: 5,
    title: 'Styling Guide',
    category: 'Reference',
    description: 'CSS Modules, design tokens, and theming best practices.',
  },
  {
    id: 6,
    title: 'Testing Strategy',
    category: 'Guides',
    description: 'Writing effective tests with Vitest and React Testing Library.',
  },
]

const categories = ['All', 'Introduction', 'Guides', 'Reference']

export default function DocsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredDocs = activeCategory === 'All'
    ? docs
    : docs.filter(doc => doc.category === activeCategory)

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Reveal>
          <span className={styles.label}>TECHNICAL DOCUMENTATION</span>
        </Reveal>
        <Reveal delay={1}>
          <h1 className={styles.title}>Docs</h1>
        </Reveal>
        <Reveal delay={2}>
          <p className={styles.subtitle}>
            Engineering notes, tutorials, and implementation guides for building modern web
            applications.
          </p>
        </Reveal>
      </header>

      <nav className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      <div className={styles.docs}>
        {filteredDocs.map((doc, index) => (
          <Reveal key={doc.id} delay={(index % 3) + 1 as 1 | 2 | 3}>
            <article className={styles.doc}>
              <span className={styles.docCategory}>{doc.category}</span>
              <h2 className={styles.docTitle}>{doc.title}</h2>
              <p className={styles.docDescription}>{doc.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}