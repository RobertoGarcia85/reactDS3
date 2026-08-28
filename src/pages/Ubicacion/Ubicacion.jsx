import styles from './Ubicacion.module.css'

const Ubicacion = () => {
  return (
    <div className="pageContainer">
      {/* Encabezado */}
      <section className={`${styles.headerBox} glassCard`}>
        <h1 className="titleMain">Ubicación e Historia</h1>
        <p className="subtitle">
          Instituto Nacional de Jucuapa (INJU) — Usulután, El Salvador.
        </p>
      </section>

      <div className={styles.contentGrid}>
        {/* Reseña Histórica */}
        <section className={`${styles.historyCard} glassCard`}>
          <h2 className={styles.sectionTitle}>Historia del Instituto</h2>
          <p className={styles.paragraph}>
            El <strong>Instituto Nacional de Jucuapa (INJU)</strong> es una institución pública de amplia trayectoria en el departamento de Usulután, dedicada al desarrollo educativo e integral de la juventud de la zona oriental.
          </p>
          <p className={styles.paragraph}>
            A lo largo de los años, ha ampliado su oferta académica incorporando Bachilleratos Técnicos Vocacionales como el de <strong>Desarrollo de Software</strong>, preparando a las nuevas generaciones para responder a las exigencias tecnológicas globales y contribuir al desarrollo socioeconómico regional.
          </p>
        </section>

        {/* Datos y Ubicación */}
        <section className={`${styles.infoCard} glassCard`}>
          <h2 className={styles.sectionTitle}>Ubicación y Contacto</h2>
          
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <strong>📍 Municipio:</strong>
              <span>Jucuapa, Usulután, El Salvador</span>
            </div>
            <div className={styles.infoItem}>
              <strong>🏫 Institución:</strong>
              <span>Instituto Nacional de Jucuapa (INJU)</span>
            </div>
            <div className={styles.infoItem}>
              <strong>🎓 Oferta Técnica:</strong>
              <span>Desarrollo de Software, General y áreas comerciales.</span>
            </div>
          </div>

          {/* Mapa Interactivos / Embed Google Maps */}
          <div className={styles.mapContainer}>
            <iframe
              title="Ubicación Instituto Nacional de Jucuapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15516.311749870193!2d-88.388888!3d13.533333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7b233a0b5f5555%3A0x6b10885e3b0b5b0!2sJucuapa!5e0!3m2!1ses!2ssv!4v1700000000000!5m2!1ses!2ssv"
              width="100%"
              height="220"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Ubicacion