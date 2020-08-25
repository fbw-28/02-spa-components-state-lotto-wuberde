import React from 'react'

const SingleNumber = (props) => {
    const {singleNumber}= props
    return (
        <div id="single" className="round">
            <p id="singleP">{singleNumber}</p>
        </div>
    )
}

export default SingleNumber
