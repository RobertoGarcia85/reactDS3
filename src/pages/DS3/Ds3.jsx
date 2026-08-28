import styles from './Ds3.module.css'

const Ds3 = () => {
  const modulos = [
    {
      codigo: 'Módu. 3.1',
      titulo: 'Diseño e Implementación de Bases de Datos Avanzadas',
      desc: 'Gestión, modelado y optimización de bases de datos relacionales y no relacionales para proyectos web de gran escala.'
    },
    {
      codigo: 'Módu. 3.2',
      titulo: 'Desarrollo de Aplicaciones Web y Móviles',
      desc: 'Creación de sistemas modernos utilizando arquitecturas basadas en servicios, APIs RESTful y frameworks de vanguardia.'
    },
    {
      codigo: 'Módu. 3.3',
      titulo: 'Proyecto de Emprendimiento e Innovación Tecnológica',
      desc: 'Formulación, planificación y despliegue de un producto de software real que da solución a necesidades de la comunidad.'
    },
    {
      codigo: 'Módu. 3.4',
      titulo: 'Desarrollo Frontend Avanzado con React JS',
      desc: 'Construcción de interfaces interactivas, reactivas y accesibles aplicando componentes, hooks, estado global y estilos modulares.'
    }
  ]

  const competencias = [
    'Programación en JavaScript moderno (ES6+) y frameworks web.',
    'Diseño y maquetación UI/UX con enfoque responsive y accesibilidad.',
    'Consumo e integración de APIs REST en aplicaciones de cliente.',
    'Control de versiones colaborativo utilizando Git y GitHub.'
  ]

  return (
    <div className="pageContainer">
      {/* Banner Encabezado */}
      <section className={`${styles.hero} glassCard`}>
        <span className={styles.badge}>3° Año de Bachillerato</span>
        <h1 className="titleMain">Desarrollo de Software</h1>
        <p className="subtitle">
          Especialización técnica vocacional orientada a formar profesionales capacitados en el análisis, diseño, construcción e implementación de soluciones digitales.
        </p>
      </section>

      {/* Sección Módulos */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Módulos Formativos de 3er Año</h2>
        <div className={styles.gridModules}>
          {modulos.map((mod, index) => (
            <article key={index} className="glassCard">
              <span className={styles.modTag}>{mod.codigo}</span>
              <h3 className={styles.modTitle}>{mod.titulo}</h3>
              <p className="subtitle">{mod.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Competencias Alcanzadas */}
      <section className={`${styles.skillsBox} glassCard`}>
        <h2 className={styles.sectionTitle}>Competencias Clave</h2>
        <ul className={styles.skillsList}>
          {competencias.map((comp, idx) => (
            <li key={idx} className={styles.skillItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>{comp}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Ds3