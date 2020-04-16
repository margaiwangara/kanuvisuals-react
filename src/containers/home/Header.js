import React from 'react';
import styled from 'styled-components';

// icons
import Close from '@/assets/icons/close.svg';
import Kanu from '@/assets/images/banner-image.jpg';
// components
import HeaderContent from '@/components/header/Content';

function Header() {
  function closeNavbar(e) {
    e.preventDefault();
    const navbar = document.querySelector('.navbar');

    if (!navbar) {
      return;
    }

    navbar.style.width = 0;
  }

  return (
    <HeaderWrapper>
      <section className="banner-details">
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
                  <a href="#close" onClick={closeNavbar}>
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
      </section>
      <section className="banner-graphics">
        <figure>
          <img src={Kanu} alt="hamid-kanu" />
        </figure>
      </section>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  figure {
    display: flex;
    align-items: center;
  }

  .banner-graphics {
    display: none;
    width: 100%;
    height: 100%;
  }

  .banner-details {
    width: 100%;
    height: 100%;
  }

  .navbar {
    height: 100%;
    width: 0;
    position: fixed;
    background-color: #ffffff;
    z-index: 5;
    overflow: hidden;
    transition: width 0.25s ease-in-out;
    white-space: nowrap;

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
