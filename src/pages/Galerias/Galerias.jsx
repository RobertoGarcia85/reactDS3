import styles from './Galerias.module.css'

const Galerias = () => {
  const galeriaInju = [
    {
      id: 1,
      titulo: 'Fachada e Instalaciones INJU',
      categoria: 'Instituto',
      img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
      desc: 'Áreas académicas y recreativas del Instituto Nacional de Jucuapa.'
    },
    {
      id: 2,
      titulo: 'Aula Informática de Desarrollo',
      categoria: 'Laboratorio',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
      desc: 'Espacio equipado para prácticas de programación, maquetación y redes.'
    },
    {
      id: 3,
      titulo: 'Sesión Práctica en React JS',
      categoria: 'Práctica',
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
      desc: 'Estudiantes trabajando en proyectos web frontend y diseño CSS.'
    },
    {
      id: 4,
      titulo: 'Trabajo Colaborativo en Equipo',
      categoria: 'Talleres',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
      desc: 'Revisiones de código y discusión de requerimientos de software.'
    },
    {
      id: 5,
      titulo: 'Lógica y Estructura de Datos',
      categoria: 'Práctica',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      desc: 'Implementación de algoritmos y solución de ejercicios lógicos.'
    },
    {
      id: 6,
      titulo: 'Exposición de Portafolios Digitales',
      categoria: 'Evaluación',
      img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80',
      desc: 'Presentación final de proyectos web ante docentes y compañeros.'
    }
  ]

  return (
    <div className="pageContainer">
      <section className={`${styles.headerBox} glassCard`}>
        <h1 className="titleMain">Galerías Fotográficas</h1>
        <p className="subtitle">
          Recorrido visual por el Instituto Nacional de Jucuapa (INJU) y las actividades de aprendizaje práctico dentro del área de Desarrollo de Software.
        </p>
      </section>

      <section className={styles.galleryGrid}>
        {galeriaInju.map((item) => (
          <article key={item.id} className={`${styles.cardImage} glassCard`}>
            <div className={styles.imageWrapper}>
              <img src={item.img} alt={item.titulo} className={styles.img} />
              <span className={styles.categoryBadge}>{item.categoria}</span>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{item.titulo}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Galerias