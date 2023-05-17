import { LoginWrapper } from './Login.styles';

export const Login = () => {
  return (
    <LoginWrapper>
      <input placeholder="e-mail" type="text" />
      <input placeholder="password" type="text" />
      <button>Login</button>
    </LoginWrapper>
  );
};
