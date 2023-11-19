import { Routes, Route, Navigate } from 'react-router-dom';
import { Wrapper } from './Root.styles';
import { Dashboard } from './Dashboard';
import { LoginScreen } from './LoginScreen';
import { AddingWorker } from './AddingWorker';

export const Root = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Navigate to="/addingworker" />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addingworker" element={<AddingWorker />} />
      </Routes>
    </Wrapper>
  );
};
