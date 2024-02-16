import styles from "./Certificate.module.css";
import React, { useEffect, useRef, useState } from 'react';
import { data } from "../../data/data";

export const Certificate = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      }
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <section className={styles.container} id="certificate">
      <h2 className={styles.title}>Certificados</h2>
      <div className={styles.content}>
        <div className={styles.maincontainer}>
          <div className={styles.slidercontainer}>
            <div className={styles.leftArrow} onClick={() => scrollToImage('prev')}>&#10092;</div>
            <div className={styles.rightArrow} onClick={() => scrollToImage('next')}>&#10093;</div>
            <div className={styles.containerimages}>
              <ul ref={listRef} className={styles.ulcer}>
                {data.map((item) => (
                  <li key={item.id} className={styles.licer}>
                    <img src={item.imgUrl} className={styles.imger} alt={`Certificate ${item.id}`} />
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.dotscontainer}>
              {data.map((_, idx) => (
                <div key={idx} className={`${styles.dotcontaineritem} ${idx === currentIndex ? styles.active : ""}`} onClick={() => goToSlide(idx)}>
                  &#9865;
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};