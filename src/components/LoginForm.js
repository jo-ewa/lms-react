import React from "react";
import Axios from 'axios';

import AppContext from '../AppContext';

class UnauthorizedError extends React.Component {
    render() {
        return (
            <div id="UnauthorizedErorr">
                Username or password incorrect. User is unauthorized.
            </div>
        );
    }
}

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            unauthorizedError: false
        }
    }

    logIn = (context, event) => {
        event.preventDefault();
        Axios.post(`${process.env.REACT_APP_API_URL}/users/authenticate`, {email: this.state.email, password: this.state.password})
            .then(response => {
                let {token, expiration, user} = response.data;
                context.logUserIn(token, expiration, user)
            }).catch(error => {
                // TODO figure out how to check if this is a 401
                console.log(error)
                this.setState({unauthorizedError: true});
            });
    }

    changeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    changePassword = (event) => {
        this.setState({password: event.target.value})
    }

    render () {
        return (
            <AppContext.Consumer>
                {(context) => (
                    <div>
                        <form onSubmit={(e) => this.logIn(context, e)}>
                            <div>
                                E-mail: <br />
                                <input type="email" value={this.state.email} onChange={this.changeEmail} />
                            </div>
                            <div>
                                Password: <br />
                                <input type="password" value={this.state.password} onChange={this.changePassword} />
                            </div>
                            <input type="submit" />
                        </form>
                        { this.state.unauthorizedError ? <UnauthorizedError /> : null }
                    </div>
                )}
            </AppContext.Consumer>
        );
    }
}