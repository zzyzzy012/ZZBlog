import { useState, useEffect } from 'react'
import { NavLink } from 'react-router'
import { motion } from 'framer-motion'
import { cn } from '@/utils'
import styles from './Navbar.module.css'

const navItems = [
  { path: '/', label: 'HOME' },
  { path: '/portfolio', label: 'PORTFOLIO' },
  { path: '/demos', label: 'DEMOS' },
  { path: '/docs', label: 'DOCS' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <header className={cn(styles.navbar, scrolled && styles.scrolled)}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.3}
            dragMomentum={false}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            ZZ
          </motion.span>
        </NavLink>

        <nav className={cn(styles.nav, menuOpen && styles.navOpen)}>
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(styles.navLink, isActive && styles.active)
              }
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={toggleTheme}
          className={styles.themeToggle}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0-5a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v2a1 1 0 11-2v-2a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 1.42l-1.42 1.42a1 1 0 01-1.42-1.42l1.42-1.42zm14.14 14.14a1 1 0 011.42 1.42l-1.42 1.42a1 1 0 01-1.42-1.42l1.42-1.42zM2 12a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zm18 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM5.64 18.36a1 1 0 010 1.42l-1.42 1.42a1 1 0 01-1.42-1.42l1.42-1.42zm12.72-12.72a1 1 0 010 1.42l-1.42 1.42a1 1 0 01-1.42-1.42l1.42-1.42z" />
            </svg>
          )}
        </button>

        <a
          href="https://github.com/zzyzzy012"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
          CONTACT
        </a>

        <button
          className={cn(styles.menuBtn, menuOpen && styles.menuOpen)}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
        </button>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav}>
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(styles.mobileNavLink, isActive && styles.active)
              }
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={toggleTheme}
            className={styles.mobileNavLink}
            style={{ animationDelay: `${navItems.length * 0.1}s` }}
          >
            {theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
          </button>
          <a
            href="https://github.com/zzyzzy012"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileNavLink}
            style={{ animationDelay: `${(navItems.length + 1) * 0.1}s` }}
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </a>
        </nav>
      )}
    </header>
  )
}