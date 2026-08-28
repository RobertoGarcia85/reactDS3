import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.infoGroup}>
          <span className={styles.subject}>Desarrollo de Software 3</span>
          <span className={styles.divider}>•</span>
          <span className={styles.module}>Módulo 3.4 en React</span>
        </div>
        <p className={styles.copyright}>
          © {currentYear} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer