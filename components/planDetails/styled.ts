import styled from 'styled-components';
import { colors } from '@/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  width: 100%;
  max-height: 800px;
  height: 100%;
  border-radius: 20px;
  padding: 1.5rem;
  @media (max-width: 1080px) {
    margin: 0 2rem;
  }
  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 3px solid ${colors.backgroundGrey};
`;

export const CenterRow = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2.5rem;
`;

export const TextSection = styled.div`
  display: flex;
  width: 100%;
  padding-left: 4rem;
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const Footer = styled.div``;

export const HeaderText = styled.h2`
  @media (max-width: 790px) {
    font-size: 1rem;
  }
`;

export const BillText = styled.p`
  @media (max-width: 790px) {
    font-size: 0.8rem;
  }
`;

export const CoveredText = styled.p`
  color: ${colors.gold};
  @media (max-width: 790px) {
    font-size: 0.8rem;
  }
`;
