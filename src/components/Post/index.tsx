import { Avatar } from "../Avatar"
import { Comment } from "../Comment"

import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

import styles from "./style.module.css"
import { ChangeEvent, FormEvent, useState } from "react"

interface Author {
  avatarUrl: string 
  name: string 
  role: string 
}
interface Content {
  type: "paragraph" | "link"
  content: string 
}
interface PostProps {
  author: Author
  pusblishedDate: Date
  content: Content[]
}

export function Post({ author, pusblishedDate, content }: PostProps) {
  const [comments, setComments] = useState([
    "Faala Pessoal, projecto top! 👏👀"
  ])
  const [newCommentText, setNewCommentText] = useState("")

  function handleCreateNewComment(event: FormEvent){
    event.preventDefault()

    setComments([newCommentText, ...comments])
    setNewCommentText("")
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function handleDeleteComment(commentToDelete: string) {
    const commentListWithoutCommentDeleted = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentListWithoutCommentDeleted)
  }

  const pusblishedDateFormatted = format(
    pusblishedDate, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  })

  const pusblishedDateRelativeToNow = formatDistanceToNow(pusblishedDate, {
    locale: ptBR,
    addSuffix: true
  })

  const isCommentFieldEmpty = newCommentText.length === 0 

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
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isCommentFieldEmpty}>
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