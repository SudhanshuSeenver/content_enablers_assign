import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import styles from "./Home.module.css";
import Footer from "../Footer/Footer";
import data from "../../assets/data/site.json";
import SideBar from "../SideBar/SideBar";
import introductionImage from "../../assets/introduction.png";

function Home() {
  const [tabSelect, setTabSelect] = useState(1);
  const [sideData, setSideData] = useState([]);
  //   const [sideTabSelect, setSideTabSelect] = useState(0);
  const [contentData, setContentData] = useState([]);

  const tabsData = [
    { name: "introduction", id: 1 },
    { name: "who", id: 2 },
    { name: "what", id: 3 },
    { name: "how", id: 4 },
    { name: "training summary", id: 5 },
  ];

  useEffect(() => {
    const tab = tabsData.find((data) => data.id === tabSelect);
    const contentTabs = data.find(
      (item) => item.name.toLowerCase() === tab.name.toLowerCase()
    );
    setSideData(contentTabs ? contentTabs.tabs : []);
    // setSideTabSelect(contentTabs.tabs[0].id)
    // setSideTabSelectData(contentTabs.tabs[0].list)
  }, [tabSelect]);

  //   useEffect(() => {

  //     const data = sideData.find(it => it.id === sideTabSelect)
  //     setSideTabSelectData(data.list)

  //   }, [sideTabSelect]);

  return (
    <div className={styles.container}>
      <Header
        tabData={tabsData}
        selected={tabSelect}
        changeSelected={setTabSelect}
      />
      <main>
        <figure>
          <img src={introductionImage} alt="introduction" />
          <div>
            <h3></h3>
            <p></p>
          </div>
        </figure>
        {sideData.length !== 0 && (
          <div className={styles.content}>
            <SideBar sideItems={sideData} changeContentData={setContentData} />
            <div>
              {contentData.map((content) => {
                return (
                  <div
                    className={styles.content_cont}
                    key={content.id + content.name}
                  >
                    <h4 className={styles.content_head}>
                      {content.name.split(" ")[0]}
                    </h4>
                    <div className={styles.content_items}>
                      {content.items.map((item) => (
                        <div className={styles.content_vid} key={item.id}>
                          {item.title}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
