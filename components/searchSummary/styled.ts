import styled from 'styled-components';
import { colors } from '@/styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  width: 100%;
  height: 8rem;
  margin: 2.5rem 0rem;
  border-radius: 20px;
  @media (max-width: 1080px) {
    margin: 0 2rem;
  }
  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

export const UpperRightText = styled.h3`
  margin-bottom: 0.3rem;
  @media (max-width: 790px) {
    font-size: 1rem;
  }
`;

export const LowerRightText = styled.p`
  @media (max-width: 790px) {
    font-size: 0.8rem;
  }
`;
