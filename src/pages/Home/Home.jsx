import styles from './Home.module.css'

const Home = () => {
  const reactFeatures = [
    {
      title: 'Componentes y JSX',
      desc: 'Bloques de construcción reusables basados en JavaScript y HTML declarativo.'
    },
    {
      title: 'Virtual DOM',
      desc: 'Estrategia de renderizado que optimiza el rendimiento actualizando solo lo necesario.'
    },
    {
      title: 'Flujo Unidireccional',
      desc: 'Los datos fluyen hacia abajo a través de `props`, manteniendo un estado predecible.'
    }
  ]

  const reactHooks = [
    { name: 'useState', use: 'Manejo de estado local' },
    { name: 'useEffect', use: 'Efectos secundarios e integración con APIs' },
    { name: 'useContext', use: 'Gestión de estado global sin prop-drilling' },
    { name: 'useRef', use: 'Referencias persistentes a elementos DOM' }
  ]

  const ecosystemTools = [
    { cat: 'Enrutamiento', tool: 'React Router DOM' },
    { cat: 'Gestión de Estado', tool: 'Zustand / Redux Toolkit' },
    { cat: 'Fetch de Datos', tool: 'TanStack Query (React Query)' },
    { cat: 'Bundlers / Tools', tool: 'Vite / Next.js' }
  ]

  return (
    <div className="pageContainer">
      {/* Hero Section */}
      <section className={`${styles.hero} glassCard`}>
        <span className={styles.badge}>Librería UI</span>
        <h1 className="titleMain">Ecosistema React JS</h1>
        <p className="subtitle">
          Una biblioteca de JavaScript declarativa, eficiente y flexible para construir interfaces de usuario interactivas basadas en componentes.
        </p>
      </section>

      {/* Grid de Características Principales */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Fundamentos Principales</h2>
        <div className={styles.grid}>
          {reactFeatures.map((item, index) => (
            <article key={index} className="glassCard">
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className="subtitle">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Hooks y Ecosistema en 2 Columnas */}
      <div className={styles.twoColumnGrid}>
        {/* Hooks de React */}
        <section className={`${styles.infoBox} glassCard`}>
          <h2 className={styles.sectionTitle}>Hooks Esenciales</h2>
          <ul className={styles.list}>
            {reactHooks.map((hook, index) => (
              <li key={index} className={styles.listItem}>
                <code className={styles.codeTag}>{hook.name}</code>
                <span>{hook.use}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Herramientas Populares */}
        <section className={`${styles.infoBox} glassCard`}>
          <h2 className={styles.sectionTitle}>Ecosistema Moderno</h2>
          <ul className={styles.list}>
            {ecosystemTools.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <strong>{item.cat}:</strong>
                <span className={styles.toolName}>{item.tool}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Home