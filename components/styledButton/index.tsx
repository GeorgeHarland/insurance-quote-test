'use client';

import Link from 'next/link';
import * as S from './styled';

type ButtonProps = {
  label: string;
  link?: string;
  onClick?: () => void;
};

const StyledButton = ({ label, link, onClick }: ButtonProps) => {
  if (link) {
    return (
      <Link href={link}>
        <S.Button>{label}</S.Button>
      </Link>
    );
  } else {
    return <S.Button onClick={onClick}>{label}</S.Button>;
  }
};

export default StyledButton;
