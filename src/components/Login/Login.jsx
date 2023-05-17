import { LoginWrapper, LoginInput } from './Login.styles';
import { StyledButton } from '../Button/Button.styles';

export const Login = () => {
  return (
    <LoginWrapper>
      <LoginInput placeholder="E-mail" type="text" />
      <LoginInput placeholder="Password" type="text" />
      <StyledButton>Login</StyledButton>
    </LoginWrapper>
  );
};
