import { Curr, CurrCont } from './HeaderCurr.styled';
import { useSelector } from 'react-redux';
import { selectCurrencies } from '../../redux/selectors';

export const HeaderCurr = () => {
  const currencies = useSelector(selectCurrencies);
  const eur = currencies.UAH / currencies.EUR;

  const usd = currencies.UAH / currencies.USD;

  return (
    <CurrCont>
      <Curr>USD: {usd ? usd.toFixed(2) : null}</Curr>
      <Curr>EUR: {eur ? eur.toFixed(2) : null}</Curr>
    </CurrCont>
  );
};
