// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Wrapper, WorkerFrame, WorkerLabel, WorkerSkillWrapper, SkillFrame, SkillLabel, LevelFrame, LevelMarker } from './Table.styles';

export const Table = () => {
  const [skills, setSkills] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [skilledWorkers, setSkilledWorkers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/workers')
      .then((res) => res.json())
      .then((data) => setWorkers(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/skills')
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/skilledWorkers')
      .then((res) => res.json())
      .then((data) => setSkilledWorkers(data));
  }, []);

  const skillsArray = skills.map((skill) => skill);
  const workersArray = workers.map((worker) => worker);
  const skillWorkersArray = skilledWorkers.map((skillWorkers) => skillWorkers);
  skillWorkersArray.filter((x) => {
    delete x.firstname;
    delete x.lastname;
  });
  const skillsForArray = skillWorkersArray.map((skills) => Object.values(skills));
  console.log(skillsForArray);

  return (
    <Wrapper>
      <WorkerFrame>
        {workersArray.map((worker, index) => (
          <WorkerSkillWrapper key={index}>
            <WorkerLabel style={{ order: index }} key={index + 100}>
              {Object.values(worker.firstname)} {Object.values(worker.lastname)}
            </WorkerLabel>
            <LevelFrame key={index + 100000} style={{ order: index }}>
              {skillsForArray[index].map((skillsMarkers, index) => (
                <LevelMarker style={{ order: index }} name={skillsMarkers[index]} key={index + 1000}></LevelMarker>
              ))}
            </LevelFrame>
          </WorkerSkillWrapper>
        ))}
      </WorkerFrame>
      <SkillFrame>
        {skillsArray.map((skill, index) => (
          <SkillLabel style={{ order: index }} key={index + 10000}>
            {Object.values(skill)}
          </SkillLabel>
        ))}
      </SkillFrame>
    </Wrapper>
  );
};
