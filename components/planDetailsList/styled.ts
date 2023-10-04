import styled from 'styled-components';

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 800px;
  height: 100%;
  border-radius: 20px;
  gap: 2rem;
  @media (max-width: 1080px) {
    margin: 0 2rem;
  }
  @media (max-width: 580px) {
    flex-direction: column;
  }
`;
