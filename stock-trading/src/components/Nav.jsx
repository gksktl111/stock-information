import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <span className={styles.title}>로고</span>
        <nav className={styles.menu__container}>
          {/* 모달창으로 띄우기 */}
          <button className={styles.login__btn}>로그인</button>
          <div>
            <NavLink to='/markect' className={styles.start__btn}>
              시작하기
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
