import React, { useState } from 'react';
const Search = (props) => {
    const [SearchValue, setSearchValue] = useState("");
    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value);
    }
    const resetInputFiel = () => {
        setSearchValue("");
    }
    const callSearchFunction = (e) => {
        e.preventDefault();
        props.Search(SearchValue);
        resetInputFiel();
    }
    return (
        <form className="search">
            <input value={SearchValue}
                onChange={handleSearchInputChange}
                type="text" />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    );
}
export default Search;