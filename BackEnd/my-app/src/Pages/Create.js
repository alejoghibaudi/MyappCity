import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../Redux/Actions/itemActions';
import PropTypes from 'prop-types';

class Login extends Component {
	componentDidMount() {
		this.props.getItems();
	}

	render() {
		return <h1>HOla</h1>;
	} 
}
Login.propTypes = {
	getItems: PropTypes.func.isRequired,
	cities: PropTypes.object.isRequired
};

const mapSateToProps = state => ({
	cities: state.item
});

export default connect(mapSateToProps, { getItems })(Login);
