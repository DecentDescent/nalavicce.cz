import styles from "./Team.scss";
import classnames from "classnames";

const Team = props => {
  return (
    <section className={styles["section--team"]} id="nas-tym">
      <div className={styles["team__container"]}>
        <h1>Kdo sedí na lavičce?</h1>
        <p>
          Jsme tým mladých terapeutů, kteří studují pátý ročník jednooborové
          psychologie na{" "}
          <strong>Pražské vysoké škole psychosociálních studií</strong>. Zároveň
          ukončujeme psychoterapeutické vzdělání a jsme dlouholetí přátelé. Náš
          projekt je <strong>podpořen dětským oddělením PNB</strong> a odborným
          garantem projektu je primář <strong>MUDr. Michal Považan</strong>. Náš
          tým se dále skládá z odborného supervizora a dalších konzultantů
          z fakulty.
        </p>
      </div>
      <div className={styles["team__people"]}>
        <div
          className={styles["person"]}
          onClick={() =>
            props.modalToggle(
              "red",
              "Dita",
              <p>
                Dita je vedoucí projektu. Má bohatou zkušenost v práci s dětmi s
                autismem, kde pracovala zároveň jako koordinátorka dobrovolníků.
                Absolvovala stáž na dětském oddělení PNB. Dita je víla, miluje
                procházky v lese. Když už musí být ve městě, ráda si s námi dá
                dobrou kávu, a je neustálým zdrojem skvělé hudby. S Ditou se dá
                povídat o všem, vždy je připravená naslouchat (a poradit co na
                sebe), a člověk se s ní nikdy nenudí. A dodnes řeší
                nejdůležitější otázku na světě - jaký druh jídla je zmrzlina.
              </p>
            )
          }
        >
          <div
            className={classnames(styles["person__avatar"], styles["dita"])}
          ></div>
          <h2>Dita</h2>
        </div>
        <div
          className={styles["person"]}
          onClick={() =>
            props.modalToggle(
              "yellow",
              "Honza",
              <p>
                Honza je jeden z nejvtipnějších lidí, kterého známe. Nikdy
                nezkazí žádnou srandu, a zároveň je to chlap, který umí
                naslouchat, má nadhled a vždycky si ví rady. Miluje selfie,
                kterým dokáže dávat neuvěřitelné názvy. Má přibližně osmiletou
                terapeutickou praxi, ve které průběžně pracoval i s adolescent
                y. Pracoval mimo jiné jako skupinový terapeut s osobami se
                závislostí. Časem by se chtěl věnovat i párové terapii. Občas je
                nám líto, že je to náš kamarád a nemůže být tím pádem naším
                terapeutem.
              </p>
            )
          }
        >
          {" "}
          <div
            className={classnames(styles["person__avatar"], styles["honza"])}
          ></div>
          <h2>Honza</h2>
        </div>
        <div
          className={styles["person"]}
          onClick={() =>
            props.modalToggle(
              "blue",
              "Lucka",
              <p>
                Lucka je maminka projektu, dvou dospívajících kluků a jezevčíka
                s duší dobrmana. S Luckou se člověk vždy cítí jak bavlnce. Je
                pečující, má geniální smysl pro humor a nakažlivý smích. Má ráda
                dobrou kávu, dobré jídlo, krásné oblečení, poznávání nových míst
                a miluje detektivky. Prošla stáží ve školce pro děti s ADHD,
                dobrovolničila v organizaci pro děti po traumatu, spoluvyvíjí
                aplikace pro děti se zrakovým a kombinovaným postižením,
                spoluvytvářela web primární prevence, a pracovala jako
                koterapeut dětské skupiny.
              </p>
            )
          }
        >
          <div
            className={classnames(styles["person__avatar"], styles["lucka"])}
          ></div>
          <h2>Lucka</h2>
        </div>
        <div
          className={styles["person"]}
          onClick={() =>
            props.modalToggle(
              "brown",
              "Kristýna",
              <p>
                Kristýna je skvělá a spolehlivá parťačka, je všude tam, kde se
                něco děje. Vždycky tu je, když je potřeba, nikdy nesoudí a
                dokáže s nadhledem poradit. Má zkušenosti s vedením dětí, ať už
                na táborech nebo jako vedoucí taneční skupiny. Kristýna miluje
                tanec, návštěva koncertu s ní je zážitek a má kluka, který
                dokonale vaří. V rámci své praxe se věnovala ohrožené mládeži,
                dětem s kombinovaným postižením a pracovala v nízkoprahovém
                klubu pro mladší i starší děti.
              </p>
            )
          }
        >
          {" "}
          <div
            className={classnames(styles["person__avatar"], styles["kristyna"])}
          ></div>
          <h2>Kristýna</h2>
        </div>
        <div
          className={styles["person"]}
          onClick={() =>
            props.modalToggle(
              "green",
              "Martina",
              <p>
                Martina je vřelost sama, srdce na dlani, což je jistě dáno jejím
                jižanským temperamentem. Miluje knížky, hudbu a zpěv, ale ráda
                tráví čas i procházkami po Praze. Zná odpověď na každou otázku,
                je neskutečně chytrá a hrozně se za to stydí. Již 9 let hlídá
                děti, učí angličtinu, hlídala i děti z pěstounských rodin,
                pracovala s ohroženou mládeží. Dlouhou dobu pracuje v centru pro
                rodinu, kde v současné době začíná působit i jako lektorka
                vzdělávacích kurzů pro rodiče.
              </p>
            )
          }
        >
          <div
            className={classnames(styles["person__avatar"], styles["martina"])}
          ></div>
          <h2>Martina</h2>
        </div>
      </div>
    </section>
  );
};

