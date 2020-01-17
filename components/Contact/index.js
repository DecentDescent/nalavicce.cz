import styles from "./Contact.scss";
import classnames from "classnames";

const Contact = () => {
  return (
    <section className={styles["section"]} id="kontakt">
      <div className={styles["container"]}>
        <div className={styles["grid"]}>
          <div>
            <h2>Kontakt</h2>
            <h3>Chcete se zeptat?</h3>

            <div className={styles["contact-box"]}>
              <div className={styles["box__svg"]}>
                <svg viewBox="0 0 512 512">
                  <circle cx="256" cy="256" fill="#6aaf50" r="256" />
                  <path
                    d="m135.693 102.206-.008.004c-29.639 15.464-42.074 51.222-28.494 81.77 19.547 43.975 45.793 84.198 77.468 119.423l23.939 23.939 159.073 159.073c39.82-19.335 73.863-48.69 98.876-84.783l-58.697-58.697c-2.262-3.334-5.169-6.299-8.681-8.681l-221.422-221.421c-9.294-13.695-27.382-18.283-42.054-10.627z"
                    fill="#4d8538"
                  />
                  <path
                    d="m349.593 300.614c-8.192-5.559-18.954-5.531-27.116.071l-11.752 8.066c-13.09 8.984-30.498 8.496-43.08-1.187-11.858-9.127-23.176-18.913-33.924-29.283-10.371-10.748-20.156-22.065-29.283-33.924-9.684-12.581-10.171-29.989-1.187-43.08l8.066-11.752c5.601-8.162 5.63-18.924.071-27.116l-33.64-49.575c-9.293-13.694-27.381-18.282-42.054-10.627l-.009.004c-29.639 15.464-42.074 51.222-28.494 81.77 19.547 43.975 45.793 84.198 77.468 119.423l23.939 23.939c35.226 31.674 75.449 57.921 119.423 77.468 30.549 13.58 66.306 1.145 81.77-28.494l.004-.009c7.655-14.672 3.068-32.761-10.627-42.054z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className={styles["box__text"]}>+420 736 126 447</div>
            </div>

            <div className={styles["contact-box"]}>
              <div className={styles["box__svg"]}>
                <svg
                  enable-background="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="256" cy="256" fill="#5f98d1" r="256" />
                  <path
                    d="m415.813 147.466h-320.255l116.019 120.806 33.48 33.9c-18.216-4.164-19.343-6.759-27.415-13.349-4.234-3.457-12.414-12.852-24.838-25.54-38.781-39.601-104.587-106.799-104.587-106.799v198.822l8.265 8.265-.925.963 147.123 147.123c4.412.226 8.852.343 13.32.343 141.385 0 256-114.615 256-256 0-4.246-.11-8.466-.313-12.661z"
                    fill="#3a6da1"
                  />
                  <g fill="#fff">
                    <path d="m88.217 156.484v198.822l96.958-99.813z" />
                    <path d="m423.783 156.484v198.822l-96.476-99.411z" />
                    <path d="m95.558 147.466h320.255l-125.865 131.058c-8.958 9.327-21.331 14.599-34.262 14.599s-25.304-5.272-34.262-14.599z" />
                    <path d="m297.209 285.496c-10.799 11.244-25.933 17.694-41.523 17.694-15.589 0-30.724-6.448-41.522-17.693l-21.349-22.23-97.257 101.267h320.255l-97.256-101.267z" />
                  </g>
                </svg>
              </div>
              <div className={styles["box__text"]}>
                <a href="mailto:marcelka@nalavicce.cz">marcelka@nalavicce.cz</a>
              </div>
            </div>

            <h3>Adresa setkávání</h3>
            <p className={classnames(styles["paragraph--lead"])}>
              <b>Hekrova 805, Praha 4</b> –{" "}
              <b>Háje Konečná stanice metra C - Háje</b>, východ ze zadního
              vagónu po pevných schodech, potom doprava po jezdících schodech na
              zastávku autobusu <b>197</b>, <b>170</b>. Dvě zastávky do stanice{" "}
              <b>Brechtova</b>, potom kolmou ulicí Schulhoffova a vpravo podél
              oploceného areálu podle šipek k PVŠPS.
            </p>
          </div>
          <div className={styles["contact-map"]}>...mapa</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
