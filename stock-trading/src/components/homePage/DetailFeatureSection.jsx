import React from 'react';
import styles from './DetailFeatureSection.module.css';

export default function DetailFeatureSection({ activeSections_7 }) {
  return (
    <>
      <div
        className={`${styles.detail__feature_container} ${
          activeSections_7 ? styles.active : ''
        }`}
      >
        <h2 className={styles.main__title}>
          투자에 필요한 모든 기능
          <br />
          알파스퀘어 <span className={styles.highlight}> 단 한 곳</span>에서.
        </h2>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <img
              className={styles.item__image}
              src='http://localhost:3000/img/stock_memo.png'
              alt='img'
            />
            <p className={styles.sub__title}>종목메모</p>
            <p className={styles.sub__decription}>
              한 번의 메모 작성으로 모든
              <br />
              기기에서 실시간으로 연동됩니다.
            </p>
          </div>
          <div className={styles.item}>
            <img
              className={styles.item__image}
              src='http://localhost:3000/img/community.png'
              alt='img'
            />
            <p className={styles.sub__title}>커뮤니티</p>
            <p className={styles.sub__decription}>
              태그 방식을 활용한 개방형
              <br />
              구조의 타임라인을 제공합니다.
            </p>
          </div>
          <div className={styles.item}>
            <img
              className={styles.item__image}
              src='http://localhost:3000/img/virtual_trading.png'
              alt='img'
            />
            <p className={styles.sub__title}>모의투자</p>
            <p className={styles.sub__decription}>
              공인인증서 없이 손쉽게
              <br />
              포트폴리오를 구성할 수 있습니다.
            </p>
          </div>
          <div className={styles.item}>
            <img
              className={styles.item__image}
              src='http://localhost:3000/img/indicator.png'
              alt='img'
            />
            <p className={styles.sub__title}>매매전략</p>
            <p className={styles.sub__decription}>
              보조지표를 기반으로 종목의
              <br />
              매매시점을 표시합니다.
            </p>
          </div>
          <div className={styles.item}>
            <img
              className={styles.item__image}
              src='http://localhost:3000/img/theme.png'
              alt='img'
            />
            <p className={styles.sub__title}>테마발굴</p>
            <p className={styles.sub__decription}>
              각 테마별 종목들과 실시간
              <br />
              테마 순위를 제공합니다.
            </p>
          </div>
          <div className={styles.item}>
            <img
              className={styles.item__image}
              src='http://localhost:3000/img/stock_filter.png'
              alt='img'
            />
            <p className={styles.sub__title}>종목필터</p>
            <p className={styles.sub__decription}>
              내가 원하는 기준의 투자
              <br />
              종목을 단번에 찾아줍니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
