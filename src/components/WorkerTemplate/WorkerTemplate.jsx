// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { TableWrapper, SkillFrame, SkillLabel, WorkerFrame } from '../Table/Table.styles';
import { Input, SubmitButton } from './WorkerTemplate.styles';

export const WorkerTemplate = () => {
  const [skilledWorkers, setSkilledWorkers] = useState([]);
  const [hasError, setHasError] = useState(false);
  // fetching data
  useEffect(() => {
    fetch('http://localhost:3000/skilledWorkers')
      .then((res) => res.json())
      .then((data) => setSkilledWorkers(data))
      .catch(() => setHasError(true));
  }, []);

  const skillsArray = skilledWorkers.map((skills) => Object.keys(skills));

  console.log(hasError);

  return (
    <TableWrapper>
      <WorkerFrame>
        <Input type="text" name="firstname" key="firstname"></Input>
        <Input type="text" name="lastname" key="lastname"></Input>
        <Input type="text" name="departament" key="departament"></Input>
        <SubmitButton type="submit">Dodaj pracownika</SubmitButton>
      </WorkerFrame>
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
