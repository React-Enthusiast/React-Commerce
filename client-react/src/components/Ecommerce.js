import React from 'react';
import FormAdd from '../containers/formAdd'

export default class Ecommerce extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header text-center">
                        <h2>Form Add</h2>
                    </div>
                    <div className="card-body">
                        <FormAdd />
                    </div>
                </div>
            </div>
        )
    }
}