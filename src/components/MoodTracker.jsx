import React from 'react';
import styled from 'styled-components';
import Radio from './Radio'

const MoodTracker = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <Radio/>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 17em;
    height: 2.5em;
    background-color: rgba(255,255,255, 0.15);
    transition: 1s ease-in-out;
    border-radius:25px;
    display: flex;
    flex-direction: column;
  }
`;

export default MoodTracker;
