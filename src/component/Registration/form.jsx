import React, {Component} from 'react';
import './form.css';


class RegistrationForm  extends Component {
    constructor (props) 
    {
        super(props);
        this.state = {
            userLogin: '',
            userPass: ''
        };
        this.handleLoginChange = this.handleloginChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

handleSubmit(event) {
    event.preventDefault();
    
}
handleLoginChange() {
    this.setState ({userLogin: event.target.value});
}
handlePassChange() {
    this.setState ({userPass: event.target.value});
}
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type = 'text'
                placeholder = 'Логин'
                value = {this.state.userLogin}
                onChange = {this.handleLoginChange}
                />
                <input
                type = 'text'
                placeholder = 'Пароль'
                value = {this.state.userPass}
                onChange = {this.handlePassChange}
                />
                <button>Отправить</button>
            </form>
        );
    }
}

export default RegistrationForm;