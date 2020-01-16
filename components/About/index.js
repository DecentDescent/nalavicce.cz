import styles from "./About.scss";

const About = () => {
  return (
    <section className={styles["about"]} id="o-projektu">
      <div className={(styles["container"], styles["align--center"])}>
        <h1>Co je Lavička?</h1>
        <p>
          Psychiatrickou hospitalizaci vnímáme jako důležitou pomoc při řešení
          akutního problému. Hospitalizace ale není dlouhodobé řešení, není to
          v jejím „popisu práce“. Potíže se tak často vracejí i po propuštění a
          adolescent se může opět cítit na své problémy sám. Zároveň samotná
          psychiatrická hospitalizace stále bojuje s předsudky, tudíž po návratu
          může cítit odtržení od svých vrstevníků. Mnohdy těžko nachází cestu
          zpět do běžného života. Zásadní chybu tedy vidíme v nedostatku
          následné individuální a skupinové terapeutické péče. Pacienti jsou po
          celou dobu hospitalizace zvyklí na pravidelné společné terapeutické
          skupiny, na kterých mají možnost sdílet své problémy, názory a
          dostávat zpětnou reakci, péči a podporu. Většině propuštěných se honí
          hlavou mnoho otázek, na které neznají odpovědi a nemají je s kým
          hledat. Projekt Lavička je projektem následné psychoterapeutické péče
          ve formě skupinové terapie, díky které chceme předejít opakované
          hospitalizaci adolescentů, zároveň mít možnost včas zachytit případné
          zhoršení stavu, a pomoci jim s návratem po hospitalizaci.
        </p>
      </div>
    </section>
  );
};

export default About;
