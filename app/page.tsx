'use client';

import SearchSummary from '@/components/searchSummary';
import * as S from './styled';
import FilterMenu from '@/components/filterMenu';
import PlanDetailsList from '@/components/planDetailsList';

export default function Home() {
  return (
    <>
      <SearchSummary />
      <S.GridLayout>
        <FilterMenu />
        <PlanDetailsList />
      </S.GridLayout>
    </>
  );
}
