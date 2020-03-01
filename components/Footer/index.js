import styles from "./Footer.scss";

const Footer = () => {
  return (
    <section>
      <footer className={styles["footer"]}>
        <div className={styles["footer__friends"]}>
          <p>
            Jsme bezplatná terapeutická služba. Jak naši terapeuti, tak i lidé,
            kteří vytvořili tento web či celý design Lavičky pracují zcela
            zdarma. Stejně tak je tomu i s prostory, momentálně probíhá
            skupinové setkávání ve Skautském institutu na Staroměstském náměstí.
            Skautský institut nám poskytuje prostor pro jednu skupinu zdarma po
            dobu jednoho roku.
          </p>
          <h2>Přátelé projektu</h2>
          <p>
            <strong>Odborný garant projektu:</strong> MUDr. Michal Považan
          </p>
          <p>
            <strong>Design Lavičky:</strong> Jan Trnka
          </p>
          <p>
            <strong>Webové stránky:</strong> Jan Rádl
          </p>
          <p>
            <strong>Odborný konzultant:</strong> Martin Dulava
          </p>
          <p>
            <strong>Prostor:</strong> Skautský institut, Staroměstské náměstí
          </p>
        </div>
        <nav className={styles["footer__nav"]}>
          <ul>
            <li>
              <a href="#o-projektu">O projektu</a>
            </li>
            <li>
              <a href="#jak-to-funguje">Jak to funguje?</a>
            </li>
            <li>
              <a href="#nas-tym">Náš tým</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>
        <small>
          <b>&copy; 2019 – 2020 www.nalavicce.cz</b>
          <br />
          Fotografie:{" "}
          <a href="https://unsplash.com/@willpat" target="_blank">
            Will Paterson
          </a>
          ,{" "}
          <a href="https://unsplash.com/@freestocks" target="_blank">
            freestocks
          </a>{" "}
          &amp;{" "}
          <a href="https://unsplash.com/@daanstevens" target="_blank">
            Daan Stevens
          </a>
        </small>
      </footer>
    </section>
  );
};

export default Footer;
