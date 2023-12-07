import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 실행되는 코드
    setIsVisible(true);
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    setActive1(currentScrollY >= 1600);
    setActive2(currentScrollY >= 2100);
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section className={styles.main__section}>
        <div className={styles.main__img}>
          <img
            className={styles.bg__img}
            src='http://localhost:3000/img/bg.png'
            alt='ddd'
          />
        </div>
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
              <button
                className={`${styles.btn__more} ${
                  isActive1 ? styles.active : ''
                }`}
              >
                정보 더보기
              </button>
            </div>
          </div>
          <div className={styles.main__bottom}>
            <div className={styles.connect__line}></div>
            <div
              className={`${styles.animation__content} ${
                isActive1 ? styles.active1 : ''
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
        <div className={styles.container}>
          <div
            className={`${styles.wrapper__animation__content} ${
              isActive2 ? styles.active2 : ''
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
                <span>
                  차별화된 3단 화면 구성을 통해, 관심종목, 차트, 다양한 스마트
                  기능들까지
                  <br />
                  <span>
                    별도의 화면 전환없이 한 화면에서 동시에 이용할 수 있습니다.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div>{scrollY}</div>
        </div>
      </section>
      <section className={styles.detail__feature}>asd</section>
      <section className={styles.customer__review}>asd</section>
      <section className={styles.lead__in__service}>asd</section>
      <footer className={styles.footer}>asd</footer>
    </div>
  );
}
