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
    width: 0;
    position: fixed;
    background-color: #ddd;
    z-index: 5;
    overflow: hidden;

    ul {
      list-style-type: none;
    }

    .navbar-nav {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px 0;
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
    display: flex;
    flex-direction: column;
    .navbar {
      width: 100%;
      height: auto;
      position: unset;
      background-color: transparent;

      .navbar-nav {
        grid-template-columns: repeat(5, 1fr);
        padding: 20px 0;
        margin: 0 30px;
        justify-content: space-between;

        li {
          ul {
            grid-template-columns: 1fr;
            figure {
              display: none;
            }
          }

          a {
            font-size: 18px;

            &.active,
            &:hover {
              border-bottom: solid 2px #090909;
            }
          }
        }
      }
    }
  }
`;
export default Header;
