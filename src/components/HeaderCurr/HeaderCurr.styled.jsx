import styled from 'styled-components';

export const CurrCont = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px #fff;
  border-radius: 40px;
  gap: 20px;
  padding: 10px 20px;
`;

export const Curr = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
  color: #fff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s;
  &:hover,
  &:focus {
    color: #00baff;
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`;
