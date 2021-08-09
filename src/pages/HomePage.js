import React, { useState, useEffect } from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import { getEvents } from '../api/index'
import { backupCategory } from '../utils/data'
import HeroHome from '../components/HeroHome/HeroHome';
import SearchResults from '../components/SearchResults/SearchResults'
import ArrowAnimatedUp from '../components/ArrowUp/ArrowAnimatedUp';

const HomePage = () => {
    const [todayEvents, setTodayEvents] = useState([])
    useEffect(() => {
        const callApi = async () => {
            let { data } = await getEvents('week');
            console.log(data)
            setTodayEvents(data);
        }
        callApi();
    }, [])

    return (
        <>
            <section className="home-page container-fluid h-100 gx-0 px-0">
                <HeroHome />
            </section>
            <section className="row gx-0 text-white my-4">
                {
                    todayEvents && (
                        <>
                            <h3 className="text-uppercase text-center">Next Events</h3>
                            <div className="col-12 mx-auto">
                                <SearchResults results={todayEvents} />
                            </div>
                        </>
                    )
                }
            </section>
            <div className="row gx-0 gy-3 my-3 text-center text-uppercase text-white home-categories">
                <h3 id="categories">Categories</h3>
                {
                    backupCategory?.length ? backupCategory.map((cat, index) => {
                        return <div key={cat.category_id} data-aos="fade-right" data-aos-delay={`${index * 100}`} className="col-md-4 col d-flex justify-content-center align-items-center" ><CategoryCard key={cat.category_id} categoryData={cat} /></div>
                    })
                        :
                        null
                }
            </div>
            <div className="clearfix position-relative d-flex justify-content-center align-items-center" style={{ height: '150px' }}>
                <ArrowAnimatedUp href="#head" style={{ bottom: 0 }}>
                    <span></span>
                    <span></span>
                </ArrowAnimatedUp>
            </div>
        </>
    )
}

export default HomePage