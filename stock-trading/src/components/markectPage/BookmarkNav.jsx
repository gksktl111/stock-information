import React, { useState } from 'react';
import styles from './BookmarkNav.module.css';
import BookMarkList from './BookMarkList';
import {
  IoReorderThree,
  IoArrowBackOutline,
  IoArrowForwardOutline,
} from 'react-icons/io5';

export default function BookmarkNav() {
  const [isBookMarkOpen, setIsBookMarkOpen] = useState(true);

  const handleBookmarkOens = () => {
    setIsBookMarkOpen(!isBookMarkOpen);
  };

  return (
    <nav
      className={`${styles.bookmark__nav__container} ${
        isBookMarkOpen ? '' : styles.close
      }`}
    >
      <header className={styles.bookmark__header}>
        {isBookMarkOpen ? (
          <span className={styles.title}>
            <IoReorderThree className={styles.title__icon} />
            관심목록
          </span>
        ) : (
          ''
        )}
        <button
          className={styles.bookmark__nav__toggle}
          onClick={handleBookmarkOens}
        >
          {isBookMarkOpen ? <IoArrowBackOutline /> : <IoArrowForwardOutline />}
        </button>
      </header>
      {isBookMarkOpen ? <BookMarkList /> : ''}
    </nav>
  );
}
