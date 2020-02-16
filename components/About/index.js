import styles from "./About.scss";
import Fade from "react-reveal/Fade";
import classnames from "classnames";

const About = () => {
  return (
    <>
      <section className={styles["section--about"]} id="o-projektu">
        <Fade left>
          <div className={styles["about__text"]}>
            <div>
              <h1>Co je Lavička?</h1>

              <p>
                Projekt Lavička je bezplatná následná psychoterapeutická služba
                pro adolescentní pacienty, kteří prošli psychiatrickou
                hospitalizací. Tato péče probíhá formou terapeutických skupin,
                jejichž cílem je usnadnit dětem návrat do běžného fungování a
                podpořit sdílení problémů a těžkostí v bezpečném prostředí mezi
                vrstevníky. Prozatím se jedná o pilotní projekt, který je veden
                odborným garantem MUDr. Michalem Považanem, primářem dětského
                oddělení Psychiatrické nemocnice Bohnice. Naším cílem je
                vytvořit z tohoto pilotního projektu běžnou posthospitalizační
                službu, díky které chceme pomoct předejít opakované
                hospitalizaci adolescentů a zároveň mít možnost včas zachytit
                případné zhoršení stavu.
              </p>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={styles["about__graphic"]}>
            <div>
              <img src="/static/photos/team.jpg" />
            </div>
          </div>
        </Fade>
      </section>
      <section className={styles["section--about"]} id="jak-to-delame">
        <Fade left>
          <div className={styles["about__graphic"]}>
            <div>
              <img src="/static/photos/bench.jpg" />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div
            className={classnames(
              styles["about__text"],
              styles["about__text--decorated"]
            )}
          >
            <div>
              <h1>Proč jsme postavili Lavičku?</h1>

              <p>
                Psychiatrickou hospitalizaci vnímáme jako důležitou pomoc při
                řešení akutního problému, dítěti poskytuje bezpečí a odpočinek.
                Hospitalizace ale není dlouhodobé řešení – ani to nemá ve svém
                popisu práce. Potíže se tak často vracejí i po propuštění a
                adolescent se může opět cítit na své problémy sám. Zároveň
                samotná psychiatrická hospitalizace stále bojuje s předsudky,
                tudíž po návratu může adolescent vnímat odtržení od svých
                vrstevníků. Mnohdy těžko nachází cestu zpět do běžného života.
                Zásadní chybu vidíme v nedostatku následné individuální a
                skupinové terapeutické péče. Pacienti jsou po celou dobu
                hospitalizace zvyklí na pravidelné terapeutické skupiny, na
                kterých mají možnost s ostatními sdílet své problémy, názory a
                dostávat zpětnou reakci, péči a podporu. Většině adolescentů se
                po hospitalizaci honí hlavou mnoho otázek, na které neznají
                odpovědi a nemají je s kým hledat.
              </p>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default About;
