import { Trash, ThumbsUp } from "phosphor-react"

import avatarImage from "/assets/avatar.jfif"
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src={avatarImage} alt="avatar" />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Francisco</strong>
              <time title="11 de Maio às 08:13m" dateTime="2024-05-11 08:00">Cerca de 1h atrás</time>
            </div>

            <button>
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}