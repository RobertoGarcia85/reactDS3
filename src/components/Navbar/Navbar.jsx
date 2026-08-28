import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Navbar/Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Navegación principal">
        {/* Identidad / Logo */}
        <div className={styles.brand}>
          <NavLink to="/" onClick={closeMenu} className={styles.logoLink}>
            PORTAFOLIO
          </NavLink>
        </div>

        {/* Menú de Navegación */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/DS3"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={closeMenu}
            >
              Desarrollo de Software
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Galerias"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={closeMenu}
            >
              Galerías
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Ubicacion"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={closeMenu}
            >
              Ubicación
            </NavLink>
          </li>
        </ul>

        {/* Botón Menú Hamburguesa para Móvil */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.activeHamburger : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  )
}

export default Navbar