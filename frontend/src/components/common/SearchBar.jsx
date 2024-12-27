import React from 'react';
import './SearchBar.scss';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Pesquisar casos de teste..." />
        </div>
    );
};

export default SearchBar;
