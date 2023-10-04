'use client'

import Image from 'next/image';
import * as S from './styled'
import { getImage } from '@/utils';

type WebsiteHeaderProps = {
  logo: string;
  alt: string;
  upperRightText: string;
  lowerRightText: string;
}

const WebsiteHeader = ({...data}: WebsiteHeaderProps) => (
  <S.HeaderContainer>
      <S.Spacer />
      <S.ImageWrapper>
        <Image src={getImage(data.logo)} alt={data.alt} width={379} height={78}/>
      </S.ImageWrapper>
      <S.TextWrapper>
        <S.UpperRightText>{data.upperRightText}</S.UpperRightText>
        <S.LowerRightText>{data.lowerRightText}</S.LowerRightText>
      </S.TextWrapper>
  </S.HeaderContainer>
)

export default WebsiteHeader;
