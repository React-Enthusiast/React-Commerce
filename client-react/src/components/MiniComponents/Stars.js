import React from 'react'

export default function Star(props) {
    const stars = (rate) => [...Array(5)].map((item, index) => {
        index += 1;
        if (index <= rate)
            return <i className="fas fa-star text-warning"></i>
        else if (index - rate < 1 && index - rate > 0) {
            return <i className="fas fa-star-half-alt text-warning"></i>
        } else
            return <i className="far fa-star text-warning"></i>
    })

    return (
        <div>
            {stars(props.rate)}
            <span className="text-warning ml-2">{props.rate}</span>
        </div>
    )
}
