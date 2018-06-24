import React from 'react';
import LoginForm from './login-form.js';
import axios from 'axios';


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
        this.handleOnChange=this.handleOnChange.bind(this);
        this.handleOnSubmit=this.handleOnSubmit.bind(this);
    }

    render() {
        console.log(this.props.match);
        return (<LoginForm
            form = {{ email: this.state.email, pass: this.state.pass }}
            errors = {{ email: this.state.emailErr, pass: this.state.passErr }}
            handleOnBlur = {{ email: this.validateEmail, pass: this.validatePass }}
            msg = {this.state.msg}
            handleOnChange = {this.handleOnChange}
            handleOnSubmit = {this.handleOnSubmit} />);
    }

    handleOnChange = (attribute) => {
        return (e) => {
            this.setState({ [attribute]: e.target.value }) };
        };

    handleOnSubmit = (e) => {
        e.preventDefault();
       
       // if (this.hasErrors()) return;
        let msg = this.postUser({email:this.state.email, password:this.state.pass});
        this.setState({ msg: msg })
    }

    hasErrors = () => {
        this.validateEmail();
        this.validatePass();
        let errs = this.state;
        return (errs.userErr + errs.emailErr + errs.passErr + errs.passRepeatErr != '');
    };

    postUser = (user) => {
     axios.post('http://localhost:3000/api/users/login', user)
      .then(({data}) => {
          if(!data.token) {console.log(data); return}
      localStorage.setItem('token',data.token);
      console.log(data)
       this.props.history.push('/');
      () => this.props.changeLoggedInStatus(true);
    })
       .catch((err) => {
        if (err.response.data.errors) {
          this.setState({
            msg: err.response.data.errors.reduce((errs, err) => errs + ' ' + err.message, '')
          });
          console.error(this.props.url, err.response.data);
        }
      }
      );
    }

     


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