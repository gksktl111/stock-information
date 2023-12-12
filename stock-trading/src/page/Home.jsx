import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  const [isActive4, setActive4] = useState(false);
  const [isActive5, setActive5] = useState(false);
  const [isActive6, setActive6] = useState(false);
  const [isActive7, setActive7] = useState(false);
  const [isActive8, setActive8] = useState(false);
  const [isActive9, setActive9] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 실행되는 코드
    setIsVisible(true);
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    setActive1(currentScrollY >= 1400);
    setActive2(currentScrollY >= 1800);
    setActive3(currentScrollY >= 2100);
    setActive4(currentScrollY >= 2900);
    setActive5(currentScrollY >= 3200);
    setActive6(currentScrollY >= 3900);
    setActive7(currentScrollY >= 4100);
    setActive8(currentScrollY >= 4800);
    setActive9(currentScrollY >= 6000);
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
    <div className={styles.home}>
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
              <button className={styles.btn__more}>정보 더보기</button>
            </div>
          </div>
          <div className={styles.main__bottom}>
            <div className={styles.connect__line}></div>
            <div
              className={`${styles.animation__content} ${
                isActive1 ? styles.active : ''
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
        <div className={styles.main__feature_1}>
          <div
            className={`${styles.wrapper__animation__content} ${
              isActive2 ? styles.active : ''
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
              isActive3 ? styles.active : ''
            }`}
          >
            <video muted autoPlay loop>
              <source
                src='http://localhost:3000/video/market_video.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
        <div className={styles.main__feature_2}>
          <div
            className={`${styles.wrapper__animation__content} ${
              isActive4 ? styles.active : ''
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
              isActive5 ? styles.active : ''
            }`}
          >
            <img
              className={styles.analysis__img}
              src='http://localhost:3000/img/image_analysis.png'
              alt='ddd'
            />
          </div>
        </div>
        <div className={styles.main__feature_3}>
          <div
            className={`${styles.wrapper__animation__content} ${
              isActive6 ? styles.active : ''
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
              isActive7 ? styles.active : ''
            }`}
          >
            <img
              className={styles.analysis__img}
              src='http://localhost:3000/img/image_likeage.png'
              alt='ddd'
            />
          </div>
        </div>
      </section>
      <section className={styles.detail__feature}>
        <div
          className={`${styles.detail__feature_container} ${
            isActive8 ? styles.active : ''
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
          {scrollY}
        </div>
      </section>
      <section
        className={`${styles.customer__review} ${
          isActive9 ? styles.active : ''
        }`}
      >
        <h2 className={styles.customer__review__title}>
          알파스퀘어와 함께 성장하는
          <br />
          <span className={styles.highlight}>주체적 개인투자자들</span>.
        </h2>
        <div className={styles.review__slider}>
          <div className={styles.slider__container}>
            <div className={styles.aside__prev}>
              <button className={styles.btn__prev}>
                <FaChevronLeft />
              </button>
            </div>
            <div className={styles.slidier}>여기는 메인 슬라이더</div>
            <div className={styles.aside__next}>
              <button className={styles.btn__next}>
                <FaChevronRight />
              </button>
            </div>
          </div>
          <div className={styles.btn__container}>여기는 버튼</div>
        </div>
      </section>
      <section className={styles.lead__in__service}>asd</section>
      <footer className={styles.footer}>asd</footer>
    </div>
  );
}
