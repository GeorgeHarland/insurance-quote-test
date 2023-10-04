'use client'

import PlanDetails from '../planDetails';
import * as S from './styled'
import plansData from './../../data/plans.json'

const PlanDetailsList = () => (
  <S.RowContainer>
    {plansData.plans.map((plan, index) => (
      <PlanDetails key={index} {...plan} />
    ))}
  </S.RowContainer>
)

export default PlanDetailsList;
