import React from 'react'

import PropTypes from 'prop-types'


const WithPropComponenet = (props) => {
    return (
        <div>

            <h1>
                WithPropComponenet
            </h1>
            <h2>
                the value received from props: {props.productName} {props.rating}
            </h2>
        </div>

    )
}

export default WithPropComponenet