import { useEffect, useState } from 'react';
import { InputCurr } from '../../components/InputCurr/InputCurr';
import { Container, Title, ConverterContainer } from './Converter.styled';
import { useSelector } from 'react-redux';
import { selectCurrencies } from '../../redux/selectors';

const Converter = () => {
  const currencies = useSelector(selectCurrencies);
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [curr1, setCurr1] = useState('USD');
  const [curr2, setCurr2] = useState('UAH');
  useEffect(() => {
    if (currencies) {
      handleAmount1Change(1);
    }
  }, [currencies]);
  const handleAmount1Change = (amount1) => {
    setAmount2(((amount1 * currencies[curr2]) / currencies[curr1]).toFixed(2));
    setAmount1(amount1);
  };
  const handleCurr1Change = (curr1) => {
    setAmount2(((amount1 * currencies[curr2]) / currencies[curr1]).toFixed(2));
    setCurr1(curr1);
  };
  const handleAmount2Change = (amount2) => {
    setAmount1(((amount2 * currencies[curr1]) / currencies[curr2]).toFixed(2));
    setAmount2(amount2);
  };
  const handleCurr2Change = (curr2) => {
    setAmount1(((amount2 * currencies[curr1]) / currencies[curr2]).toFixed(2));
    setCurr2(curr2);
  };

  return (
    <Container>
      <ConverterContainer>
        <Title>Converter Page</Title>
        <InputCurr
          onAmountChange={handleAmount1Change}
          onCurrChange={handleCurr1Change}
          currencies={Object.keys(currencies)}
          amount={amount1}
          currency={curr1}
        />
        <InputCurr
          onAmountChange={handleAmount2Change}
          onCurrChange={handleCurr2Change}
          currencies={Object.keys(currencies)}
          amount={amount2}
          currency={curr2}
        />
      </ConverterContainer>
    </Container>
  );
};

export default Converter;
