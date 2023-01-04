import { Header } from "./components/header";
import { Post } from "./Post";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post
              author="Larissa Mendes"
              content=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a "
            />
            <Post
              author="Guilherme Melo"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's sul"
            />
            <Post
              author="Guilherme Melo"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's sul"
            />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
