import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getItems} from '../Actions/itemActions';
import PropTypes, { number, string } from 'prop-types';


class Login extends Component {
  
  componentDidMount(){
    this.props.getItem();
  }
  
  render() {
    const {items} = this.props.item;
    return(
      this.setState(state=>({
      items:[...state.items,{id:number,name:string}]
    }))
    )
}
}
Login.propTypes={
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapSateToProps = (state)=>({
  item:state.item
})

export default connect(mapSateToProps,{getItems})(Login);
