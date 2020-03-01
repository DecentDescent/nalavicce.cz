import styles from "./HowItWorks.scss";
import Fade from "react-reveal/Fade";
import classnames from "classnames";

const HowItWorks = props => {
  return (
    <>
      <section className={styles["section--how"]} id="jak-to-funguje">
        <div className={styles["how__text"]}>
          <div>
            <Fade top>
              <h1>Jak to na Laviččce funguje?</h1>
            </Fade>
            <Fade left>
              <h3>Kdo se do této služby může přihlásit?</h3>
              <p>
                Tato služba je určena pro adolescenty ve věku od 14 do 18 let,
                kteří prošli hospitalizací v Psychiatrické nemocnici Bohnice
                (dále jen PNB) nebo na Dětské psychiatrické klinice 2. LF UK a
                FN Motol. O vstupu do následné péče rozhodují ošetřující lékaři
                z psychiatrického oddělení. Mezi rozhodující faktory patří
                především závažnost onemocnění a motivace klienta.{" "}
              </p>
            </Fade>
            <Fade right>
              <h3>Jak probíhá samotná služba? </h3>
              <p>
                Skupinová terapie probíhá jednou týdně a trvá dvě hodiny.
                Minimální doba docházení do skupinové terapie je 8 týdnů, opačná
                hranice není určena – klient odejde, až se sám rozhodne. Terapii
                vedou dva kompetentní terapeuti, kteří klientům poskytují
                bezpečný prostor pro setkávání se a sdílení každodenních
                záležitostí. Náš tým zůstává i nadále ve spojení s lékařským
                týmem pro případ, že se stav klienta zhorší a dojde k relapsu.
              </p>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
