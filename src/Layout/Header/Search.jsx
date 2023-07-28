import React from "react";
import {SearchContainer, SearchIcon, SearchInput} from './styled';


const Search = () => {
    return (
        <SearchContainer>
            <SearchIcon />
            <SearchInput placeholder='Search by'/>
        </SearchContainer>
    )
}

export default Search;