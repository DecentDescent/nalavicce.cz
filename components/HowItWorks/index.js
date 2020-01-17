import styles from "./HowItWorks.scss";
import classnames from "classnames";

const HowItWorks = props => {
  return (
    <section className={styles["section"]} id="jak-fungujeme">
      <div className={styles["container"]}>
        <h2 className={styles["align--center"]}>Jak to funguje?</h2>
        <hr className={styles["divider--blue"]} />
        <p
          className={classnames(
            styles["align--center"],
            styles["paragraph--lead"]
          )}
        >
          Projekt Lavička je projektem následné psychoterapeutické péče ve formě
          skupinové terapie, díky které chceme předejít opakované hospitalizaci
          adolescentů, zároveň mít možnost včas zachytit případné zhoršení
          stavu, a pomoci jim s návratem po hospitalizaci.
        </p>

        <div className={styles["questions"]}>
          <div
            className={styles["question"]}
            onClick={() =>
              props.modalToggle(
                "blue",
                "Kdo se do této služby může přilhásit?",

                <>
                  <p>
                    Tato služba je určena pro adolescenty ve věku{" "}
                    <strong>
                      od 14 do 18let, kteří prošli hospitalizací v Psychiatrické
                      nemocnici Bohnice
                    </strong>{" "}
                    (dále jen PNB).
                  </p>
                  <p>
                    O vstupu do následné péče rozhodují ošetřující lékaři
                    z dětského oddělení. Mezi rozhodující faktory patří
                    především závažnost onemocnění a motivace dítěte.
                  </p>
                </>
              )
            }
          >
            <div className={styles["question__name"]}>
              <h4>Kdo se do této služby může přilhásit?</h4>
            </div>
          </div>
          <div
            className={styles["question"]}
            onClick={() =>
              props.modalToggle(
                "blue",
                "Co mám udělat pro přihlášení?",

                <>
                  <p>
                    Tým terapeutů z Lavičky pravidelně jednou měsíčně navštěvuje
                    dětské oddělení PNB, kde dětem popíše, o jakou službu se
                    jedná, a zároveň se dětem představí. Pokud máte vy jako
                    rodiče, nebo samotné dítě zájem o tuto službu, kontaktujte
                    ošetřujícího lékaře a promluvte si s ním o možnostech. Pokud
                    tým lékařů uzná vstup dítěte do skupiny za vhodný, propojí
                    vás přímo s naším týmem.{" "}
                  </p>
                  <p>
                    Dalším krokem je setkání s námi, které je určeno k tomu,
                    abychom společně prošli smlouvu, která obsahuje pravidla
                    našeho projektu a skupinové terapie. Tato konzultace probíhá
                    za přítomnosti dítěte, které podepisuje smlouvu spolu
                    s rodičem.
                  </p>
                </>
              )
            }
          >
            <div className={styles["question__name"]}>
              <h4>Co mám udělat pro přihlášení?</h4>
            </div>
          </div>
          <div
            className={styles["question"]}
            onClick={() =>
              props.modalToggle(
                "blue",
                "Jak probíhá samotná služba?",

                <>
                  <p>
                    Skupinová terapie probíhá{" "}
                    <strong>
                      jednou týdně v čase 17:30 – 19:00 po dobu minimálně sedmi
                      týdnů
                    </strong>
                    . Setkávat se budeme na půdě Pražské vysoké školy
                    psychosociálních studií, která sídlí na Hájích. Terapii
                    vedou dva kompetentní terapeuti, kteří dětem poskytují
                    bezpečný prostor pro setkávání se a sdílení každodenních
                    záležitostí. Náš tým zůstává i nadále ve spojení s lékařským
                    týmem, s vámi a s ambulantním psychiatrem dítěte.
                  </p>
                </>
              )
            }
          >
            <div className={styles["question__name"]}>
              <h4>Jak probíhá samotná služba?</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
