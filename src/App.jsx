import { Header } from "./components/header";
import { Post } from "./Post";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <div>
        <Header />

        <div className={styles.wrapper}></div>
        <aside>sidebar</aside>
        <main>
          <Post
            author="Larissa Mendes"
            content=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a "
          />
          <Post
            author="Guilherme Melo"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's sul"
          />
        </main>
      </div>
    </>
  );
}

export default App;
