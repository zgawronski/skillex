import { useState } from 'react';
import { Input } from './SearchBar.styles';

export const SearchBar = (data) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    data.filter((searchItem) => {
      return searchItem.includes(searchInput);
    });
  }
  console.log(data);
  return <Input type="text" placeholder="name" onChange={handleChange} value={searchInput} />;
};
