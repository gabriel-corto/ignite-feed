import coverImage from "/assets/cover.jpg"
import styles from "./Sidebar.module.css"

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src={coverImage} 
      />

      <div className={styles.profile}>
        <strong>Gabriel Francisco</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}