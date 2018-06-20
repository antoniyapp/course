import React from 'react';
// import { withRouter } from 'react-router-dom';


const RegisterForm = ({ form, errors, msg, onSubmit, handleOnChange, handleOnBlur }) => (
    <form onSubmit={(e) => { onSubmit(e); }}>
        <div className='form-containter'>
            <div>
            <input
                type='text'
                placeholder='UserName'
                value={form.user}
                onChange={handleOnChange('user')}
                onBlur={handleOnBlur.user}
            />
            <div className = {errors.user === '' ? 'nv' : 'err'}>{errors.user}</div>
            </div>
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
                <button type='submit' > Register </button>
            </div>
        </div>
    </form>
);


export default RegisterForm;
// export default withRouter(BlogForm);