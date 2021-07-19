import React from 'react';

const FilterPill = ({ name, handleChange, id }) => {
    return (
        <>
            <input type="radio" id={id} className="btn-check" name="radio" value={name} autocomplete="off" onChange={(e) => handleChange(e.currentTarget.value)} />
            <label className="btn btn-outline-info text-capitalize mx-2" htmlFor={id}>{name}</label>
        </>
    )
}

export default FilterPill;

