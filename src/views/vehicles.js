import React, {} from 'react';
import { Context } from './../store/appContext';
import Card from './../components/card';

class Vehicles extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            modal: {
                modalName: "",
                modalModel: "",
                modalManufacturer: "",
                modalCost_in_credits: "",
                modalLength: "",
                modalMax_atmosphering_speed: "",
                modalCrew: "",
                modalPassengers: "",
                modalCargo_capacity: "",
                modalConsumables: "",
                modalVehicle_class: ""
            }
        }
    }

    setIndex = (e) => {

        this.setState({
            modal: {
                modalName: e.name,
                modalModel: e.model,
                modalManufacturer: e.manufacturer,
                modalCost_in_credits: e.cost_in_credits,
                modalLength: e.length,
                modalMax_atmosphering_speed: e.max_atmosphering_speed,
                modalCrew: e.crew,
                modalPassengers: e.passengers,
                modalCargo_capacity: e.cargo_capacity,
                modalConsumables: e.consumables,
                modalVehicle_class: e.vehicle_class
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
                                        !!context.store.vehicles.results && context.store.vehicles.results.map((item, i) => {
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
                                                <p class="text-left"><strong>Model:</strong> {this.state.modal.modalModel}</p>
                                                <p class="text-left"><strong>Manufacturer:</strong> {this.state.modal.modalManufacturer}</p>
                                                <p class="text-left"><strong>Cost_in_credits:</strong> {this.state.modal.modalCost_in_credits}</p>
                                                <p class="text-left"><strong>Length:</strong> {this.state.modal.modalLength}</p>
                                                <p class="text-left"><strong>Max_atmosphering_speed:</strong> {this.state.modal.modalMax_atmosphering_speed}</p>
                                                <p class="text-left"><strong>Crew:</strong> {this.state.modal.modalCrew}</p>
                                                <p class="text-left"><strong>Passengers:</strong> {this.state.modal.modalPassengers}</p>
                                                <p class="text-left"><strong>Cargo_capacity:</strong> {this.state.modal.modalCargo_capacity}</p>
                                                <p class="text-left"><strong>Consumables:</strong> {this.state.modal.modalConsumables}</p>
                                                <p class="text-left"><strong>Vehicle_class:</strong> {this.state.modal.modalVehicle_class}</p>
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

export default Vehicles;