import Reveal from '@/components/atoms/Reveal'
import CardCarousel from '@/components/atoms/CardCarousel'
import styles from './Portfolio.module.css'

const projects = [
  {
    id: 1,
    title: 'c70285',
    subtitle: 'Abstract Digital Form',
    image: '/galleryies/c70285e380328460366fd1870b852df7.jpg',
  },
  {
    id: 2,
    title: '2fd7d0',
    subtitle: 'Digital Landscape',
    image: '/galleryies/2fd7d071086130f6361f1180b673a889.jpg',
  },
  {
    id: 3,
    title: '09390f',
    subtitle: 'Generative Pattern',
    image: '/galleryies/09390fb4fd0c2e26cacb186fdee9d8d2.jpg',
  },
  {
    id: 4,
    title: 'f090be',
    subtitle: 'Neural Aesthetics',
    image: '/galleryies/f090beaea1513cad24c47b1a381ab43e.jpg',
  },
  {
    id: 5,
    title: 'dae7d6',
    subtitle: 'Algorithmic Bloom',
    image: '/galleryies/dae7d6ab8e2abd3e74d776a5fd49a6cb.jpg',
  },
  {
    id: 6,
    title: 'a915e4',
    subtitle: 'Synthetic Nature',
    image: '/galleryies/a915e4b780d00734fbdf2fb38b070e99.jpg',
  },
  {
    id: 7,
    title: '8292d7',
    subtitle: 'Latent Space',
    image: '/galleryies/8292d7783cec70bd9e0671f9230eb1c0.jpg',
  },
  {
    id: 8,
    title: 'be42a3',
    subtitle: 'Data Organic',
    image: '/galleryies/be42a3146918ebc7625a155afa8c18f8.jpg',
  },
  {
    id: 9,
    title: 'ad55db',
    subtitle: 'Machine Dreams',
    image: '/galleryies/ad55db4a4989ff76b9fd3229bae6785c.jpg',
  },
]

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Reveal>
          <span className={styles.label}>SELECTED WORKS</span>
        </Reveal>
        <Reveal delay={1}>
          <h1 className={styles.title}>
            Experiments in <span className={styles.italic}>Visual</span> Intelligence.
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className={styles.subtitle}>
            An archive of AI-generated visuals, exploring the intersection where
            code meets creativity. Each image is a conversation between algorithm
            and imagination.
          </p>
        </Reveal>
      </header>

      <Reveal delay={3}>
        <CardCarousel cards={projects} />
      </Reveal>

      <div className={styles.loadMore}>
        <Reveal>
          <button className={styles.loadMoreBtn}>EXPAND ARCHIVE</button>
        </Reveal>
      </div>
    </div>
  )
}