import styles from "./Dialog.scss";
import classnames from "classnames";

const Dialog = props => {
  return (
    <div
      className={classnames({
        [styles["dialog"]]: true,
        [styles["dialog--opened"]]: props.dialogState
      })}
    >
      <div className={styles["dialog__box"]}>
        <button onClick={props.dialogClose}>Close</button>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Dialog;
