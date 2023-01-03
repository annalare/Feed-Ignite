import { Header } from "./components/header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <>
      <div>
        <Header />

        <Post
          author="Larissa Mendes"
          content=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a "
        />
        <Post
          author="Guilherme Melo"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's sul"
        />
      </div>
    </>
  );
}

export default App;
