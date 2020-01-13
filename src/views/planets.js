import React, {} from 'react';
import { Context } from './../store/appContext';
import Card from './../components/card';

class Planets extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            modal: {
                modalName: "",
                modalRotation_period: "",
                modalOrbital_period: "",
                modalDiameter: "",
                modalClimate: "",
                modalGravity: "",
                modalTerrain: "",
                modalSurface_water: "",
                modalPopulation: ""
            }
        }
    }

    setIndex = (e) => {

        this.setState({
            modal: {
                modalName: e.name,
                modalRotation_period: e.rotation_period,
                modalOrbital_period: e.orbital_period,
                modalDiameter: e.diameter,
                modalClimate: e.climate,
                modalGravity: e.gravity,
                modalTerrain: e.terrain,
                modalSurface_water: e.surface_water,
                modalPopulation: e.population
            }
        })
    }

     render() {
        return (
            <Context.Consumer>
                {
                    (context) => {
                        return (
                            <div className="container">
                                <div className="row">
                                    {
                                        !!context.store.planets.results && context.store.planets.results.map((item, i) => {
                                            return (
                                                <Card
                                                    setIndex={this.setIndex.bind(this)}
                                                    item={item}
                                                    image="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2019/12/star-wars-peliculas.jpg?itok=e68dfHFp" />
                                            )
                                        })
                                    }
                                </div>


                                <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Informacion de {this.state.modal.modalName}</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <p class="text-left"><strong>Rotation_period:</strong> {this.state.modal.modalRotation_period}</p>
                                                <p class="text-left"><strong>Orbital_period:</strong> {this.state.modal.modalOrbital_period}</p>
                                                <p class="text-left"><strong>Diameter:</strong> {this.state.modal.modalDiameter}</p>
                                                <p class="text-left"><strong>Climate:</strong> {this.state.modal.modalClimate}</p>
                                                <p class="text-left"><strong>Gravity:</strong> {this.state.modal.modalGravity}</p>
                                                <p class="text-left"><strong>Terrain:</strong> {this.state.modal.modalTerrain}</p>
                                                <p class="text-left"><strong>Surface_water:</strong> {this.state.modal.modalSurface_water}</p>
                                                <p class="text-left"><strong>Population:</strong> {this.state.modal.modalPopulation}</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}

export default Planets;