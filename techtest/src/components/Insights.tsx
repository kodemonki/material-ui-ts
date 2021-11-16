import React, { useMemo } from 'react';
import Grid from '@mui/material/Grid';
import { AxiosResponse } from 'axios';
import { InsightCard } from "./InsightCard"

export interface InsightsProps {
  jsonData: AxiosResponse;
  openDrawer: () => void;
}

interface AccountType {
  accountCategory: string;
  overview: OverviewType;
}

interface OverviewType {
  balance: BalanceType;
  limit: LimitType;
}

interface BalanceType {
  amount: number;
}

interface LimitType {
  amount: number;
}

interface electoralRollType {
  current: boolean;
}

const Insights = ({ jsonData, openDrawer }: InsightsProps): JSX.Element => {

  //count the array length
  const publicInformationOnTrack = useMemo(() => {
    return (jsonData.data.personal.publicInfo.courtAndInsolvencies.length > 0)
  }, [jsonData]);

  //filter the array check the length
  const creditUtilisationOnTrack = useMemo(() => {
    return (jsonData.data.accounts.filter((item: AccountType) => {
      const isCreditCard = item.accountCategory === 'credit_cards';
      let isBalanceOver50Percent = false;
      if (isCreditCard) {
        const balance: number = item.overview.balance.amount;
        const limit: number = item.overview.limit.amount;
        isBalanceOver50Percent = (balance / limit) >= 0.5;
      }
      return isCreditCard && isBalanceOver50Percent
    }).length > 0)
  }, [jsonData]);

  //filter the array check the length
  const ElectoralRollOnTrack = useMemo(() => {
    return (jsonData.data.personal.electoralRoll.filter((item: electoralRollType) => {
      return item.current;
    }).length > 0)
  }, [jsonData]);

  return (
    <Grid direction="row" container>
      <InsightCard
        onTrack={publicInformationOnTrack as boolean}
        title='Public Information'
        description="Bankruptcies and individual voluntary arrangements can damage your score"
        impact="HIGH IMPACT" />
      <InsightCard
        onTrack={creditUtilisationOnTrack as boolean}
        title='Credit Utilisation' description="Using less than 50% of your available credit can improve your score"
        impact="MEDIUM IMPACT" />
      <InsightCard
        onTrack={ElectoralRollOnTrack as boolean}
        title='Electoral Roll' description="Being on the electorial roll can improve your score"
        impact="MEDIUM IMPACT"
        onClick={() => { openDrawer() }} />

    </Grid>
  );
}

export default Insights;