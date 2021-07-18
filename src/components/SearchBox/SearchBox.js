import React from 'react';

const SearchBox = ({ handleSearch, handleOnChange }) => {
    return (
        <form className="d-block m-auto mt-3 w-50 clearfix" role="search" onSubmit={handleSearch}>
            <div className="input-group">
                <input type="search" className="form-control" id="main-search" onChange={handleOnChange} name="search" role="searchbox" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </div>
        </form>
    )
}

export default SearchBox;