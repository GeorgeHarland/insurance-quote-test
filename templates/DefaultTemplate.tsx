'use client';

import * as S from './styled';
import WebsiteHeader from '@/components/websiteHeader';
import headerData from './../data/header.json';

const DefaultTemplate = ({ children }: { children: React.ReactNode }) => (
  <div>
    <WebsiteHeader {...headerData} />
    <S.Main>{children}</S.Main>
  </div>
);

export default DefaultTemplate;
