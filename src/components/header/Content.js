import React from 'react';
import styled from 'styled-components';
// import Person from '@/assets/images/person.svg';
import Hamburger from '@/assets/icons/hamburger.svg';

function Content() {
  function openNavbar(e) {
    e.preventDefault();
    // find sidebar
    const navbar = document.querySelector('.navbar');
    if (!navbar) {
      return;
    }

    navbar.style.width = '100%';
    // alert('Found Navbar');
  }

  return (
    <HeaderContent>
      <div>
        <h3>
          Kanu <span>Visuals</span>
        </h3>
        <a href="#display-menu" onClick={openNavbar}>
          <figure>
            <img src={Hamburger} alt="hamburger-menu" />
          </figure>
        </a>
      </div>
      <div>
        <p>Photographer</p>
        <p>24 years old, Sakarya</p>
      </div>
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
  padding: 40px 30px;
  box-sizing: border-box;

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

  div:first-of-type {
    display: grid;
    grid-template-columns: 1fr auto;

    figure {
      display: flex;
      box-sizing: border-box;
      padding-top: 22.5px;
    }
  }

  div:nth-of-type(2) {
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

    div:first-of-type {
      grid-template-columns: 1fr;
      a {
        display: none;
      }
    }

    div:nth-of-type(2) {
      flex: 1;
    }

    figure {
      display: none;
    }
  }
`;
export default Content;
