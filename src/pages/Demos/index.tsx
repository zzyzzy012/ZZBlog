import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Reveal from '@/components/atoms/Reveal'
import styles from './Demos.module.css'

const projects = [
  {
    id: 1,
    image: '/DeliveryBSM.jpg',
    title: 'DeliveryBSM',
    subtitle: 'Logistics Admin Dashboard',
    description:
      'A comprehensive admin system for the logistics industry—visualizing personnel and order statistics, managing users/menus/roles/departments, order tracking with route mapping, trajectory animations, order clustering, and driver roster maintenance. Built during a winter break when I wanted to understand how enterprise systems breathe.',
    date: '2026.01',
    link: 'https://github.com/zzyzzy012/DeliveryBSM',
  },
  {
    id: 2,
    image: '/VCUI.jpg',
    title: 'VCUI',
    subtitle: 'A Lightweight Vue Component Library',
    description:
      "My take on building a component library—modeled after Element Plus, with buttons, inputs, selects, and more. A deep dive into how the libraries we use every day actually work under the hood.",
    date: '2025.06',
    link: 'https://vcui.vercel.app/',
  },
  {
    id: 3,
    image: '/zz_ft_journey.jpg',
    title: 'zz_ft_journey',
    subtitle: 'Frontend Knowledge Notes',
    description:
      "My personal wiki of frontend fundamentals—HTML, CSS, JS, ES6, Vue, React, computer networks, bundlers, security, and CORS. Organized as notes, built as I learned. Still growing.",
    date: '2026.04',
    link: 'https://github.com/zzyzzy012/zz_ft_journey',
  },
]

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [8, -8]),
    { stiffness: 300, damping: 30 }
  )
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-8, 8]),
    { stiffness: 300, damping: 30 }
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article
      ref={cardRef}
      className={styles.project}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.imageWrapper}>
        <img src={project.image} alt={project.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <span className={styles.date}>{project.date}</span>
        <h2 className={styles.projectTitle}>{project.title}</h2>
        <p className={styles.subtitleText}>{project.subtitle}</p>
        <p className={styles.description}>{project.description}</p>
        <a href={project.link} className={styles.link}>
          View Project →
        </a>
      </div>
    </motion.article>
  )
}

export default function DemosPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Reveal>
          <span className={styles.label}>PERSONAL PROJECTS</span>
        </Reveal>
        <Reveal delay={1}>
          <h1 className={styles.title}>Experiments in Code</h1>
        </Reveal>
        <Reveal delay={2}>
          <p className={styles.subtitle}>
            Side projects, learning exercises, and things that refused to stay in my
            head. Each one started as a question—most of them led to more questions.
          </p>
        </Reveal>
      </header>

      <div className={styles.projects}>
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 3) + 1 as 1 | 2 | 3}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}