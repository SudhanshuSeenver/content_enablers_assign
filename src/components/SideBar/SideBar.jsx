import React, { useState, useEffect } from "react";
import styles from "./SideBar.module.css";

function SideBar({ sideItems, changeContentData }) {
  const [sideTabSelect, setSideTabSelect] = useState(Number(sideItems[0].id));

  useEffect(() => {
    const contentData = sideItems.find(
      (item) => Number(item.id) === sideTabSelect
    );
    changeContentData(contentData.list);
  }, []);

  function handleClickSideTabs(e) {
    if (e.target.id) setSideTabSelect(Number(e.target.id));
    const contentData = sideItems.find((item) => {
      return Number(item.id) === Number(e.target.id);
    });
    if (contentData.name.toLowerCase() === "scenarios") {
      changeContentData(contentData.list[0].items);
    } else changeContentData(contentData.list);
    // console.log(item.id, sideTabSelect);
  }

  return (
    <div className={styles.sidebar}>
      <ul onClick={handleClickSideTabs} className={styles.sidebar_list}>
        {sideItems.map((item) => {
          const listStyles = `${styles.side_Listitem} ${
            sideTabSelect === Number(item.id) ? styles.sideTab_selected : ""
          }`;

          return (
            <li id={item.id} key={item.id} className={listStyles}>
              <div className={styles.side_Listitem_name}>
                <p>{item.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
