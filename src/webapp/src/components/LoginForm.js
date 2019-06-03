import React from 'react';
import NoteList from './NoteList'

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: "",
                password: ""
            }
        }
    }

    updateField(event, property) {
        console.log("input changed");

        const value = event.target.value;

        this.setState((currentState) => {
            currentState.user[property] = value;
            return currentState;
        });

    }

    login() {
        console.log(this.state.user.email);
        console.log(this.state.user.password);
        this.props.onLogin(this.state.user);
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>

                <div>
                    Email: <input className={"email"} onChange={(event) => this.updateField(event, "email")} type="text"/>
                </div>
                <div id={"main"}>
                    Password: <input onChange={(event) => this.updateField(event, "password")} type="password"/>
                </div>
                <div>
                    <button onClick={() => this.login()}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginForm;