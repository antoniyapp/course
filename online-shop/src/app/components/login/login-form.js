import React from 'react';
// import { withRouter } from 'react-router-dom';


const LoginForm = ({ form, errors, msg, handleOnSubmit, handleOnChange, handleOnBlur }) => (
    <form onSubmit={(e) => { handleOnSubmit(e); }}>
        <div className='form-containter'>
            {/* <div>
            <input
                type='text'
                placeholder='UserName'
                value={form.user}
                onChange={handleOnChange('user')}
                onBlur={handleOnBlur.user}
            />
            <div className = {errors.user === '' ? 'nv' : 'err'}>{errors.user}</div>
            </div> */}
            <header>
          <div className="wrapper">
            <h1>Login</h1>
          </div>
        </header>
            <div>
            <input
                type='text'
                placeholder='Email'
                value={form.email}
                onChange={handleOnChange('email')}
                onBlur={handleOnBlur.email}
            />
            <div className = {errors.email === '' ? 'nv' : 'err'}>{errors.email}</div>
            </div>
            <div>
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
                <button className="btn-primary" type='submit' > Log In </button>
            </div>
        </div>
    </form>
);


export default LoginForm;
// export default withRouter(BlogForm);