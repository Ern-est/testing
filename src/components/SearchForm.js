import React, { useState } from 'react';

function SearchForm(props) {
  const [searchText, setSearchText] = useState('');

  function handleSearchTextChange(event) {
    setSearchText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Implement search logic
    props.onSearch(searchText);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search:
        <input type="text" value={searchText} onChange={handleSearchTextChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
