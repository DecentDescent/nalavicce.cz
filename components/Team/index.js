import styles from "./Team.scss";
import classnames from "classnames";
const Team = () => {
  return (
    <section className={styles["team"]}>
      <div className={styles["container"]}>
        <h2 className={styles["align--center"]}>Kdo sedí na lavičce</h2>
        <hr className={styles["divider--red"]} />
        <p
          className={classnames(
            styles["align--center"],
            styles["paragraph--lead"]
          )}
        >
          Jsme tým mladých terapeutů, kteří studují pátý ročník jednooborové
          psychologie na <b>Pražské vysoké škole psychosociálních studií</b>.
          Zároveň ukončujeme psychoterapeutické vzdělání a jsme dlouholetí
          přátelé. Náš projekt je podpořen dětským oddělením PNB a odborným
          garantem projektu je primář <b>MUDr. Michal Považan</b>. Náš tým se
          dále skládá z odborného supervizora a dalších konzultantů z fakulty.
        </p>

        <div className={styles["teammates"]}>
          <div className={styles["teammate"]}>
            <div className={styles["teammate__avatar"]}></div>
            <div className={styles["teammate__name"]}>
              <h4>Dita</h4>
            </div>
          </div>
          <div className={styles["teammate"]}>
            <div className={styles["teammate__avatar"]}></div>
            <div className={styles["teammate__name"]}>
              <h4>Honza</h4>
            </div>
          </div>
          <div className={styles["teammate"]}>
            <div className={styles["teammate__avatar"]}></div>
            <div className={styles["teammate__name"]}>
              <h4>Lucie</h4>
            </div>
          </div>
          <div className={styles["teammate"]}>
            <div className={styles["teammate__avatar"]}></div>
            <div className={styles["teammate__name"]}>
              <h4>Kristýna</h4>
            </div>
          </div>
          <div className={styles["teammate"]}>
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
