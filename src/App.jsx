import { Header } from "./components/header";
import { Post } from "./components/Post";
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
