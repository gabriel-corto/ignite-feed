import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css'
import styles from "./App.module.css"


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "/assets/avatar.jfif",
      name: "Gabriel Francisco",
      role: "Web Developer | Front-end",
    },
    content: [
      { type: "paragraph", content: "Faala Galeera 👏" },
      { type: "paragraph", content: "Olá, Acabei de subir um novo projecto no meu portofólio. É um projecto que fiz no NLW return, evento da rocketseat" },
      { type: "link", content: "https://github.com/gabriel-corto" },
    ],
    pusblishedDate: new Date("2024-11-08 00:14:11"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "/assets/mayk.png",
      name: "Mayk Brito",
      role: "Educador @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Faala Maykão 👀" },
      { type: "paragraph", content: "Olá, Acabei de subir um novo projecto no meu portofólio. É um projecto que fiz no NLW return, evento da rocketseat" },
      { type: "link", content: "https://github.com/maykbrito" },
    ],
    pusblishedDate: new Date("2024-10-08 09:00:00"),
  },
]
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return(
              <Post
                author={post.author}
                content={post.content}
                pusblishedDate={post.pusblishedDate}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}