import { Avatar } from "./Avatar"
import { Comment } from "./Comment"

import avatarImage from "/assets/avatar.jfif"
import styles from "./Post.module.css"

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={avatarImage} />

            <div className={styles.authorInfo}>
              <strong>Gabriel Francisco</strong>
              <span>Web Developer</span>
            </div>
        </div>

        <time title="Publicado 11 de Maio" dateTime="2024-05-11 08:13">Publicado à 1h</time>
      </header>

      <div className={styles.content}>
        <p>Faala Galera 👏</p>
        <p>Olá, Acabei de subir um novo projecto no meu portofólio. É um projecto que fiz no NLW return, evento da rocketseat</p>
        <p>👍<a href="#">gabriel.francisco/app</a></p>
        <p><a href="#">#rocketseat #nlw, #novoprojecto</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  )
}