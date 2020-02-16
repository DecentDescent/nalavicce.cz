import styles from "./Footer.scss";

const Footer = () => {
  return (
    <section>
      <footer className={styles["footer"]}>
        <nav>
          <ul>
            <li>
              <a href="#o-projektu">O projektu</a>
            </li>
            <li>
              <a href="#jak-to-funguje">Jak fungujeme</a>
            </li>
            <li>
              <a href="#kdo-sedi-na-lavicce">Náš tým</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>
        <small>&copy; 2019 – 2020 www.nalavicce.cz</small>
      </footer>
    </section>
  );
};

export default Footer;
