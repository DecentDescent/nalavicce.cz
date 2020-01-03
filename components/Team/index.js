import styles from "./Team.scss";

const Team = () => {
  return (
    <section className={styles["team"]}>
      <div className={styles["container"]}>
        <h1>Náš tým</h1>
        <p>
          Jsme tým mladých terapeutů, kteří studují pátý ročník jednooborové
          psychologie na <b>ražské vysoké škole psychosociálních studií</b>.
          Zároveň ukončujeme psychoterapeutické vzdělání a jsme dlouholetí
          přátelé. Náš projekt je podpořen dětským oddělením PNB a odborným
          garantem projektu je primář <b>MUDr. Michal Považan</b>. Náš tým se
          dále skládá z odborného supervizora a dalších konzultantů z fakulty.
        </p>
      </div>
    </section>
  );
};

export default Team;
