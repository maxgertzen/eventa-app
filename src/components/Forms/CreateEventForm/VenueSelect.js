import React, { useEffect, useState } from 'react';
import { getCities, getCountries } from '../../../api/index';

const VenueSelect = ({ formik }) => {
    const [countries, setCountries] = useState([])
    const [venueSuggestions, setVenueSuggestions] = useState([])

    useEffect(() => {
        const callApiAndGetCountryList = async () => {
            const { data } = await getCountries();
            setCountries(data);
        }
        callApiAndGetCountryList();
    }, []);

    return (
        <div className="col-md-12 col-sm-12 mb-2">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="countries" className="form-label">Country</label>
                    {
                        countries.length && (
                            <select
                                id="countries"
                                name="countries"
                                value={formik.values.country}
                                className="form-select mb-2"
                                onChange={async e => {
                                    const { value } = e.target;
                                    console.log(value)
                                    const { data: { cities: _cities, venues } } = await getCities(value);
                                    setVenueSuggestions(venues);
                                    formik.setFieldValue('country', value);
                                    formik.setFieldValue('city', "");
                                    formik.setFieldValue('cities', _cities);
                                }}>
                                <option value="None">Select Country</option>
                                {
                                    countries.map(({ countryCode, name }) => {
                                        return <option key={countryCode} value={countryCode}>
                                            {name}
                                        </option>
                                    })
                                }
                            </select>
                        )
                    }

                </div>
                <div className="col-md-6 col-sm-12">
                    <label htmlFor="city" className="form-label">City</label>
                    <select
                        value={formik.values.city}
                        id="city"
                        name="city"
                        className="form-select mb-2"
                        onChange={formik.handleChange}>
                        <option value="None">Select City</option>
                        {
                            formik.values.cities && formik.values.cities.map(c => {
                                return <option key={c.id} value={c.id}>{c.Name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            {
                venueSuggestions.length || formik.values.city !== 'None' ? (
                    <div className="row">
                        <div className="col-md-12 col-sm-12 mb-2">
                            <label htmlFor="venueName" className="form-label">Venue Name</label>
                            <input
                                className={`form-control${formik.values.venueId ? ' is-valid' : ''}`}
                                list="venues"
                                id="venueName"
                                name="venueName"
                                onChange={e => {
                                    let id = e.target.getAttribute('data-value');
                                    id ?
                                        formik.setFieldValue('venueId', id)
                                        :
                                        formik.setFieldValue('venueName', e.target.value)
                                }} placeholder="Type Venue Place" />
                            <datalist id="venues">
                                {venueSuggestions?.map((suggestion) => {
                                    return <option key={suggestion.venue_id} data-value={suggestion.venue_id} value={suggestion.name} />
                                })}
                            </datalist>
                        </div>
                        <div className="col-md-12 col-sm-12 mb-2">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className={`form-control${formik.values.address ? ' is-valid' : ''}`} id="address" name="address" {...formik.getFieldProps('address')} placeholder="Add Address Here (Optional)" />
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default VenueSelect;