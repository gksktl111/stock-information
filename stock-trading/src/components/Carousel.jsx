import React from 'react';
import Slider from 'react-slick';
import styles from './Carousel.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className={styles.slider__container}>
      <Slider {...settings}>
        <div className={styles.card}>
          <div className={styles.card__body}>
            <h1 className={styles.userReview}>
              아주 좋음 여기서 하고 떡상함 ㄹㅇㅋㅋ
            </h1>
            <span className={styles.userName}>user 1</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__body}>
            <h1 className={styles.userReview}>나쁘지 않음</h1>
            <span className={styles.userName}>user 2</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__body}>
            <h1 className={styles.userReview}>떡상 가자아ㅏㅏㅏ</h1>
            <span className={styles.userName}>user 3</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__body}>
            <h1 className={styles.userReview}>
              좋은 정보가 매우 많아서 정보수집에 좋습니다
            </h1>
            <span className={styles.userName}>user 4</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__body}>
            <h1 className={styles.userReview}>다양한 기능을 사용할 수 있음</h1>
            <span className={styles.userName}>user 5</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__body}>
            <h1 className={styles.userReview}>
              아주 좋음 여기서 하고 떡상함 ㄹㅇㅋㅋ
            </h1>
            <span className={styles.userName}>user 6</span>
          </div>
        </div>
      </Slider>
    </div>
  );
}
