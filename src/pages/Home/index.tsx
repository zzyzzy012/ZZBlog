import BriefSection from './components/BriefSection'
import PhilosophySection from './components/PhilosophySection'
import ExpertiseSection from './components/ExpertiseSection'
import ContactSection from './components/ContactSection'
import styles from './Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.home}>
      <BriefSection />
      <PhilosophySection />
      <ExpertiseSection />
      <ContactSection />
    </div>
  )
}