import React from 'react';
// import { withRouter } from 'react-router-dom';


const RegisterForm = ({ form, errors, msg, onSubmit, handleOnChange, handleOnBlur }) => (
    <form onSubmit={(e) => { onSubmit(e); }}>
        <header>
          <div className="wrapper">
            <h1>Register </h1>
          </div>
        </header>
        <div className='form-containter'>
            <div>
                 <br />
              <label>Email </label>
            <input
                type='text'
                placeholder='Email'
                value={form.email}
                onChange={handleOnChange('email')}
                onBlur={handleOnBlur.email}
            />
            <div className = {errors.email === '' ? 'nv' : 'err'}>{errors.email}</div>
            </div>
            <div> <br />
              <label>Password </label>
            <input
                type='password'
                placeholder='Password'
                value={form.pass}
                onChange={handleOnChange('pass')}
                onBlur={handleOnBlur.pass}
            />
            <div className = {errors.pass === '' ? 'nv' : 'err'}>{errors.pass}</div>
            </div>
            <div>
                 <br />
              <label>Repeat Password </label>
            <input
                type='password'
                placeholder='Repeat Password'
                value={form.passRepeat}
                onChange={handleOnChange('passRepeat')}
                onBlur={handleOnBlur.passRepeat}
            />
            <div className = {errors.passRepeat === '' ? 'nv' : 'err'}>{errors.passRepeat}</div>
            </div>
            <div>
                   <br />
              <label>Fistname </label>
            <input
                type='text'
                placeholder='fistname'
                value={form.firstname}
                onChange={handleOnChange('firstname')}
                onBlur={handleOnBlur.firstname}
            />
            </div>
            <div>
                  <br />
              <label>Lastname </label>
        
            <input
                type='text'
                placeholder='lastname'
                value={form.lastname}
                onChange={handleOnChange('lastname')}
                onBlur={handleOnBlur.lastname}
            />
            </div>
             <div>  
                  <br />
              <label>Phone Number </label>
              
            <input
                type='text'
                placeholder='phoneNumber'
                value={form.phoneNumber}
                onChange={handleOnChange('phoneNumber')}
                onBlur={handleOnBlur.phoneNumber}
            />
            </div>
            <div>
                <button className="btn-primary" type='submit' > Register </button>
            </div>
        </div>
    </form>
);


export default RegisterForm;
// export default withRouter(BlogForm);