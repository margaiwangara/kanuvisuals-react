import React from 'react';
import styled from 'styled-components';

// icons
import Close from '@/assets/icons/close.svg';
// components
import HeaderContent from '@/components/header/Content';

function Header() {
  return (
    <HeaderWrapper>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li>
            <ul>
              <li>
                <a href="#home" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#close">
                  <figure>
                    <img src={Close} alt="close" />
                  </figure>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
      <HeaderContent />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  .navbar {
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: #ffffff;
    z-index: 5;

    ul {
      list-style-type: none;
    }

    .navbar-nav {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 10px;
      padding: 40px 30px;
      box-sizing: border-box;

      li {
        ul {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;

          figure {
            display: flex;
            align-items: center;
          }
        }

        a {
          display: block;
          padding: 10px 0;
          font-size: 34px;
          font-weight: 700;
          color: #828282;

          &.active {
            color: #090909;
          }

          &:hover {
            color: #090909;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
  }
`;
export default Header;
