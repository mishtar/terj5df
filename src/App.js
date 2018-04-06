import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list : [],
      name: '',
      lastname: ''
    };
    this.submit = this.submit.bind(this);
  }

  submit(event){
    const {list, name, lastname} = this.state;
    event.preventDefault();
    this.setState({list: [...list,{name,lastname}]});
  }
  render() {
    const {name, lastname, list} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.submit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" onChange={(event) => this.setState({name: event.target.value})} name="first-name" value={name} />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" onChange={(event) => this.setState({lastname: event.target.value})} name="last-name" value={lastname} />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {list.map(
                  (element,index) => <tr><td>{element.name}</td><td>{element.lastname}</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


