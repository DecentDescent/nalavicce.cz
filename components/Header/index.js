import styles from "./Header.scss";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import classnames from "classnames";

function Header() {
  const [navStatus, toggleNav] = useState(false);
  const [compactHeader, setCompactHeader] = useState(false);
  const [lower, setLower] = useState(false);

  useEffect(() => {
    const action = e => {
      const heroHeight = document.getElementById("domu").offsetHeight;
      const pos = document.documentElement.scrollTop;
      if (pos > heroHeight) {
        setLower(true);
      }

      if (pos < heroHeight) {
        setLower(false);
      }
    };
    window.addEventListener("scroll", action);
    return () => window.removeEventListener("", action);
  }, []);

  useEffect(() => {
    setCompactHeader(lower);
  }, [lower]);

  return (
    <header
      className={classnames({
        [styles["header"]]: true,
        [styles["header--compact"]]: compactHeader
      })}
    >
      <div className={styles["header__logo"]}>
        <svg viewBox="0 0 109 23">
          <g fill="none" fillRule="evenodd" transform="translate(.021 .01)">
            <path
              d="m103.007 20.78c.618 1.065 1.64 1.533 2.768 1.533 1.852 0 3.194-1.341 3.194-3.194 0-.596-.149-1.149-.405-1.618l-5.387-9.368c-.553-.958-1.533-1.576-2.789-1.576s-2.235.618-2.789 1.576l-5.387 9.368c-.255.469-.404 1.022-.404 1.618 0 1.853 1.341 3.194 3.193 3.194 1.129 0 2.151-.468 2.768-1.533l.703-1.235h3.811z"
              fill="#fff"
            />
            <path
              d="m84.377 21.355c1.32 1.299 3.215 1.299 4.535 0 1.299-1.32 1.299-3.215 0-4.535l-2.384-2.385 2.384-2.384c1.299-1.321 1.299-3.216 0-4.536-1.32-1.298-3.215-1.298-4.535 0l-2.235 2.236c0-1.852-1.342-3.194-3.194-3.194-1.853 0-3.194 1.342-3.194 3.194v9.368c0 1.853 1.341 3.194 3.194 3.194 1.852 0 3.194-1.341 3.194-3.194z"
              fill="#fff"
            />
            <path
              d="m70.985 14.435c.979-.702 1.576-1.852 1.576-3.215 0-3.3-3.386-4.663-6.303-4.663-4.556 0-7.877 3.322-7.877 7.878 0 4.557 3.321 7.878 7.877 7.878 2.917 0 6.303-1.363 6.303-4.663 0-1.362-.597-2.512-1.576-3.215zm-5.365-8.091c.468 0 .915-.127 1.277-.34l2.725-1.555c.682-.383 1.108-1.149 1.108-2.044 0-1.383-1.022-2.405-2.406-2.405-.447 0-.852.106-1.214.298l-1.49.915-1.491-.915c-.362-.192-.766-.298-1.213-.298-1.384 0-2.406 1.022-2.406 2.405 0 .895.426 1.661 1.107 2.044l2.725 1.555c.362.213.809.34 1.278.34z"
              fill="#fff"
            />
            <path
              d="m49.225 19.119c0 1.853 1.342 3.194 3.194 3.194s3.194-1.341 3.194-3.194v-9.368c0-1.852-1.342-3.194-3.194-3.194s-3.194 1.342-3.194 3.194z"
              fill="#fff"
            />
            <path
              d="m35.897 8.09c-.618-1.064-1.639-1.533-2.768-1.533-1.852 0-3.194 1.342-3.194 3.194 0 .596.149 1.15.405 1.618l5.387 9.368c.553.959 1.533 1.576 2.789 1.576s2.235-.617 2.789-1.576l5.387-9.368c.255-.468.404-1.022.404-1.618 0-1.852-1.341-3.194-3.193-3.194-1.129 0-2.151.469-2.768 1.533l-2.619 4.557z"
              fill="#fff"
            />
            <path
              d="m24.187 20.78c.617 1.065 1.639 1.533 2.767 1.533 1.853 0 3.194-1.341 3.194-3.194 0-.596-.149-1.149-.404-1.618l-5.387-9.368c-.554-.958-1.533-1.576-2.789-1.576s-2.236.618-2.789 1.576l-5.387 9.368c-.256.469-.405 1.022-.405 1.618 0 1.853 1.342 3.194 3.194 3.194 1.128 0 2.15-.468 2.768-1.533l.703-1.235h3.811z"
              fill="#fff"
            />
            <path
              d="m6.387 9.751c0-1.852-1.341-3.194-3.193-3.194-1.853 0-3.194 1.342-3.194 3.194v8.942c0 1.853 1.341 3.194 3.194 3.194h5.535c1.853 0 3.194-1.341 3.194-3.194 0-1.852-1.341-3.193-3.194-3.193h-2.342z"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
      <div className={styles["header__nav"]}>
        <nav>
          <ul>
            <li>
              <a href="#o-projektu">O projektu</a>
            </li>
            <li>
              <a href="#jak-fungujeme">Jak to funguje?</a>
            </li>
            <li>
              <a href="#nas-tym">Náš tým</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
