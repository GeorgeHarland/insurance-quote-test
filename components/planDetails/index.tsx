'use client';

import Image from 'next/image';
import * as S from './styled';
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
};

const PlanDetails = ({ ...plan }: PlanDetailsProps) => (
  <S.Container>
    <S.HeaderRow>
      <Image src="" alt="" />
      <S.HeaderText>{`${plan.providerName}: ${plan.planName}`}</S.HeaderText>
      <StyledButton label="Compare" link="/purchase-details" />
    </S.HeaderRow>
    <S.CenterRow>
      <S.TextSection>
        <S.TextColumn>
          <S.BillText>Cancel for Covid-19 Sickness</S.BillText>
          <S.BillText>Trip Cancellation</S.BillText>
          <S.BillText>Trip Interruption</S.BillText>
        </S.TextColumn>
        <S.TextColumn>
          {plan.cancelForCovid === "covered" ? <S.CoveredText>{plan.cancelForCovid}</S.CoveredText> : <S.BillText>{plan.cancelForCovid}</S.BillText>}
          <S.BillText>{`$${plan.tripCancellation}`}</S.BillText>
          <S.BillText>{`$${plan.tripInterruption}`}</S.BillText>
        </S.TextColumn>
      </S.TextSection>
      <StyledButton label="Purchase" link="/purchase-details" />
    </S.CenterRow>
    <S.Footer></S.Footer>
  </S.Container>
);

export default PlanDetails;
