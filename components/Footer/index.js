import styles from "./Footer.scss";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["container"]}>
        <nav>
          <ul>
            <li>O Lavičce</li>
            <li>Jak fungujeme</li>
            <li>Náš tým</li>
            <li>Kontakt</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
