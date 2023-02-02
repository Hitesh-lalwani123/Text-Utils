import React from 'react'
import PropTypes from 'prop-types'
export default function Alert(props) {
    return (
        
            props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
                {props.type} : {props.alert.msg}
            </div>
        
    )
}


Alert.prototype = {
    msg: PropTypes.string,
    type: PropTypes.string
}
Alert.defaultProps = {
    msg: 'Enter something',
    type: 'Success'
}


