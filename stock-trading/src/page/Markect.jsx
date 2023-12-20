import React from 'react';
import MarkectHeader from '../components/markectPage/MarkectHeader';
import Chart from '../components/markectPage/Chart';
import { ChartContextProvider } from '../hook/ChartContext';
import styles from './Markect.module.css';
import BookmarkNav from '../components/markectPage/BookmarkNav';
import MainNav from '../components/markectPage/MainNav';

export default function Markect() {
  return (
    <ChartContextProvider>
      <MarkectHeader />
      <div className={styles.container}>
        <BookmarkNav />
        <section className={styles.chart__container}>
          <Chart />
        </section>
        <MainNav />
      </div>
    </ChartContextProvider>
  );
}
