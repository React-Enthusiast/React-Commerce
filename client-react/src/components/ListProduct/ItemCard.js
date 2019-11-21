import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { loadProductDetail } from "../../actions";
import Star from '../MiniComponents/Stars';

class ItemCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: '',
            storage: '',
        };
    }

    getDetail() {
        this.props.loadProductDetail(this.props.product._id);
    }

    render() {
        return (
            <React.Fragment>
                    <Card>
                        <Card.Img variant="top" style={{ height: '30vw', objectFit: 'cover' }} className="text-center" src={this.props.product.filename} />
                        <Card.Body>
                            <Card.Title>{this.props.product.title}</Card.Title>
                            <Star rate={this.props.product.rate} />
                            <Card.Text>
                                {this.props.product.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between">
                            <h4 className="text-left">{this.props.product.price}</h4>
                            <Button className="text-right" variant="dark" onClick={this.getDetail.bind(this)}>Detail</Button>
                        </Card.Footer>
                    </Card>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    loadProductDetail: (id) => { dispatch(loadProductDetail(id)) }
});

export default connect(
    null,
    mapDispatchToProps
)(ItemCard);
