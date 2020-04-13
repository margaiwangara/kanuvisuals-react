import React from 'react';
import styled from 'styled-components';
import Person from '@/assets/images/person.svg';

function Content() {
  return (
    <HeaderContent>
      <h3>
        Kanu <span>Visuals</span>
      </h3>
      <div>
        <p>Photographer</p>
        <p>24 years old, Sakarya</p>
      </div>
      <figure>
        <img src={Person} alt="person" />
      </figure>
    </HeaderContent>
  );
}

const HeaderContent = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  row-gap: 25px;

  h3 {
    font-size: 47px;
    color: var(--blackColor);
    font-weight: 700;
    padding: 0;
    margin: 0;

    span {
      display: table;
    }
  }

  div {
    display: grid;
    grid-template-columns: 1fr;
    p {
      font-weight: 400;
      font-size: 18px;
      color: #090909;
      line-height: 1.25;
    }
  }

  figure {
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
    }

    div {
      flex: 1;
    }

    figure {
      display: none;
    }
  }
`;
export default Content;
