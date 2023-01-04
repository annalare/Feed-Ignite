import styles from "./Sidebar.module.css";
import folha from "../assets/folha.png";
import "../global.css";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={folha} alt="" />

      <div className={styles.profile}>
        <strong> Larissa Mendes</strong>
        <span>Front End Developer</span>
      </div>
      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
