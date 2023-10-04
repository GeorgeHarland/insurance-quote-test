import styled from 'styled-components';
import { colors } from '@/styles';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  width: 100%;
  height: 9rem;
  position: sticky;
  padding: 0 7rem;
  @media (max-width: 1080px) {
    padding: 0 2rem;
  }
  @media (max-width: 580px) {
    flex-direction: column;
  }
`

export const Spacer = styled.div`
  flex: 1;
`

export const ImageWrapper = styled.div`
  flex: 1;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
  margin-bottom: 2.5rem;
`

export const UpperRightText = styled.h3`
  margin-bottom: 0.3rem;
  @media (max-width: 790px) {
    font-size: 1rem;
  }
`

export const LowerRightText = styled.p`
  @media (max-width: 790px) {
    font-size: 0.8rem;
  }
`
