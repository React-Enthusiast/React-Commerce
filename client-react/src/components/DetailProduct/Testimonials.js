import React from 'react'
import ItemTestimonial from './ItemTestimonial'

export default function Testimonials(props) {
    return (
        <div>
            {props.testimonials.map((item, index) => {
                return <ItemTestimonial key={index} testimonial={item} />
            })}
        </div>
    )
}