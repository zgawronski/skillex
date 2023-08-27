import { useState } from 'react';
import { Input } from './SearchBar.styles';

export const SearchBar = (data) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value.toLowerCase());
  };
  console.log(data);
  if (searchInput.length > 0) {
    const x = data;
    x.filter((searchItem) => searchItem.includes(searchInput));
    //console.log(searchInput);
  }
  // console.log(data);
  return (
    <>
      <Input type="text" placeholder="name" onChange={handleChange} value={searchInput} />
      <button type="submit">
        <img src="./img/magnifier.png" />
      </button>
    </>
  );
};
