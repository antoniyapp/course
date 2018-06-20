import React from 'react';
import RegisterForm from './register-form.js';


class RegisterFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            email: '',
            pass: '',
            passRepeat: '',
            userErr: '',
            emailErr: '',
            passErr: '',
            passRepeatErr: '',
            msg: ''
        };
    }

    render() {
        return (<RegisterForm
            form = {{user: this.state.user, email: this.state.email, pass: this.state.pass, passRepeat: this.state.passRepeat} }
            errors = {{user: this.state.userErr, email: this.state.emailErr, pass: this.state.passErr, passRepeat: this.state.passRepeatErr} }
            handleOnBlur = {{user: this.validateUser, email: this.validateEmail, pass: this.validatePass, passRepeat: this.validatePassRepeat} }
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
        this.validateUser();
        this.validateEmail();
        this.validatePass();
        this.validatePassRepeat();
        let errs = this.state;
        return (errs.userErr + errs.emailErr + errs.passErr + errs.passRepeatErr != '');
    };

    postUser = () => {

    };

    validateUser = () => {
        let err = ''
        if(this.state.user === '') err = 'The user name is mandatory';
        else if (this.state.user.length < 6) err = 'The user name must be at least 6 characters long';
        this.setState({'userErr': err});
    };


    validateEmail = () => {
        let err = '';
        if(this.state.email === '') err = 'The email is mandatory';
        //else if(email.length < 6) return 'The user name must be at least 6 characters long';

        this.setState({'emailErr': err});
    };

    validatePass = () => {
        let err = '';
        if(this.state.pass === '') err = 'The password is mandatory';
        else if (this.state.pass.length < 6) err = 'The password must be at least 6 characters long';
        
        this.setState({'passErr': err});
    };

    validatePassRepeat = () => {
        let err = '';
        if(this.state.passRepeat === '') err = 'The password repetition is mandatory'
        if (this.state.pass !== this.state.passRepeat) err =  "The passwords you entered do not match";
        this.setState({'passRepeatErr': err});
    };

};

export default RegisterFormContainer