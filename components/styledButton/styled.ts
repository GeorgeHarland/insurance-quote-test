import { colors } from '@/styles';
import styled from 'styled-components';

export const Button = styled.div`
  display: inline-block;
  background-color: ${colors.gold};
  color: white;
  padding: 10px 30px;
  border-radius: 25px;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.goldBorder};
  }
`;
