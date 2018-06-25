import React, { Component } from 'react';

import ContactForm from './contactForm';
import ErrorMessage from '../errMess';
import axios from 'axios';

import {withAuthorizationHOC} from '../helpers/authorization.js'

class ContactContainer extends Component {
   constructor(props){
     super(props)
    this.state = {
    name: '',
    email:'',
    subject:'',
    message:'',
    errMsg:'',
    showErrMsg:false
  };
     this.handleInputChange=this.handleInputChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
    this.postContact=this.postContact.bind(this);
   }
   handleInputChange(e){
     this.setState({[e.target.name]: e.target.value});
   }
   handleSubmit(e){
     e.preventDefault();
     let message={
         name:this.state.name,
         email:this.state.email,
         subject:this.state.subject,
         message:this.state.message
     };
     this.postContact(message);

   }
   postContact = (message) => {
     axios.post('http://localhost:3000/api/contact', message)
      .then(({data}) => {
       this.setState({showErrMsg:true,errMsg:'Thank you for your message'});
    })
       .catch((err) => {
        if (err.response.data.errors) {
          this.setState({
            errMsg: err.response.data.errors.reduce((errs, err) => errs + ' ' + err.message, ''),
            showErrMsg:true
          });
          console.error(this.props.url, err.response.data);
        }
      }
      );
    }
  render(){
        return (
          <div>
            <ErrorMessage 
            errors={this.state.errMsg}
            showErrMsg={this.state.showErrMsg}
            />
        <ContactForm
        handleInputChange={this.handleInputChange}
        formState={this.state}
        formTitle="Send us a message"
        handleSubmit={this.handleSubmit}
        actionText="Send"
      />   
      </div> 
        )
      }

}

export default ContactContainer;