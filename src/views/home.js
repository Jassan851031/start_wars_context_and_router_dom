import React from 'react';
import { Context } from './../store/appContext';

const Home = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1>Home</h1>
                                    <ul>
                                        {
                                            context.store.todos.map((item, i) => {
                                                return <li key={i}>{item}</li>
                                            })
                                        }
                                    </ul>
                                    <button
                                        onClick={() =>
                                            context.actions.addTask(
                                                "I am the task " + parseInt(context.store.todos.length + 1)
                                            )
                                        }
                                    >
                                        + add
                                    </button>

                                    <p>{context.store.name}</p>
                                    <input
                                        type="text" onChange={(e) => context.actions.setName(e)}
                                        placeholder="Insert Name"
                                    />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-12 d-flex justify-content-between">
                                    <button className="btn btn-info"
                                        onClick={() => context.actions.getPeople(context.store.people.previous)}
                                    >
                                        Previous
                                    </button>
                                    <button className="btn btn-info"
                                        onClick={() => context.actions.getPeople(context.store.people.next)}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
 
                        </div>
                    )
                }
            }
        </Context.Consumer>

    )
}

export default Home;