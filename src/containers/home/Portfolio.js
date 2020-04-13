import React from 'react';
import styled from 'styled-components';

function Portfolio() {
  return (
    <PortfolioWrapper>
      <h3>Portfolio</h3>
      <p>Add some portfolio projects here</p>
    </PortfolioWrapper>
  );
}

const PortfolioWrapper = styled.section`
  width: 100%;
  background-color: #f6f6f6;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
  box-sizing: border-box;
  padding: 40px 30px;
  color: var(--blackColor);

  h3 {
    font-size: 34px;
    font-weight: 700;
  }
`;

export default Portfolio;
