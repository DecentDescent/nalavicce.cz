import styles from "./About.scss";

const About = () => {
  return (
    <section className={styles["about"]}>
      <div className={styles["container"]}>
        <h1>Co je Lavička?</h1>
        <p>
          Projekt Lavička je bezplatná následná psychoterapeutická služba pro
          adolescentní pacienty, kteří prošli psychiatrickou hospitalizací. Tato
          péče probíhá formou terapeutických skupin, jejichž cílem je usnadnit
          dětem návrat do běžného fungování a podpořit sdílení problémů a
          těžkostí v bezpečném prostředí mezi vrstevníky. Prozatím se jedná o
          pilotní projekt, který je veden odborným garantem. Naším cílem je
          vytvořit z tohoto pilotního projektu běžnou posthospitalizační službu.
        </p>
      </div>
    </section>
  );
};

export default About;