import React from 'react';

const Logout = ({handleLogout,...props}) => (

        
        <div className="logout">
            <p>Are you sure you want to logout?</p>
            <button type="button" className="form-submit" onClick={(e) => { props.history.push("/"); return handleLogout(e)} }>Yes</button>
            <button type="button" className="form-submit" onClick={() => props.history.push("/")} >No</button>
        </div>
    
)
export default Logout;