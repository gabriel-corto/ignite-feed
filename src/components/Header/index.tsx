import { Bell, House, MagnifyingGlass, PencilCircle, User } from "phosphor-react"

import logoIgnite from "/assets/logo.svg"
import styles from "./style.module.css"

export function Header() {
  return(
    <header className={styles.header}>
      <strong>
        <img src={logoIgnite} alt="" />
        Ignite Feed
      </strong>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="#">
              <House weight="bold" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <MagnifyingGlass weight="bold" />
              <span>Buscar artigos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Bell weight="bold" />
              <span>Notificações</span>
            </a>
          </li>
          <li>
            <a href="#">
              <User weight="bold" />
              <span>Perfil</span>
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <button>
          <PencilCircle weight="bold" />
          <span>Publicar um Post</span>
        </button>
      </div>
    </header>
  )
}