import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import AppContext from "../../../context/app-context";
import { useContext } from "react";

const Backdrop = (props) => {
  const ctx = useContext(AppContext);
  return <div className={styles.backdrop} onClick={ctx.hideAll}></div>;
};

const portalElemnet = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElemnet)}
      {ReactDOM.createPortal(<>{props.children}</>, portalElemnet)}
    </>
  );
};

export default Modal;
