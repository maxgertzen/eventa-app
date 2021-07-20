import React, { useEffect, useState } from 'react';
import { getCities, getCountries } from '../../../api/index';

const LocationSelect = ({ formik }) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const callApiAndGetCountryList = async () => {
            const { data } = await getCountries();
            setCountries(data);
        };
        const populateCitiesAndVenues = async (country) => {
            const { data: { cities: _cities } } = await getCities(country);
            formik.setFieldValue('cities', _cities);
            if (formik.values.city) formik.setFieldValue('city', formik.values.city)
            else formik.setFieldValue('city', "");
        };
        callApiAndGetCountryList();
        if (formik.values.country !== 'None' && formik.values.country) {
            populateCitiesAndVenues(formik.values.country)
        }
    }, []);

    return (
        <div className="col-md-12 col-sm-12 mb-2">
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="countries" className="form-label">Country</label>
                    {
                        countries && countries.length ? (
                            <select
                                id="countries"
                                name="countries"
                                value={formik.values.country}
                                className="form-select mb-2"
                                onChange={async e => {
                                    const { value } = e.target;
                                    console.log(value)
                                    const { data: { cities: _cities } } = await getCities(value);
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
                        ) : null
                    }

                </div>
                <div className="col-md-6 col-sm-12">
                    <label htmlFor="city" className="form-label">City</label>
                    <select
                        value={formik.values.city}
                        id="city"
                        name="city"
                        className="form-select mb-2"
                        onChange={formik.handleChange}
                        {...formik.getFieldProps('city')}>
                        <option value="None">Select City</option>
                        {
                            formik.values.cities && formik.values.cities.map(c => {
                                return <option key={c.id} value={c.id}>{c.Name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-sm-12 mb-2">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className={`form-control${formik.values.address ? ' is-valid' : ''}`} id="address" name="address" {...formik.getFieldProps('address')} placeholder="Add Address Here (Optional)" />
                </div>
            </div>
        </div>
    )
}

export default LocationSelect;