import React from 'react';
import { Context } from './../store/appContext';
import Card from './../components/card';


const Planets = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">
                                {
                                    !!context.store.planets.results &&
                                    context.store.planets.results.map((item, i) => {
                                        return (
                                            <Card index={i} name={item.name} image="https://lumiere-a.akamaihd.net/v1/images/rtl110ad_disneylatino_nov_starwars_banner_1pzas_w42_b870aa80.jpeg?region=0,0,800,920"/>
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

export default Planets;