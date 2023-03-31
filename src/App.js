import React from "react";
import styled, {css} from "styled-components"; // 효과를 여러줄 넣을 경우 {css} 작성

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || "black"};
  ${props => props.huge &&
    css`
      width: 10rem;
      height: 10rem;
      `
  };
  border-radius: 50%;
`; // styled.div의 경우 ()말고 ``안에 내용들을 넣어준다.
// background: red;

// px - 고정값
// 비율값들
// em - font size: 10px일 경우 2em = 10px * 2
// 2rem - font size, r = root = html태그(16px)의 * 2

function App(){
  return <Circle color="red" huge />; // 컴포넌트 자체에 설정된 값들을 props로 불러올 수 있다.
  // return <Circle/>
}

export default App;
