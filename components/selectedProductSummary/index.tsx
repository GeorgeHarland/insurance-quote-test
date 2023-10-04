'use client';

import * as S from './styled';
import { useData } from '@/contexts/DataContext';

const SelectedProductSummary = () => {
  const { data } = useData();
  return (
    <S.Container>
      {data && data.providerName} {data && data.planName}
    </S.Container>
  );
};

export default SelectedProductSummary;
