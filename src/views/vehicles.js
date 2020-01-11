import React from 'react';
import { Context } from './../store/appContext';
import Card from './../components/card';



const Vehicles = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">
                                {
                                    !!context.store.vehicles.results &&
                                    context.store.vehicles.results.map((item, i) => {
                                        return (
                                            <Card index={i} name={item.name} image="https://sm.ign.com/ign_es/news/s/star-wars-/star-wars-rise-of-skywalker-star-hopes-theres-a-directors-cu_rhxg.jpg"/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            }
        </Context.Consumer>
    )
}

export default Vehicles;