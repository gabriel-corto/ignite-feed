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
    </header>
  )
}