import { CoverInput, Select, Input } from './InputCurr.styled';

export const InputCurr = (props) => {
  const handleAmountChange = (e) => {
    const inputValue = e.target.value;

    const validInput = inputValue.replace(/[.](?=.*[.])/g, '');

    const finalInput = validInput.replace(/[^0-9.]/g, '');

    props.onAmountChange(finalInput);
  };

  const handleCurrencyChange = (e) => {
    props.onCurrChange(e.target.value);
  };
  return (
    <CoverInput>
      <Input
        value={props.amount > 0 ? props.amount : ''}
        onChange={handleAmountChange}
      />
      <Select
        value={props.currency}
        onChange={(e) => props.onCurrChange(e.target.value)}
      >
        {props.currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </Select>
    </CoverInput>
  );
};
