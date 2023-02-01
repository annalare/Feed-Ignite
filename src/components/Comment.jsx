import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
export default function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/annalare.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Larissa Mendes</strong>
              <time dateTime="2022-29-01 22:22:22">Cerca de 1 hora atrás </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom!! Parabéns!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
