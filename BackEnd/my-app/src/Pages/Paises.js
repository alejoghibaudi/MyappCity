import React from 'react';
import axios from 'axios';

export default class Cities extends React.Component {
  state ={
      listaPaises: []
  }

  async componentDidMount(){
    const res =  await axios.get('http://localhost:4000/api/city');
    this.setState({listaPaises:res.data.Respuesta});
    console.log(this.state.listaPaises);
  }
  render(){
    return(
      <div className="row">
      <div className="col-md-4">
          Paises
      </div>
      <div className="col-md-8">
          <ul className="list-group">
              {
                  this.state.listaPaises.map(ciudad => <li className="list-group-item list-group-item-action" key={ciudad._id}>
                    {ciudad.ciudad} {ciudad.pais}
                  </li>)
              }
          </ul>
      </div>
    

        </div>
      )
  }
}