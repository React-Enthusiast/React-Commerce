import React from 'react';
import ItemCard from './ListProduct/ItemCard';
import { Button, CardDeck } from 'react-bootstrap';
import { loadProduct } from "../actions";
import { connect } from "react-redux";

class Ecommerce extends React.Component {

    componentWillMount() {
        this.props.loadProduct();
    }

    render() {
        return (
            <div className="container-fluid ">
                <div className="card card-responsive-width" style={{ padding: '5vh' }}>
                    <Button variant="primary" className="col-md-2 col-xl-1 col-xm-3 my-3" href="/add">Add</Button>
                    <CardDeck>
                        {console.log(this.props)}
                        {this.props.products.map((value, index) => {
                            return <ItemCard key={index} product={value} />
                        })}
                    </CardDeck>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.product
})


const mapDispatchToProps = (dispatch) => ({
    loadProduct: () => { dispatch(loadProduct(0)) }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ecommerce);