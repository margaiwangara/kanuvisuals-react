import React from 'react';
import styled from 'styled-components';

// contact icons
import LinkedIn from '@/assets/icons/linked-in.svg';
import Instagram from '@/assets/icons/instagram.svg';
import Dribble from '@/assets/icons/dribble.svg';
import Behance from '@/assets/icons/behance.svg';

function Contact() {
  return (
    <ContactWrapper>
      <h3>Contacts</h3>
      <p>
        Want to know more or just chat? <span>You are welcome</span>
      </p>
      <a href="#send" className="btn">
        Send Message
      </a>
      <figure className="contact-group">
        <figure>
          <a href="#linked-in">
            <img src={LinkedIn} alt="linked-in" />
          </a>
        </figure>
        <figure>
          <a href="#instagram">
            <img src={Instagram} alt="instagram" />
          </a>
        </figure>
        <figure>
          <a href="#behance">
            <img src={Behance} alt="behance" />
          </a>
        </figure>
        <figure>
          <a href="#dribbble">
            <img src={Dribble} alt="dribbble" />
          </a>
        </figure>
      </figure>
      <p>
        Like me on <span>LinkedIn, Instagram, Behance, Dribble</span>
      </p>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
  text-align: center;
  justify-items: center;
  padding: 40px 30px;
  color: var(--blackColor);

  h3 {
    font-size: 34px;
    font-weight: 700;
  }

  p {
    font-weight: 500;
    span {
      display: table;
      width: 100%;
    }
  }

  p:first-child {
    font-size: 18px;
  }

  p:last-child {
    font-size: 15px;
    color: #828282;
  }

  .btn {
    width: 250px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--whiteColor);
    font-size: 18px;
    border-radius: 50px;
    background-color: var(--blackColor);
    border: solid 1px transparent;
    &:hover {
      background-color: var(--whiteColor);
      color: var(--blackColor);
      border-color: var(--blackColor);
    }
  }

  .contact-group {
    display: grid;
    grid-template-columns: repeat(4, auto);
    column-gap: 15px;

    a:hover {
      opacity: 0.75;
    }

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export default Contact;
