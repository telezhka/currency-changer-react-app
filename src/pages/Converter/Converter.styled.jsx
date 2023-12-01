import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
`;
export const ConverterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: solid 1px #fff;
  border-radius: 40px;
  background-color: #272c59;
  padding: 30px 50px;
`;

export const Title = styled.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;
export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
