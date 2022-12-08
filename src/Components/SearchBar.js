import React from 'react';

function SearchBar({handleSearch, search}) {
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Games:</label>
            <input
                value={search}
                type="text"
                id="search"
                placeholder="Type a title to search..."
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar