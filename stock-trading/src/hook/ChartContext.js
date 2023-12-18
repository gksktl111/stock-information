import React, { createContext, useContext, useReducer } from 'react';

// 초기 상태
const initialState = {
  chartData: [], // 여기에 차트 데이터를 저장합니다.
};

// 액션 타입 정의
const actionTypes = {
  SET_CHART_DATA: 'SET_CHART_DATA',
};

// 리듀서 함수
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CHART_DATA:
      return {
        ...state,
        chartData: action.payload,
      };
    default:
      return state;
  }
};

// Context 생성
const ChartContext = createContext();

// Context Provider 컴포넌트
export const ChartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Context 값
  const contextValue = {
    state,
    dispatch,
  };

  return (
    <ChartContext.Provider value={contextValue}>
      {children}
    </ChartContext.Provider>
  );
};

// Context 사용을 위한 Hook
export const useChartContext = () => {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error(
      'useChartContext must be used within a ChartContextProvider'
    );
  }
  return context;
};
