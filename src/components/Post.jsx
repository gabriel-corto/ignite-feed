import { Avatar } from "./Avatar"
import { Comment } from "./Comment"

import { format, formatDistanceToNow } from "date-fns"
import ptBr from "date-fns/locale/pt-BR"

import styles from "./Post.module.css"
import { useState } from "react"

export function Post({ author, pusblishedDate, content }) {
  const [comments, setComments] = useState([
    "Faala Pessoal, projecto top! 👏👀"
  ])
  const [newCommentText, setNewCommentText] = useState("")

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([newCommentText, ...comments])
    setNewCommentText("")
  }

  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value)
  }

  function handleDeleteComment(commentToDelete) {
    const commentListWithoutCommentDeleted = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentListWithoutCommentDeleted)
  }

  const pusblishedDateFormatted = format(
    pusblishedDate, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBr,
  })

  const pusblishedDateRelativeToNow = formatDistanceToNow(pusblishedDate, {
    locale: ptBr,
    addSuffix: true
  })
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
        </div>

        <time title={pusblishedDateFormatted} dateTime={pusblishedDate.toISOString()}>
          {pusblishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if(line.type === "link") {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment}
              content={comment} 
              onDeleteComment={() => { handleDeleteComment(comment) }}
            />
          )
        })}
      </div>
    </article>
  )
}