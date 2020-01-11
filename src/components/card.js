import React from 'react';

import Modal from './../components/modal';



class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    sendIndex = (e) => {
        e.preventDefault();
        this.props.setIndex(this.props.item);
    }

    render() {
        return (
            <div className="col-md-4 mt-5 card">
                <img src={this.props.image} className="card-img-top" alt="..." />
                <div class="card-body" key={this.props.item.index}>
                    <h5 class="card-title">{this.props.item.name}</h5>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop" onClick={this.sendIndex.bind(this)}>
                        Info
                    </button>
                </div>
            </div>
        )
    }
}

export default Card;