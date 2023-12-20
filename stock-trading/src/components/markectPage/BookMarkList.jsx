import React from 'react';
import styles from './BookMarkList.module.css';
import { useChartContext } from '../../hook/ChartContext';

export default function BookMarkList() {
  const { dispatch } = useChartContext();

  const handleBookmark = (e) => {
    const button = e.currentTarget;
    const code = button.querySelector('.code').innerText;

    console.log(code);

    // 즐겨찾기 누르면 해당 차트로 변경
    dispatch({
      type: 'SET_CHART_DATA',
      payload: code,
    });
  };

  return (
    <div className={styles.list__container}>
      <button className={styles.list__item} onClick={handleBookmark}>
        <span className='name'>삼성전자</span>
        <span className='code'>005930</span>
      </button>
      <button className={styles.list__item} onClick={handleBookmark}>
        <span className='name'>SK 하이닉스</span>
        <span className='code'>000660</span>
      </button>
      <button className={styles.list__item} onClick={handleBookmark}>
        <span className='name'>LG 전자</span>
        <span className='code'>066570</span>
      </button>
      <button className={styles.list__item} onClick={handleBookmark}>
        <span className='name'>NAVER</span>
        <span className='code'>035420</span>
      </button>
      <button className={styles.list__item} onClick={handleBookmark}>
        <span className='name'>KAKAO</span>
        <span className='code'>035720</span>
      </button>
    </div>
  );
}
