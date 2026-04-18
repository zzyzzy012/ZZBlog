import Reveal from '@/components/atoms/Reveal'
import styles from './ContactSection.module.css'

const contacts = [
  {
    icon: 'GitHub',
    label: 'GitHub',
    value: 'zzyzzy012',
    href: 'https://github.com/zzyzzy012',
  },
  {
    icon: 'Email',
    label: 'Email',
    value: 'zzyzhangziyan@163.com',
    href: 'mailto:zzyzhangziyan@163.com',
  },
]

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <span className={styles.label}>LET'S CONNECT</span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className={styles.title}>
            Whether you want to discuss a technical challenge, share career transition
            stories, or simply say hello—my inbox is always open.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className={styles.contacts}>
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className={styles.contact}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.contactIcon}>
                  {contact.icon === 'GitHub' ? (
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.945-3.645-.975-3.645-.975-.54-1.38-1.335-1.755-1.335-1.755-1.095-.75.09-.735.09-.735 1.2.09 1.83 1.23 1.83 1.23.095 1.83 2.565 1.305 3.69 1.005.105-.78.405-1.305.735-1.605-2.415-.285-4.965-1.215-4.965-5.4 0-1.2.42-2.19 1.125-2.965-.12-.285-.495-1.425.105-2.925 0 0 .915-.295 3.015 1.11.87-.255 1.8-.39 2.73-.39.93 0 1.86.135 2.73.39 2.1-1.41 3.015-1.11 3.015-1.11.6 1.5.225 2.64.105 2.925.705.78 1.125 1.77 1.125 2.97 0 4.185-2.55 5.115-4.965 5.4.42.36.78 1.08.78 2.175 0 1.575-.015 2.85-.015 3.24 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  )}
                </span>
                <div className={styles.contactInfo}>
                  <span className={styles.contactLabel}>{contact.label}</span>
                  <span className={styles.contactValue}>{contact.value}</span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={3}>
          <p className={styles.subtitle}>
            Where the code lives • For anything worth a real conversation
          </p>
        </Reveal>
      </div>
    </section>
  )
}