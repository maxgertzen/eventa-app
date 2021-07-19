import React from 'react';
import FilterPill from '../FilterPill/FilterPill';
import { backupCategory } from '../../utils/data';

const SearchBox = ({ handleSearch, handleOnChange, filter }) => {
    return (
        <div className="searchbox-container text-center">
            <form className="d-block m-auto my-3 w-50 clearfix" role="search" onSubmit={handleSearch}>
                <div className="input-group">
                    <input type="search" className="form-control" id="main-search" onChange={handleOnChange} name="search" role="searchbox" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </div>
            </form>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <FilterPill name="all" id="all" handleChange={filter} />
                {
                    backupCategory && backupCategory.map(cat => {
                        return <FilterPill key={cat.category_id} id={cat.category_id} name={cat.name} handleChange={filter} />
                    })
                }
            </div>
        </div >
    )
}

export default SearchBox;