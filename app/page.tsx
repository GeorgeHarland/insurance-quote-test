'use client'

import SearchSummary from '@/components/searchSummary'
import styles from './page.module.css'
import * as S from './styled'
import FilterMenu from '@/components/filterMenu'
import PlanDetailsList from '@/components/planDetailsList'

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchSummary />
      <S.GridLayout>
        <FilterMenu />
        <PlanDetailsList />
      </S.GridLayout>
    </main>
  )
}
