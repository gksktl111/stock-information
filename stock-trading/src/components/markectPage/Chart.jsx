import React, { useEffect } from 'react';
import { useChartContext } from '../../hook/ChartContext';
import TradingViewWidget from 'react-tradingview-widget';

export default function Chart() {
  const { state } = useChartContext();
  const { chartData } = state;

  // 날짜를 내림차순으로 정렬
  // 종목 코드만 가져오면됨
  const reversedChartData = chartData;

  useEffect(() => {
    console.log(reversedChartData);
  }, [reversedChartData]);

  return (
    <div style={{ height: '100%' }}>
      <TradingViewWidget
        symbol={`KRX:${reversedChartData}`} // 삼성전자의 종목 코드
        interval='D'
        theme='Light'
        locale='kr'
        autosize
      />
    </div>
  );
}
