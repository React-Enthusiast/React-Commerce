import React from 'react'
import { connect } from 'react-redux';
import { addData } from '../../actions';
import { SketchPicker } from 'react-color';
import { Form } from './form'

//github.com/rofisyahrul
Node.prototype.getParents = function (nth = 0) {
    if (nth <= 0) return this.parentElement;
    return this.getParents.call(this.parentElement, --nth);
};

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
            colors: ['#fff'],
            capacities: [],
            displaypicker: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleButtonColor = this.handleButtonColor.bind(this)
        this.handleColorClose = this.handleColorClose.bind(this)
        this.handleChangeColor = this.handleChangeColor.bind(this)
        this.handleChangeCurrency = this.handleChangeCurrency.bind(this)
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this)
    }

    convertPrice = (price = 0, currency = "Rp. ") => {
        price = price
          .toString()
          .replace(/\D/g, "")
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        price = price && `${currency} ${price}`;
        return price;
      }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChangeCurrency(event) {
        let {name,value,inputMode} = event.target
        if (inputMode === 'numeric') {
            value = this.convertPrice(value)
        }
        this.setState({
            [name]: value
        })
    }

    handleChangeCheckbox(event, name) {
        let {value,checked} = event.target
        if (checked){
            this.setState({
                [name]: value
            })
        }
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
            colors: ['#fff'],
            capacities: [],
            displaypicker: false
        })
    }

    // handleButtonColor = (event) => {
    //     let { id } = event.target;
    //     id = Number(id.split("click")[1])
    //     this.setState(state => ({
    //         displaypicker: state.displaypicker.map((result, index) => index === id ? !result : result)
    //     }))
    // }
    handleButtonColor = (event) => {
        this.setState({
            displaypicker: true
        })
    }
    

    // handleColorClose = (event) => {
    //     let { id } = event.target
    //     id = Number(id.split('close')[1])
    //     this.setState(state => ({
    //         displaypicker: state.displaypicker.map((result, index) => index === id ? false : result)
    //     }))
    // }
    handleColorClose = (event) => {
        this.setState({
            displaypicker: false
        })
    }

    handleChangeColor = (color, event) => {
        let target = event.target
        // console.log(target.getParents(4)); //get parent div
        this.setState({
            // colors: event.target.colors,
            colors: color.hex,
            displaypicker: true
        })
    }

    selectCapacities = () => {
        return {
            name: 'capacities',
            label: 'Capacity',
            type: 'checkbox',
            values: [16, 32, 64, 128, 256, 512],
            options: [16, 32, 64, 128, 256, 512].map(total => `${total} Gb`),
            nomor: [16, 32, 64, 128, 256, 512].map(total => `capacity${total}`),
            checked: this.state.capacities
        }
    }

    colorPicker() {
        if (this.state.displaypicker) {
            return (
                <div className="form-group row" >
                    <label htmlFor="colors" className="col-sm-2 col-form-label">Colors</label>
                    <div className="col-4">
                        <SketchPicker color={this.state.colors} onChange={this.handleChangeColor} />
                    </div>
                    <div className="col-4" onClick={this.handleColorClose}></div>
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
        console.log(this.state.title);
        let { price, title, description, brand, detail, vote, testimonials, rate } = this.state
        let forms = [
            { name: 'title', type: 'text', label: 'Title', value: title },
            { name: 'description', type: 'textarea', label: 'Description', row: '5', value: description },
            { name: 'brand', type: 'text', label: 'Brand', value: brand},
            { name: 'price', type: 'money', inputMode: 'numeric', label: 'Price', min: '0', value: price },
            { name: 'detail', type: 'textarea', label: 'Detail', value: detail },
            { name: 'vote', type: 'number', label: 'Vote', min: '0', value: vote },
            { name: 'testimonials', type: 'textarea', label: 'Testimonials', value: testimonials },
            this.selectCapacities(),
            { name: 'rate', type: 'number', label: 'Rate', min: '0', max: '5', value: rate },
            { type: 'color' },
            { type: 'file' }
        ]

        let item = forms.map((result, index) => {
            if (result.type === 'color') {
                if (this.state.displaypicker) {
                    return (
                        <div className="form-group row" >
                            <label htmlFor="colors" className="col-sm-2 col-form-label">Colors</label>
                            <div className="col-4">
                                <SketchPicker color={this.state.colors} onChange={this.handleChangeColor} />
                            </div>
                            <div className="col-4" onClick={this.handleColorClose}></div>
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
            return (
                <Form key={index} {...result} onChange={this.handleChange} onChangeCurrency={this.handleChangeCurrency} onChangeCheckbox={this.handleChangeCheckbox} />
            )
        })

        return (
            <form onSubmit={this.handleSubmit}>
                {item}
            </form>
        )

        // return (
        //     <form >
        //         <div className="form-group row">
        //             <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
        //             <div className="col-sm-10">
        //                 <input type="text" className="form-control" id="title" name="title" />
        //             </div>
        //         </div>
        //         <div className="form-group row">
        //             <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
        //             <div className="col-sm-10">
        //                 <textarea className="form-control" id="description" name="description" rows="5" />
        //             </div>
        //         </div>
        //         <div className="form-group row">
        //             <label htmlFor="brand" className="col-sm-2 col-form-label">Brand</label>
        //             <div className="col-sm-10">
        //                 <input type="text" className="form-control" id="brand" name="brand" />
        //             </div>
        //         </div>
        //         <div className="form-group row">
        //             <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
        //             <div className="col-sm-10">
        //                 <input type="number" className="form-control" id="price" name="price" />
        //             </div>
        //         </div>
        //         <div className="form-group row">
        //             <label htmlFor="detail" className="col-sm-2 col-form-label">Detail Product</label>
        //             <div className="col-sm-10">
        //                 <textarea className="form-control" id="detail" name="detail" rows="5" />
        //             </div>
        //         </div>
        //         <div className="form-group row">
        //             <label htmlFor="vote" className="col-sm-2 col-form-label">Vote</label>
        //             <div className="col-sm-10">
        //                 <input type="number" className="form-control" id="vote" name="vote" />
        //             </div>
        //         </div>
        //         <div className="form-group row">
        //             <label htmlFor="testimonials" className="col-sm-2 col-form-label">Testimonials Product</label>
        //             <div className="col-sm-10">
        //                 <textarea type="text" className="form-control" id="testimonials" name="testimonials" rows="5" />
        //             </div>
        //         </div>
        //         <div className="form-group row">
        //             <label htmlFor="rate" className="col-sm-2 col-form-label">Rate</label>
        //             <div className="col-sm-10">
        //                 <input type="number" className="form-control" id="rate" name="rate" />
        //             </div>
        //         </div>
        //         <div>
        //             {this.colorPicker()}
        //         </div>
        //         <div className="form-group row">
        //             <label htmlFor="capacities" className="col-sm-2 col-form-label">Capacities</label>
        //             <div className="col-sm-2">
        //                 <div className="custom-control custom-checkbox">
        //                     <input type="checkbox" className="custom-control-input" id="capacities" name="capacities" />
        //                     <label className="custom-control-label" htmlFor="capacities">16 Gb</label>
        //                 </div>
        //             </div>
        //             <div className="col-sm-2">
        //                 <div className="custom-control custom-checkbox">
        //                     <input type="checkbox" className="custom-control-input" id="capacities1" name="capacities" />
        //                     <label className="custom-control-label" htmlFor="capacities1">32 Gb</label>
        //                 </div>
        //             </div>
        //             <div className="col-sm-2">
        //                 <div className="custom-control custom-checkbox">
        //                     <input type="checkbox" className="custom-control-input" id="capacities2" name="capacities" />
        //                     <label className="custom-control-label" htmlFor="capacities2">64 Gb</label>
        //                 </div>
        //             </div>
        //             <div className="col-sm-2">
        //                 <div className="custom-control custom-checkbox">
        //                     <input type="checkbox" className="custom-control-input" id="capacities3" name="capacities" />
        //                     <label className="custom-control-label" htmlFor="capacities3">128 Gb</label>
        //                 </div>
        //             </div>
        //             <div className="col-sm-2">
        //                 <div className="custom-control custom-checkbox">
        //                     <input type="checkbox" className="custom-control-input" id="capacities4" name="capacities" />
        //                     <label className="custom-control-label" htmlFor="capacities4">256 Gb</label>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="form-group row">
        //             <h5 className="col-sm-2 col-form-label">File Upload</h5>
        //             <div className="col-sm-10">
        //                 <div className="custom-file">
        //                     <input type="file" className="custom-file-input" id="File" name="file" />
        //                     <label className="custom-file-label" htmlFor="file">Choose File</label>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="form-group col-md-4 my-5">
        //             <button type="button" className="btn btn-success mr-2"><i className="fas fa-check"></i> Save</button>
        //             <button type="reset" className="btn btn-danger"> <i className="fas fa-undo"></i> Cancel</button>
        //         </div>
        //     </form >
        // )
    }
}

const mapDispatchToProps = dispatch => ({
    addData: (title, description, brand, price, detail, vote, testimonial, rate, colors, capacities) => dispatch(addData(title, description, brand, price, detail, vote, testimonial, rate, colors, capacities))
})

export default connect(
    null,
    mapDispatchToProps
)(FormAdd)