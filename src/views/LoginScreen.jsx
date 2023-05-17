import { HeaderWrapper } from '../components/Header/Header.styles';
import { CompanyName } from '../components/CompanyName/CompanyName';
import { Login } from '../components/Login/Login';

export const LoginScreen = () => {
  return (
    <HeaderWrapper>
      <CompanyName />
      <Login />
    </HeaderWrapper>
  );
};
