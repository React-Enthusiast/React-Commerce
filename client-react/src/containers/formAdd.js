import React from 'react'
import { connect } from 'react-redux';
import { addData } from '../actions'

class FormAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            brand: '',
            price: '',
            detail: '',
            vote: '',
            testimonials: '',
            rate: '',
            colors: '',
            capacities: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleButtonAdd = this.handleButtonAdd.bind(this)
        // this.handleButtonCancel = this.handleButtonCancel.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addData(
            this.state.title,
            this.state.description,
            this.state.brand,
            this.state.price,
            this.state.detail,
            this.state.vote,
            this.state.testimonials,
            this.state.rate,
            this.state.colors,
            this.state.capacities
        )
        this.setState({
            title: '',
            description: '',
            brand: '',
            price: '',
            detail: '',
            vote: '',
            testimonials: '',
            rate: '',
            colors: '',
            capacities: ''
        })
    }

    render() {
        return (
            <form>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="title" name="title" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea type="text" className="form-control" id="description" name="description" rows="5"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="brand" className="col-sm-2 col-form-label">Brand</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="brand" name="brand" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="price" name="price" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="detail" className="col-sm-2 col-form-label">Detail Product</label>
                    <div className="col-sm-10">
                        <textarea type="text" className="form-control" id="detail" name="detail" rows="5"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="vote" className="col-sm-2 col-form-label">Vote</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="vote" name="vote" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="testimonials" className="col-sm-2 col-form-label">Testimonials Product</label>
                    <div className="col-sm-10">
                        <textarea type="text" className="form-control" id="testimonials" name="testimonials" rows="5"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="rate" className="col-sm-2 col-form-label">Rate</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="rate" name="rate" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="colors" className="col-sm-2 col-form-label">Colors</label>
                    <div className="col-2">
                        <input type="color" className="form-control" id="colors" name="colors" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="capacities" className="col-sm-2 col-form-label">Capacities</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="capacities" name="capacities" />
                    </div>
                </div>
                <div className="form-group row">
                    <h5 className="col-sm-2 col-form-label">File Upload</h5>
                    <div className="col-sm-10">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="customFile" />
                            <label className="custom-file-label" htmlFor="customFile">Choose File</label>
                        </div>
                    </div>
                </div>
                <div className="form-group col-md-4">
                    <button type="button" className="btn btn-success mr-2"><i className="fas fa-check"></i> Save</button>
                    <button type="reset" className="btn btn-danger"> <i className="fas fa-undo"></i> Cancel</button>
                </div>
            </form>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    addData: (title, description, brand, price, detail, vote, testimonial, rate, colors, capacities) => dispatch(addData(title, description, brand, price, detail, vote, testimonial, rate, colors, capacities))
})

export default connect(
    null,
    mapDispatchToProps
)(FormAdd)