import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemProduct from './itemProduct'

export class ListProduct extends Component {
    render() {
        return (
            <div>
                <div className="card-header bg-secondary text-center">
                    <h2>Welcome to Landing Page</h2>
                </div>
                <div className="col my-4">
                    <button type="button" className="btn btn-info"><i className="fas fa-plus"></i> Add New Product</button>
                </div>
                <ItemProduct />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct)
