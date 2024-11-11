import { Trash, ThumbsUp } from "phosphor-react"
import { Avatar } from "./Avatar"

import styles from "./Comment.module.css"

import { useState } from "react"

interface CommentProps {
  content: string 
  onDeleteComment: () => void 
}
export function Comment({ content, onDeleteComment }: CommentProps) {
  
  const [likes, setCommentLikes] = useState(0)

  function handleSetCommentLikes() {
    setCommentLikes((likes) => likes + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gabriel-corto.png" />
      
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
          <button onClick={handleSetCommentLikes}>
            <ThumbsUp />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}