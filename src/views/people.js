import React, { useState } from 'react';
import { Context } from './../store/appContext';
import Modal from './../components/modal';
import Card from './../components/card';


class People extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: {
                modalName: "",
                modalHeight: "",
                modalMass: "",
                modalHair_color: "",
                modalSkin_color: "",
                modalEye_color: "",
                modalBirth_year: "",
                modalGender: ""
            }
        }
    }

    setIndex = (e) => {

        this.setState({
            modal: {
                modalName: e.name,
                modalHeight: e.height,
                modalMass: e.mass,
                modalHair_color: e.hair_color,
                modalSkin_color: e.skin_color,
                modalEye_color: e.eye_color,
                modalBirth_year: e.birth_year,
                modalGender: e.gender
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
                                        !!context.store.people.results && context.store.people.results.map((item, i) => {
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
                                                <p class="text-left"><strong>Height:</strong> {this.state.modal.modalHeight} cm</p>
                                                <p class="text-left"><strong>Mass:</strong> {this.state.modal.modalMass}</p>
                                                <p class="text-left"><strong>Hair_color:</strong> {this.state.modal.modalHair_color}</p>
                                                <p class="text-left"><strong>Skin_color:</strong> {this.state.modal.modalSkin_color}</p>
                                                <p class="text-left"><strong>Eye_color:</strong> {this.state.modal.modalEye_color}</p>
                                                <p class="text-left"><strong>Birth_year:</strong> {this.state.modal.modalBirth_year}</p>
                                                <p class="text-left"><strong>Gender:</strong> {this.state.modal.modalGender}</p>
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

export default People;