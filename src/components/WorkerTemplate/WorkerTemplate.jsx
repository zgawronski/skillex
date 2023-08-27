// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import {
  TableWrapper,
  WorkerFrame,
  WorkerLabel,
  WorkerSkillWrapper,
  SkillFrame,
  SkillLabel,
  LevelFrame,
  LevelMarker,
  // Input,
} from './WorkerTemplate.styles';

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
  // console.log(skilledWorkers);
  const skillWorkersArray = skilledWorkers.map((skillWorkers) => skillWorkers);
  const skillsArray = skillWorkersArray.map((skills) => Object.keys(skills));
  const skillsForArray = skillWorkersArray.map((skills) => Object.values(skills));

  console.log(hasError);

  return (
    <TableWrapper>
      <WorkerFrame>
        {skillsForArray.map((worker, index) => (
          <WorkerSkillWrapper key={index}>
            <WorkerLabel style={{ order: index }} key={index + 100}>
              {Object.values(worker[0])} {Object.values(worker[1])}
            </WorkerLabel>
            <LevelFrame key={index + 100000} style={{ order: index }}>
              {skillsForArray[index].slice(2).map((skill, index) => (
                <LevelMarker style={{ order: index }} name={skill} key={index + 1000}></LevelMarker>
              ))}
            </LevelFrame>
          </WorkerSkillWrapper>
        ))}
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
