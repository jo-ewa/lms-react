import React from 'react';
import Cookies from 'js-cookie';
import Axios from 'axios';

class UnauthorizedError extends React.Component {
    render() {
        return (
            <div id="UnauthorizedErorr">
                Username or password incorrect. User is unauthorized.
            </div>
        );
    }
}

class AccountInfo extends React.Component {
    render() {
        return (
            <div>
                Account Information
            </div>
        );
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            unauthorizedError: false
        }

        this.logIn = this.logIn.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    logIn(event) {
        event.preventDefault();
        let self = this;
        Axios.post(`${process.env.REACT_APP_API_URL}/users/authenticate`, {email: this.state.email, password: this.state.password})
            .then(response => {
                Cookies.set("auth-token", response.data.token);
                Cookies.set("auth-token-expiration", response.data.expiration);
            }).catch(error => {
                self.setState({unauthorizedError: true});
            });
    }

    changeEmail(event) {
        this.setState({email: event.target.value})
    }

    changePassword(event) {
        this.setState({password: event.target.value})
    }

    render () {
        return (
            <div>
                <form onSubmit={this.logIn}>
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
        );
    }
}

export default class MyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: Cookies.get('auth-token') ? true : false,
        }
    }

    render () {
        return (
            <div>
                {this.state.loggedIn ? <AccountInfo /> : <LoginForm />}
            </div>
        );
    }
}