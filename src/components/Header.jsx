

import logoIgnite from "/assets/logo.svg"
import styles from "./Header.module.css"

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