import { Avatar } from "./Avatar"

import coverImage from "/assets/cover.jpg"
import avatarImage from "/assets/avatar.jfif"

import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react"

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img
        className={styles.cover} 
        src={coverImage} 
        alt="cover" 
      />

      <div className={styles.profile}>

        <div>
          <Avatar src={avatarImage} />
        </div>

        <strong>Gabriel Francisco</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={22} weight="bold"/>
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}