export default Team;

{
  /* <div className={styles["teammates"]}>
          <div
            className={styles["teammate"]}
            onClick={() =>
              props.modalToggle(
                "red",
                "Dita",
                <p>
                  Dita je vedoucí projektu. Má bohatou zkušenost v práci s dětmi
                  s autismem, kde pracovala zároveň jako koordinátorka
                  dobrovolníků. Absolvovala stáž na dětském oddělení PNB. Dita
                  je víla, miluje procházky v lese. Když už musí být ve městě,
                  ráda si s námi dá dobrou kávu, a je neustálým zdrojem skvělé
                  hudby. S Ditou se dá povídat o všem, vždy je připravená
                  naslouchat (a poradit co na sebe), a člověk se s ní nikdy
                  nenudí. A dodnes řeší nejdůležitější otázku na světě - jaký
                  druh jídla je zmrzlina.
                </p>
              )
            }
          >
            <div className={styles["teammate__avatar"]}></div>
            <div className={styles["teammate__name"]}>
              <h4>Dita</h4>
            </div>
          </div>
          <div
            className={styles["teammate"]}
            onClick={() =>
              props.modalToggle(
                "yellow",
                "Honza",
                <p>
                  Honza je jeden z nejvtipnějších lidí, kterého známe. Nikdy
                  nezkazí žádnou srandu, a zároveň je to chlap, který umí
                  naslouchat, má nadhled a vždycky si ví rady. Miluje selfie,
                  kterým dokáže dávat neuvěřitelné názvy. Má přibližně osmiletou
                  terapeutickou praxi, ve které průběžně pracoval i s adolescent
                  y. Pracoval mimo jiné jako skupinový terapeut s osobami se
                  závislostí. Časem by se chtěl věnovat i párové terapii. Občas
                  je nám líto, že je to náš kamarád a nemůže být tím pádem naším
                  terapeutem.
                </p>
              )
            }
          >
            <div className={styles["teammate__avatar"]}></div>
            <div className={styles["teammate__name"]}>
              <h4>Honza</h4>
            </div>
          </div>
          <div
            className={styles["teammate"]}
            onClick={() =>
              props.modalToggle(
                "blue",
                "Lucka",
                <p>
                  Lucka je maminka projektu, dvou dospívajících kluků a
                  jezevčíka s duší dobrmana. S Luckou se člověk vždy cítí jak
                  bavlnce. Je pečující, má geniální smysl pro humor a nakažlivý
                  smích. Má ráda dobrou kávu, dobré jídlo, krásné oblečení,
                  poznávání nových míst a miluje detektivky. Prošla stáží ve
                  školce pro děti s ADHD, dobrovolničila v organizaci pro děti
                  po traumatu, spoluvyvíjí aplikace pro děti se zrakovým a
                  kombinovaným postižením, spoluvytvářela web primární prevence,
                  a pracovala jako koterapeut dětské skupiny.
                </p>
              )
            }
          >
            <div className={styles["teammate__avatar"]}></div>
            <div className={styles["teammate__name"]}>
              <h4>Lucka</h4>
            </div>
          </div>
          <div
            className={styles["teammate"]}
            onClick={() =>
              props.modalToggle(
                "brown",
                "Kristýna",
                <p>
                  Kristýna je skvělá a spolehlivá parťačka, je všude tam, kde se
                  něco děje. Vždycky tu je, když je potřeba, nikdy nesoudí a
                  dokáže s nadhledem poradit. Má zkušenosti s vedením dětí, ať
                  už na táborech nebo jako vedoucí taneční skupiny. Kristýna
                  miluje tanec, návštěva koncertu s ní je zážitek a má kluka,
                  který dokonale vaří. V rámci své praxe se věnovala ohrožené
                  mládeži, dětem s kombinovaným postižením a pracovala v
                  nízkoprahovém klubu pro mladší i starší děti.
                </p>
              )
            }
          >
            <div className={styles["teammate__avatar"]}></div>
            <div className={styles["teammate__name"]}>
              <h4>Kristýna</h4>
            </div>
          </div>
          <div
            className={styles["teammate"]}
            onClick={() =>
              props.modalToggle(
                "green",
                "Martina",
                <p>
                  Martina je vřelost sama, srdce na dlani, což je jistě dáno
                  jejím jižanským temperamentem. Miluje knížky, hudbu a zpěv,
                  ale ráda tráví čas i procházkami po Praze. Zná odpověď na
                  každou otázku, je neskutečně chytrá a hrozně se za to stydí.
                  Již 9 let hlídá děti, učí angličtinu, hlídala i děti z
                  pěstounských rodin, pracovala s ohroženou mládeží. Dlouhou
                  dobu pracuje v centru pro rodinu, kde v současné době začíná
                  působit i jako lektorka vzdělávacích kurzů pro rodiče.
                </p>
              )
            }
          >
            <div className={styles["teammate__avatar"]}></div>
            <div className={styles["teammate__name"]}>
              <h4>Martina</h4>
            </div>
          </div>
        </div> */
}
