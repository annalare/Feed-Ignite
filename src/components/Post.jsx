import { Avatar } from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/annalare.png" />
          <div className={styles.authorInfo}>
            <strong>Larissa Mendes</strong>
            <span>Front End</span>
          </div>
        </div>

        <time dateTime="2022-29-01 22:22:22"> Publicado há 1 hora </time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem
        </p>
        <p> nam aperiam, odit sapiente voluptatibus ipsam?</p>
        <p>
          <a href="https://github.com/annalare"> github </a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong> Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <Comment />
      <Comment />
      <div className={styles.commentList}></div>
    </article>
  );
}
