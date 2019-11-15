import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../Redux/Actions/itemActions';
import PropTypes from 'prop-types';

class Cities extends Component {
	static propTypes = {
		getItems: PropTypes.func.isRequired,
		cities: PropTypes.object.isRequired
	};

	componentDidMount() {
		this.props.getItems();
	}

	render() {
		const { cities } = this.props.cities;
		console.log(cities);
		return (
			<ul>
				{cities.map(ciudad => {
					return (
						<li key={ciudad._id}>
							{ciudad.ciudad} - {ciudad.pais}
						</li>
					);
				})}
			</ul>
		);
	}
}

const mapSateToProps = state => ({
	cities: state.item
});

export default connect(mapSateToProps, { getItems })(Cities);
