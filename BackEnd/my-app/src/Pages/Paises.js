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

	constructor() {
		super();
		this.state = {
			search:''
		};
	}

	updateSearch(event){
		this.setState({search:event.target.value})
	}

	render() {
		const  {cities}  = this.props.cities;
		let filteredCity =cities.filter(
			(city)=>{
				return city.ciudad.toLowerCase().indexOf(this.state.search) == 0;
			}	
		);
		console.log(cities);
		return (
			<div>
					<input type="text"
						value={this.state.search}
						onChange={this.updateSearch.bind(this)}>
					</input>
			
				<ul>
					{filteredCity.map(ciudad => {
						return (
							<li key={ciudad._id}>
								{ciudad.ciudad} - {ciudad.pais}
							</li>
						);
					})}
				</ul>
				</div>
				);
			}
		}
		
const mapSateToProps = state => ({
					cities: state.item
			});
			
export default connect(mapSateToProps, {getItems})(Cities);
