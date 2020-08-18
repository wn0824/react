import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children,favoriteNumber }) => {
    return <div>My New {name} Component. Hello My {children}. num = {favoriteNumber}.</div>
};


MyComponent.defaultProps = {
    name: 'Null'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;