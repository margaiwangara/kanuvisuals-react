export function flexUnit(amount, min, max, unit = 'vw', prop = 'font-size') {
  const minBreakpoint = (min / amount) * 100;
  const maxBreakpoint = max ? (max / amount) * 100 : false;
  const dimension = unit === 'vw' ? 'width' : 'height';

  return `
    @media (max-${dimension}: ${minBreakpoint}px) {
      ${prop}: ${min}px;
    }

    ${
      max
        ? `
      @media (min-${dimension}: ${maxBreakpoint}px) {
        ${prop}: ${max}px;
      }
    `
        : ''
    }

    ${prop}: ${amount}${unit}
  `;
}

// const StyledHeadline = styled.h2`
//   h2 {
//     ${flexUnit(5, 32, 60, 'vw', 'font-size')}
//   }
// `
