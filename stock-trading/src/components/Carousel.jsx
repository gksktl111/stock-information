import React from 'react';
import Slider from 'react-slick';
import styles from './Carousel.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import styled from 'styled-components';

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        zIndex: '1',
        left: '0',
      }}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        zIndex: '1',
        right: '0',
      }}
      onClick={onClick}
    />
  );
}

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className={styles.slider__container}>
      <Slider {...settings}>
        <div className={styles.card}>
          <img
            src='/img/stock_memo.png'
            alt='img'
            className={styles.card__img}
          />
          <div className='card__body'>
            <h3>카드내용 1</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src='/img/stock_memo.png'
            alt='img'
            className={styles.card__img}
          />
          <div className='card__body'>
            <h3>카드내용 2</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src='/img/stock_memo.png'
            alt='img'
            className={styles.card__img}
          />
          <div className='card__body'>
            <h3>카드내용 3</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src='/img/stock_memo.png'
            alt='img'
            className={styles.card__img}
          />
          <div className='card__body'>
            <h3>카드내용 4</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src='/img/stock_memo.png'
            alt='img'
            className={styles.card__img}
          />
          <div className='card__body'>
            <h3>카드내용 5</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src='/img/stock_memo.png'
            alt='img'
            className={styles.card__img}
          />
          <div className='card__body'>
            <h3>카드내용 6</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}
