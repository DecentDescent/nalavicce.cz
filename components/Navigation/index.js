import styles from "./Navigation.scss";

function Navigation() {
  return (
    <nav className={styles["navigation"]}>
      <ul>
        <li>
          <a href="#o-projektu"></a>
          <div className={styles["tooltip"]}>O projektu</div>
        </li>
        <li>
          <a href="#"></a>
          <div className={styles["tooltip"]}>Jak to funguje</div>
        </li>
        <li>
          <a href="#nas-tym"></a>
          <div className={styles["tooltip"]}>Náš tým</div>
        </li>
        <li>
          <a href="#"></a>
          <div className={styles["tooltip"]}>Kontakt</div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
