// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { TableWrapper, SkillFrame, SkillLabel } from '../Table/Table.styles';
import { Input, SubmitButton, WorkerDataFrame, SkillSelection } from './WorkerTemplate.styles';

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
      .then((data) => setSkilledWorkers(data.map((skills) => Object.keys(skills))))
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
  const skillsArray = skilledWorkers[0]?.slice(2);

  return (
    <TableWrapper>
      <WorkerDataFrame onSubmit={handleSubmit}>
        <Input type="text" name="firstname" placeholder="Imię" key="firstname" onChange={handleChange}></Input>
        <Input type="text" name="lastname" placeholder="Nazwisko" key="lastname" onChange={handleChange}></Input>
        {/* <Input type="text" name="departament" key="departament" onChange={handleChange}></Input> */}
        <SubmitButton type="submit" key="submit">
          Dodaj pracownika
        </SubmitButton>
      </WorkerDataFrame>
      <SkillFrame>
        {skillsArray?.map((skill, index) => (
          <SkillLabel style={{ order: index }} key={index + 10000 * index}>
            {skill}
            <SkillSelection name="skills" style={{ order: index }} key={index + skill}>
              <option value="junior" key={index + 'junior'}>
                Junior
              </option>
              <option value="mid" key={index + 'mid'}>
                Mid
              </option>
              <option value="senior" key={index + 'senior'}>
                Senior
              </option>
              <option value="" key={index}>
                N/A
              </option>
            </SkillSelection>
          </SkillLabel>
        ))}
      </SkillFrame>
    </TableWrapper>
  );
};
