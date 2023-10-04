'use client'

import Image from 'next/image';
import * as S from './styled'
import StyledButton from '../styledButton';

type PlanDetailsProps = {
  planName: string;
  providerName: string;
  price: number;
  medicalCoverageForCovid: string;
  medicalEvacuation: number;
  baggageLoss: number;
  tripCancellation: number;
  tripInterruption: number;
  cancelForCovid: string;
  policyDetail: string;
}

const PlanDetails = ({...plan}: PlanDetailsProps) => (
  <S.Container>
    <S.HeaderRow>
      <Image src='' alt='' />
      <S.HeaderText>{`${plan.providerName}: ${plan.planName}`}</S.HeaderText>
    </S.HeaderRow>  
    <S.CenterRow>
      <S.TextColumn>
        <S.TextRow>
          <S.BillText>Cancel for Covid-19 Sickness</S.BillText>
          <S.CoveredText>Covered</S.CoveredText>
        </S.TextRow>
        <S.TextRow>
          <S.BillText>Trip Cancellation</S.BillText>
          <S.BillText>{`$${plan.tripCancellation}`}</S.BillText>
        </S.TextRow>
      </S.TextColumn>
      <StyledButton label='Purchase' link='/purchase-details'/>
    </S.CenterRow>  
    <S.Footer></S.Footer>  
  </S.Container>
)

export default PlanDetails;
