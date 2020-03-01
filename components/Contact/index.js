import styles from "./Contact.scss";
import Fade from "react-reveal/Fade";
import classnames from "classnames";

const Contact = () => {
  return (
    <>
      <section className={styles["section--about"]} id="jak-to-delame">
        <Fade left>
          <div className={styles["about__graphic"]}>
            <div>
              <img src="/static/photos/contact.png" />
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
              <h1>Kontakt</h1>
              <p>Chcete se zeptat? Napište nám na náš informační email</p>
              <p>
                <strong>
                  <a href="mailto:marcelka@nalavicce.cz">
                    marcelka@nalavicce.cz
                  </a>
                </strong>
              </p>
              <p>nebo volejte naší imaginární sekretářce Marcelce:</p>
              <p>
                <strong>(+420) 736 126 447</strong>
              </p>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Contact;
