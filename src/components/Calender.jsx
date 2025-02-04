import React from 'react';
import styled from 'styled-components';

const Calender = () => {
  return (
    <StyledWrapper>
      <div className="card">
        
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 17em;
    height: 15em;
    background-color: rgba(255,255,255, 0.15);
    transition: 1s ease-in-out;
    border-radius:20px;
    display: flex;
    flex-direction: column;
  }
`;

export default Calender;
