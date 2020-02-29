import styles from "./Dialog.scss";
import classnames from "classnames";
const Dialog = props => {
  return props.dialogState ? (
    <div
      className={classnames({
        [styles["dialog"]]: true,
        [styles[`dialog--${props.dialogColor}`]]: true
      })}
    >
      <div className={styles["dialog__box"]}>
        <a onClick={props.dialogClose} className={styles["box__close"]}>
          <svg viewBox="0 0 492 492">
            <path d="m300.188 246 183.952-183.96c5.06-5.064 7.852-11.82 7.86-19.024 0-7.208-2.792-13.972-7.86-19.028l-16.12-16.116c-5.068-5.076-11.824-7.856-19.036-7.856-7.2 0-13.956 2.78-19.024 7.856l-183.952 183.948-183.96-183.948c-5.06-5.076-11.82-7.856-19.028-7.856-7.2 0-13.96 2.78-19.02 7.856l-16.128 16.116c-10.496 10.496-10.496 27.568 0 38.052l183.956 183.96-183.956 183.952c-5.064 5.072-7.852 11.828-7.852 19.032s2.788 13.96 7.852 19.028l16.124 16.116c5.06 5.072 11.824 7.856 19.02 7.856 7.208 0 13.968-2.784 19.028-7.856l183.96-183.952 183.952 183.952c5.068 5.072 11.824 7.856 19.024 7.856h.008c7.204 0 13.96-2.784 19.028-7.856l16.12-16.116c5.06-5.064 7.852-11.824 7.852-19.028s-2.792-13.96-7.852-19.028z" />
          </svg>
        </a>
        <div
          className={styles["box__photo"]}
          style={{
            backgroundImage: "url(/static/photos/" + props.dialogPhoto + ".jpg)"
          }}
        ></div>
        <div className={styles["box__content"]}>
          <h1>{props.dialogTitle}</h1>

          {props.dialogContent}
        </div>
      </div>
    </div>
  ) : null;
};

export default Dialog;
