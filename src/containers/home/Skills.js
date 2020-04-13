import React from 'react';
import styled from 'styled-components';

// skill icons
import Ps from '@/assets/icons/ps.svg';
import Ae from '@/assets/icons/ae.svg';
import Ai from '@/assets/icons/ai.svg';
import Figma from '@/assets/icons/figma.svg';

function Skills() {
  return (
    <SkillsWrapper>
      <h3>Skills</h3>
      <p>I work in such progams as</p>
      <section className="skills">
        <figure>
          <img src={Ae} alt="adobe-after-effects" />
          <figcaption>
            Adobe <span>After Effects</span>
          </figcaption>
        </figure>
        <figure>
          <img src={Ai} alt="adobe-illustrator" />
          <figcaption>
            Adobe <span>Illustrator</span>
          </figcaption>
        </figure>
        <figure>
          <img src={Ps} alt="adobe-photoshop" />
          <figcaption>
            Adobe <span>Photoshop</span>
          </figcaption>
        </figure>
        <figure>
          <img src={Figma} alt="figma" />
          <figcaption>Figma</figcaption>
        </figure>
      </section>
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.section`
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
  box-sizing: border-box;
  padding: 40px 30px;
  color: var(--blackColor);

  h3 {
    font-size: 34px;
  }

  p {
    font-size: 18px;
  }

  .skills {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 30px;
    text-align: center;
    justify-items: center;

    figure {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 15px;
      figcaption {
        font-size: 14px;
        font-weight: 700;
        color: #828282;

        span {
          display: table;
          width: 100%;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .skills {
      grid-template-columns: repeat(4, auto);
    }
  }
`;

export default Skills;
