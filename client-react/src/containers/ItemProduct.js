import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../stylesheets/style.css'

function ItemProduct(props) {
    let { rate } = props
    return (
        <div className="card-deck-wrapper">
            <div className="card-deck my-2">
                <div className="card">
                    <img className="card-img-top" src="http://via.placeholder.com/500x400" alt="Card image cap" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Product Title<img className="card-img"
                            src="http://clipart-library.com/new_gallery/98-985509_5-stars-transparent-google-review-logo.png"
                            width="10" height="50" alt="" /></h5>
                    </div>
                    <div className="d-flex col-auto text-left pr-0">
                        <span className="stars">
                            <span style={{ width: `${Math.min(rate, 5)}rem` }} />
                        </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text" style={{ fontSize: '2vh' }}>This is a wider card with supporting text below as
                                a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <strong style={{ fontSize: '4vh' }} className="my-2 mt-auto align-self-end">Rp. 3.999.999,-</strong>
                        <button type="button" className="btn btn-success mr-2 mt-auto"><i className="fas fa-bars"></i> Detail
                            Item</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="http://via.placeholder.com/500x400" alt="Card image cap" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Product Title<img className="card-img"
                            src="http://clipart-library.com/new_gallery/98-985509_5-stars-transparent-google-review-logo.png"
                            width="10" height="50" alt="" /></h5>
                    </div>
                    <div className="d-flex col-auto text-left pr-0">
                        <span className="stars">
                            <span style={{ width: `${Math.min(rate, 5)}rem` }} />
                        </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text" style={{ fontSize: '2vh' }}>This is a wider card with supporting text below as
                                a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <strong style={{ fontSize: '4vh' }} className="my-2 mt-auto align-self-end">Rp. 3.999.999,-</strong>
                        <button type="button" className="btn btn-success mr-2 mt-auto"><i className="fas fa-bars"></i> Detail
                            Item</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="http://via.placeholder.com/500x400" alt="Card image cap" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Product Title<img className="card-img"
                            src="http://clipart-library.com/new_gallery/98-985509_5-stars-transparent-google-review-logo.png"
                            width="10" height="50" alt="" /></h5>
                    </div>
                    <div className="d-flex col-auto text-left pr-0">
                        <span className="stars">
                            <span style={{ width: `${Math.min(rate, 5)}rem` }} />
                        </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text" style={{ fontSize: '2vh' }}>This is a wider card with supporting text below as
                                a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <strong style={{ fontSize: '4vh' }} className="my-2 mt-auto align-self-end">Rp. 3.999.999,-</strong>
                        <button type="button" className="btn btn-success mr-2 mt-auto"><i className="fas fa-bars"></i> Detail
                            Item</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="http://via.placeholder.com/500x400" alt="Card image cap" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Product Title<img className="card-img"
                            src="http://clipart-library.com/new_gallery/98-985509_5-stars-transparent-google-review-logo.png"
                            width="10" height="50" alt="" /></h5>
                    </div>
                    <div className="d-flex col-auto text-left pr-0">
                        <span className="stars">
                            <span style={{ width: `${Math.min(rate, 5)}rem` }} />
                        </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text" style={{ fontSize: '2vh' }}>This is a wider card with supporting text below as
                                a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <strong style={{ fontSize: '4vh' }} className="my-2 mt-auto align-self-end">Rp. 3.999.999,-</strong>
                        <button type="button" className="btn btn-success mr-2 mt-auto"><i className="fas fa-bars"></i> Detail
                            Item</button>
                    </div>
                </div>
            </div>
            <div className="card-deck my-4">
                <div className="card">
                    <img className="card-img-top" src="http://via.placeholder.com/500x400" alt="Card image cap" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Product Title<img className="card-img"
                            src="http://clipart-library.com/new_gallery/98-985509_5-stars-transparent-google-review-logo.png"
                            width="10" height="50" alt="" /></h5>
                    </div>
                    <div className="d-flex col-auto text-left pr-0">
                        <span className="stars">
                            <span style={{ width: `${Math.min(rate, 5)}rem` }} />
                        </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text" style={{ fontSize: '2vh' }}>This is a wider card with supporting text below as
                                a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <strong style={{ fontSize: '4vh' }} className="my-2 mt-auto align-self-end">Rp. 3.999.999,-</strong>
                        <button type="button" className="btn btn-success mr-2 mt-auto"><i className="fas fa-bars"></i> Detail
                            Item</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="http://via.placeholder.com/500x400" alt="Card image cap" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Product Title<img className="card-img"
                            src="http://clipart-library.com/new_gallery/98-985509_5-stars-transparent-google-review-logo.png"
                            width="10" height="50" alt="" /></h5>
                    </div>
                    <div className="d-flex col-auto text-left pr-0">
                        <span className="stars">
                            <span style={{ width: `${Math.min(rate, 5)}rem` }} />
                        </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text" style={{ fontSize: '2vh' }}>This is a wider card with supporting text below as
                                a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <strong style={{ fontSize: '4vh' }} className="my-2 mt-auto align-self-end">Rp. 3.999.999,-</strong>
                        <button type="button" className="btn btn-success mr-2 mt-auto"><i className="fas fa-bars"></i> Detail
                            Item</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="http://via.placeholder.com/500x400" alt="Card image cap" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Product Title<img className="card-img"
                            src="http://clipart-library.com/new_gallery/98-985509_5-stars-transparent-google-review-logo.png"
                            width="10" height="50" alt="" /></h5>
                    </div>
                    <div className="d-flex col-auto text-left pr-0">
                        <span className="stars">
                            <span style={{ width: `${Math.min(rate, 5)}rem` }} />
                        </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text" style={{ fontSize: '2vh' }}>This is a wider card with supporting text below as
                                a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <strong style={{ fontSize: '4vh' }} className="my-2 mt-auto align-self-end">Rp. 3.999.999,-</strong>
                        <button type="button" className="btn btn-success mr-2 mt-auto"><i className="fas fa-bars"></i> Detail
                            Item</button>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="http://via.placeholder.com/500x400" alt="Card image cap" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Product Title<img className="card-img"
                            src="http://clipart-library.com/new_gallery/98-985509_5-stars-transparent-google-review-logo.png"
                            width="10" height="50" alt="" /></h5>
                    </div>
                    <div className="d-flex col-auto text-left pr-0">
                        <span className="stars">
                            <span style={{ width: `${Math.min(rate, 5)}rem` }} />
                        </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text" style={{ fontSize: '2vh' }}>This is a wider card with supporting text below as
                                a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <strong style={{ fontSize: '4vh' }} className="my-2 mt-auto align-self-end">Rp. 3.999.999,-</strong>
                        <button type="button" className="btn btn-success mr-2 mt-auto"><i className="fas fa-bars"></i> Detail
                            Item</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
    null,
    mapDispatchToProps
)(ItemProduct)
