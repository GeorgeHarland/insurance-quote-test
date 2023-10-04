import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 2rem;
  min-height: 100vh;
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  width: 100%;
`;
