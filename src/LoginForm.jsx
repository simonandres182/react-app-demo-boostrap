
import './LoginForm.css';

import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
                    usuario: "",
                    password: ""};
  
      this.handleUsuario = this.handleUsuario.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleUsuario(event) {
      this.setState({usuario: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
      }
  
    handleSubmit(event) {
      alert(this.state.usuario + " : " +this.state.password);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="container sm-1">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card px-5 py-5" id="form1">
                        <div className='card-body'>
                        <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input type="text" value={this.state.usuario} onChange={this.handleUsuario} className="form-control" id="usuario"/>
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" value={this.state.password} onChange={this.handlePassword} className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Ingresar al Sistema</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  export default LoginForm;