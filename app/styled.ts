import { breakpoints } from '@/styles';
import styled from 'styled-components';

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  width: 100%;
  margin: 0 8rem;
  @media (max-width: ${breakpoints.bigtablet}) {
    grid-template-columns: none;
    grid-template-rows: 1fr 2fr;
  }
`;
