import React from 'react';
import './searchbar.css';

const SearchBox = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <input class="form-control me-2" type="text field" placeholder="Leaving from" aria-label="Search"></input>
      <input class="form-control me-2" type="text field" placeholder="going to" aria-label="Search"></input>
      <input class="form-control me-2" type="date" placeholder="" aria-label="Search"></input>
      <input class="form-control me-2" type="number" placeholder="No. of passengers" aria-label="Search"></input>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">Search</button>
    </div>
  </nav>
  );
};

export default SearchBox;
