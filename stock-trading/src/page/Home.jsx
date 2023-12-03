import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 실행되는 코드
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className={`${styles.anime} ${isVisible ? styles.visible : ''}`}>
        asddadas
      </div>
    </div>
  );
}
