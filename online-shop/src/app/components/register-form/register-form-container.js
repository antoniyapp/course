import React from 'react';
import RegisterForm from './register-form.js';
import axios from 'axios';


class RegisterFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            firstname:'',
            lastname:'',
            address:'',
            phoneNumber:'',
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
            form = {{ email: this.state.email, pass: this.state.pass, firstname:this.state.firstname ,lastname:this.state.lastname, address:this.state.address, phoneNumber:this.state.phoneNumber,passRepeat: this.state.passRepeat} }
            errors = {{ email: this.state.emailErr, pass: this.state.passErr, passRepeat: this.state.passRepeatErr} }
            handleOnBlur = {{ email: this.validateEmail, pass: this.validatePass, passRepeat: this.validatePassRepeat} }
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
        let msg = '';
        this.setState({ msg: msg });
        let user={
         email:this.state.email,
         password:this.state.email,
         type:'user',
         firstname:this.state.firstname,
         lastname:this.state.lastname,
         address:this.state.address,
         phoneNumber:this.state.phoneNumber
     };
      this.postUser(user);

    }

    hasErrors = () => {
      //  this.validateUser();
        this.validateEmail();
        this.validatePass();
        this.validatePassRepeat();
        let errs = this.state;
        return (errs.userErr + errs.emailErr + errs.passErr + errs.passRepeatErr != '');
    };

  postUser = (user) => {
     axios.post('http://localhost:3000/api/users/', user)
      .then(({data}) => {
      localStorage.setItem('token',data.token);
       this.props.history.push('/');
         () => this.props.changeLoggedInStatus(true);
       })
       .catch((err) => {
          console.error(this.props.url, err);
        });
      }
      

    // validateUser = () => {
    //     let err = ''
    //     if(this.state.user === '') err = 'The user name is mandatory';
    //     else if (this.state.e.length < 6) err = 'The user name must be at least 6 characters long';
    //     this.setState({'userErr': err});
    // };


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

export default RegisterFormContainer;