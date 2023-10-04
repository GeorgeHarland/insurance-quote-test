'use client';

import Image from 'next/image';
import * as S from './styled';
import StyledButton from '../styledButton';
import { getImageByProviderName } from '@/utils';
import { useRouter } from 'next/navigation';
import { useData } from '@/contexts/DataContext';

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

const PlanDetails = ({ ...plan }: PlanDetailsProps) => {
  const { setData } = useData();
  const router = useRouter();

  const handleSubmit = () => {
    setData({ providerName: plan.providerName, planName: plan.planName });
    router.push('/purchase-details');
  };

  return (
    <S.Container>
      <S.HeaderRow>
        <Image
          src={getImageByProviderName(plan.providerName)}
          alt={`${plan.providerName}} Logo`}
          width={50}
          height={50}
        />
        <S.HeaderText>{`${plan.providerName}: ${plan.planName}`}</S.HeaderText>
        <StyledButton label="Compare" link="/" />
      </S.HeaderRow>
      <S.CenterRow>
        <S.TextSection>
          <S.TextColumn>
            <S.BillText>Cancel for Covid-19 Sickness</S.BillText>
            <S.BillText>Trip Cancellation</S.BillText>
            <S.BillText>Trip Interruption</S.BillText>
          </S.TextColumn>
          <S.TextColumn>
            {plan.cancelForCovid === 'covered' ? (
              <S.CoveredText>{plan.cancelForCovid}</S.CoveredText>
            ) : (
              <S.BillText>{plan.cancelForCovid}</S.BillText>
            )}
            <S.BillText>{`$${plan.tripCancellation}`}</S.BillText>
            <S.BillText>{`$${plan.tripInterruption}`}</S.BillText>
          </S.TextColumn>
        </S.TextSection>
        <StyledButton label="Purchase" onClick={handleSubmit} />
      </S.CenterRow>
      <S.Footer></S.Footer>
    </S.Container>
  );
};

export default PlanDetails;
