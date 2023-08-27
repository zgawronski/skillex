// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { TableWrapper, SkillFrame, SkillLabel } from '../Table/Table.styles';
import { Input, SubmitButton, WorkerDataFrame } from './WorkerTemplate.styles';

export const WorkerTemplate = () => {
  const [skilledWorkers, setSkilledWorkers] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [workerData, setWorkerData] = useState({
    firstname: '',
    lastname: '',
  });
  // fetching data
  useEffect(() => {
    fetch('http://localhost:3000/skilledWorkers')
      .then((res) => res.json())
      .then((data) => setSkilledWorkers(data))
      .catch(() => setHasError(true));
  }, []);
  console.log(hasError);

  const handleChange = (e) => {
    setWorkerData({
      ...workerData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(workerData);
  };
  const skillsArray = skilledWorkers.map((skills) => Object.keys(skills));

  return (
    <TableWrapper>
      <WorkerDataFrame onSubmit={handleSubmit}>
        <Input type="text" name="firstname" key="firstname" onChange={handleChange}></Input>
        <Input type="text" name="lastname" key="lastname" onChange={handleChange}></Input>
        {/* <Input type="text" name="departament" key="departament" onChange={handleChange}></Input> */}
        <SubmitButton type="submit">Dodaj pracownika</SubmitButton>
      </WorkerDataFrame>
      <SkillFrame>
        {skillsArray[0]?.slice(2).map((skill, index) => (
          <SkillLabel style={{ order: index }} key={index + 10000}>
            {skill}
          </SkillLabel>
        ))}
      </SkillFrame>
    </TableWrapper>
  );
};
