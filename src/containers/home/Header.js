import React from 'react';
import styled from 'styled-components';

// components
import HeaderContent from '@/components/header/Content';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 40px 30px;
  overflow: hidden;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
  }
`;
export default Header;
