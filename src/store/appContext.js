import React, { Component } from 'react';

export const Context = React.createContext(null);

export class ContextWrapper extends Component {
    constructor() {
        super();
        this.state = {
            store: {
                todos: ["Make the bed", "Take out the trash"],
                people: {},
                vehicles: {},
                planets: {}            },
            actions: {
                addTask: title => {
                    this.setState({
                        store: Object.assign(
                            this.state.store,
                            { todos: this.state.store.todos.concat(title) }
                        )
                    })
                },
                setName: e => {
                    this.setState({
                        store: Object.assign(
                            this.state.store,
                            { name: e.target.value }
                        )
                    });
                },
                getPeople: url => {
                    fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        this.setState({
                        store: Object.assign(
                            this.state.store,
                            { people: data }
                        )
                    });
                });
                },
                getVehicles: url => {
                    fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        this.setState({
                        store: Object.assign(
                            this.state.store,
                            { vehicles: data }
                        )
                    });
                });
                },
                getPlanets: url => {
                    fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        this.setState({
                        store: Object.assign(
                            this.state.store,
                            { planets: data }
                        )
                    });
                });
                }
            }
        };
    }

    componentDidMount(){
        this.state.actions.getPeople("https://swapi.co/api/people/");
        this.state.actions.getVehicles("https://swapi.co/api/vehicles/");
        this.state.actions.getPlanets("https://swapi.co/api/planets/");
    }t

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}