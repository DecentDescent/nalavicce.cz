import styles from "./Team.scss";
import classnames from "classnames";

const Team = props => {
  return (
    <section className={styles["section"]} id="nas-tym">
      <div className={styles["decoration"]}>
        <svg viewBox="0 0 1260 878">
          <g fill="none" fillRule="evenodd">
            <path
              d="m691.812788 817.506985c24.358342 42.00875 64.678819 60.493015 109.19221 60.493015 73.075025 0 125.995002-52.93009 125.995002-126.026249 0-23.529676-5.879421-45.372357-15.962135-63.856622l-212.504997-369.685303c-21.841556-37.809432-60.475526-62.174819-110.032868-62.174819s-88.196502 24.365387-110.032868 62.174819l-212.510187 369.685303c-10.077524 18.484265-15.956945 40.326946-15.956945 63.856622 0 73.096159 52.914787 126.026249 125.989813 126.026249 44.51858 0 84.833867-18.484265 109.197399-60.493015l27.715787-48.730773h150.353344zm41.155946-631.823432c48.716684-15.125849 66.360136-55.457986 66.360136-90.7447128 0-54.6118938-40.320477-94.9388402-94.916581-94.9388402-11.758842 0-21.000897 1.67661265-29.397105 4.19931775l-162.952844 49.57167435c-47.876025 14.2849474-66.354946 55.4527959-66.354946 90.7395229 0 54.611893 40.315287 94.94403 94.916581 94.94403 10.918183 0 20.995707-1.681803 29.397104-4.204508z"
              fill="#d55241"
              opacity="0.05"
            />
            <path
              d="m27.1403004 588.344716c44.2295995 98.397367 141.7321026 162.655284 262.3596996 162.655284 167.8699 0 289.5-121.490786 289.5-289.168409 0-53.211885-13.068899-101.40662-35.186296-142.571118 14.076596-23.093419 22.117397-51.209176 22.117397-82.334186 0-24.099961-5.028097-46.186837-14.071401-66.271003-44.2296-98.397367-141.737297-162.655284-262.3597-162.655284-167.8699 0-289.5 121.490786-289.5 289.168409 0 53.217073 13.0688987 101.411808 35.1811013 142.576307-14.0714017 24.094773-22.1122026 52.21053-22.1122026 82.334185 0 24.094773 5.0229034 46.186837 14.0714017 66.265815"
              fill="#4caab2"
              opacity="0.06"
            />
            <path
              d="m957 603.126593c33.831736 0 62.51053-12.475074 82.36908-34.486556v43.292185c0 63.836927 46.32969 110.067778 110.31546 110.067778 63.98058 0 110.31546-46.230851 110.31546-110.067778v-322.864444c0-63.84211-46.33488-110.067778-110.31546-110.067778-33.83173 0-62.51053 12.475074-82.36908 34.486556l-110.31546 118.873407-110.315458-118.873407c-19.858549-22.011482-48.537348-34.486556-82.369084-34.486556-63.980576 0-110.315458 46.225668-110.315458 110.067778v322.864444c0 63.836927 46.334882 110.067778 110.315458 110.067778 63.985771 0 110.315459-46.230851 110.315459-110.067778v-43.292185c19.858548 22.011482 48.537347 34.486556 82.369083 34.486556"
              fill="#e7a352"
              opacity="0.07"
            />
          </g>
        </svg>
      </div>
      <div className={styles["container"]}>
        <h2 className={styles["align--center"]}>Kdo sedí na lavičce?</h2>
        <hr className={styles["divider--red"]} />
        <p
          className={classnames(
            styles["align--center"],
            styles["paragraph--lead"]
          )}
        >
          Jsme tým mladých terapeutů, kteří studují pátý ročník jednooborové
          psychologie na{" "}
          <strong>Pražské vysoké škole psychosociálních studií</strong>. Zároveň
          ukončujeme psychoterapeutické vzdělání a jsme dlouholetí přátelé. Náš
          projekt je <strong>podpořen dětským oddělením PNB</strong> a odborným
          garantem projektu je primář <strong>MUDr. Michal Považan</strong>. Náš
          tým se dále skládá z odborného supervizora a dalších konzultantů
          z fakulty.
        </p>

        <div className={styles["teammates"]}>
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
        </div>
      </div>
    </section>
  );
};

export default Team;
