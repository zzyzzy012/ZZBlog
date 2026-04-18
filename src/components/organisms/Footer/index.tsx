import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import Reveal from '@/components/atoms/Reveal'
import styles from './Footer.module.css'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/demos', label: 'Demos' },
  { path: '/docs', label: 'Docs' },
]

const getDelay = (index: number): 1 | 2 | 3 => ((index % 3) + 1) as 1 | 2 | 3

export default function Footer() {
  const [visible, setVisible] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const pageHeight = document.documentElement.scrollHeight
      if (scrollPosition >= pageHeight - 200) {
        setVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Reveal visible={visible}>
          <span className={styles.logo}>ZZ</span>
        </Reveal>

        <nav className={styles.nav}>
          {navItems.map((item, index) => (
            <Reveal key={item.path} delay={getDelay(index)} visible={visible}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                {item.label}
              </NavLink>
            </Reveal>
          ))}
        </nav>

        <Reveal delay={4} visible={visible}>
          <span className={styles.copyright}>
            © {currentYear} ZZ. ALL RIGHTS RESERVED.
          </span>
        </Reveal>
      </div>
    </footer>
  )
}