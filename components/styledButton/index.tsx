'use client'

import Link from 'next/link'
import * as S from './styled'

type ButtonProps = {
  label: string;
  link: string;
}

const StyledButton = ({ label, link }: ButtonProps) => (
  <Link href={link}>
    <S.Button>
      {label}
    </S.Button>
  </Link>
);

export default StyledButton;
