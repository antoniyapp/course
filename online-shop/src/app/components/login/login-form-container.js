import React from 'react';
import LoginForm from './login-form.js';


class LoginFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            emailErr: '',
            passErr: '',
            msg: ''
        };
    }

    render() {
        console.log(this.props.match);
        return (<LoginForm
            form = {{ email: this.state.email, pass: this.state.pass }}
            errors = {{ email: this.state.emailErr, pass: this.state.passErr }}
            handleOnBlur = {{ email: this.validateEmail, pass: this.validatePass }}
            msg = {this.state.msg}
            handleOnChange = {this.handleOnChange}
            onSubmit = {this.handleOnSubmit} />);
    }

    handleOnChange = (attribute) => {
        return (e) => {
            this.setState({ [attribute]: e.target.value }) };
        };

    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.hasErrors()) return;
        this.postUser();
        let msg = '';
        this.setState({ msg: msg });
    }

    hasErrors = () => {
        this.validateEmail();
        this.validatePass();
        let errs = this.state;
        return (errs.userErr + errs.emailErr + errs.passErr + errs.passRepeatErr != '');
    };

    postUser = () => {

    };

    validateEmail = () => {
        let err = '';
        if(this.state.email === '') err = 'Please enter an email';
        //else if(email.length < 6) return 'The user name must be at least 6 characters long';

        this.setState({'emailErr': err});
    };

    validatePass = () => {
        let err = '';
        if(this.state.pass === '') err = 'Please enter a password';
        else if (this.state.pass.length < 6) err = 'Invalid password';
        
        this.setState({'passErr': err});
    };

};

export default LoginFormContainer;