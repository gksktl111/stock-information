import React, { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import Carousel from '../components/homePage/Carousel';
import MainFeatureSection from './../components/homePage/MainFeatureSection';
import DetailFeatureSection from '../components/homePage/DetailFeatureSection';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // y의 높이에 따른 엑티브
  const sectionPositions = [
    1400, 1800, 2100, 2900, 3200, 3900, 4100, 4800, 6000, 6800,
  ];
  const [activeSections, setActiveSections] = useState(
    Array(sectionPositions.length).fill(false)
  );

  // const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 실행되는 코드

    setIsVisible(true);
  }, []);

  // 스크롤 엑티브 관리
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // setScrollY(currentScrollY);

    const newActiveSections = sectionPositions.map(
      (position) => currentScrollY >= position
    );

    setActiveSections(newActiveSections);
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const scrollToY = useRef(null);

  const handleButtonClick = () => {
    // 스크롤 이동
    if (scrollToY.current) {
      window.scrollTo({
        top: scrollToY.current.offsetTop,
        behavior: 'smooth',
      });

      console.log(scrollToY);
    }
  };

  return (
    <div className={styles.home}>
      <section className={styles.main__section}>
        <div className={styles.main__page__top}>
          <div
            className={`${styles.main__top} ${isVisible ? styles.visible : ''}`}
          >
            <h2 className={styles.top__title}>
              올인원 스마트
              <br />
              <span className={styles.highlight}>트레이딩 </span>
              플랫폼.
            </h2>
            <p className={styles.description__main}>
              실시간 투자 정보부터 다양한 발굴분석까지 <br />
              기존과는 전혀 다른 새로운 투자환경을 경험해보세요.
            </p>
            <div className={styles.btn__wrap}>
              <button className={styles.btn__start}>무료로 시작하기</button>
              <button className={styles.btn__more} onClick={handleButtonClick}>
                정보 더보기
              </button>
            </div>
          </div>
          <div ref={scrollToY} className={styles.main__bottom}>
            <div className={styles.connect__line}></div>
            <div
              className={`${styles.animation__content} ${
                activeSections[0] ? styles.active : ''
              }`}
            >
              <h2 className={styles.bottom__title}>
                <span className={styles.highlight}>ALL-IN-ONE </span>SMART
                TRADING
              </h2>
              <p className={styles.bottom__description}>
                당연하지 않았던 투자환경, 이제는 당연하게.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.main__feature}>
        <MainFeatureSection
          activeSections_1={activeSections[1]}
          activeSections_2={activeSections[2]}
          activeSections_3={activeSections[3]}
          activeSections_4={activeSections[4]}
          activeSections_5={activeSections[5]}
          activeSections_6={activeSections[6]}
        />
      </section>
      <section className={styles.detail__feature}>
        <DetailFeatureSection activeSections_7={activeSections[7]} />
      </section>
      <section
        className={`${styles.customer__review} ${
          activeSections[8] ? styles.active : ''
        }`}
      >
        <h2 className={styles.customer__review__title}>
          알파스퀘어와 함께 성장하는
          <br />
          <span className={styles.highlight}>주체적 개인투자자들</span>.
        </h2>
        <div className={styles.review__slider}>
          <Carousel />
        </div>
        <div className={styles.rating__container}>
          <div className={styles.rating__box__apple}>
            <p className={styles.rating__title}>애플 앱스토어</p>
            <p className={styles.rating}>
              <span className={styles.bold}>4.8</span>
              /5.0
            </p>
            <img src='/img/apple_rating.png' alt='rating' />
          </div>
          <div className={styles.rating__box__google}>
            <p className={styles.rating__title}>구글 플레이스토어</p>
            <p className={styles.rating}>
              <span className={styles.bold}>4.9</span>
              /5.0
            </p>
            <img src='/img/google_rating.png' alt='rating' />
          </div>
          <div className={styles.rating__box__naver}>
            <p className={styles.rating__title}>네이버 웨일스토어</p>
            <p className={styles.rating}>
              <span className={styles.bold}>5.0</span>
              /5.0
            </p>
            <img src='/img/naver_rating.png' alt='rating' />
          </div>
        </div>
      </section>
      <section className={styles.lead__in__service}>
        <div
          className={`${styles.lead__in__service__container} ${
            activeSections[9] ? styles.active : ''
          }`}
        >
          <h2 className={styles.service__title}>
            <span className={styles.highlight}>알파스퀘어</span>
            와 함께
            <br />
            스마트한 투자를 시작하세요.
          </h2>
          <button className={styles.btn__start}>무료로 시작하기</button>
        </div>
      </section>
      <footer className={styles.footer}>
        <span className={styles.footer__title}>
          본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
        </span>
        <div className={styles.footer__container}>
          <div className={styles.git}>
            <img src='/img/git_img.png' alt='git' className={styles.git__img} />
            <a
              href='https://github.com/gksktl111'
              className={styles.footer__text}
            >
              github.com/gksktl111
            </a>
          </div>
          <div className={styles.email__container}>
            <img
              src='/img/gmail_img.png'
              alt='git'
              className={styles.git__img}
            />
            <span className={styles.footer__text}>
              gksktl1234@kyungmin.ac.kr
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
