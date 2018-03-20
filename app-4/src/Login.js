import React, { Component } from "react"

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        }
        this.handleLogin = this.handleLogin.bind(this)
    }


    changeUsername(name) {
        this.setState({ username: name })
    }

    changePassword(pwd) {
        this.setState({ password: pwd })
    }

    handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        return (
            <div>

                <input onChange={(e) => this.changeUsername(e.target.value)} />
                <input onChange={(e) => this.changePassword(e.target.value)} />
                <button> onClick={this.handleLogin}>Login</button>

            </div>

        )
    }
}
export default Login;
