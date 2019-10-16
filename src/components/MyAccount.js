import React from 'react';
import Cookies from 'js-cookie';
import Axios from 'axios';

export default class MyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: Cookies.get('session'),
            email: '',
            password: ''
        }

        this.logIn = this.logIn.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    logIn(event) {
        event.preventDefault();
        console.log(event);
        console.log(this);
        Axios.post(`${process.env.REACT_APP_API_URL}/users/sign_in`, {email: this.state.email, password: this.state.password})
            .then(response => {
                console.log(response);
            })
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
            </div>
        );
    }
}