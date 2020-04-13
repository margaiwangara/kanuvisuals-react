import React from 'react';
import styled from 'styled-components';

function About() {
  return (
    <AboutWrapper>
      <section className="container">
        <h3>About Me</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nobis
          eligendi in nihil optio magnam.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nobis
          eligendi in nihil optio magnam.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nobis
          eligendi in nihil optio magnam.
        </p>
      </section>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.section`
  width: 100%;
  background-color: #f6f6f6;
  box-sizing: border-box;
  padding: 40px 30px;

  .container {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 30px;
    text-align: center;
    color: var(--blackColor);

    h3 {
      font-size: 34px;
      font-weight: 700;
    }

    p {
      font-size: 18px;
      font-weight: 500;
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      width: 50%;
    }
  }
`;

export default About;
