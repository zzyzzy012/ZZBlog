import { useState, useEffect, useRef } from 'react';
import Reveal from '@/components/atoms/Reveal';
import styles from './BriefSection.module.css';

export default function BriefSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };
    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Reveal>
            <span className={styles.label}>MULTIDISCIPLINARY EXPLORER</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className={styles.title}>
              Building Worlds Both <span className={styles.italic}>Physical</span> and{' '}
              <span className={styles.italic}>Digital</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <div className={styles.description}>
              <p>
                My journey has never followed a straight line. From urban planning tables to the infinite canvas of the web, I&apos;ve learned that career paths are rarely a single thread—they&apos;re more like a winding river, carving new channels as they flow.
              </p>
              <p>
                This blog is where I document that ongoing exploration: the late-night debugging sessions, the breakthroughs that finally make sense of it all, the side projects that refused to stay &quot;side,&quot; and the quiet moments of doubt that eventually gave way to clarity. Whether I&apos;m mapping cities in GIS or writing in React, I&apos;m still fundamentally a creator—just trading blueprints for pixels.
              </p>
              <p>
                Currently based in Zhejiang, building with code and still figuring out what&apos;s next.
              </p>
            </div>
          </Reveal>
        </div>
        <div className={styles.imageWrapper}>
          <Reveal delay={3}>
            <div
              className={styles.imageContainer}
              style={{
                transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
              }}
            >
              <img
                src="./homeimg.jpg"
                alt="Portrait"
                className={styles.image}
              />
            </div>
          </Reveal>
          <Reveal delay={4}>
            <div className={styles.badge}>EXPLORATION IN PROGRESS</div>
          </Reveal>
        </div>
      </div>
      <div
        className={styles.cursorFollower}
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
        }}
      />
    </section>
  );
}
