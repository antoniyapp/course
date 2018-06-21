import React from 'react';
// import { withRouter } from 'react-router-dom';


const LoginForm = ({ form, errors, msg, onSubmit, handleOnChange, handleOnBlur }) => (
    <form onSubmit={(e) => { onSubmit(e); }}>
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
                <button type='submit' > Log In </button>
            </div>
        </div>
    </form>
);


export default LoginForm;
// export default withRouter(BlogForm);