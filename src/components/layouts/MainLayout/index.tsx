import { Outlet } from 'react-router'
import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'
import styles from './MainLayout.module.css'

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}