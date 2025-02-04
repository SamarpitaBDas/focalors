import React from 'react';
import styled from 'styled-components';

const Pomodoro = () => {
  return (
    <StyledWrapper>
      <div className="card">
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .card {
    width: 70em;
    height: 40em;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: rgba(255,255,255, 0.15);
    --r: 105px; /* the radius */
    --s: 220px; /* the size of the cut */
    
    --_m:/calc(2*var(--r)) calc(2*var(--r))
      radial-gradient(#000 70%,#0000 72%) no-repeat;
    mask:
      right calc(var(--s) + var(--r)) top 0 var(--_m),
      right calc(var(--s) + var(--r)) var(--_m),
      radial-gradient(var(--s) at 100% 0,#0000 99%,#000 101%) 
      calc(-1*var(--r)) var(--r) no-repeat,
      conic-gradient(at calc(100% - var(--s) - 2*var(--r)) calc(var(--s) + 2*var(--r)), #0000 25%,#000 0);

    transform: scaleX(-1) scaleY(-1); /* Flip both horizontally and vertically */
    transition: transform 1s ease-in-out;
  }
`;

export default Pomodoro;
