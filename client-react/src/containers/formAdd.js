import React from 'react'
import { connect } from 'react-redux';
import { addData } from '../actions';
import { SketchPicker } from 'react-color';

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
            colors: '#fff',
            capacities: '',
            displaypicker: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleButtonColor = this.handleButtonColor.bind(this)
        this.handleColorClose = this.handleColorClose.bind(this)
        this.handleChangeColor = this.handleChangeColor.bind(this)
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
            colors: '#fff',
            capacities: ''
        })
    }

    handleButtonColor() {
        this.setState({
            displaypicker: true
        })
    }

    handleColorClose = (event) => {
        console.log(event.target);
        let { id } = event.target
        this.setState({
            displaypicker: false

        })
    }

    handleChangeColor = (color, event) => {
        this.setState({
            // colors: event.target.colors,
            colors: color.hex,
            displaypicker: true
        })
    }

    colorPicker() {
        if (this.state.displaypicker) {
            return (
                <div className="form-group row" >
                    <label htmlFor="colors" className="col-sm-2 col-form-label">Colors</label>
                    <div className="col-4">
                        <SketchPicker color={this.state.colors} onChange={this.handleChangeColor} />
                    </div>
                    <div className="col-5" onClick={this.handleColorClose}></div>
                </div>
            )
        } else {
            return (
                <div className="form-group row">
                    <label htmlFor="colors" className="col-sm-2 col-form-label">Colors</label>
                    <div className="col-1">
                        <div style={{
                            width: '40px',
                            height: '15px',
                            marginTop: '10px',
                            borderRadius: '2px',
                            backgroundColor: this.state.colors
                        }}>
                        </div>
                    </div>
                    <div className="col-1">
                        <button type="button" onClick={this.handleButtonColor} className="btn btn-info"><i className="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <form >
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="title" name="title" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea type="text" className="form-control" id="description" name="description" rows="5" />
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
                        <textarea type="text" className="form-control" id="detail" name="detail" rows="5" />
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
                        <textarea type="text" className="form-control" id="testimonials" name="testimonials" rows="5" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="rate" className="col-sm-2 col-form-label">Rate</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="rate" name="rate" />
                    </div>
                </div>
                <div>
                    {this.colorPicker()}
                </div>
                {/* <div>{this.colorPicker}</div> */}
                {/* <div className="form-group row">
                    <label htmlFor="colors" className="col-sm-2 col-form-label">Colors</label>
                    <div className="col-2">
                        <input onClick={this.handleButtonColor} className="form-control" id="colors" name="colors" />
                        <button type="button" onClick={this.handleButtonColor} className="btn btn-info"><i className="fa fa-plus" aria-hidden="true"></i></button>
                        <SketchPicker />
                    </div>
                </div> */}
                <div className="form-group row">
                    <label htmlFor="capacities" className="col-sm-2 col-form-label">Capacities</label>
                    <div className="col-sm-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="capacities" />
                            <label className="custom-control-label" htmlFor="capacities">16 Gb</label>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="capacities1" />
                            <label className="custom-control-label" htmlFor="capacities1">32 Gb</label>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="capacities2" />
                            <label className="custom-control-label" htmlFor="capacities2">64 Gb</label>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="capacities3" />
                            <label className="custom-control-label" htmlFor="capacities3">128 Gb</label>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="capacities4" />
                            <label className="custom-control-label" htmlFor="capacities4">256 Gb</label>
                        </div>
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
                <div className="form-group col-md-4 my-5">
                    <button type="button" className="btn btn-success mr-2"><i className="fas fa-check"></i> Save</button>
                    <button type="reset" className="btn btn-danger"> <i className="fas fa-undo"></i> Cancel</button>
                </div>
            </form >
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