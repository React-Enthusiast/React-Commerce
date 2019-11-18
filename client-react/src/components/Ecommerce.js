import React from 'react';
import FormAdd from '../containers/addForm/formAdd'
import ListProduct from '../containers/listProduct'
export default class Ecommerce extends React.Component {

    render() {
        return (
            <div className="container-fluid ">
                <div className="card card-responsive-width" style={{ padding: '5vh' }}>
                    <FormAdd />
                </div>
            </div>
        )
    }
}