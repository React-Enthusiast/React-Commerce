import React from 'react';
import Rating from 'react-rating'
import { Modal, Button } from 'react-bootstrap'
import styled from 'styled-components'

export default function BuyModal(props) {

    const Wrapper = styled.section`
        text-align: center;
        `;

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Wrapper>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <span className="text-center"> Delivered Successfully </span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>{props.rateMessage}</h5>
                    <Rating
                        name="rate"
                        emptySymbol="far fa-star text-warning fa-2x"
                        fullSymbol="fas fa-star text-warning fa-2x"
                        initialRating={props.rateStars}
                        onClick={props.setStars}
                    />
                    <div className="form-group mt-3">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            id="opinion"
                            rows="3"
                            name="opinion"
                            placeholder="Opinion"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={props.onHide}>Submit Testimoni</Button>
                </Modal.Footer>
            </Wrapper>
        </Modal>
    );
}