import { Header } from "./components/header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/annalare.png",
      name: "Larissa Mendes",
      role: " Front End Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      },
      { type: "paragraph", content: "   Exercitationem" },
      {
        type: "paragraph",
        content: " nam aperiam, odit sapiente voluptatibus ipsam?",
      },
      { type: "link", content: "/github.com/annalare" },
    ],
    publishedAt: new Date("2023-02-01 20:20:20"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/jguigo.png",
      name: "Guilherme Melo",
      role: "Fullstack Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      },
      { type: "paragraph", content: "   Exercitationem" },
      {
        type: "paragraph",
        content: " nam aperiam, odit sapiente voluptatibus ipsam?",
      },
      { type: "link", content: "/github.com/jguigo" },
    ],
    publishedAt: new Date("2023-02-01 20:20:20"),
  },
];
export function App() {
  return (
    <>
      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map((post) => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              );
            })}
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
