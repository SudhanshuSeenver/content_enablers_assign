import React from "react";
import styles from "./Header.module.css";

function Header({ tabData, selected, changeSelected, ...props }) {
  function handleClickTab(e) {
    if (e.target.id) changeSelected(Number(e.target.id));
  }

  return (
    <header className={styles.header} {...props}>
      <div className={styles.header_logoMenu}>
        <p className={styles.logo}>
          content <span>enablers</span>
        </p>
      </div>
      <div className={styles.header_tabs}>
        <ul onClick={handleClickTab} className={styles.tabs_list}>
          {tabData.map((data) => {
            // console.log(data.id, selected);
            const listStyles = `${styles.tab_item} ${
              selected === data.id ? styles.tab_selected : ""
            }`;

            return (
              <li className={listStyles} id={data.id} key={data.id}>
                <p>{data.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
