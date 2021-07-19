import React, { useState, useEffect } from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import { getCategories } from '../api/index'
import { backupCategory } from '../utils/data'


const HomePage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const callApi = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                setCategories(backupCategory);
            }
        }
        callApi();
    }, [])

    return (
        <section className="container-sm">
            <div className="row g-3 home-categories">
                {
                    categories?.length ? categories.map(cat => {
                        return <div className="col-md-4 col d-flex justify-content-center align-items-center"><CategoryCard key={cat.category_id} categoryData={cat} /></div>
                    })
                        :
                        null
                }
            </div>
        </section>
    )
}

export default HomePage