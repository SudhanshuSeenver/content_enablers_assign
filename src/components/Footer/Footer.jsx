import React from "react";
import styles from "./Footer.module.css";

function Footer({ ...props }) {
  return (
    <footer className={styles.footer} {...props}>
      <p>Copyright - Content Enablers (p) Ltd - {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
