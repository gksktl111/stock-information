import React from 'react';
import MarkectHeader from '../components/markectPage/MarkectHeader';
import Chart from '../components/markectPage/Chart';
import { ChartContextProvider } from '../hook/ChartContext';
import styles from './Markect.module.css';

export default function Markect() {
  return (
    <ChartContextProvider>
      <div>
        <MarkectHeader />
        <div>
          <nav>asdasdss</nav>
          <section className={styles.container}>
            <Chart />
          </section>

          <nav>asd</nav>
        </div>
      </div>
    </ChartContextProvider>
  );
}
