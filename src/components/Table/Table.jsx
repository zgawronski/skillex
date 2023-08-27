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
  Input,
  Magnifier,
  SearchInput,
} from './Table.styles';

export const Table = () => {
  const [skilledWorkers, setSkilledWorkers] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [skillsFilter, setSkillsFilter] = useState();
  // fetching data
  useEffect(() => {
    fetch('http://localhost:3000/skilledWorkers')
      .then((res) => res.json())
      .then((data) => {
        setSkilledWorkers(data);
        setSkillsFilter(data.map((skills) => Object.values(skills)));
      })
      .catch(() => setHasError(true));
  }, []);

  console.log('Error: ' + hasError);

  const skillWorkersArray = skilledWorkers.map((skillWorkers) => skillWorkers);
  const skillsArray = skillWorkersArray.map((skills) => Object.keys(skills));
  const skillsForArray = skillWorkersArray.map((skills) => Object.values(skills));

  // handle search input
  const handleChange = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    setSearchInput(searchValue);
  };

  // filtering
  useEffect(() => {
    setSkillsFilter(skillsForArray);
    if (searchInput.length !== '')
      setSkillsFilter(skillsForArray.filter((searchItem) => searchItem.map((e) => e.toLowerCase()).includes(searchInput.toLowerCase())));
    if (searchInput.length == '') setSkillsFilter(skillsForArray);
    setLoading(false);
  }, [searchInput]);

  return (
    <TableWrapper>
      <WorkerFrame>
        <SearchInput>
          <Input type="text" placeholder="name" onChange={handleChange} value={searchInput} />

          <Magnifier src="./img/magnifier.png" alt="magnifier" />
        </SearchInput>
        {loading ? (
          'loading...'
        ) : (
          <>
            {skillsFilter.map((worker, index) => (
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
          </>
        )}
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
