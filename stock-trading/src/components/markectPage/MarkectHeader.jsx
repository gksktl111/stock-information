import React, { useEffect, useRef, useState } from 'react';
import styles from './MarkectHeader.module.css';
import { NavLink } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import axios from 'axios';
import { useChartContext } from '../../hook/ChartContext';

export default function MarkectHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchContainerRef = useRef(null);
  const inputRef = useRef(null);

  const { dispatch } = useChartContext();

  // 인풋 클릭 관리
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        // 클릭된 요소가 검색 컨테이너의 자식이 아닌 경우 검색 닫기
        setIsSearchOpen(false);
      }
    };

    // 페이지 전체에 클릭 이벤트 리스너 추가
    document.addEventListener('click', handleClickOutside);

    // 컴포넌트가 언마운트될 때 클릭 이벤트 리스너 제거
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // 빈 배열은 컴포넌트가 마운트될 때와 언마운트될 때만 실행

  // 인풋 포커스 관리
  useEffect(() => {
    // isSearchOpen이 true일 때, input에 포커스 설정
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // 토글 동작을 위해 현재 상태의 반대값으로 설정
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = async (e) => {
    // 엔터 키를 눌렀을 때 검색어를 서버로 보내서 데이터 가져오기
    if (e.key === 'Enter') {
      console.log(searchQuery);

      try {
        // Axios를 사용하여 서버로 검색어를 보내기
        const response = await axios.get(
          `http://localhost:8080/api2?search=${searchQuery}`
        );

        // 서버에서의 응답 처리
        // console.log('여긴 헤더' + response.data);

        // TODO: 서버 응답을 기반으로 추가로 처리할 로직을 여기에 추가
        dispatch({ type: 'SET_CHART_DATA', payload: response.data });
      } catch (error) {
        // 오류 처리
        console.error('Error:', error);
      }
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <span className={styles.title}>
          <NavLink to='/' className={styles.title__link}>
            알파스퀘어
          </NavLink>
        </span>

        <div ref={searchContainerRef} className={styles.search__container}>
          <button className={styles.search} onClick={handleSearch}>
            <FiSearch />
            검색
          </button>

          {isSearchOpen ? (
            <div className={styles.btn__input}>
              <div className={styles.input__wrap}>
                <div className={styles.input__icon}>
                  <FiSearch />
                </div>
                <input
                  ref={inputRef}
                  className={styles.search__input}
                  type='text'
                  placeholder='종목명 또는 코드를 입력해주세요.'
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <button className={styles.input__close} onClick={handleSearch}>
                <FiX />
              </button>
            </div>
          ) : (
            ''
          )}
        </div>

        <nav className={styles.menu__container}>
          {/* 로그인 X면 로그인 버튼, 로그인 O면 유저 정보 */}
          <button className={styles.login__btn}>로그인</button>
        </nav>
      </div>
    </header>
  );
}
