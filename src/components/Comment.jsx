import { Trash, ThumbsUp } from "phosphor-react"
import { Avatar } from "./Avatar"

import avatarImage from "/assets/avatar.jfif"
import styles from "./Comment.module.css"

export function Comment({ content, onDeleteComment }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={avatarImage} />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Francisco</strong>
              <time title="11 de Maio às 08:13m" dateTime="2024-05-11 08:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={onDeleteComment}>
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
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