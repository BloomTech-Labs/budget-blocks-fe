//Styles for these components are located in App.css

import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
    return (
        <div className='progressBar' style={{ width: `${props.totalPercent}%` }}>
            <Filler percentfilled={props.percentfilled} />
        </div>
    )
}

const Filler = (props) => {
    return <div className='filler' style={{ width: `${props.percentfilled}%` }} />
}

export default ProgressBar;