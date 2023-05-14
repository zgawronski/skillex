import { CompanyName } from '../components/CompanyName/CompanyName';
import { LogoutButton } from '../components/Button/LogoutButton';
import { BackButton } from '../components/Button/BackButton';
import { DepartmentName } from '../components/DepartmentName/DepartmentName';
import { Table } from '../components/Table/Table';
import { Description } from '../components/Description/Description';

export const Dashboard = () => {
  return (
    <div>
      <CompanyName />
      <DepartmentName />
      <LogoutButton />
      <BackButton />
      <Table />
      <Description />
    </div>
  );
};
