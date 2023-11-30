import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import { HeaderCurr } from '../HeaderCurr/HeaderCurr';
import sprite from 'assets/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Converter
        </StyledLink>
        <StyledLink to="/anything">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Anything
        </StyledLink>
      </Navigation>
      <HeaderCurr></HeaderCurr>
    </HeaderContainer>
  );
};
