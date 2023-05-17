import { Routes, Route } from 'react-router-dom';
import { Wrapper } from './Root.styles';
import { Dashboard } from './Dashboard';
import { LoginScreen } from './LoginScreen';

export const Root = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Wrapper>
  );
};
