import React, { Component } from 'react'
import Testimonials from './Testimonials'
import DescDetail from './DescDetail'
import { Tabs, Tab, ToggleButtonGroup, ToggleButton, ButtonToolbar, Button } from 'react-bootstrap'
import Star from '../MiniComponents/Stars'
import BuyModal from './BuyModal'



export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
            storage: '',
            quantity: 1,
            minimal: 1,
            maksimal: 5,
            showModal: false,
            rateMessage: 'Buruk',
            rateStars: 1
        };
    }

    setStars(value) {
        this.setState({ rateStars: value })
        this.changeRateMessage(value)
    }

    setColor(e) {
        this.setState({ color: e.target.value });
    }

    setStorage(e) {
        this.setState({ storage: e.target.value })
    }

    plusQuantity() {
        if (this.state.quantity < 5) {
            this.setState((state) => ({
                quantity: state.quantity + 1
            }))
        }
    }

    minusQuantity() {
        if (this.state.quantity > 1) {
            this.setState((state) => ({
                quantity: state.quantity - 1
            }))
        }
    }

    changeRateMessage(value) {
        switch (value) {
            case 1:
                this.setState({ rateMessage: 'Buruk' })
                break;

            case 2:
                this.setState({ rateMessage: 'Kurang Baik' })
                break;

            case 3:
                this.setState({ rateMessage: 'Cukup Baik' })
                break;

            case 4:
                this.setState({ rateMessage: 'Baik' })
                break;

            case 5:
                this.setState({ rateMessage: 'Sangat Baik' })
                break;

            default:
                break;
        }
    }

    render() {
        let testimonials = [{ name: 'Adnan', rate: 3.5, message: 'Crazy this item' },
        { name: 'Renda', rate: 3, message: 'Not Really like it item' },
        { name: 'Rizka', rate: 5, message: 'Nice item' }]
        let description = "Have you ever love";

        return (
            <React.Fragment>
                <div className="container">
                    <div className="card my-5">
                        <div className="card-header text-center bg-dark">

                        </div>
                        <div className="card-body">
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card-body">
                                            <div className="text-center">
                                                <img src="https://ibox.co.id/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-s-white.png"
                                                    className="rounded" width="100%" height="100%" alt="..." />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h1 className="card-title my-0 mt-4">iPhone X</h1>

                                            <h4 className="card-title text-primary">Apple <span style={{ fontSize: "10px" }}>( 1200 Likes )</span> </h4>

                                            <Star rate={4.5} />

                                            <h3 className="card-text">Rp. 17.499.000,00</h3>

                                            <h6 className="card-text">Color: {(this.state.color) ? <span className="border border-dark" style={{ backgroundColor: `${this.state.color}` }}><span className="invisible">War</span></span> : ''}</h6>

                                            <ButtonToolbar>
                                                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                                    <ToggleButton variant="outline-primary" value={'#fff'} className="mr-2 border rounded" onClick={this.setColor.bind(this)}>
                                                        <span className="border border-dark" style={{ backgroundColor: '#fff', color: '#fff' }}>War</span>
                                                    </ToggleButton>

                                                    <ToggleButton variant="outline-primary" value={'#5F9EA0'} className="mr-2 border rounded" onClick={this.setColor.bind(this)}>
                                                        <span className="border border-dark" style={{ backgroundColor: '#5F9EA0', color: '#5F9EA0' }}>War</span>
                                                    </ToggleButton>

                                                    <ToggleButton variant="outline-primary" value={'#FF1493'} className="mr-2 border rounded" onClick={this.setColor.bind(this)}>
                                                        <span className="border border-dark" style={{ backgroundColor: '#FF1493', color: '#FF1493' }}>War</span>
                                                    </ToggleButton>
                                                </ToggleButtonGroup>
                                            </ButtonToolbar>

                                            <h6 className="card-text mt-2">Storage: {this.state.storage ? `${this.state.storage} Gb` : ''}</h6>

                                            <ButtonToolbar>
                                                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                                    <ToggleButton variant="outline-primary" value={16} className="mr-2 border rounded" onClick={this.setStorage.bind(this)}>16 Gb</ToggleButton>
                                                    <ToggleButton variant="outline-primary" value={32} className="mr-2 border rounded" onClick={this.setStorage.bind(this)}>32 Gb</ToggleButton>
                                                    <ToggleButton variant="outline-primary" value={64} className="mr-2 border rounded" onClick={this.setStorage.bind(this)}>64 Gb</ToggleButton>
                                                </ToggleButtonGroup>
                                            </ButtonToolbar>

                                            <label htmlFor="Quantity" >Quantity</label>
                                            <span className="row ml-1 mb-3">
                                                <button
                                                    type="button"
                                                    className={"btn btn-outline-dark mr-2 " + (this.state.minimal > 1)}
                                                    onClick={this.minusQuantity.bind(this)}
                                                >
                                                    <i className="fas fa-minus text-danger"></i>
                                                </button>

                                                <input
                                                    type="text"
                                                    className="form-control col-sm-2 col-md-2"
                                                    id="Quantity"
                                                    value={this.state.quantity}
                                                    required
                                                />

                                                <button
                                                    type="button"
                                                    className="btn btn-outline-dark mx-2"
                                                    onClick={this.plusQuantity.bind(this)}   >
                                                    <i className="fas fa-plus text-success"></i>
                                                </button>
                                            </span>

                                            <ButtonToolbar>
                                                <Button className="mr-2" variant="success" onClick={() => this.setState({ showModal: true })}>
                                                    <i className="fas fa-shopping-cart "></i> Buy Now
                                                </Button>
                                                <button type="button" className="btn btn-primary col-md-2"> <i
                                                className="far fa-thumbs-up "></i> Like </button>

                                                <BuyModal
                                                    show={this.state.showModal}
                                                    onHide={() => this.setState({ showModal: false })}
                                                    rateMessage={this.state.rateMessage}
                                                    changeRateMessage={this.changeRateMessage.bind(this)}
                                                    rateStars={this.state.rateStars}
                                                    setStars={this.setStars.bind(this)}
                                                />
                                            </ButtonToolbar>

                                        </div>
                                    </div>
                                </div>

                                <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
                                    <Tab eventKey="description" title="Description">
                                        <DescDetail description={description} />
                                    </Tab>
                                    <Tab eventKey="testimonials" title="Testimonials">
                                        <Testimonials testimonials={testimonials} />
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}
