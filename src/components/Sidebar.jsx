import styles from "./Sidebar.module.css";
import folha from "../assets/folha.png";
import { PencilLine } from "phosphor-react";
import "../global.css";
import { Avatar } from "./Avatar";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={folha} alt="" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/annalare.png" />
        <strong> Larissa Mendes</strong>
        <span>Front End Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
