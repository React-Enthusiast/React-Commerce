import React from 'react';
import FormAdd from '../containers/addForm/formAdd'

import Upload from '../containers/addForm/upload';
import Dropzone from '../containers/addForm/dropzone'

export default class Ecommerce extends React.Component {

    render() {
        return (
            <div className="container my-5">
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