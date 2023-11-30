import { useDeferredValue, useEffect, useState } from 'react';
import { Curr, CurrCont } from './HeaderCurr.styled';
import { useSelector } from 'react-redux';
import { selectCurrencies } from '../../redux/selectors';

export const HeaderCurr = () => {
  const currencies = useSelector(selectCurrencies);
  const eur = currencies.UAH / currencies.EUR;

  const usd = currencies.UAH / currencies.USD;

  return (
    <CurrCont>
      <Curr>USD: {usd.toFixed(2)}</Curr>
      <Curr>EUR: {eur.toFixed(2)}</Curr>
    </CurrCont>
  );
};
