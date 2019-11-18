import React from 'react'
import { Card } from 'react-bootstrap';
import Star from '../MiniComponents/Stars';


export default function ItemTestimonial(props) {
    let { name, rate, message } = props.testimonial;
    return (
        <Card>
            <Card.Body>
                <Star rate={rate}/>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {message}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
