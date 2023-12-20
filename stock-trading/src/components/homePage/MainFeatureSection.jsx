import React from 'react';
import styles from './MainFeatureSection.module.css';

export default function MainFeatureSection({
  activeSections_1,
  activeSections_2,
  activeSections_3,
  activeSections_4,
  activeSections_5,
  activeSections_6,
}) {
  return (
    <>
      <div className={styles.main__feature_1}>
        <div
          className={`${styles.wrapper__animation__content} ${
            activeSections_1 ? styles.active : ''
          }`}
        >
          <h2 className={styles.order}>01</h2>
          <div className={styles.content}>
            <p className={styles.title}>
              다양한 투자정보와 차트를
              <br />
              <span className={styles.bold}>한 화면에서 동시에.</span>
            </p>
            <div className={styles.description}>
              차별화된 3단 화면 구성을 통해, 관심종목, 차트, 다양한 스마트
              기능들까지
              <span className={styles.text}>
                <br />
                별도의 화면 전환없이 한 화면에서 동시에 이용할 수 있습니다.
              </span>
            </div>
          </div>
        </div>
        <div
          className={`${styles.video_container} ${
            activeSections_2 ? styles.active : ''
          }`}
        >
          <video muted autoPlay loop>
            <source
              src={process.env.PUBLIC_URL + '/video/market_video.mp4'}
              type='video/mp4'
            />
          </video>
        </div>
      </div>
      <div className={styles.main__feature_2}>
        <div
          className={`${styles.wrapper__animation__content} ${
            activeSections_3 ? styles.active : ''
          }`}
        >
          <h2 className={styles.order}>02</h2>
          <div className={styles.content}>
            <p className={styles.title}>
              어려운 종목 발굴/분석을
              <br />
              <span className={styles.bold}>직관적이고, 간편하게.</span>
            </p>
            <div className={styles.description}>
              인공지능 기반의 차별화된 발굴/분석 기능을 쉽고 간편하게
              <br />
              <span className={styles.text}>
                구현하여 주식 투자자들에게 높은 사용성을 제공합니다.
              </span>
            </div>
          </div>
        </div>
        <div
          className={`${styles.img__container} ${
            activeSections_4 ? styles.active : ''
          }`}
        >
          <img
            className={styles.analysis__img}
            src={process.env.PUBLIC_URL + '/img/image_analysis.png'}
            alt='img'
          />
        </div>
      </div>
      <div className={styles.main__feature_3}>
        <div
          className={`${styles.wrapper__animation__content} ${
            activeSections_5 ? styles.active : ''
          }`}
        >
          <h2 className={styles.order}>03</h2>
          <div className={styles.content}>
            <p className={styles.title}>
              나만의 투자환경을
              <br />
              기기에 제약없이
              <span className={styles.bold}> 언제 어디서나.</span>
            </p>
            <div className={styles.description}>
              인공지능 기반의 차별화된 발굴/분석 기능을 쉽고 간편하게
              <br />
              <span className={styles.text}>
                구현하여 주식 투자자들에게 높은 사용성을 제공합니다.
              </span>
            </div>
          </div>
        </div>
        <div
          className={`${styles.img__container} ${
            activeSections_6 ? styles.active : ''
          }`}
        >
          <img
            className={styles.analysis__img}
            src={process.env.PUBLIC_URL + '/img/image_likeage.png'}
            alt='img'
          />
        </div>
      </div>
    </>
  );
}
