import styles from "./Team.scss";
import classnames from "classnames";
import Fade from "react-reveal/Fade";

const Team = props => {
  return (
    <>
      <section className={styles["section--team"]} id="nas-tym">
        <Fade left>
          <div className={styles["team__text"]}>
            <div>
              <h1>Kdo sedí na lavičce?</h1>

              <p>
                Náš projekt je podpořen dětským oddělením PNB a odborným
                garantem projektu je primář{" "}
                <strong>MUDr. Michal Považan</strong>. Odborným supervizorem
                týmu je <strong>Mgr. Jan Kulhánek</strong>, dětský a rodinný
                psychoterapeut s letitou praxí. Jsme tým mladých terapeutů,
                kteří studují pátý ročník jednooborové psychologie na{" "}
                <strong>Pražské vysoké škole psychosociálních studií</strong>.
                Zároveň ukončujeme psychoterapeutické vzdělání a jsme dlouholetí
                přátelé.
              </p>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={styles["team__graphic"]}>
            <div className={styles["teammates"]}>
              <div
                className={styles["teammate"]}
                onClick={() =>
                  props.modalToggle(
                    "Dita",
                    "yellow",
                    "dita_big",
                    <>
                      <p>
                        Dita je zakladatelkou a vedoucí projektu. Dita je víla,
                        miluje procházky v lese. Když už musí být ve městě, ráda
                        si s námi dá dobrou kávu, a je neustálým zdrojem skvělé
                        hudby. S Ditou se dá povídat o všem, vždy je připravená
                        naslouchat, a člověk se s ní nikdy nenudí. A dodnes řeší
                        nejdůležitější otázku na světě - jaký druh jídla je
                        zmrzlina.
                      </p>
                      <div>
                        <h4>Vzdělání</h4>
                        <ul>
                          <li>
                            Jednooborová psychologie na Pražské vysoké škole
                            psychosociálních studií
                          </li>
                          <li>Daseinsanalytický psychoterapeutický výcvik</li>
                          <li>Kurz Psycholog ve zdravotnictví </li>
                          <li>
                            Tvarová terapie u dětí: Doc. PhDr. Karel Balcar,
                            CSc.{" "}
                          </li>
                          <li>Úvod do sexuologie: PhDr. Martina Venglářová </li>
                          <li>
                            Psychiatrické minimum - duševní nemoci a možnosti
                            léčby včetně farmakoterapie: MUDr. Radmila
                            Schneiderová{" "}
                          </li>
                          <li>
                            Daseinsanalýza v psychoterapeutické a poradenské
                            praxi I., II., III.: Jakub Zlámaný, Ph.D.
                          </li>
                        </ul>
                        <h4>Praxe </h4>
                        <ul>
                          <li>
                            Dětské oddělení psychiatrická nemocnice Bohnice
                          </li>
                          <li>Eset - dětská skupinová terapie </li>
                          <li>NAUTIS – koordinátor osobní asistence</li>
                          <li>
                            Cestou necestou, z.s. – organizace a vedení tábora
                            pro děti z pěstounských rodin
                          </li>
                        </ul>
                      </div>
                    </>
                  )
                }
              >
                <h3>Dita</h3>
              </div>
              <div
                className={styles["teammate"]}
                onClick={() =>
                  props.modalToggle(
                    "Honza",
                    "blue",
                    "honza_big",
                    <>
                      <p>
                        Honza je jeden z nejvtipnějších lidí, kterého známe.
                        Nikdy nezkazí žádnou srandu, a zároveň je to chlap,
                        který umí naslouchat, má nadhled a vždycky si ví rady.
                        Miluje selfie, kterým dokáže dávat neuvěřitelné názvy.
                      </p>
                      <div>
                        <h4>Vzdělání</h4>
                        <ul>
                          <li>
                            Jednooborová psychologie na Pražské vysoké škole
                            psychosociálních studií
                            <li>
                              Sociální práce se zaměřením na komunikaci a
                              aplikovanou psychoterapii na Pražské vysoké škole
                              psychosociálních studií.
                            </li>
                            <li>Daseinsanalytický psychoterapeutický výcvik</li>
                            <li>
                              Výcvik v motivačních rozhovorech: PhDr. Jan Soukup
                              Ph.D.
                            </li>
                            <li>
                              Odborný kurz práce s dětskou a adolescentní
                              skupinou: PhDr. Václava Masáková
                            </li>
                            <li>
                              Odborný kurz práce s lidmi, kteří se
                              sebepoškozují: Sheila Haugh, M.A.
                            </li>
                            <li>
                              Seminář Lege Artis postupy v komunitní a skupinové
                              psychoterapii: Mgr. Jakub Zlámaný, Ph.D., Doc.
                              PhDr. Jiří Růžička, Ph.D.
                            </li>
                            <li></li>Rodinná diagnostika a terapie: Doc. PhDr.
                            Karel Balcar, Csc.
                          </li>
                        </ul>
                        <h4>Praxe</h4>
                        <ul>
                          <li>Od roku 2016 soukromá terapeutická praxe</li>
                          <li>
                            Denní stacionář Sananim pro drogově závislé,
                            skupinový terapeut
                          </li>
                          <li>
                            Denní stacionář pro adolescenty v Centru pro
                            dorostovou a vývojovou psychiatrii při psychiatrické
                            klinice 1. lékařské fakulty UK
                          </li>
                          <li>
                            Socioterapeut v Novém Prostoru a v
                            pracovně-tréninkovém programu pro lidi s mentálním
                            postižením v Kavárně Vesmírně
                          </li>
                        </ul>
                      </div>
                    </>
                  )
                }
              >
                <h3>Honza</h3>
              </div>
              <div
                className={styles["teammate"]}
                onClick={() =>
                  props.modalToggle(
                    "Lucka",
                    "red",
                    "lucka_big",
                    <>
                      <p>
                        Lucka je maminka projektu, dvou dospívajících kluků a
                        jezevčíka s duší dobrmana. S Luckou se člověk vždy cítí
                        jak bavlnce. Je pečující, má geniální smysl pro humor a
                        nakažlivý smích. Má ráda dobrou kávu, dobré jídlo,
                        krásné oblečení, poznávání nových míst a miluje
                        detektivky.
                      </p>
                      <div>
                        <h4>Vzdělání</h4>
                        <ul>
                          <li>
                            Jednooborová psychologie na Pražské vysoké škole
                            psychosociálních studií
                          </li>
                          <li>Psychodynamický psychoterapeutický výcvik</li>
                          <li>Daseinsanalytický výklad snů</li>
                          <li>
                            Disociativní porucha osobnosti: Kathryn Livingston a
                            Melanie Goodwin z organizace First Person Plural
                          </li>
                          <li>
                            Psychiatrické minimum - duševní nemoci a možnosti
                            léčby včetně farmakoterapie: MUDr. Radmila
                            Schneiderová{" "}
                          </li>
                          <li>
                            Rodinná diagnostika a terapie: Doc. PhDr. Karel
                            Balcar, Csc.
                          </li>
                          <li>
                            Úvodní kurz – Sandtray terapie: Mgr. Veronika
                            Galusová
                          </li>
                          <li>
                            Akreditovaný vzdělávací program, Děti a ztráta – je
                            těžké být tím, kdo zůstal: Vigvam, z.ú.
                          </li>
                          <li>
                            Daseinsanalýza v psychoterapeutické a poradenské
                            praxi I., II., III.: Jakub Zlámaný, Ph.D.
                          </li>
                        </ul>
                        <h4>Praxe</h4>
                        <ul>
                          <li>
                            Andromeda o.s., dobrovolník v Klokánku Hostivice
                          </li>
                          <li>
                            Dětská daseinsanalytická skupina: Mgr. Lucie
                            Vacková, Doc. Karel Balcar
                          </li>
                          <li>
                            Národní institut pro děti a rodinu – projekt
                            Hyperka, předškolní zařízení pro děti s poruchami
                            pozornosti
                          </li>
                          <li>
                            Člen týmu Kidmap z.s.,Vývoj a testování aplikací pro
                            děti se zrakovým a kombinovaným postižením EDA Play
                            pro Raná péče EDA - EDA cz, z.ú
                          </li>
                          <li>
                            Web Ježkovy voči – primární prevence pro předškolní
                            a mladší školní věk
                          </li>
                        </ul>
                      </div>
                    </>
                  )
                }
              >
                <h3>Lucka</h3>
              </div>
              <div
                className={styles["teammate"]}
                onClick={() =>
                  props.modalToggle(
                    "Kristýna",
                    "brown",
                    "kristyna_big",
                    <>
                      <p>
                        Kristýna je skvělá a spolehlivá parťačka, je všude tam,
                        kde se něco děje. Vždycky tu je, když je potřeba, nikdy
                        nesoudí a dokáže s nadhledem poradit. Kristýna miluje
                        tanec, návštěva koncertu s ní je zážitek a má kluka,
                        který dokonale vaří.
                      </p>
                      <div>
                        <h4>Vzdělání</h4>
                        <ul>
                          <li>
                            Jednooborová psychologie na Pražské vysoké škole
                            psychosociálních studií
                          </li>
                          <li>Psychodynamický psychoterapeutický výcvik</li>
                          <li>Kurz Psycholog ve zdravotnictví</li>
                          <li>
                            Psychiatrické minimum - duševní nemoci a možnosti
                            léčby včetně farmakoterapie: MUDr. Radmila
                            Schneiderová{" "}
                          </li>
                          <li>
                            Typické problémy v komunikaci s klienty s poruchou
                            osobnosti: Mgr. Katarína Durecová
                          </li>
                          <li>
                            Poruchy příjmu potravy: PhDr. František David Krch{" "}
                          </li>
                        </ul>
                        <h4>Praxe</h4>
                        <ul>
                          <li>Psychiatrická nemocnice Bohnice </li>
                          <li>Psychiatrická nemocnice Dobřany </li>
                          <li>Dětský domov se školou Měcholupy</li>
                          <li>Nízkoprahový klub Chapadlo a Budík</li>
                          <li>Lata – program ve dvou se to lépe táhne</li>
                        </ul>
                      </div>
                    </>
                  )
                }
              >
                <h3>Kristýna</h3>
              </div>
              <div
                className={styles["teammate"]}
                onClick={() =>
                  props.modalToggle(
                    "Martina",
                    "green",
                    "martina_big",
                    <>
                      <p>
                        Martinka je vřelost sama, srdce na dlani, což je jistě
                        dáno jejím jižanským temperamentem. Miluje knížky, hudbu
                        a zpěv, ale ráda tráví čas i procházkami po Praze. Zná
                        odpověď na každou otázku, je neskutečně chytrá a hrozně
                        se za to stydí.
                      </p>
                      <div>
                        <h4>Vzdělání</h4>
                        <ul>
                          <li>
                            Jednooborová psychologie na Pražské vysoké škole
                            psychosociálních studií
                          </li>
                          <li>Psychoterapeutický výcvik ve směru PCA</li>
                          <li>Výcvik Edukativní rodičovská terapie</li>
                          <li>Kurz Psycholog ve zdravotnictví</li>
                          <li>
                            Rodinná diagnostika a terapie (Doc. PhDr. Karel
                            Balcar, Csc.)
                          </li>
                          <li>
                            Práce se stresem: PhDr. Alena Halamová, MUDr. Prokop
                            Remeš
                          </li>
                          <li>
                            Úvod do adiktologie, terapeutická komunita: Mgr.
                            Johana Růžková
                          </li>
                          <li>
                            Psychiatrické minimum - duševní nemoci a možnosti
                            léčby včetně farmakoterapie: MUDr. Radmila
                            Schneiderová{" "}
                          </li>
                        </ul>
                        <h4>Praxe</h4>
                        <ul>
                          <li>ZŠ Pod Žvahovem, školní psycholog</li>
                          <li>
                            Centrum pro rodinu (indiv., párové a rodinné
                            poradenství)
                          </li>
                          <li>
                            Rodinné centrum Praha (lektorka programů pro rodiče
                            a děti)
                          </li>
                          <li>
                            Národní ústav duševního zdraví, oddělení úzkostných
                            a afektivních poruch
                          </li>
                          <li>Eset – denní stacionář</li>
                          <li>Magdaléna o.p.s.</li>
                          <li>Lata – program ve dvou se to lépe táhne</li>
                        </ul>
                      </div>
                    </>
                  )
                }
              >
                <h3>Martina</h3>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Team;
