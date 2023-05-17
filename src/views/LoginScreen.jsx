import { HeaderWrapper, TitleWrapper } from '../components/Header/Header.styles';
import { CompanyName } from '../components/CompanyName/CompanyName';

export const LoginScreen = () => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <CompanyName />
      </TitleWrapper>
    </HeaderWrapper>
  );
};
